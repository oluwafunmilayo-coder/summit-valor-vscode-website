import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const founderCommunityUrl =
  "https://chat.whatsapp.com/D8OaPaBSy9q5tfv5LEsGNe";

const opportunities = [
  {
    title: "The Drawbridge Grant · January 2027 Cohort",
    category: "Business grant",
    location: "Nigeria · All industries",
    deadline: "30 November 2026",
    status: "Applications open",
    statusType: "open",
    description: "ProMoat Capital is offering grants to help Nigerian SMEs expand and strengthen operations. Funds may support inventory, equipment, marketing, staffing and other business growth activities.",
    eligibility: "Nigerian business with valid CAC registration. Paying customers are recommended but not required; applicants should explain their business, customers and proposed use of funds.",
    benefit: "₦1,000,000 first prize and ₦500,000 second prize. No repayment or equity participation.",
    url: "https://www.promoatcapital.com/drawbridge-grant",
    cta: "Apply for the grant",
  },
  {
    title: "Orange Corners Nigeria · Cohort 16",
    category: "Incubation & business support",
    location: "Lagos and Ogun States, Nigeria",
    deadline: "30 November 2026",
    status: "Applications open",
    statusType: "open",
    description: "A six-month incubation programme for young entrepreneurs developing innovative, sustainable businesses. Includes training, mentorship, advisory and market exposure.",
    eligibility: "Entrepreneurs aged 18–35 with an innovative idea or early-stage venture based in Lagos or Ogun, and availability to participate in the programme.",
    benefit: "Selected participants may access up to €30,000 in support for prototype development and testing; this is not an automatic cash grant.",
    url: "https://ocn.fatefoundation.org/incubation",
    cta: "Apply to Orange Corners",
  },
  {
    title: "TRISEG Export Support Programme 2026",
    category: "Export readiness",
    location: "Nigeria · Processed food and agribusiness",
    deadline: "30 November 2026",
    status: "Applications open",
    statusType: "open",
    description: "Support for Nigerian SMEs in processed food to strengthen export readiness and international competitiveness, with a focus on potential Canadian buyers.",
    eligibility: "Nigerian SME in the processed food sector with products suitable for export development. Women-owned and women-led businesses are particularly encouraged.",
    benefit: "Export-readiness training, coaching, market intelligence, buyer connections and access-to-finance guidance. No direct cash grant amount is published.",
    url: "https://ee-eu.kobotoolbox.org/single/1qdcnMDz",
    cta: "Check eligibility & apply",
  },
  {
    title: "SMEDAN × Zoho Digital Business Credits",
    category: "Digital business support",
    location: "Nigeria · All MSME sectors",
    deadline: "Ongoing onboarding; availability may change",
    status: "Ongoing",
    statusType: "available",
    description: "Eligible Nigerian MSMEs can apply for business software credits for tools including Zoho Workplace, Zoho Books and Bigin CRM.",
    eligibility: "Nigerian MSME with a valid 16-digit SMEDAN ID and an email address for follow-up. Businesses without an ID should register with SMEDAN first.",
    benefit: "Free software credits for eligible businesses. Confirm current onboarding and credit availability on the official portal.",
    url: "https://smedan.gov.ng/zoho/",
    cta: "Check availability",
  },
  {
    title: "Jim Leech Mastercard Foundation Fellowship on Entrepreneurship",
    category: "Entrepreneurship fellowship",
    location: "Africa-wide · Delivered online",
    deadline: "1 December 2026",
    status: "Applications open",
    statusType: "open",
    description: "An eight-month fellowship for African students and recent graduates developing entrepreneurial ideas or ventures that address social and economic challenges.",
    eligibility: "African student or recent graduate with an entrepreneurial idea or venture and availability to complete the programme.",
    benefit: "Entrepreneurship education, mentorship and networking. Up to 60 fellows in the final phase may receive a CAD $500 stipend; pitch competition prizes are up to CAD $15,000.",
    url: "https://www.queensu.ca/innovationcentre/programs/jim-leech-mastercard-foundation-fellowship-entrepreneurship",
    cta: "Apply for the fellowship",
  },
  {
    title: "Intergenerational Advocacy: Collective Power for Social Justice",
    category: "Training & participation bursary",
    location: "Lusaka, Zambia · 6–11 March 2027",
    deadline: "30 November 2026, or earlier if places fill",
    status: "Applications open; limited places",
    statusType: "open",
    description: "A six-day in-person course on advocacy, social justice, community organising, digital activism, policy engagement and movement building.",
    eligibility: "Applicants should have at least two years' experience in advocacy or equitable social change, be available for all six days, and have sufficient English proficiency. Applicants aged 35 and below are encouraged.",
    benefit: "Bursary covers tuition, programme accommodation, specified meals and return ground transport between airport and hotel. Flights, visas, insurance and personal expenses are not covered.",
    url: "https://coady.stfx.ca/intergenerational-advocacy-collective-power-for-social-justice/",
    cta: "Review course & apply",
  },
  {
    title: "BusinessDay Young Economists Writing Challenge 2027",
    category: "Writing competition",
    location: "Nigeria",
    deadline: "27 November 2026",
    status: "Submissions open",
    statusType: "open",
    description: "BusinessDay invites undergraduate Economics students to submit an original 800–1,000-word article on one of the competition's prescribed topics.",
    eligibility: "Undergraduate Economics student at a recognised Nigerian university. Applicants must provide the requested student and contact details and a valid student ID.",
    benefit: "Cash prizes of ₦200,000, ₦150,000 and ₦100,000 for the top three; publication, certificate and professional exposure. The overall winner may receive a one-month internship.",
    url: "https://conferences.businessday.ng/event/writing-challenge/",
    cta: "View challenge & submit",
  },
  {
    title: "Ghari Local Government · Construction and Infrastructure Tenders",
    category: "Tender & procurement",
    location: "Kano State, Nigeria",
    deadline: "24 November 2026",
    status: "Prequalification closes soon",
    statusType: "open",
    description: "Prequalification and tender opportunity covering bridge, road, education, religious and health infrastructure projects in Ghari Local Government.",
    eligibility: "Registered contractors and companies that meet the relevant construction and technical requirements. Obtain and review the complete tender documents from the issuing authority.",
    benefit: "Opportunity to bid for public construction and infrastructure projects. Confirm tender-document and submission costs with the issuing authority.",
    url: "https://publicprocurement.org/ghari-local-government-kano-state-invitation-for-pre-qualification-and-tender-for-the-execution-of-projects/",
    cta: "Review tender notice",
  },
  {
    title: "Grow Beyond Kenya",
    category: "Export & business development workshop",
    location: "Nairobi, Kenya · 26–27 November 2026",
    deadline: "Registration closes 20 November 2026",
    status: "Registration open; deadline soon",
    statusType: "open",
    description: "A free, in-person workshop from the ITC SheTrades Initiative to help women entrepreneurs improve operations, reach new customers and explore international markets.",
    eligibility: "Kenyan women entrepreneurs interested in business growth and accessing new markets.",
    benefit: "Workshops on pricing, pitching, finance, digital payments, AI for business and export processes.",
    url: "https://www.shetrades.com/event/grow-beyond-kenya/",
    cta: "Register for the workshop",
  },
  {
    title: "Beauty West Africa 2026",
    category: "Trade exhibition",
    location: "Landmark Centre, Lagos, Nigeria · 24–26 November 2026",
    deadline: "Event dates: 24–26 November 2026",
    status: "Upcoming; confirm visitor registration",
    statusType: "check",
    description: "A trade exhibition connecting beauty suppliers with African distributors, retailers, manufacturers, buyers and industry professionals.",
    eligibility: "Trade professionals in beauty, cosmetics, skincare, haircare, wellness and fragrance. Registration requests professional and business details; children under 16 are not permitted.",
    benefit: "Meet suppliers, buyers and industry partners and explore products and business opportunities. Confirm any visitor charges with the organiser.",
    url: "https://www.beautywestafrica.com/pre-registration",
    cta: "Check visitor registration",
  },
  {
    title: "Power & Energy Ghana 2026",
    category: "Energy trade exhibition",
    location: "Accra, Ghana · 1–2 December 2026",
    deadline: "Event dates: 1–2 December 2026",
    status: "Upcoming; organiser details unconfirmed",
    statusType: "check",
    description: "A trade event listed for the energy and electricity industries, including renewables, power generation, engineering and infrastructure.",
    eligibility: "Potentially relevant to energy companies, renewable-energy businesses, engineers, infrastructure developers, investors and suppliers. Confirm event details with the organiser.",
    benefit: "Potential industry networking and business connections. Ticket arrangements and organiser details are not confirmed in the bulletin.",
    url: "https://b2b.africa/events",
    cta: "Verify event details",
  },
  {
    title: "Rwanda Mining Week 2026",
    category: "Mining & industrial event",
    location: "Kigali, Rwanda · 9–11 December 2026",
    deadline: "Event dates: 9–11 December 2026",
    status: "Upcoming; verify registration",
    statusType: "check",
    description: "An event listing for mining and mineral-resource stakeholders covering investment, technology, equipment and industry partnerships.",
    eligibility: "Mining companies, mineral processors, engineering firms, equipment suppliers, investors and technical service providers.",
    benefit: "Potential networking and business connections across the mining value chain. Confirm registration and ticket details with the organiser.",
    url: "https://b2b.africa/events",
    cta: "Verify event details",
  },
  {
    title: "Africa Tech Summit Nairobi 2027",
    category: "Technology & investment summit",
    location: "Nairobi, Kenya · 10–12 February 2027",
    deadline: "Event dates: 10–12 February 2027",
    status: "Upcoming; check ticket availability",
    statusType: "check",
    description: "A summit connecting technology companies, investors, entrepreneurs and financial institutions across Africa's digital economy.",
    eligibility: "Technology entrepreneurs, fintechs, investors, financial institutions, digital service providers and business leaders.",
    benefit: "Networking, partnership and investment conversations. Confirm ticket prices and availability on the official event website.",
    url: "https://africatechsummit.com",
    cta: "View summit details",
  },
  {
    title: "Art of Technology Lagos 8.0",
    category: "Technology & innovation event",
    location: "Victoria Island, Lagos, Nigeria · 3 December 2026",
    deadline: "Event date: 3 December 2026",
    status: "Upcoming; confirm registration",
    statusType: "check",
    description: "A Lagos event for technology innovators, businesses, policymakers and entrepreneurs to discuss digital innovation and technology.",
    eligibility: "Technology startups, business owners, investors, technology professionals, innovation hubs and policy stakeholders.",
    benefit: "Potential networking and discussion on digital innovation. Confirm event registration with the official organiser.",
    url: "https://africabusinesscommunities.com/events/",
    cta: "Check event information",
  },
  {
    title: "Innovation & Scale Forum 2026",
    category: "Founder event & networking",
    location: "International Conference Centre, Ibadan · 27–28 November 2026",
    deadline: "Event dates: 27–28 November 2026",
    status: "Upcoming; ticket status unconfirmed",
    statusType: "check",
    description: "A founder and business-growth forum bringing together entrepreneurs, investors, financial institutions and ecosystem stakeholders.",
    eligibility: "Founders, SMEs and business professionals. Confirm current event details with the organiser.",
    benefit: "Networking, business sessions and potential partner connections. Tickets were advertised from ₦5,000; confirm current pricing and availability.",
    url: "https://theisfforum.com/forum",
    cta: "View forum details",
  },
  {
    title: "Bank of Industry · MyBOI Financing Portal",
    category: "Business financing",
    location: "Nigeria",
    deadline: "Ongoing; facility-specific",
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
              A curated list of grants, funding, procurement, business programmes, training and upcoming events for Nigerian and African entrepreneurs. Check each listing's eligibility and confirm details with its organiser.
            </p>
            <p className="mt-5 text-sm text-purple-200">
              Updated 19 November 2026 from the latest opportunities bulletin.
              Listings with unconfirmed registration or ticket details are
              clearly marked. Always verify eligibility, deadlines, costs and
              availability with the organiser before applying.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={founderCommunityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-purple-800 transition hover:bg-purple-50">
                Join the Founder Community <FiUsers aria-hidden="true" />
              </a>
              <a href="#opportunities-list" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Browse current opportunities <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="opportunities-list" className="bg-[#faf8f5] py-16 sm:py-20">
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
              Join a community for founders and aspiring entrepreneurs who want practical business training, funding and opportunity alerts, founder events, useful resources, networking and potential collaborations. Join the WhatsApp group to connect with founders and hear about upcoming activities.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={founderCommunityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#5B21B6] px-6 py-3 font-semibold text-white transition hover:bg-purple-700">
                Join the WhatsApp community <FiArrowUpRight aria-hidden="true" />
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
