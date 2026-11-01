import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { serviceDetails } from "../data/serviceDetails";

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = serviceDetails[serviceSlug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white text-[#1F1F23]">
      <Navbar />
      <main className="pt-28 sm:pt-32">
        <section className="bg-[#F5F5F7] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
              {service.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {service.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
              >
                Discuss this service <FiArrowRight aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-[#24212B] transition-colors hover:border-[#5B21B6] hover:text-[#5B21B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
              >
                All consulting services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
                Who it’s for
              </p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Is this the right support for you?
              </h2>
              <p className="mt-4 leading-7 text-gray-600">{service.audience}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
                Problems it addresses
              </p>
              <ul className="mt-4 space-y-3">
                {service.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3 leading-7 text-gray-600">
                    <FiCheck
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-[#5B21B6]"
                    />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
              What you receive
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Practical outputs for your next steps.
            </h2>
            <ul className="mt-7 grid gap-4 md:grid-cols-3">
              {service.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="rounded-xl border border-gray-200 bg-white p-5 leading-7 text-gray-700"
                >
                  {deliverable}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-gray-500">
              Deliverables and implementation support are confirmed together
              before work begins and depend on the agreed engagement scope.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
              How the process works
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              A clear path from understanding to action.
            </h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {service.process.map((step, index) => (
                <li
                  key={step.title}
                  className="border-t-2 border-[#5B21B6] pt-5"
                >
                  <span className="text-sm font-semibold tracking-wider text-[#5B21B6]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#211735] py-14 text-white sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Let’s discuss what your business needs.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-gray-200">
                Share your goals and current challenges with the Summit Valor
                team.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#211735] transition-colors hover:bg-purple-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Consultation <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
