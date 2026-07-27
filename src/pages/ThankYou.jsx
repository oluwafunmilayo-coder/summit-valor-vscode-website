import { Link } from "react-router-dom";
import { FiArrowLeft, FiCheckCircle, FiDownload, FiBookOpen, FiMic, FiUsers } from "react-icons/fi";

export default function ThankYou() {
  return (
    <section className="min-h-screen bg-[#faf8f5] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3"
        >
          <FiArrowLeft />
          Back to Home
        </Link>

        <div className="mt-12 rounded-[32px] bg-white p-10 shadow-sm md:p-14">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <FiCheckCircle size={42} className="text-green-600" />
            </div>
          </div>

          <p className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Thank You
          </p>

          <h1 className="mt-5 text-center text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Your Download is Ready.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Thanks for joining the list. You can download your guide below, explore more resources, or book an assessment if you want help implementing these ideas inside your business.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/resources/Founders_Operations_Readiness_Checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-700 px-7 py-4 font-semibold text-white transition hover:bg-purple-800"
            >
              Download Your Guide
              <FiDownload />
            </a>

            <a
              href="https://form.jotform.com/261101958492055"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-purple-700 px-7 py-4 font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-white"
            >
              Book an Assessment
            </a>
          </div>

          <hr className="my-14 border-gray-200" />

          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Continue Your Journey
            </h2>

            <p className="mt-4 text-gray-600">
              Explore more ways Summit Valor can help your business grow.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:bg-white hover:shadow-xl">
              <div className="flex items-center gap-2 text-purple-700">
                <FiBookOpen />
                <h2 className="font-semibold">Explore Resources</h2>
              </div>
              <p className="mt-4 text-gray-600">
                Browse more practical tools, checklists and operational guides for growing teams.
              </p>
              <Link to="/resources" className="mt-5 inline-flex font-semibold text-purple-700">
                Explore Resources →
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:bg-white hover:shadow-xl">
              <div className="flex items-center gap-2 text-purple-700">
                <FiMic />
                <h2 className="font-semibold">Listen to the Podcast</h2>
              </div>
              <p className="mt-4 text-gray-600">
                Hear real conversations about leadership, systems and scaling with intention.
              </p>
              <a
                href="/podcast"
                className="mt-5 inline-flex font-semibold text-purple-700"
              >
                Listen Now →
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:bg-white hover:shadow-xl">
              <div className="flex items-center gap-2 text-purple-700">
                <FiUsers />
                <h2 className="font-semibold">Become a Guest</h2>
              </div>
              <p className="mt-4 text-gray-600">
                Share your perspective and join future conversations on The Unfiltered Blueprint.
              </p>
              <a
                href="/guest"
                className="mt-5 inline-flex font-semibold text-purple-700"
              >
                Become a Guest →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
