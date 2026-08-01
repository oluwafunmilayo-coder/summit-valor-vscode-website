export default function ThankYou() {
  return (
    <section className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center rounded-3xl bg-white p-10 shadow-xl">
        <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
          Thank You
        </p>

        <h1 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">
          Thanks for reaching out to Summit Valor.
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          We've received your request. The next step is to schedule your
          strategy call so we can better understand your business, challenges,
          and how we can support your operations.
        </p>

        <a
          href="https://cal.com/summitvalor/operations-discovery-call"
          className="mt-8 inline-block rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:bg-purple-800"
        >
          Book Your Call
        </a>

        <p className="mt-6 text-sm text-gray-500">
          We look forward to speaking with you.
        </p>
      </div>
    </section>
  );
}