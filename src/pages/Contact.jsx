import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError(
          data?.message ||
            "Something went wrong while sending your message. Please try again."
        );
      }
    } catch (err) {
      setError(
        "We couldn't send your message right now. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">
            Contact Us
          </p>
          <h1 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">
            Let's Build Better Business Operations
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're looking to improve your operations, streamline your
            systems, or explore how Summit Valor can support your business,
            we'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl bg-white p-8 shadow-xl sm:p-12"
        >
          {success ? (
            <div className="mx-auto max-w-2xl text-center">
              <div className="rounded-3xl border border-purple-100 bg-[#FAF8F5] p-8 sm:p-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Thank You!
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We've received your message and appreciate you reaching out to
                  Summit Valor. Our team will review your inquiry and get back
                  to you within 1–2 business days.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  If you'd like to move things forward, you can schedule a
                  complimentary Strategy Call below.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="https://cal.com/summitvalor/operations-discovery-call"
          
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:bg-purple-800"
                  >
                    Book Your Strategy Call
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl border border-purple-700 px-8 py-4 font-semibold text-purple-700 transition hover:bg-purple-50"
                  >
                    Return to Home
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="access_key"
                value={"0fad0917-6337-4cfe-9c16-ad180ad7156a"}
              />
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-purple-700"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-purple-700"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-purple-700"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-purple-700"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  How can we help? *
                </label>
                <select
                  name="service"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-purple-700"
                >
                  <option value="">Select a service</option>
                  <option>Business Operations Consulting</option>
                  <option>Executive Support</option>
                  <option>Systems & SOP Development</option>
                  <option>Workflow Optimization</option>
                  <option>Project Coordination</option>
                  <option>Summit Operations Blueprint™</option>
                  <option>Founder Community</option>
                  <option>Partnership or Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Tell us about your business or project *
                </label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-purple-700"
                  placeholder="Tell us about your business, your current challenges, and how we can help."
                ></textarea>
              </div>
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  How did you hear about Summit Valor?
                </label>
                <select
                  name="referral"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-purple-700"
                >
                  <option value="">Select one</option>
                  <option>Google Search</option>
                  <option>LinkedIn</option>
                  <option>Founder Community</option>
                  <option>Podcast</option>
                  <option>Referral</option>
                  <option>Social Media</option>
                  <option>Other</option>
                </select>
              </div>

              {error && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-purple-700 px-8 py-4 font-semibold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              <p className="text-center text-sm text-gray-500">
                We typically respond within 1–2 business days.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}