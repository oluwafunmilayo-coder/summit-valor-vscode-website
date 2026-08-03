import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SOPStarterKit() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAF8F5] text-[#222222]">
        <section className="relative overflow-hidden bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              to="/blog"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition hover:gap-3"
            >
              <FiArrowLeft />
              Back to Blog
            </Link>
            <div className="mx-auto max-w-4xl rounded-[32px] border border-gray-200 bg-[#faf8f5] p-10 shadow-sm sm:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-700">
                Blog Article
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
                The SOP Starter Kit: 8 Templates for the Processes Every Growing Business Repeats
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl">
                Most businesses don’t fail because of bad ideas. They stall because the same work gets redone, re-explained, and re-figured-out every week — just by different people, in slightly different ways, with slightly different results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500">
                <span>Read time — 8 min</span>
                <span>Topic — SOPs & Operations</span>
                <span>Audience — Founders, operations leaders</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
          <article className="space-y-16 text-gray-700">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Why "Just Figure It Out" Doesn't Scale</h2>
              <p className="leading-8">
                Every business runs on repeated work. Client onboarding happens again and again. Emails get sent the same way, week after week. Content gets reviewed. Deliverables get checked before they go out the door.
              </p>
              <p className="leading-8">
                In a small team, that repetition is invisible — the founder or a tight-knit team just knows how things are done. But as the business grows, "just knowing" breaks down fast:
              </p>
              <ul className="space-y-4 pl-5 text-gray-600">
                <li className="list-disc">New hires ask the same questions every week because nothing is written down.</li>
                <li className="list-disc">Two team members handle the same task two different ways.</li>
                <li className="list-disc">Quality slips the moment the founder isn't personally checking the work.</li>
                <li className="list-disc">Institutional knowledge walks out the door when someone leaves.</li>
              </ul>
              <p className="leading-8">
                None of this is a hiring problem. It's the absence of a system that captures how work is supposed to happen — independent of who happens to be doing it that day.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">What an SOP Actually Does</h2>
              <p className="leading-8">
                A Standard Operating Procedure isn't a long, bureaucratic manual nobody reads. Done right, it's a short, practical guide that answers four questions for a specific piece of repeated work:
              </p>
              <ol className="space-y-4 pl-5 text-gray-600">
                <li className="list-decimal">Purpose — why this process exists.</li>
                <li className="list-decimal">Scope — where it starts and where it ends.</li>
                <li className="list-decimal">Steps — the exact sequence, in order.</li>
                <li className="list-decimal">Quality checks — what "done right" looks like.</li>
              </ol>
              <p className="leading-8">
                When those four things are written down, something changes immediately: the process stops depending on memory. Anyone on the team can pick it up, follow it, and produce the same result — without pinging someone to ask "wait, how do we usually do this?"
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">The 8 SOPs Every Growing Business Needs First</h2>
              <p className="leading-8">
                Not every process deserves a formal SOP on day one. But there are eight that repeat so often, in so many businesses, that documenting them first delivers the fastest return.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Client / Customer Onboarding",
                    desc: "The first experience a client has with your business. Undocumented, it's inconsistent. Documented, it's the same high standard every time — and it's delegable from week one.",
                  },
                  {
                    title: "Email Management",
                    desc: "Response times, tone, folder structure, escalation rules. Small process, constant repetition, high visibility when it's inconsistent.",
                  },
                  {
                    title: "Social Media Posting",
                    desc: "Approval steps, brand voice checks, scheduling cadence — the difference between content that looks intentional and content that looks improvised.",
                  },
                  {
                    title: "Virtual Assistant / Delegated Task Handoff",
                    desc: "How work gets assigned, tracked, and returned. Without this, delegation creates more oversight work than it saves.",
                  },
                  {
                    title: "Graphic Design & Brand Asset Requests",
                    desc: "Brief format, revision rounds, file naming, final approval. Prevents the back-and-forth that eats creative time.",
                  },
                  {
                    title: "Quality Control Review",
                    desc: "The checklist that catches errors before a client does. This is the SOP that protects your reputation the most directly.",
                  },
                  {
                    title: "Content Creation & Review",
                    desc: "From first draft to publish-ready — who writes, who edits, who signs off, and in what order.",
                  },
                  {
                    title: "Reporting & Client Updates",
                    desc: "What gets reported, how often, and in what format — so clients feel informed without your team reinventing the update every cycle.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">What Happens When These Processes Stay Undocumented</h2>
              <p className="leading-8 text-gray-600">
                Skipping SOPs doesn't remove the cost of inconsistency — it just hides it, and spreads it out over time.
              </p>
              <ul className="space-y-4 pl-5 text-gray-600">
                <li className="list-disc">Onboarding quality depends on who's handling it that week.</li>
                <li className="list-disc">Every new hire takes longer to become productive than they should.</li>
                <li className="list-disc">The founder becomes the fallback for questions that shouldn't reach them.</li>
                <li className="list-disc">Client-facing errors happen not from lack of skill, but lack of a checklist.</li>
              </ul>
              <p className="leading-8 text-gray-600">
                Eventually, someone has to sit down and write these processes anyway — usually in the middle of a crisis, under time pressure, after something has already gone wrong.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">How to Use the SOP Starter Kit</h2>
              <ol className="space-y-4 pl-5 text-gray-600">
                <li className="list-decimal">Pick the highest-friction process first. Start with the SOP that would save the most time or prevent the most repeated mistakes — usually onboarding or quality control.</li>
                <li className="list-decimal">Fill in the real steps, not the ideal ones. Document how the work actually happens today, then tighten it.</li>
                <li className="list-decimal">Test it with someone who didn't write it. If a teammate can follow the SOP without asking a clarifying question, it's ready.</li>
                <li className="list-decimal">Review quarterly. Processes drift as the business grows — a short review keeps the SOP accurate instead of outdated.</li>
                <li className="list-decimal">Repeat for the next process. One documented process at a time beats a shelf of manuals nobody uses.</li>
              </ol>
            </div>

            <div className="rounded-[32px] border border-purple-200 bg-purple-50 p-10 text-purple-900 shadow-sm">
              <h2 className="text-2xl font-semibold">The Real Value of an SOP Isn't the Document</h2>
              <p className="mt-4 leading-7">
                The templates matter, but they're not the point. The point is what documentation does to how a business runs: work becomes portable, quality becomes consistent, and the founder becomes optional in the day-to-day.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Start With the Processes, Not the Overhaul</h2>
              <p className="leading-8 text-gray-600">
                You don't need a full operations rebuild to get the benefit of SOPs. You need eight documents, filled in honestly, for the work your team already repeats every week.
              </p>
              <p className="leading-8 text-gray-600">
                That's what the SOP Starter Kit gives you — a starting point, not a project. Download it, fill in the first template today, and hand off one piece of work you're currently holding onto by memory alone.
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
