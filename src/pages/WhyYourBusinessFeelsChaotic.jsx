import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function WhyYourBusinessFeelsChaotic() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAF8F5] text-[#222222]">
        <section className="relative overflow-hidden bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              to="/resources"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition hover:gap-3"
            >
              <FiArrowLeft />
              Back to Resources
            </Link>
            <div className="mx-auto max-w-4xl rounded-[32px] border border-gray-200 bg-[#faf8f5] p-10 shadow-sm sm:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-700">
                Business Operations
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
                Why Your Business Feels Chaotic
                <br />
                And How Strong Operations Fix It
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl">
                Growth doesn’t break businesses. Chaos appears when the business outpaces its systems.
                This article explains the hidden costs of weak operations, the mistakes founders make,
                and the practical steps that restore control.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500">
                <span>Read time — 10 min</span>
                <span>Topic — Business Operations</span>
                <span>Audience — Founders, operators, and growth teams</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
          <article className="space-y-16 text-gray-700">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Why growing businesses become chaotic</h2>
              <p className="leading-8">
                Growth exposes hidden cracks. In the early days, founders carry the business by making fast decisions, filling gaps, and staying close to every detail.
                That works when the team is small and the operation is simple.
              </p>
              <p className="leading-8">
                Once the business grows, work multiplies faster than communication. Roles overlap, accountability thins, repeated tasks remain undocumented, and informal processes
                quietly become expectations.
              </p>
              <p className="leading-8">
                Chaos usually begins when revenue outpaces process maturity, new hires arrive without standard onboarding,
                services launch without updated workflows, or the founder is still the decision point for day-to-day execution.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">The hidden cost of weak operations</h2>
              <p className="leading-8">
                Weak operations are expensive in ways that don’t always show up in financial reports. They appear as missed deadlines, wasted rework,
                inconsistent customer experience, team friction, burnout, and growth decisions made on shaky ground.
              </p>
              <blockquote className="border-l-4 border-purple-700 bg-purple-50 p-6 text-purple-900">
                The most damaging cost isn’t money lost — it is the loss of confidence in the way work gets done.
              </blockquote>
              <p className="leading-8">
                When leadership can’t trust execution, every new initiative slows down. Strategy becomes tentative because the business first has to
                "fix the way we operate." That is the hidden cost of weak operations.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Common operational mistakes founders make</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">Treating process as optional</h3>
                  <p className="mt-4 leading-7 text-gray-600">
                    When workflow optimisation is optional, teams choose convenience over consistency. A process should be the default, not a fallback.
                  </p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">Relying on tribal knowledge</h3>
                  <p className="mt-4 leading-7 text-gray-600">
                    If critical knowledge lives only in people’s heads, the business is one resignation away from unraveling.
                  </p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">Confusing tools for systems</h3>
                  <p className="mt-4 leading-7 text-gray-600">
                    Technology helps, but it is not a substitute for documented business processes and clear operating rhythms.
                  </p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">Staying inside execution</h3>
                  <p className="mt-4 leading-7 text-gray-600">
                    Founders should lead strategy, not manage the operating rhythm. If the founder approves every task, the business cannot scale.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Signs your business has outgrown its systems</h2>
              <ul className="space-y-4 pl-5 text-gray-600">
                <li className="list-disc">Teams ask the same question every week.</li>
                <li className="list-disc">Projects drift without clear status updates.</li>
                <li className="list-disc">Work is duplicated across departments.</li>
                <li className="list-disc">New hires take too long to become productive.</li>
                <li className="list-disc">The founder remains the default problem-solver.</li>
              </ul>
              <p className="leading-8 text-gray-600">
                These are not normal growing pains. They are signals that the business needs a stronger operational foundation.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">How workflows and documentation improve execution</h2>
              <p className="leading-8 text-gray-600">
                Strong workflows and documentation do three things: make work predictable, make decisions faster, and make execution reliable.
              </p>
              <p className="leading-8 text-gray-600">
                A workflow is a map of how work should move through the business. Documentation is the memory of the business — policies,
                handoffs, quality checks and escalation rules captured in writing instead of stored in a person’s head.
              </p>
              <p className="leading-8 text-gray-600">
                For example, a documented onboarding process means every customer receives the same quality experience, even when different team members lead the work.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Why founders shouldn’t be the operating system</h2>
              <p className="leading-8 text-gray-600">
                Founders should be vision drivers, not bottlenecks. When the founder is still the final authority on every important task, the business is structured around one person.
              </p>
              <p className="leading-8 text-gray-600">
                The alternative is an operating model where leadership sets strategy, operators run the rhythm, teams own execution, and systems enforce consistency.
              </p>
            </div>

            <div className="rounded-[32px] border border-purple-200 bg-purple-50 p-10 text-purple-900 shadow-sm">
              <h2 className="text-2xl font-semibold">The role of a Business Operations Partner</h2>
              <p className="mt-4 leading-7">
                A Business Operations Partner is not a task service. They build the systems that make tasks happen reliably — diagnosing bottlenecks,
                documenting processes, designing workflows, and embedding operational discipline.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Practical steps founders can take today</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Map your critical workflows",
                    desc: "Identify the processes that matter most to revenue and customer experience.",
                  },
                  {
                    title: "Capture how work really happens",
                    desc: "Interview the team and document the actual process, not the ideal one.",
                  },
                  {
                    title: "Standardize one process at a time",
                    desc: "Pick a high-impact process and define clear steps, checkpoints, and handoffs.",
                  },
                  {
                    title: "Add simple SOP documentation",
                    desc: "Short, practical guides beat long manuals. Capture purpose, scope, steps and quality checks.",
                  },
                  {
                    title: "Build a review rhythm",
                    desc: "Meet weekly to review execution: what’s happening, what’s blocked, what needs adjusting.",
                  },
                  {
                    title: "Protect founder time",
                    desc: "Set boundaries so the founder can stay strategic instead of getting pulled into daily operations.",
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
              <h2 className="text-3xl font-semibold text-gray-900">How Summit Valor helps businesses build stronger operations</h2>
              <p className="leading-8 text-gray-600">
                At Summit Valor, we partner with founders to make operations the foundation instead of the fallback. We diagnose how the business actually runs,
                design workflows that align with the team’s real work, document processes, and support implementation until the business owns the rhythm.
              </p>
              <p className="leading-8 text-gray-600">
                Founders who partner with Summit Valor move from managing chaos to managing outcomes — clearer roles, less reliance on tribal knowledge, faster onboarding,
                and an operational base built for sustainable growth.
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
