import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const collaborationAreas = [
  "Strategic partners",
  "Corporate partners",
  "Government institutions",
  "NGOs and development organisations",
  "Training and educational partners",
  "Programme partners",
  "Event and ecosystem partners",
];

const confirmedPartners = [];
const partnershipEmail =
  "mailto:hello@summitvalor.com.ng?subject=Strategic%20Partnership%20Inquiry";

function PartnerProfile({ partner }) {
  return (
    <article className="border border-gray-200 bg-white p-6 sm:p-8">
      {partner.logo && (
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="mb-6 h-14 w-auto object-contain"
        />
      )}
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7651C9]">
        {partner.category}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-[#24212B]">
        {partner.name}
      </h2>
      <p className="mt-3 leading-7 text-gray-600">{partner.description}</p>
      <p className="mt-5 border-t border-gray-200 pt-5 leading-7 text-gray-700">
        {partner.collaboration}
      </p>
      {partner.website && (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[#7651C9] hover:text-[#211735]"
        >
          Visit website <FiArrowUpRight aria-hidden="true" />
        </a>
      )}
    </article>
  );
}

export default function Partnerships() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#211735] pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BDA9EC]">
              Summit Valor · Partnerships
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Stronger businesses grow through shared effort.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 sm:text-xl">
              We are open to collaborating with organisations that help
              businesses build the right systems, develop the right people and
              access the right opportunities.
            </p>
            <a
              href={partnershipEmail}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#7651C9] px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Become a Strategic Partner <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7651C9]">
                Areas for collaboration
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#24212B] sm:text-4xl">
                Shared priorities. Practical collaboration.
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Partnership conversations may explore business consulting,
                entrepreneurship, professional development and access to
                relevant opportunities. Each collaboration is shaped with the
                organisation involved; the categories below describe areas we
                welcome, not current or confirmed relationships.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {collaborationAreas.map((area) => (
                <li
                  key={area}
                  className="border-l-2 border-[#7651C9] bg-[#F5F5F7] px-5 py-4 font-medium text-[#24212B]"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7651C9]">
                Confirmed partners
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#24212B] sm:text-4xl">
                Partners &amp; collaborators
              </h2>
            </div>

            {confirmedPartners.length > 0 ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {confirmedPartners.map((partner) => (
                  <PartnerProfile key={partner.name} partner={partner} />
                ))}
              </div>
            ) : (
              <div className="mt-8 border border-dashed border-gray-300 bg-white p-7 sm:p-10">
                <p className="text-lg font-semibold text-[#24212B]">
                  Partner profiles will be added when collaborations are
                  formally confirmed and approved.
                </p>
                <p className="mt-3 max-w-3xl leading-7 text-gray-600">
                  We do not publish unapproved discussions as partnerships.
                  Once approved, each profile can include the organisation&apos;s
                  logo and name, partnership category, a short introduction,
                  details of the collaboration and an official website link.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7651C9]">
                Start a conversation
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#24212B] sm:text-3xl">
                Have a shared goal in mind?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                Tell us about your organisation and the outcomes you hope to
                achieve together.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={partnershipEmail}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#7651C9] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#211735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651C9]"
              >
                Become a Strategic Partner <FiArrowRight aria-hidden="true" />
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-[#24212B] transition-colors hover:border-[#7651C9] hover:text-[#7651C9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651C9]"
              >
                Contact Summit Valor
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
