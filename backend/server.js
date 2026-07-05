require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")
// const {invokeGeminiAi2} = require("./server2.js")

// const {resume, resume2, resume3, selfDescription, jobDescription} = require("./src/services/temp.js")
// const {generateInterviewReport} =require("./src/services/ai.service.js")

connectToDB()
// invokeGeminiAi2()
// generateInterviewReport({ resume:resume2,  selfDescription, jobDescription })

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})