import Image from "next/image";
import { Header } from "@/components";

export default function Home() {
  const cms = [
    // {
    //   date: "Tuesday, August 16, 2022",
    //   title: "Mocho",
    //   tags: "Juan, Entrepreneurship",
    //   description:
    //     "I decided to leave the project I've been working on for the last 8 months to focus on offering web development services as a freelancer. Juan made me realize that we were building a solution to a problem that neither we nor anyone close to us has.",
    //   color: "text-[#FCE72D]",
    //   image: {
    //     src: "/images/mocho.png",
    //     alt: "A sad flower because the sun is setting",
    //     width: 1024,
    //     height: 1024,
    //   },
    //   creation: {
    //     model: "DALL-E 2",
    //     prompt:
    //       "A cute baby snake opening a new shoe store, the snake is happy and has a smile in his face, the background has a lot of sneakers, high detail, 3D digital art",
    //     generations: "5",
    //     cost: "$0.65 USD",
    //   },
    // },
    // {
    //   date: "Tuesday, August 16, 2022",
    //   title: "Mocho",
    //   tags: "Juan, Entrepreneurship",
    //   description:
    //     "I decided to leave the project I've been working on for the last 8 months to focus on offering web development services as a freelancer. Juan made me realize that we were building a solution to a problem that neither we nor anyone close to us has.",
    //   color: "text-[#FCE72D]",
    //   image: {
    //     src: "/images/juan-gabriel.png",
    //     alt: "A sad flower because the sun is setting",
    //     width: 1024,
    //     height: 1024,
    //   },
    //   creation: {
    //     model: "DALL-E 2",
    //     prompt:
    //       "A cute baby snake opening a new shoe store, the snake is happy and has a smile in his face, the background has a lot of sneakers, high detail, 3D digital art",
    //     generations: "5",
    //     cost: "$0.65 USD",
    //   },
    // },
    {
      date: "Saturday, August 20, 2022",
      title: "Getting what you want is hard",
      tags: "Paula, DALL-E",
      description:
        "I bought my first DALL-E credits and invited Paula to create some images. Getting exactly what we were thinking of was difficult, especially because of the face filter.",
      color: "text-[#F9A983]",
      image: {
        src: "/images/space-cat.png",
        alt: "A cat in the space, digital art",
        width: 1024,
        height: 1024,
      },
      creation: {
        model: "DALL-E 2",
        prompt:
          'Variation of "A cute cat with headphones riding a gummy bear in the space with a shooting star in the background, digital art, high detail"',
        generations: "16",
        cost: "$2.08 USD",
      },
    },
    {
      date: "Tuesday, August 16, 2022",
      title: "Focus",
      tags: "Juan, Entrepreneurship",
      description:
        "I decided to leave the project I've been working on for the last 8 months to focus on offering web development services as a freelancer. Juan made me realize that we were building a solution to a problem that neither we nor anyone close to us has.",
      color: "text-[#FFC86B]",
      image: {
        src: "/images/bye-trazo.png",
        alt: "A sad flower because the sun is setting",
        width: 1024,
        height: 1024,
      },
      creation: {
        model: "DALL-E 2",
        prompt:
          "A cute baby snake opening a new shoe store, the snake is happy and has a smile in his face, the background has a lot of sneakers, high detail, 3D digital art",
        generations: "5",
        cost: "$0.65 USD",
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
      creation: {
        model: "DALL-E 2",
        prompt:
          "Soviet propaganda featuring a woman and a man kissing, while a businessman yells on television",
        generations: "10",
        cost: "$1.30 USD",
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
                  priority={index === 0}
                />
                <div className="absolute top-0 left-0 flex h-full w-full flex-col gap-y-4 bg-[#0F0F0F]/80 p-2 text-sm opacity-0 hover:opacity-100 lg:p-6 lg:text-base">
                  {Object.entries(post.creation).map(([key, value]) => (
                    <div key={key} className="flex flex-row gap-x-3">
                      <span className={`font-bold capitalize ${post.color}`}>
                        {key}
                      </span>
                      <span>{value} </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div className="mt-6 w-full sm:mt-0">
                <span className="block text-sm font-semibold uppercase text-[#DADADA] lg:text-base">
                  {post.date}
                </span>
                <h2
                  className={`mt-4 block font-serif text-3xl font-bold sm:mt-6 lg:mt-7 lg:text-5xl lg:leading-tight ${post.color}`}
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
