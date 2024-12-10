import {
  siX,
  siThreads,
  siInstagram,
  siGithub,
  siLinkedin,
  // siRss,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

// import Link from "next/link";

function SocialIcon({
  icon,
  href,
  hoverColor,
}: {
  icon: SimpleIcon;
  href: string;
  hoverColor: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-600 hover:text-${hoverColor} transition-colors p-6 bg-white rounded-full shadow-lg transform hover:scale-110`}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        fill="currentColor"
      >
        <path d={icon.path} />
      </svg>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-12">
      <main className="max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Yuhi Sakaguchi
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Software Engineer in Japan.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          <SocialIcon
            icon={siX}
            href="https://x.com/y_s7i"
            hoverColor="black"
          />
          <SocialIcon
            icon={siThreads}
            href="https://www.threads.net/@s7i.yuhi/"
            hoverColor="black"
          />
          <SocialIcon
            icon={siInstagram}
            href="https://www.instagram.com/s7i.yuhi/"
            hoverColor="pink-500"
          />
          <SocialIcon
            icon={siGithub}
            href="https://github.com/ys7i/"
            hoverColor="gray-800"
          />
          <SocialIcon
            icon={siLinkedin}
            href="https://www.linkedin.com/in/yuhi-sakaguchi-ab5b89238/"
            hoverColor="blue-600"
          />
          {/* <Link
            href="/blog"
            className="text-gray-600 hover:text-orange-500 transition-colors p-6 bg-white rounded-full shadow-lg transform hover:scale-110"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
              fill="currentColor"
            >
              <path d={siRss.path} />
            </svg>
          </Link> */}
        </div>
      </main>
    </div>
  );
}
