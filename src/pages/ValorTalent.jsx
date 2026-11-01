import { FiArrowRight, FiCheck, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const supportAreas = [
  {
    title: "Find the right people",
    description:
      "Identify your organisational needs and source people whose roles align with those needs.",
  },
  {
    title: "Build a clearly structured team",
    description:
      "Define team roles and responsibilities so people understand the work they are there to do.",
  },
  {
    title: "Strengthen team management",
    description:
      "Improve how teams are managed and support employees to perform effectively in their roles.",
  },
  {
    title: "Develop the people you have",
    description:
      "Train existing team members for their roles and support ongoing development as the organisation grows.",
  },
];

const audiences = [
  "Startups identifying the people and roles they need",
  "Growing businesses building or strengthening a team",
  "Business owners looking to improve team management and performance",
  "Organisations training and developing existing employees",
];

const engagementSteps = [
  {
    title: "Understand your team needs",
    description:
      "Discuss your organisation, the roles involved, and the people-related support you are looking for.",
  },
  {
    title: "Agree on the right support",
    description:
      "Clarify whether your priorities are sourcing, role responsibilities, team management, or employee development.",
  },
  {
    title: "Work on the agreed priorities",
    description:
      "Focus the engagement on the talent or team needs agreed with your business.",
  },
];

const contactOptions = [
  {
    title: "Need help sourcing talent?",
    description:
      "Discuss the people and roles your organisation needs.",
    label: "Discuss talent sourcing",
  },
  {
    title: "Building or managing a team?",
    description:
      "Talk through team roles, responsibilities, and management needs.",
    label: "Discuss your team",
  },
  {
    title: "Training your existing employees?",
    description:
      "Explore support to help team members perform their roles and continue developing.",
    label: "Discuss employee development",
  },
];

export default function ValorTalent() {
  return (
    <div className="bg-white text-[#24212B]">
      <Navbar />
      <main className="pt-28 sm:pt-32">
        <section className="bg-[#F5F5F7] py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
                Summit Valor Talent
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                The Right People. The Right Team. The Right Growth.
              </h1>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Valor Talent helps startups and growing businesses identify
                their people needs, build clearly defined teams, and develop
                the employees they already have.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                >
                  Talk to us about your team{" "}
                  <FiArrowRight aria-hidden="true" />
                </Link>
                <a
                  href="#support"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-[#24212B] transition-colors hover:border-[#5B21B6] hover:text-[#5B21B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                >
                  Explore Valor Talent
                </a>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="hidden h-24 w-24 items-center justify-center rounded-3xl bg-purple-100 text-[#5B21B6] lg:flex"
            >
              <FiUsers className="h-12 w-12" />
            </div>
          </div>
        </section>

        <section id="support" className="scroll-mt-24 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
              How we support your business
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold sm:text-3xl">
              People support shaped around your organisation.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {supportAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7"
                >
                  <div className="flex items-start gap-3">
                    <FiCheck
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-[#5B21B6]"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{area.title}</h3>
                      <p className="mt-2 leading-7 text-gray-600">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
                Who it’s for
              </p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                For founders building their teams.
              </h2>
              <ul className="mt-6 space-y-3">
                {audiences.map((audience) => (
                  <li
                    key={audience}
                    className="flex items-start gap-3 leading-7 text-gray-600"
                  >
                    <FiCheck
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-[#5B21B6]"
                    />
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
                How we work together
              </p>
              <ol className="mt-5 space-y-5">
                {engagementSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex items-start gap-4 border-t border-gray-300 pt-5"
                  >
                    <span className="text-sm font-semibold tracking-wider text-[#5B21B6]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-2 leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
              Start a conversation
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold sm:text-3xl">
              What does your business need from its people?
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {contactOptions.map((option) => (
                <article
                  key={option.label}
                  className="flex h-full flex-col rounded-2xl border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold">{option.title}</h3>
                  <p className="mt-2 flex-1 leading-7 text-gray-600">
                    {option.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-[#5B21B6] hover:text-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                  >
                    {option.label} <FiArrowRight aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-gray-500">
              On the contact form, choose “Staffing and Talent Support” and
              tell us what your business needs.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
