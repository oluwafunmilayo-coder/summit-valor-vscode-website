import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMeta = {
  "/": ["Summit Valor | Business Consulting & Entrepreneurial Development", "Summit Valor is a business consulting and entrepreneurial development company. Through Business Consulting, the Founder Community, and Summit Valor Academy, we help entrepreneurs and growing businesses build clarity, capability, and practical foundations for growth."],
  "/about": ["About Summit Valor | Business Consulting & Entrepreneurial Development", "Summit Valor is a business consulting and entrepreneurial development company. Through consulting, the Founder Community, and Summit Valor Academy, we help people and businesses build clarity, capability, and practical foundations for growth."],
  "/services": ["Business Consulting Services | Summit Valor", "Explore consulting for business strategy, venture development, operations, systems, and execution—part of Summit Valor's wider ecosystem of founder support and entrepreneurial learning."],
  "/industries": ["Business Consulting for Growing Industries | Summit Valor", "Summit Valor supports entrepreneurs and growing businesses with relevant strategy, systems, and operational consulting tailored to their industry and stage."],
  "/resources": ["Business Resources & Summit Operations Blueprint | Summit Valor", "Explore practical business resources, the Summit Operations Blueprint sample report, and tools for aspiring entrepreneurs and growing businesses."],
  "/blog": ["Summit Valor Insights | Business and Entrepreneurial Growth", "Explore practical insights on business strategy, entrepreneurship, operations, systems, and sustainable growth."],
  "/blog/why-your-business-feels-chaotic": ["Why Your Business Feels Chaotic | Summit Valor", "Why chaos happens in growth-stage businesses and how strong operations, systems, and documentation restore scale."],
  "/blog/smart-founder-delegation-playbook": ["Smart Founder Delegation Playbook | Summit Valor", "Learn a founder delegation framework that frees time, improves consistency, and helps teams execute with clarity."],
  "/blog/sop-starter-kit": ["SOP Starter Kit | Summit Valor", "Download ready-to-use SOP templates and build repeatable processes for client onboarding, quality control, and team handoffs."],
  "/academy": ["Summit Valor Academy | Entrepreneurial and Professional Development", "Practical learning and development that helps entrepreneurs and professionals build relevant knowledge, skills, and confidence."],
  "/unfiltered-blueprint": ["Unfiltered Blueprint | Summit Valor", "Practical conversations on business operations, leadership and sustainable growth from founders and operators."],
  "/contact": ["Contact Summit Valor | Business Consulting", "Talk to Summit Valor about business strategy, systems, operations, and practical support for your next stage of growth."],
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
