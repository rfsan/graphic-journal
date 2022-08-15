import Image from "next/image";
import { Header } from "@/components";

export default function Home() {
  const cms = [
    {
      date: "Sunday, August 14, 2022",
      title: "Flowers",
      tags: "Little things",
      description:
        "Lately I have started buying flowers for Paula and for the house. My favorite moment is when they open the day after they have been put in water.",
      color: "text-[#75c448]",
      image: {
        src: "/images/flower.png",
        alt: "A sad flower because the sun is setting",
        width: 1024,
        height: 1024,
      },
    },
    {
      date: "Friday, August 12, 2022",
      title: '"Fuck off" and kiss me',
      tags: "Paula, Succession",
      description:
        "Paula came up with a game while we were watching Succession. Every time Logan says “Fuck Off” we have to kiss.",
      color: "text-[#FF7777]",
      image: {
        src: "/images/fuckoff.png",
        alt: "A couple kissing while watching Succession.",
        width: 1024,
        height: 1024,
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 pb-24 lg:px-8">
        {cms.map((post, index) => {
          return (
            <div
              key={post.title}
              className={`flex min-h-screen flex-col items-center pt-24 sm:gap-5 sm:py-24 lg:gap-16 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="relative w-full">
                <Image
                  src={post.image.src}
                  width={1024}
                  height={1024}
                  layout="responsive"
                  alt="DALL-E Image"
                />
                {/* <span className="mt-1 text-right text-sm italic text-[#A4A4A4]">
                  click image for details
                </span> */}
              </div>
              {/* Content */}
              <div className="mt-6 w-full sm:mt-0">
                <span className="block text-sm font-semibold uppercase text-[#DADADA] lg:text-base">
                  {post.date}
                </span>
                <h2
                  className={`mt-4 block font-serif text-3xl font-bold sm:mt-6 lg:mt-7 lg:text-5xl ${post.color}`}
                >
                  {post.title}
                </h2>
                <span className="text-sm font-semibold italic text-[#DADADA] lg:text-lg">
                  {post.tags}
                </span>
                <p className="mt-6 text-lg leading-relaxed lg:mt-16 lg:text-2xl lg:leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
