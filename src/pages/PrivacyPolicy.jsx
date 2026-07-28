import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>

        <p className="mt-6 text-gray-600 leading-8">
          At Summit Valor, we respect your privacy and are committed to
          protecting your personal information. This Privacy Policy explains
          how we collect, use, and protect information when you interact with
          our website and services.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Information We Collect
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          We may collect information you provide when you book an assessment,
          contact our team, join our community, subscribe to updates, or use
          our resources.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          How We Use Your Information
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          We use your information to respond to enquiries, provide requested
          services, improve our website experience, and communicate relevant
          updates.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Contact Us
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          If you have questions about this Privacy Policy, please contact
          Summit Valor through our official contact channels.
        </p>
      </div>

      <Footer />
    </>
  );
}