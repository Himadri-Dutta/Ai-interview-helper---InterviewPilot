const { GoogleGenAI } = require("@google/genai")
const { z } = require("zod")
const puppeteer = require("puppeteer")

const client = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})



// async function generateInterviewReport2({ resume, selfDescription, jobDescription }) {



//     const interviewReportSchema = z.object({
//         matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),
//         technicalQuestions: z.array(z.object({
//             question: z.string().describe("The technical question can be asked in the interview"),
//             intention: z.string().describe("The intention of interviewer behind asking this question"),
//             answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
//         })).describe("Technical questions that can be asked in the interview along with their intention and how to answer them"),
//         behavioralQuestions: z.array(z.object({
//             question: z.string().describe("The technical question can be asked in the interview"),
//             intention: z.string().describe("The intention of interviewer behind asking this question"),
//             answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
//         })).describe("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
//         skillGaps: z.array(z.object({
//             skill: z.string().describe("The skill which the candidate is lacking"),
//             severity: z.enum(["low", "medium", "high"]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
//         })).describe("List of skill gaps in the candidate's profile along with their severity"),
//         preparationPlan: z.array(z.object({
//             day: z.number().describe("The day number in the preparation plan, starting from 1"),
//             focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
//             tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
//         })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively"),
//         title: z.string().describe("The title of the job for which the interview report is generated"),
//     })
//     const interviewReportJsonSchema = zodToJsonSchema(interviewReportSchema)

//     const prompt = `Generate an interview report for a candidate with the following details:
//                         Resume: ${resume}
//                         Self Description: ${selfDescription}
//                         Job Description: ${jobDescription}
//                         including a title of that job
//  `
    

//     const response = await client.models.generateContent({
//         model: "gemini-3.5 flash",
//         contents: prompt,
//         config: {
//             responseFormat: { text: { mimeType: "application/json", schema: zodToJsonSchema(interviewReportSchema) } },
//         }
//     })

//     console.log("response", response.output_text)

//     const output = interviewReportSchema.parse(JSON.parse(response.output_text))
//     console.log(output)

//     // return output


// }



 async function generateInterviewReport({
    resume,
    selfDescription,
    jobDescription,
}) {

    const interviewReportSchema = z.object({
        matchScore: z.number().min(0).max(100).describe(
            "A score between 0 and 100 indicating how well the candidate matches the job description."
        ),

        technicalQuestions: z.array(
            z.object({
                question: z.string().describe("A technical interview question."),
                intention: z.string().describe("Why the interviewer asks this question."),
                answer: z.string().describe("How the candidate should answer this question.")
            })
        ).describe("Technical interview questions."),

        behavioralQuestions: z.array(
            z.object({
                question: z.string().describe("A behavioral interview question."),
                intention: z.string().describe("Why the interviewer asks this question."),
                answer: z.string().describe("How the candidate should answer this question.")
            })
        ).describe("Behavioral interview questions."),

        skillGaps: z.array(
            z.object({
                skill: z.string().describe("Missing skill."),
                severity: z.enum(["low", "medium", "high"])
                    .describe("Importance of this missing skill.")
            })
        ).describe("Skills missing from the candidate profile."),

        preparationPlan: z.array(
            z.object({
                day: z.number().describe("Day number starting from 1."),
                focus: z.string().describe("Main topic for the day."),
                tasks: z.array(z.string())
                    .describe("Tasks to complete on that day.")
            })
        ).describe("Day-wise interview preparation plan."),

        title: z.string().describe(
            "The title of the job for which the report is generated."
        )
    });

    const interviewReportJsonSchema = z.toJSONSchema(interviewReportSchema);
    const prompt = `
You are an experienced technical interviewer.

Analyze the following candidate and generate a comprehensive interview report.

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

Instructions:

1. Calculate a match score (0-100).
2. Generate technical interview questions.
3. Generate behavioral interview questions.
4. Identify important skill gaps.
5. Create a practical day-wise preparation plan.
6. Include the exact job title from the job description.

Return ONLY valid JSON matching the provided schema.
`;

    const interaction = await client.interactions.create({
        model: "gemini-3.5-flash",

        input: prompt,

        response_format: {
            type: "text",
            mime_type: "application/json",
            schema: interviewReportJsonSchema,
        },
    });
    console.log("interaction.output_text",interaction.output_text)

    // const json = JSON.parse(interaction.output_text);
    // console.log(JSON.stringify(json, null, 2));


    const output = interviewReportSchema.parse(
        JSON.parse(interaction.output_text)
    );
    console.log("output",output)

    return output;
}


async function generatePdfFromHtml(htmlContent) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })

    const pdfBuffer = await page.pdf({
        format: "A4", margin: {
            top: "20mm",
            bottom: "20mm",
            left: "15mm",
            right: "15mm"
        }
    })

    await browser.close()

    return pdfBuffer
}

async function generateResumePdf({ resume, selfDescription, jobDescription }) {

    const resumePdfSchema = z.object({
        html: z.string().describe("The HTML content of the resume which can be converted to PDF using any library like puppeteer")
    })
    
    const resumePdfJsonSchema = z.toJSONSchema(resumePdfSchema)
    const prompt = `Generate resume for a candidate with the following details:
                        Resume: ${resume}
                        Self Description: ${selfDescription}
                        Job Description: ${jobDescription}

                        the response should be a JSON object with a single field "html" which contains the HTML content of the resume which can be converted to PDF using any library like puppeteer.
                        The resume should be tailored for the given job description and should highlight the candidate's strengths and relevant experience. The HTML content should be well-formatted and structured, making it easy to read and visually appealing.
                        The content of resume should be not sound like it's generated by AI and should be as close as possible to a real human-written resume.
                        you can highlight the content using some colors or different font styles but the overall design should be simple and professional.
                        The content should be ATS friendly, i.e. it should be easily parsable by ATS systems without losing important information.
                        The resume should not be so lengthy, it should ideally be 1-2 pages long when converted to PDF. Focus on quality rather than quantity and make sure to include all the relevant information that can increase the candidate's chances of getting an interview call for the given job description.
                    `


        const response = await client.interactions.create({
        model: "gemini-3.5-flash",

        input: prompt,

        response_format: {
            type: "text",
            mime_type: "application/json",
            schema: resumePdfJsonSchema, 
        },
    });

    console.log("Resume pdf created...")
    const jsonContent =resumePdfSchema.parse(JSON.parse(response.output_text))

    const pdfBuffer = await generatePdfFromHtml(jsonContent.html)

    return pdfBuffer

}

module.exports = { generateInterviewReport, generateResumePdf }