import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900">
          Terms & Conditions
        </h1>

        <p className="mt-6 text-gray-600 leading-8">
          These Terms & Conditions explain the rules and guidelines for using
          the Summit Valor website and engaging with our services.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Use of Our Website
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          By accessing our website, you agree to use the information,
          resources, and services provided by Summit Valor responsibly and
          respectfully.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Our Services
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          Summit Valor provides business operations support, systems
          improvement, resources, and educational opportunities. Specific
          engagements, deliverables, and agreements will be discussed before
          services begin.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Website Information
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          We aim to provide accurate and useful information. However, business
          needs and resources may change over time, and we reserve the right
          to update website content.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Contact
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          If you have questions about these Terms & Conditions, please contact
          the Summit Valor team.
        </p>
      </div>

      <Footer />
    </>
  );
}