import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiLoader } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { consultationOptions } from "../data/consultations";

const bookingUrl =
  "https://calendar.zoho.com/zc/view/slot-booking/0801123cc907696a26b97f2861fbe2480000256cc47d898c78c0b6791873ba76c7522b60168515bd934faeb14ad2d05f6d60561986413cee07700de8290dfc8e";

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
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  if (!consultation) {
    return <Navigate to="/services#consultation-options" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "consultation",
          ...Object.fromEntries(new FormData(event.currentTarget).entries()),
        }),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(data.message || "");
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
              Consultation booking
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
              Request your consultation
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Share a few details about your business, then choose an available
              appointment time through Zoho Calendar.
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
                className="px-6 py-8 sm:px-10 sm:py-10"
              >
                <h2 className="text-2xl font-semibold">
                  Your consultation details are received
                </h2>
                <p className="mt-3 leading-7 text-gray-600">
                  {successMessage ||
                    "Choose an available appointment time below. Your selected consultation package has been sent to our team."}
                </p>
                <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <iframe
                    src={bookingUrl}
                    title="Choose a consultation time with Summit Valor"
                    className="h-[850px] w-full border-0 sm:h-[900px]"
                    loading="lazy"
                    allow="clipboard-read; clipboard-write"
                  />
                </div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#5B21B6] px-6 py-3 font-semibold text-[#5B21B6] transition-colors hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                >
                  Open booking page in a new tab
                  <FiExternalLink aria-hidden="true" />
                </a>
                <p className="mt-5 rounded-lg border border-purple-100 bg-purple-50 px-4 py-3 text-sm leading-6 text-purple-950">
                  Your appointment is booked after Zoho confirms the selected
                  time. Payment is not collected on this page; we&apos;ll
                  confirm payment separately once Paystack is set up.
                </p>
                <Link
                  to="/"
                  className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
                >
                  Return to home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
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
                  This form records your selected package and business details.
                  You&apos;ll choose an available time with Zoho Calendar next.
                  No payment is collected through this form.
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
