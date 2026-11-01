import { FiStar } from "react-icons/fi";

export default function ReviewCard({ review }) {
  return (
    <article className="motion-card flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
      <div
        className="flex gap-1 text-[#5B21B6]"
        role="img"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: review.rating }, (_, index) => (
          <FiStar
            key={index}
            aria-hidden="true"
            className="h-5 w-5 fill-current"
          />
        ))}
      </div>
      <blockquote className="mt-5 flex-1 text-base leading-7 text-gray-700">
        “{review.content}”
      </blockquote>
      <div className="mt-6 flex items-center gap-4 border-t border-gray-200 pt-4">
        <img
          src={review.image}
          alt=""
          width="56"
          height="56"
          className="h-14 w-14 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-[#24212B]">{review.name}</p>
          <p className="mt-1 text-sm text-[#5B21B6]">{review.attribution}</p>
          <p className="mt-1 text-sm text-gray-500">Google review</p>
        </div>
      </div>
    </article>
  );
}
