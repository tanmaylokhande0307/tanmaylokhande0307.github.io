import Image from "next/image";

import FeatImage01 from "@/public/images/news.png";
import FeatImage02 from "@/public/images/telecom.png";
import FeatImage03 from "@/public/images/wipro.png";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Some Insights
            </div>
            <h1 className="h2 mb-4">Everyone is talking about this skill</h1>
            <p className="text-xl text-gray-400">
              This boom in word AI has created alot of chaos but check these
              news
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">
                    Prompt Engineering is becoming ...
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Prompt Engineering is becoming a sought-after skill, with
                    various job-searching platforms featuring listings for
                    prompt engineering roles.
                  </p>
                  <a
                    href="https://www.livemint.com/technology/ai-prompt-engineering-is-the-new-big-career-with-an-annual-salary-of-up-to-rs-2-cr-heres-how-to-learn-it-11684136403307.html"
                    className="font-architects-daughter text-xl text-purple-600 mb-2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Some companies begin ...</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Generative AI applications and tools are solutions for
                    generating original content based on training from massive
                    AI models.
                  </p>
                  <a
                    href="https://www.eweek.com/artificial-intelligence/generative-ai-apps-tools/"
                    className="font-architects-daughter text-xl text-purple-600 mb-2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Read the latest news ...</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Read the latest news about Wipro's compensation policy
                    change. Find out what Wipro CHRO Saurabh Govil has to say
                    about hiring practices and salary hikes.
                  </p>
                  <a
                    href="https://sightsinplus.com/news/compensation/wipro-chro-saurabh-govil-says-no-more-hiring-with-30-hike/"
                    className="font-architects-daughter text-xl text-purple-600 mb-2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
