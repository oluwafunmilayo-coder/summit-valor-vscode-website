import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMeta = {
  "/": ["Summit Valor | Turning Business Potential Into Practical Progress", "Summit Valor helps entrepreneurs turn ideas into structured ventures and supports growing businesses with strategy, systems, operational improvement, and practical execution."],
  "/about": ["About Summit Valor | Business Consulting & Founder Support", "Summit Valor helps aspiring entrepreneurs turn ambition into structured ventures and helps growing businesses strengthen their strategy, systems, and execution."],
  "/services": ["Business Consulting & Operations Services | Summit Valor", "Summit Valor helps aspiring entrepreneurs and growing businesses develop business strategy, improve operations, build systems, and plan for stronger execution."],
  "/industries": ["Industries We Support | Summit Valor", "Business operations consulting for technology, professional services, healthcare, ecommerce and founder-led businesses."],
  "/resources": ["Business Resources & Summit Operations Blueprint | Summit Valor", "Explore practical business resources, the Summit Operations Blueprint sample report, and tools for aspiring entrepreneurs and growing businesses."],
  "/blog": ["Summit Valor Blog | Operations Insights", "Read Summit Valor articles on business operations, systems, and scaling for founders and growing teams."],
  "/blog/why-your-business-feels-chaotic": ["Why Your Business Feels Chaotic | Summit Valor", "Why chaos happens in growth-stage businesses and how strong operations, systems, and documentation restore scale."],
  "/blog/smart-founder-delegation-playbook": ["Smart Founder Delegation Playbook | Summit Valor", "Learn a founder delegation framework that frees time, improves consistency, and helps teams execute with clarity."],
  "/blog/sop-starter-kit": ["SOP Starter Kit | Summit Valor", "Download ready-to-use SOP templates and build repeatable processes for client onboarding, quality control, and team handoffs."],
  "/academy": ["Summit Academy | Operations Learning", "Practical learning for operators and business leaders who want to build better systems and business operations."],
  "/unfiltered-blueprint": ["Unfiltered Blueprint | Summit Valor", "Practical conversations on business operations, leadership and sustainable growth from founders and operators."],
  "/contact": ["Contact Summit Valor | Operations Assessment", "Talk to Summit Valor about building better operations, business systems and scalable execution."],
};

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = pageMeta[pathname] || pageMeta["/"];
    document.title = title;
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute("content", description);
  }, [pathname]);
  return null;
}
