import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowLeft, FiCheck, FiLoader } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { consultationOptions, FORM_ACCESS_KEY } from "../data/consultations";

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function ConsultationRequest() {
  const { packageId } = useParams();
  const consultation = Object.prototype.hasOwnProperty.call(
    consultationOptions,
    packageId
  )
    ? consultationOptions[packageId]
    : null;
  const reduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!consultation) {
    return <Navigate to="/services#consultation-options" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
      } else {
        setError(
          data?.message ||
            "We couldn't send your request. Please try again or contact Summit Valor."
        );
      }
    } catch {
      setError(
        "We couldn't send your request right now. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClassName =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#5B21B6] focus:ring-2 focus:ring-[#5B21B6]/15";

  return (
    <div className="bg-[#FAF8F5] text-[#1F1F23]">
      <Navbar />
      <main className="px-6 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/services#consultation-options"
            className="inline-flex items-center gap-2 font-semibold text-[#5B21B6] hover:text-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B21B6]"
          >
            <FiArrowLeft aria-hidden="true" />
            Consultation options
          </Link>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
            className="mt-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
              Consultation request
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
              Request your consultation
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Tell us what you need help with and suggest a date and time. Our
              team will review your request and contact you to confirm
              availability and payment instructions.
            </p>
          </motion.div>

          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
            className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="bg-[#211735] px-6 py-6 text-white sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-purple-300">
                Selected consultation
              </p>
              <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold sm:text-3xl">
                    {consultation.name}
                  </h2>
                  <p className="mt-2 text-gray-200">{consultation.duration}</p>
                </div>
                <p className="text-2xl font-semibold text-white">
                  {consultation.fee}
                </p>
              </div>
            </div>

            {success ? (
              <div
                role="status"
                className="px-6 py-10 text-center sm:px-10 sm:py-14"
              >
                <span
                  aria-hidden="true"
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-[#5B21B6]"
                >
                  <FiCheck className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold">
                  Request received
                </h2>
                <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                  Thank you for your consultation request. Our team will review
                  your preferred date and contact you with availability and
                  payment instructions. Your appointment will only be confirmed
                  after payment has been received.
                </p>
                <Link
                  to="/"
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg border border-[#5B21B6] px-6 py-3 font-semibold text-[#5B21B6] transition-colors hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                >
                  Return to home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
                <input
                  type="hidden"
                  name="access_key"
                  value={FORM_ACCESS_KEY}
                />
                <input
                  type="hidden"
                  name="subject"
                  value={`Consultation request: ${consultation.name}`}
                />
                <input
                  type="hidden"
                  name="consultation_package"
                  value={consultation.name}
                />
                <input
                  type="hidden"
                  name="consultation_fee"
                  value={consultation.fee}
                />
                <input
                  type="hidden"
                  name="consultation_duration"
                  value={consultation.duration}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="consultation-name"
                      className="mb-2 block font-medium text-gray-700"
                    >
                      Full name *
                    </label>
                    <input
                      id="consultation-name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={120}
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="consultation-email"
                      className="mb-2 block font-medium text-gray-700"
                    >
                      Email address *
                    </label>
                    <input
                      id="consultation-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="consultation-phone"
                      className="mb-2 block font-medium text-gray-700"
                    >
                      Phone number *
                    </label>
                    <input
                      id="consultation-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      maxLength={40}
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="consultation-business"
                      className="mb-2 block font-medium text-gray-700"
                    >
                      Business name{" "}
                      <span className="font-normal text-gray-500">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="consultation-business"
                      name="business_name"
                      autoComplete="organization"
                      maxLength={160}
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="consultation-stage"
                      className="mb-2 block font-medium text-gray-700"
                    >
                      Business stage *
                    </label>
                    <select
                      id="consultation-stage"
                      name="business_stage"
                      required
                      defaultValue=""
                      className={inputClassName}
                    >
                      <option value="" disabled>
                        Select your business stage
                      </option>
                      <option value="Idea Stage">Idea Stage</option>
                      <option value="Startup">Startup</option>
                      <option value="Growing Business">Growing Business</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="consultation-date"
                      className="mb-2 block font-medium text-gray-700"
                    >
                      Preferred consultation date *
                    </label>
                    <input
                      id="consultation-date"
                      name="preferred_date"
                      type="date"
                      min={getLocalDateString()}
                      required
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="consultation-time"
                      className="mb-2 block font-medium text-gray-700"
                    >
                      Preferred time *
                    </label>
                    <input
                      id="consultation-time"
                      name="preferred_time"
                      type="time"
                      required
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="consultation-help"
                    className="mb-2 block font-medium text-gray-700"
                  >
                    What do you need help with? *
                  </label>
                  <textarea
                    id="consultation-help"
                    name="help_needed"
                    rows={5}
                    required
                    maxLength={3000}
                    className={inputClassName}
                    placeholder="Share the business questions or challenges you'd like to discuss."
                  />
                </div>

                <p className="rounded-lg border border-purple-100 bg-purple-50 px-4 py-3 text-sm leading-6 text-purple-950">
                  Your preferred date and time are a request, not a confirmed
                  booking. Summit Valor will contact you about availability and
                  payment instructions. No payment is collected through this
                  form.
                </p>

                {error && (
                  <p
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#4C1D95] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6] disabled:cursor-not-allowed disabled:opacity-70 motion-reduce:transform-none sm:w-auto"
                >
                  {loading && (
                    <motion.span
                      animate={reduceMotion ? undefined : { rotate: 360 }}
                      transition={{
                        duration: 0.9,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                      aria-hidden="true"
                    >
                      <FiLoader />
                    </motion.span>
                  )}
                  {loading ? "Sending request..." : "Request Consultation"}
                </button>
              </form>
            )}
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
