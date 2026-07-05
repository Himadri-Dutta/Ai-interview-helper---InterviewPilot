import { useState, useRef } from "react";
import { useInterview } from "../hooks/useInterview.js";
import { useNavigate } from "react-router";

const NewHome = () => {
  const { loading, generateReport, reports } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const resumeInputRef = useRef();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current?.files?.[0];
    if (!jobDescription.trim()) {
      alert("Please enter the job description.");
      return;
    }

    if (!resumeFile && !selfDescription.trim()) {
      alert("Upload a resume or enter a self description.");
      return;
    }
    try {
      const data = await generateReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });
      if (data) {
        return navigate(`/interview/${data._id}`);
      }
    } catch (error) {
      console.error("Error generating report:", error);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-[#0d1117] text-[#e6edf3]">
        <h1 className="text-xl font-semibold">
          Loading your interview plan...
        </h1>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[#0d1117] px-6 py-12 text-[#e6edf3] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif]">
      {/* Page Header */}
      <header className="text-center">
        <h1 className="mb-2 text-[2.25rem] font-bold text-[#e6edf3]">
          Create Your Custom{" "}
          <span className="text-[#ff2d78]">Interview Plan</span>
        </h1>
        <p className="mx-auto max-w-120 text-[0.95rem] leading-6 text-[#7d8590]">
          Let our AI analyze the job requirements and your unique profile to
          build a winning strategy.
        </p>
      </header>

      {/* Main Card */}
      <div className="w-full max-w-225 overflow-hidden rounded-2xl border border-[#2a3348] bg-[#161b22]">
        <div className="flex min-h-130">
          {/* Left Panel - Job Description */}
          <div className="relative flex flex-1 flex-col gap-4 p-6">
            <div className="mb-1 flex items-center gap-2">
              <span className="flex items-center text-[#ff2d78]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <h2 className="flex-1 text-[1rem] font-semibold text-[#e6edf3]">
                Target Job Description
              </h2>
              <span className="rounded-[0.3rem] border border-[#ff2d78]/30 bg-[#ff2d78]/15 px-2 py-[0.15rem] text-[0.7rem] font-semibold uppercase tracking-[0.03em] text-[#ff2d78]">
                Required
              </span>
            </div>
            <textarea
              onChange={(e) => {
                setJobDescription(e.target.value);
              }}
              className="flex-1 w-full resize-none rounded-lg border border-[#2a3348] bg-[#1e2535] p-3 text-[0.875rem] leading-6 text-[#e6edf3] outline-none transition-colors duration-200 placeholder:text-[#7d8590] focus:border-[#ff2d78]"
              placeholder={`Paste the full job description here...\ne.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'`}
              maxLength={5000}
              scrollable="false"
            />
            <div className="absolute bottom-9 right-8 text-[0.75rem] text-[#7d8590]">
              {jobDescription.length} / 5000 chars
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px shrink-0 bg-[#2a3348]" />

          {/* Right Panel - Profile */}
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex items-center gap-2">
              <span className="flex items-center text-[#ff2d78]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <h2 className="text-[1rem] font-semibold text-[#e6edf3]">
                Your Profile
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <label className="mb-1 flex items-center gap-2 text-[0.875rem] font-medium text-[#e6edf3]">
                Upload Resume
                <span className="rounded-[0.3rem] border border-[#ff2d78]/30 bg-[#ff2d78]/15 px-2 py-[0.15rem] text-[0.7rem] font-semibold uppercase tracking-[0.03em] text-[#ff2d78]">
                  Best Results
                </span>
              </label>
              <label
                className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-[0.6rem] border-2 border-dashed border-[#2a3348] bg-[#1e2535] p-6 transition-colors duration-200 hover:border-[#ff2d78] hover:bg-[#ff2d78]/5"
                htmlFor="resume"
              >
                {fileName ? (
                  <div className="flex flex-col items-center gap-1 text-center">
                    <span className="mb-1 text-[#2e7d32]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <p className="text-[0.875rem] font-medium text-[#e6edf3]">
                      Successfully Selected!
                    </p>
                    <p className="text-[0.75rem] font-bold text-[#e6edf3]">
                      {fileName}
                    </p>
                  </div>
                ) : (
                  <>
                    <span className="mb-1 text-[#ff2d78]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 16 12 12 8 16" />
                        <line x1="12" y1="12" x2="12" y2="21" />
                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                      </svg>
                    </span>
                    <p className="text-[0.875rem] font-medium text-[#e6edf3]">
                      Click to upload or drag &amp; drop
                    </p>
                    <p className="text-[0.75rem] text-[#7d8590]">
                      PDF or DOCX (Max 5MB)
                    </p>
                  </>
                )}
                <input
                  ref={resumeInputRef}
                  hidden
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <div className="flex items-center gap-3 text-[0.75rem] text-[#7d8590]">
              <div className="h-px flex-1 bg-[#2a3348]" />
              <span className="whitespace-nowrap">OR</span>
              <div className="h-px flex-1 bg-[#2a3348]" />
            </div>

            {/*  Quick Self-Description */}
            <div className="flex flex-col gap-2">
              <label
                className="text-[0.875rem] font-medium text-[#e6edf3]"
                htmlFor="selfDescription"
              >
                Quick Self-Description
              </label>
              <textarea
                onChange={(e) => {
                  setSelfDescription(e.target.value);
                }}
                id="selfDescription"
                name="selfDescription"
                className="h-24 w-full resize-none rounded-lg border border-[#2a3348] bg-[#1e2535] p-3 text-[0.875rem] leading-6 text-[#e6edf3] outline-none transition-colors duration-200 placeholder:text-[#7d8590] focus:border-[#ff2d78]"
                placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
              />
            </div>

            {/* Info Box  */}
            <div className="flex items-start gap-2 rounded-lg border border-[#2d4a7a] bg-[#1b2a4a] p-3">
              <span className="mt-px shrink-0 text-[#4a90e2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line
                    x1="12"
                    y1="8"
                    x2="12"
                    y2="12"
                    stroke="#1a1f27"
                    strokeWidth="2"
                  />
                  <line
                    x1="12"
                    y1="16"
                    x2="12.01"
                    y2="16"
                    stroke="#1a1f27"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <p className="m-0 text-[0.8rem] leading-6 text-[#8ab4f8]">
                Either a <strong className="text-[#e6edf3]">Resume</strong> or a{" "}
                <strong className="text-[#e6edf3]">Self Description</strong> is
                required to generate a personalized plan.
              </p>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between border-t border-[#2a3348] px-6 py-4">
          <span className="text-[0.8rem] text-[#7d8590]">
            AI-Powered Strategy Generation &bull; Approx 30s
          </span>
          <button
            onClick={handleGenerateReport}
            className="inline-flex items-center gap-2 rounded-lg border-none bg-linear-to-r from-[#ff2d78] to-[#d41f5e] px-6 py-3 text-[0.9rem] font-semibold text-white transition-opacity duration-200 hover:opacity-90 active:scale-[0.98]"
            disabled={loading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            Generate My Interview Strategy
          </button>
        </div>
      </div>

      {/* Recent Reports List  */}
      {reports?.length > 0 && (
        <section className="flex w-full max-w-225 flex-col gap-3">
          <h2 className="text-[1.1rem] font-semibold text-[#e6edf3]">
            My Recent Interview Plans
          </h2>
          <ul className="flex flex-wrap gap-3">
            {reports.map((report) => (
              <li
                key={report._id}
                className="flex min-w-55 flex-1 cursor-pointer flex-col gap-2 rounded-lg border border-[#2a3348] bg-[#161b22] p-4"
                onClick={() => navigate(`/interview/${report._id}`)}
              >
                <h3 className="text-[1rem] font-semibold text-[#e6edf3]">
                  {report.title || "Untitled Position"}
                </h3>
                <p className="text-[0.85rem] text-[#7d8590]">
                  Generated on {new Date(report.createdAt).toLocaleDateString()}
                </p>
                <p className="text-[0.8rem] font-semibold text-[#ff2d78]">
                  Match Score: {report.matchScore}%
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Paage Footer  */}
      <footer className="flex gap-6">
        <a
          href="#"
          className="text-[0.8rem] text-[#7d8590] transition-colors duration-200 hover:text-[#e6edf3]"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-[0.8rem] text-[#7d8590] transition-colors duration-200 hover:text-[#e6edf3]"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="text-[0.8rem] text-[#7d8590] transition-colors duration-200 hover:text-[#e6edf3]"
        >
          Help Center
        </a>
      </footer>
    </div>
  );
};

export default NewHome;
