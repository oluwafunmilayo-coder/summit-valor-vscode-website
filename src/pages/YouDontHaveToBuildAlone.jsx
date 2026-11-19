import { FiArrowLeft, FiExternalLink, FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const linkedinUrl =
  "https://www.linkedin.com/pulse/you-dont-have-build-your-business-alone-finding-direction-3xcne";
const communityUrl =
  "https://chat.whatsapp.com/D8OaPaBSy9q5tfv5LEsGNe";

export default function YouDontHaveToBuildAlone() {
  return (
    <>
      <Navbar />
      <main className="mt-24 bg-[#faf8f5] text-slate-800">
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-semibold text-purple-700"
            >
              <FiArrowLeft />
              Back to Blog
            </Link>

            <header className="mt-10 max-w-4xl">
              <p className="font-semibold uppercase tracking-[0.28em] text-purple-700">
                Founder Community
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-6xl">
                You Don&apos;t Have to Build Your Business Alone
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Finding direction, support and community as a founder
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                  November 18, 2026
                </span>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-purple-200 px-4 py-2 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
                >
                  View original on LinkedIn
                  <FiExternalLink />
                </a>
              </div>
              <img
                src="/blog/founder-room-article.jpg"
                alt="Founder Room: Learn. Connect. Build. Grow."
                className="mt-10 h-auto w-full rounded-[28px] border border-gray-200 shadow-xl"
              />
            </header>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <article className="space-y-12 rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="space-y-6">
              <p className="text-lg leading-8">
                Have you ever been stuck on a business decision, needed advice or faced a challenge you did not know how to solve, but had absolutely no idea who to turn to?
              </p>
              <p className="leading-8 text-gray-600">
                Perhaps you are trying to attract customers, manage finances, structure operations, find funding or take your business to the next level. You search online, watch videos, read articles and ask around, yet still feel uncertain about what to do next.
              </p>
              <p className="leading-8 text-gray-600">
                This is a reality many founders experience. Building a business requires more than a great idea and determination. It requires knowledge, relevant information, useful relationships and someone who has faced a similar challenge.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">The challenge is not always a lack of ideas</h2>
              <p className="leading-8 text-gray-600">
                Founders may be working hard but lack the right strategy, structure or resources. They may know what they want to achieve without knowing where to find the expertise or opportunities needed to get there.
              </p>
              <p className="leading-8 text-gray-600">
                A problem that seems overwhelming alone can become clearer in a conversation with someone who understands the challenge or has encountered it before.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Information is available. Relevant guidance matters.</h2>
              <p className="leading-8 text-gray-600">
                Business information is everywhere. However, access to information does not automatically show a founder how to apply it. A founder registering a business needs different guidance from one managing cash flow, customer retention or team growth.
              </p>
              <p className="leading-8 text-gray-600">
                Founders need practical guidance that reflects their stage of business and the challenges they are facing. They also need environments where they can ask questions, exchange experiences and learn without pretending to have everything figured out.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">You need more than motivation. You need a support system.</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Knowledge and practical learning", "Understand business models, finance, marketing, operations and strategy."],
                  ["People who understand the journey", "Exchange experiences and learn from founders facing similar realities."],
                  ["Relevant resources and opportunities", "Discover tools, programmes, funding information and partnerships."],
                  ["Guidance and different perspectives", "Step back from a problem and consider approaches you may have missed."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-gray-200 bg-[#faf8f5] p-6">
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">The importance of building with the right people</h2>
              <p className="leading-8 text-gray-600">
                Your entrepreneurial journey will involve different stages. Sometimes you need information, sometimes advice, sometimes collaborators, and sometimes another founder&apos;s perspective on a familiar challenge.
              </p>
              <p className="leading-8 text-gray-600">
                A meaningful business community is not defined only by the number of people in it. Its value is reflected in the quality of conversations, the relevance of shared knowledge and the opportunities it helps members discover.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Introducing Founder Room</h2>
              <p className="leading-8 text-gray-600">
                At Summit Valor, we recognise that founders need opportunities to learn, develop their capabilities, build meaningful relationships and access resources that support their entrepreneurial journeys.
              </p>
              <p className="leading-8 text-gray-600">
                Founder Room is a founder community created to support practical learning, meaningful conversations, peer connections and business-building action. We want to encourage discussions about business structure, finance, operations, marketing, leadership, growth, innovation and investment readiness.
              </p>
              <blockquote className="border-l-4 border-purple-700 bg-purple-50 p-6 text-purple-900">
                You do not need to know everything before you start building. You do not need all the answers before you ask questions. And you do not have to navigate every challenge alone.
              </blockquote>
            </div>

            <div className="rounded-[28px] bg-[#1E1033] p-8 text-white sm:p-10">
              <h2 className="text-3xl font-bold">Join the conversation</h2>
              <p className="mt-4 max-w-2xl leading-8 text-purple-100">
                If guidance could help one aspect of your business right now, what would it be? Join Founder Room and connect with founders learning, sharing and building together.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-purple-800"
                >
                  Join Founder Room
                  <FiMessageCircle />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold"
                >
                  Read on LinkedIn
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
