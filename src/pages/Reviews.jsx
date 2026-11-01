import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";
import {
  googleReviewsUrl,
  googleWriteReviewUrl,
  reviews,
} from "../data/reviews";

export default function Reviews() {
  return (
    <div className="bg-white text-[#24212B]">
      <Navbar />
      <main className="pt-28 sm:pt-32">
        <section className="bg-[#F5F5F7] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B21B6]">
              Client reviews
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Genuine feedback from people we’ve worked with.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              These reviews were shared on Summit Valor’s Google Business
              Profile. You can read the original reviews on Google.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-5 md:grid-cols-2">
              {reviews.map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
              >
                Read more reviews on Google{" "}
                <FiExternalLink aria-hidden="true" />
              </a>
              <a
                href={googleWriteReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#5B21B6] px-6 py-3 font-semibold text-[#5B21B6] transition-colors hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
              >
                Leave a Google review <FiExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-14 sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Have a business challenge to discuss?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                Get in touch to talk through your goals and possible next steps.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4C1D95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]"
            >
              Contact Summit Valor <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
