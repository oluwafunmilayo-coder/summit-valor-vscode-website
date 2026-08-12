import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SmartFounderDelegationPlaybook() {
  return (
    <>
      <Navbar />
      <main className="mt-24 bg-white text-slate-900">
        <section className="relative overflow-hidden bg-[#f8f6ff] py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl"
            >
              <p className="font-semibold uppercase tracking-[0.35em] text-purple-700">
                Blog
              </p>
              <h1 className="mt-6 text-5xl font-bold text-gray-900 sm:text-6xl">
                Smart Founder Delegation Playbook
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-600">
                A practical framework for deciding what to keep, delegate and automate as your company grows.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                  May 2026 · Summit Valor
                </span>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                >
                  Back to Blog
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-14">
              <article className="space-y-8 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
                <div className="space-y-6">
                  <p className="text-lg leading-8 text-gray-700">
                    Every founder reaches a point where the business grows faster than the team can keep up. The solution isn’t doing more yourself — it’s deciding what should stay in your hands, what should move to a trusted teammate, and what should be captured as a repeatable process.
                  </p>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">1. Start with what only you can do</h2>
                    <p className="text-gray-600 leading-8">
                      Founders often say they can do everything, but the real question is: what work truly requires your voice, judgment, or relationships? Keep the strategic decisions and high-stakes client conversations, and let the rest become delegatable.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">2. Map your delegation categories</h2>
                    <p className="text-gray-600 leading-8">
                      Use three buckets: Keep, Delegate, Automate. Put every task into one bucket. When the same work appears in Delegate more than once, it should become a documented process that someone else can execute consistently.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">3. Build a playbook for repeatable handoffs</h2>
                    <p className="text-gray-600 leading-8">
                      A playbook is a living set of instructions for tasks, approvals, deadlines, and expected outcomes. It makes delegation scalable because anyone can follow the same path and still deliver the result you expect.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">4. Use accountability to keep progress moving</h2>
                    <p className="text-gray-600 leading-8">
                      Delegation isn’t a one-time handoff. Track what was assigned, review completed work, and give feedback quickly. That turns ordinary execution into an improving system.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">5. Free your time to lead growth</h2>
                    <p className="text-gray-600 leading-8">
                      When founders stop carrying every task, they reclaim the capacity to focus on growth planning, partnerships, product direction, and the business model itself. That is where the biggest leverage lives.
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl bg-purple-950 p-10 text-white shadow-xl">
                  <h3 className="text-2xl font-bold">Use this playbook when:</h3>
                  <ul className="mt-6 space-y-3 text-gray-200">
                    <li>• You feel stuck in the day-to-day and can’t grow.</li>
                    <li>• Your team asks for clearer roles and handoff guidance.</li>
                    <li>• You want delegation to create consistency, not chaos.</li>
                  </ul>
                </div>
              </article>
            </div>

            <aside className="space-y-8 rounded-3xl border border-gray-200 bg-[#faf8ff] p-8 shadow-sm">
              <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Why founders get stuck</h3>
                <p className="text-gray-600 leading-7">
                  Founders often assume only they can do critical work. The playbook helps uncover what can be shifted without losing control.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Quick checklist</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Identify repetitive tasks</li>
                  <li>• Write task steps clearly</li>
                  <li>• Assign an owner</li>
                  <li>• Review results weekly</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Get the playbook</h3>
                <p className="mt-2 text-gray-600 leading-7">
                  Want the full delegation framework? Apply to join Summit Valor’s founder community for support with the playbook and operational systems.
                </p>
                <Link
                  to="/community"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  Join the Community
                  <FiArrowRight />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
