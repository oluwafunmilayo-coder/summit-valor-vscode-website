import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const purchaseUrl = "https://selar.com/e894392463";

const benefits = [
  "Identify and document recurring business tasks",
  "Define responsibilities and expected outcomes",
  "Create clear, step-by-step instructions",
  "Organise tools and resources",
  "Establish quality control checks",
  "Reduce repeated explanations and improve delegation",
];

export default function SOPStarterTemplateCard({ showBenefits = false }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl lg:grid-cols-[0.8fr_1.2fr]">
      <div className="flex min-h-[20rem] items-center justify-center bg-[#F4F0F9] p-6 sm:min-h-[25rem] lg:min-h-full">
        <img
          src="/resources/SOP-Template-Cover.png"
          alt="The SOP Starter Template cover"
          width="768"
          height="1024"
          className="h-[18rem] w-auto max-w-full rounded-lg object-contain shadow-lg sm:h-[23rem]"
        />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B21B6]">
          Digital Product
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-[#24212B] sm:text-3xl">
          The SOP Starter Template
        </h3>
        <p className="mt-4 leading-7 text-gray-600">
          Stop running your business from memory. Document recurring tasks,
          organise your processes and make delegation easier with this
          beginner-friendly template for founders, freelancers and small
          business owners.
        </p>
        {showBenefits && (
          <div className="mt-6">
            <h4 className="font-semibold text-[#24212B]">
              What it helps you do
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-sm leading-6 text-gray-600"
                >
                  <FiCheck
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-[#5B21B6]"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-7 flex flex-col gap-4 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-bold text-[#24212B]">
            ₦1,000
            <span className="ml-2 text-sm font-medium text-gray-500">
              one-time purchase
            </span>
          </p>
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
          >
            Get Your Copy
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
