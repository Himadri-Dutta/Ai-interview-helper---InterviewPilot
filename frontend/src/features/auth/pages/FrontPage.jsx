import {Map,FileText,FileQuestionMark ,ChartColumnIncreasing } from "lucide-react"
import { Link } from "react-router"

const featureItems = [
  {
    title: 'Instant Match Score',
    description: 'See exactly how you rank against the job description with AI-powered role matching.',
    accent: 'bg-slate-900',
    logo:<ChartColumnIncreasing/>

  },
  {
    title: 'Targeted Question Bank',
    description: 'Access curated interview questions aligned to the role, seniority, and company culture.',
    accent: 'bg-sky-900',
    logo:<FileQuestionMark/>
  },
  {
    title: 'Actionable Gap Mapping',
    description: 'Identify skill gaps and get clear, prioritized recommendations to close them fast.',
    accent: 'bg-emerald-900',
    logo:<Map/>
  },
  {
    title: 'AI Resume Builder',
    description: 'Generate optimized resume copy that highlights the exact skills employers care about.',
    accent: 'bg-indigo-900',
    logo:<FileText/>
  },
]

const stepItems = [
  {
    number: '1',
    title: 'Upload Profiles',
    description: 'Sync your profile and paste the job description for instant analysis.',
  },
  {
    number: '2',
    title: 'Analyze Gaps & Prep',
    description: 'Review your match score and practice tailored questions in minutes.',
  },
  {
    number: '3',
    title: 'Generate Tailored Resume',
    description: 'Export an ATS-ready resume that aligns with the employer’s exact needs.',
  },
]

const FrontPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f172a] text-white shadow-lg shadow-slate-900/10">
            IP
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">InterviewPilot</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex text-sm text-slate-600">
          <a href="#features" className="transition hover:text-slate-900">Features</a>
          <a href="#how-it-works" className="transition hover:text-slate-900">How it Works</a>
          <a href="#pricing" className="transition hover:text-slate-900">Pricing</a>
          <Link to="https://github.com/Himadri-Dutta" className="transition hover:text-slate-900">Resources</Link>
          <a href="https://github.com/Himadri-Dutta" className="transition hover:text-slate-900">Resources</a>
        </div>

        <div className="flex items-center gap-3">
          <Link  to="/login"   className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">Log In</Link>
          <a  href="/register"  className="rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-[#1d4ed8]">
            Get Started
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-sm">
              Next-Gen Interview Prep
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
                Master Your Next Interview with <span className="text-[#2563eb]">AI-Powered Strategy</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Stop guessing and start preparing with data-driven precision. Align your experience to specific job roles using our predictive matching engine.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link  to="/login" className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition hover:bg-slate-800">
                Build Your Strategy
              </Link>
              <button className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                See a Sample Report
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <div className="flex -space-x-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f172a] text-white">A</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb] text-white">F</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981] text-white">O</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white">S</span>
              </div>
              <p className="text-slate-600">Join 12,000+ candidates landing dream jobs.</p>
            </div>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/5">
            <div className="flex items-center justify-between gap-4 rounded-3xl bg-[#0f172a] p-5 text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Candidate Analysis</p>
                <p className="mt-2 text-sm text-slate-100">Senior Product Designer</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 px-4 py-2 text-sm font-semibold">Live</div>
            </div>

            <div className="mt-6 grid gap-5">
              <div className="rounded-3xl bg-slate-950/95 p-6 text-white shadow-xl shadow-slate-950/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Role Match Score</p>
                    <p className="mt-2 text-3xl font-extrabold">87%</p>
                  </div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl font-bold text-[#2563eb]">
                    87
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900">Skill Gap Alert</p>
                  <span className="rounded-full bg-[#10b981]/10 px-3 py-1 text-[0.75rem] font-semibold text-[#10b981]">Target: 80%</span>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-slate-600">System Architecture missing from Resume V1.</p>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-24 rounded-full bg-[#2563eb]" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Low Match</span>
                    <span>80%</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">AI Prediction</p>
                <p className="mt-4 text-lg font-semibold">Likely Coding Question</p>
                <blockquote className="mt-4 rounded-3xl bg-slate-900/80 p-5 text-sm leading-7 text-slate-200">
                  “Design a rate-limiter for a distributed notification system handling 1M+ requests per minute.”
                </blockquote>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="rounded-full border border-slate-700 px-2 py-1">Complexity: High</span>
                  <span className="rounded-full border border-slate-700 px-2 py-1">Topics: Backend</span>
                  <span className="rounded-full border border-slate-700 px-2 py-1">Scalability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Precision Tools for Modern Candidates</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Our AI engine works silently in the background to analyze millions of data points.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">Giving you the unfair advantage you need to prepare smarter, not harder.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featureItems.map((feature) => (
              <div key={feature.title} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl ${feature.accent}   text-white`} >
                    {feature.logo}
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mt-20 rounded-4xl bg-[#0f172a] px-6 py-14 text-white shadow-2xl shadow-slate-900/20 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Your Path to the Offer Letter</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A streamlined three-step process designed for busy professionals.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stepItems.map((step) => (
              <div key={step.number} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb] text-lg font-bold text-white">{step.number}</div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mt-20 rounded-4xl bg-slate-950 px-8 py-14 text-white shadow-2xl shadow-slate-900/20 sm:px-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Ready to clear your dream interview?</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight">Join the next wave of successful hires using InterviewPilot’s AI-powered strategy.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">No credit card required to start.</p>
            </div>

            <Link to="/register" className="inline-flex items-center justify-center rounded-full bg-[#10b981] px-8 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:bg-[#059669]">
              Get Started Free
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 border-t border-slate-800 pt-6 text-sm text-slate-400">
            <span>Used by candidates at:</span>
            <span className="font-semibold text-white">FAANG</span>
            <span className="font-semibold text-white">Stripe</span>
            <span className="font-semibold text-white">OpenAI</span>
            <span className="font-semibold text-white">Airbnb</span>
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-200/70 py-10 text-slate-600">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-slate-950">InterviewPilot</p>
              <p className="mt-2 max-w-sm text-sm text-slate-500">&copy;2026 InterviewPilot. Empowering careers with AI precision. The future of interview preparation is here.</p>
              <p className="font-normal text-sm  "> All Right Reserved </p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm">
              <a href="#" className="transition hover:text-slate-900">Pricing</a>
              <a href="#" className="transition hover:text-slate-900">Features</a>
              <a href="#" className="transition hover:text-slate-900">About Us</a>
              <a href="#" className="transition hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="transition hover:text-slate-900">Help Center</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default FrontPage
