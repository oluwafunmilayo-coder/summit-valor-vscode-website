import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar, FiExternalLink, FiMapPin, FiUsers } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const waitlistUrl = "https://tally.so/r/KpY6ak";

const opportunities = [
  {
    title: "SMEDAN National MSME Conference: Lead a Session",
    category: "Speaking & visibility",
    location: "Lagos, Nigeria · Sessions on 9–10 November 2026",
    deadline: "30 October 2026 (listed; confirm with the organiser)",
    status: "Application status not confirmed",
    statusType: "check",
    description: "Propose a one-hour masterclass, workshop, case clinic or interactive session for Nigerian MSMEs. You must register to attend first and provide a portrait plus a link showing your business is active.",
    eligibility: "Individuals, businesses and organisations with relevant MSME expertise and an active business or online presence.",
    benefit: "Potential exposure to SME founders and ecosystem stakeholders. Attendance is free; premium rooms and all demonstrations carry a participation fee confirmed if selected.",
    url: "https://conference.smedan.gov.ng/get-involved/apply",
    cta: "Apply to lead a session",
  },
  {
    title: "ISF Forum Pitch Battle",
    category: "Pitch competition",
    location: "Ibadan, Nigeria · Live pitch on 28 November 2026",
    deadline: "31 October 2026",
    status: "Application form available",
    statusType: "open",
    description: "Eight selected companies will pitch live to judges. Applicants should prepare a pitch deck or one-page summary, customer and revenue figures, fundraising details, and confirmation that the presenter can attend in Ibadan.",
    eligibility: "Companies able to make a credible business case and pitch in person in Ibadan on 28 November. Check the official application for all requirements.",
    benefit: "Advertised US$10,000 cash prize for the winner.",
    url: "https://theisfforum.com/pitch/apply",
    cta: "Apply to pitch",
  },
  {
    title: "Scale Without Borders Awards",
    category: "Business awards",
    location: "African businesses · Awards in Ibadan on 28 November 2026",
    deadline: "31 October 2026, 23:59 WAT",
    status: "Nominations open until 31 October",
    statusType: "open",
    description: "Awards recognising African companies and people who have expanded beyond their original market. Self-nominations are allowed and there is no entry fee.",
    eligibility: "Companies operating in Africa. Review the category criteria and prepare evidence for the nomination.",
    benefit: "Recognition at the ISF Forum Gala and visibility among business and investment stakeholders.",
    url: "https://awards.theisfforum.com/timeline",
    cta: "Review award details",
  },
  {
    title: "SMEDAN National MSME Conference",
    category: "Training & networking",
    location: "Ecobank Pan African Centre, Victoria Island, Lagos · 8–10 November 2026",
    deadline: "Event dates: 8–10 November 2026",
    status: "Registration page available",
    statusType: "open",
    description: "A national SME event covering finance, market access, policy, digital adoption and workforce solutions. A live-stream option is listed for remote delegates.",
    eligibility: "Entrepreneurs, MSMEs and other interested delegates. Review the official registration page for available participation options.",
    benefit: "Free attendance and access to sessions and the Nigeria First Fair. Travel and accommodation are not included.",
    url: "https://conference.smedan.gov.ng/register",
    cta: "Register to attend",
  },
  {
    title: "NIMASA Blue Economy Accelerator Programme",
    category: "Accelerator & innovation",
    location: "Nigeria · Hackathon scheduled for 8–10 December 2026",
    deadline: "13 November 2026 listed; confirm the current intake on the portal",
    status: "Current application window not confirmed",
    statusType: "check",
    description: "For innovators developing solutions in maritime and blue-economy sectors such as shipping, ports, aquaculture, marine tourism, marine biotechnology and coastal sustainability.",
    eligibility: "The official programme portal lists Nigerian-registered or in-progress startups, at least one Nigerian founder or co-founder, a team of at least two, and an idea, MVP, early-revenue or growth-stage solution in the blue economy. Applicants should check the age requirements on the official portal.",
    benefit: "Mentorship, capacity-building, an innovation hackathon and accelerator pathway. A guaranteed cash grant or specific funding amount is not confirmed.",
    url: "https://nbeap.nimasa.gov.ng/",
    cta: "Check eligibility & apply",
  },
  {
    title: "Young Africa Innovates · Cohort 2",
    category: "Incubation & innovation support",
    location: "Nigeria · Seven eligible states",
    deadline: "18 November 2026 listed; confirm the current intake on the official site",
    status: "Cohort 2 application status not confirmed",
    statusType: "check",
    description: "A UNDP and Mastercard Foundation programme supporting youth-led innovations through bootcamps, incubation, mentorship and market access.",
    eligibility: "Applicants must be aged 18–35 and resident in Abia, Akwa Ibom, Cross River, Katsina, Niger, Plateau or Taraba. Innovations from any sector are welcome.",
    benefit: "Training, mentoring, incubation, market-access support and financial support for selected innovators. No fixed grant amount is published on the official overview.",
    url: "https://youngafricainnovates.ng/",
    cta: "Check eligibility & apply",
  },
  {
    title: "Innovation & Scale Forum 2026",
    category: "Founder event & networking",
    location: "International Conference Centre, Ibadan · 27–28 November 2026",
    deadline: "Event dates: 27–28 November 2026",
    status: "Event page available; ticket status not confirmed",
    statusType: "check",
    description: "A founder and business-growth forum bringing together entrepreneurs, investors, financial institutions and ecosystem stakeholders. Pitch and award nomination calls have separate October deadlines.",
    eligibility: "Founders, SMEs and business professionals. Choose the ticket type that matches your needs.",
    benefit: "Networking, business sessions and potential partner connections. Tickets are advertised from ₦5,000; confirm current pricing and ticket availability before purchasing.",
    url: "https://theisfforum.com/forum",
    cta: "View forum details",
  },
  {
    title: "Bank of Industry · MyBOI Financing Portal",
    category: "Business financing",
    location: "Nigeria",
    deadline: "No single deadline for the general portal",
    status: "Portal available",
    statusType: "available",
    description: "Explore business-financing facilities and submit or track an application through the Bank of Industry's official digital portal.",
    eligibility: "Eligibility, financing amounts, pricing and repayment terms depend on the specific facility.",
    benefit: "Potential access to business financing. This is financing, not a general grant.",
    url: "https://onlineportal.boi.ng/",
    cta: "Explore financing options",
  },
];

function OpportunityCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
      className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg sm:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800">{item.category}</span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            item.statusType === "open"
              ? "bg-emerald-50 text-emerald-700"
              : item.statusType === "check"
                ? "bg-amber-50 text-amber-800"
                : "bg-gray-100 text-gray-700"
          }`}
        >
          {item.status}
        </span>
      </div>
      <h2 className="mt-5 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">{item.title}</h2>
      <p className="mt-4 flex-1 leading-7 text-gray-600">{item.description}</p>
      <div className="mt-6 space-y-4 border-t border-gray-100 pt-5 text-sm">
        <div className="flex items-start gap-3">
          <FiMapPin className="mt-1 shrink-0 text-purple-700" aria-hidden="true" />
          <p className="leading-6 text-gray-700">{item.location}</p>
        </div>
        <div className="flex items-start gap-3">
          <FiCalendar className="mt-1 shrink-0 text-purple-700" aria-hidden="true" />
          <p className="leading-6 text-gray-700"><strong>Deadline / date:</strong> {item.deadline}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Who can apply?</p>
          <p className="mt-1 leading-6 text-gray-600">{item.eligibility}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Benefit</p>
          <p className="mt-1 leading-6 text-gray-600">{item.benefit}</p>
        </div>
      </div>
      <a href={item.url} target="_blank" rel="noopener noreferrer"
        className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#5B21B6] px-5 py-3 font-semibold text-white transition hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]">
        {item.cta}<FiArrowUpRight aria-hidden="true" />
      </a>
    </motion.article>
  );
}

export default function Opportunities() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#14071f] pb-20 pt-36 text-white sm:pb-24 sm:pt-40">
          <div className="absolute -right-40 top-0 h-[460px] w-[460px] rounded-full bg-purple-600/20 blur-[160px]" />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">SUMMIT VALOR OPPORTUNITIES BOARD</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Find your next opportunity. Take your next step.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-purple-100 sm:text-xl">
              A curated list of funding calls, pitch competitions, accelerators, business programmes and founder events for Nigerian and African entrepreneurs. Review eligibility and apply directly through official organiser pages.
            </p>
            <p className="mt-5 text-sm text-purple-200">
              Status checked 28 October 2026 against official organiser pages.
              Listings without a verifiable active application or ticket window
              are marked as unconfirmed. Always confirm eligibility, deadlines
              and availability with the organiser before applying.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={waitlistUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-purple-800 transition hover:bg-purple-50">
                Join the Founder Community <FiUsers aria-hidden="true" />
              </a>
              <a href="https://conference.smedan.gov.ng/register" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Explore November opportunities <FiExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#faf8f5] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B21B6]">Business opportunities & upcoming events</p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Opportunities to explore</h2>
              </div>
              <p className="max-w-xl leading-7 text-gray-600">Some calls have strict age, location, sector or business-stage requirements. Check these carefully before spending time on an application.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {opportunities.map((item, index) => <OpportunityCard key={item.title} item={item} index={index} />)}
            </div>
          </div>
        </section>

        <section className="bg-[#1F1F23] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-200"><FiUsers size={28} aria-hidden="true" /></div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">Summit Valor Founder Community</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Opportunities are easier to act on when you don't build alone.</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-300">
              Join a community for founders and aspiring entrepreneurs who want practical business training, funding and opportunity alerts, founder events, useful resources, networking and potential collaborations. Join the waitlist to hear about community updates and upcoming activities.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={waitlistUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#5B21B6] px-6 py-3 font-semibold text-white transition hover:bg-purple-700">
                Join the waitlist <FiArrowUpRight aria-hidden="true" />
              </a>
              <a href="/community" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Explore the Founder Community <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
