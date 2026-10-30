import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMeta = {
  "/": [
    "Summit Valor | The Record Label for Businesses",
    "Summit Valor helps business owners strengthen their systems, develop their capabilities, and access opportunities for sustainable growth through consulting, Academy learning, and founder connections.",
  ],
  "/about": [
    "About Summit Valor | Business Consulting & Entrepreneurial Development",
    "Learn about Summit Valor, a business consulting and entrepreneurial development company bringing together Business Consulting, the Founder Community, and Summit Valor Academy.",
  ],
  "/services": [
    "Business Consulting Services | Summit Valor",
    "Explore consulting for business strategy, venture development, operations, systems, and execution—part of Summit Valor's wider ecosystem of founder support and entrepreneurial learning.",
  ],
  "/industries": [
    "Industries We Support | Summit Valor",
    "Explore how Summit Valor adapts business strategy, systems, and operational support to technology, health, professional services, real estate, e-commerce, and more.",
  ],
  "/community": [
    "Summit Valor Founder Community | Connect and Grow",
    "Connect with founders, exchange knowledge, build accountability, and navigate the realities of entrepreneurship together in the Summit Valor Founder Community.",
  ],
  "/opportunities": [
    "Business Opportunities for Founders | Summit Valor",
    "Explore business opportunities, funding calls, pitch competitions, accelerators, founder events, eligibility details, deadlines, and official application links.",
  ],
  "/partnerships": [
    "Partnerships & Collaborators | Summit Valor",
    "Explore strategic, corporate, government, NGO, educational, programme and ecosystem partnership opportunities with Summit Valor.",
  ],
  "/events": [
    "Summit Valor Events | Learning and Founder Connection",
    "Explore Summit Valor events for entrepreneurs and growing businesses, with opportunities to learn, connect, and make practical progress.",
  ],
  "/resources": [
    "Business Resources & Summit Operations Blueprint | Summit Valor",
    "Explore practical business resources, the Summit Operations Blueprint sample report, and tools for aspiring entrepreneurs and growing businesses.",
  ],
  "/blog": [
    "Summit Valor Insights | Business and Entrepreneurial Growth",
    "Explore practical insights on business strategy, entrepreneurship, operations, systems, and sustainable growth.",
  ],
  "/blog/why-your-business-feels-chaotic": [
    "Why Your Business Feels Chaotic | Summit Valor",
    "Why chaos happens in growth-stage businesses and how strong operations, systems, and documentation restore scale.",
  ],
  "/blog/smart-founder-delegation-playbook": [
    "Smart Founder Delegation Playbook | Summit Valor",
    "Learn a founder delegation framework that frees time, improves consistency, and helps teams execute with clarity.",
  ],
  "/blog/sop-starter-kit": [
    "SOP Starter Kit | Summit Valor",
    "Download ready-to-use SOP templates and build repeatable processes for client onboarding, quality control, and team handoffs.",
  ],
  "/academy": [
    "Summit Valor Academy | Practical Business Learning",
    "Practical learning for business owners focused on business development, management, financial literacy, operations, and leadership.",
  ],
  "/contact": [
    "Contact Summit Valor | Business Consulting",
    "Talk to Summit Valor about business strategy, systems, operations, staffing and talent support, and practical help for your next stage of growth.",
  ],
  "/privacy-policy": [
    "Privacy Policy | Summit Valor",
    "Read how Summit Valor handles personal information when you use our website, resources, and services.",
  ],
  "/terms-and-conditions": [
    "Terms and Conditions | Summit Valor",
    "Review the terms for using the Summit Valor website, resources, community, Academy, and consulting services.",
  ],
  "/thank-you": [
    "Thank You | Summit Valor",
    "Thank you for connecting with Summit Valor. Explore our resources, Founder Community, and Academy.",
  ],
};

const siteUrl = "https://www.summitvalor.com.ng";
const socialImage = `${siteUrl}/hero-image-home.jpg`;

function setMetaTag(selector, attribute, value, content) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = pageMeta[pathname] || pageMeta["/"];
    const pageUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;

    document.title = title;

    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[property="og:type"]', "property", "og:type", "website");
    setMetaTag(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
      "Summit Valor"
    );
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );
    setMetaTag('meta[property="og:url"]', "property", "og:url", pageUrl);
    setMetaTag('meta[property="og:image"]', "property", "og:image", socialImage);
    setMetaTag(
      'meta[property="og:image:alt"]',
      "property",
      "og:image:alt",
      "Business professionals reviewing a strategy together"
    );
    setMetaTag(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary_large_image"
    );
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description
    );
    setMetaTag(
      'meta[name="twitter:image"]',
      "name",
      "twitter:image",
      socialImage
    );

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;
  }, [pathname]);
  return null;
}
