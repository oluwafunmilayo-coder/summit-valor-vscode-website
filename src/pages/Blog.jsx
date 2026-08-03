import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { featuredArticle, articles } from "../data/resourcesData";

const blogPosts = [
  featuredArticle,
  ...articles,
  {
    title: "The SOP Starter Kit: 8 Templates for the Processes Every Growing Business Repeats",
    desc: "Download 8 ready-to-use SOP templates for the processes every growing business repeats — onboarding, email, quality control, client updates and more.",
    date: "June 2026",
    author: "Summit Valor",
    slug: "sop-starter-kit",
    image: "/resources/SOP_Starter_Kit_Cover.jpg",
    pdf: "https://652fdc15.sibforms.com/v2/serve/MUIFABz_9PyuuUoM5AmJGbJOlS8zxdaVcjWrKPvYEtsqtGtWV620QojiC3vDkZqD5oEnuKoxJtLPeegNj11oKMSVNE-1fALfCuNNfHBuu3XG1ZhJFGod2820U79ipC3Bz4M9WEMh1p1bP3-g9sPn5-yElfXcx7vvEkLwF98hgTP9dS5qP2jdVvc0H8sbDr-s7FmdpBZinU1ZCpmqNA==",
  },
];

const Blog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="mt-24">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-purple-700">From the Blog</p>
        <h2 className="mt-5 text-4xl font-bold text-gray-900">Insights on building better operations.</h2>
      </div>

      <motion.div
        whileHover={{ y: -6 }}
        className="mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
      >
        <div className="grid md:grid-cols-2">
          <img src={featured.image} alt={featured.title} className="h-64 w-full object-cover md:h-full" />
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-500">{featured.date}</p>
            <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">{featured.title}</h3>
            <p className="mt-4 leading-7 text-gray-600">{featured.desc}</p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                {featured.author.charAt(0)}
              </div>
              <span className="font-semibold text-gray-900">{featured.author}</span>
            </div>

            <Link to={`/blog/${featured.slug}`} className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-purple-700 transition hover:gap-3">
              Read More
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {rest.map((post) => (
          <motion.div
            key={post.slug}
            whileHover={{ y: -8 }}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
          >
            <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
            <div className="p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-500">{post.date} · {post.author}</p>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{post.title}</h3>
              <p className="mt-4 leading-7 text-gray-600">{post.desc}</p>
              <Link to={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-purple-700 transition hover:gap-3">
                Read more
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
