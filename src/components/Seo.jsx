import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMeta = {
  "/": ["Business Operations Consulting | Summit Valor", "Summit Valor is a business operations partner helping founders build systems, accountability and scalable execution."],
  "/about": ["About Summit Valor | Business Operations Partner", "Learn how Summit Valor helps growing businesses replace operational chaos with clear systems and reliable execution."],
  "/services": ["Business Operations Services | Summit Valor", "Explore operations consulting, process improvement, systems design and executive operations support for growing businesses."],
  "/industries": ["Industries We Support | Summit Valor", "Business operations consulting for technology, professional services, healthcare, ecommerce and founder-led businesses."],
  "/resources": ["Business Operations Resources | Summit Valor", "Practical guides, templates and frameworks for stronger business systems, process improvement and sustainable growth."],
  "/blog/why-your-business-feels-chaotic": ["Why Your Business Feels Chaotic | Summit Valor", "Why chaos happens in growth-stage businesses and how strong operations, systems, and documentation restore scale."],
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
