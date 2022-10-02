import Image from "next/image"
import { Header } from "@/components"
import { posts } from "@/cms"
import { InferGetStaticPropsType } from "next"

interface HomePageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function Home({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 pb-24 lg:px-8">
        {posts.map((post, index) => {
          return (
            <div
              key={post.title}
              className={`flex min-h-screen flex-col items-center pt-24 sm:py-24 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div
                className={`relative w-full ${
                  index % 2 === 0 && "sm:mr-6 lg:mr-16"
                }`}
              >
                <Image
                  src={post.image.src}
                  width={post.image.width}
                  height={post.image.height}
                  layout="responsive"
                  alt={post.image.alt}
                  priority={index === 0}
                />
                <div className="absolute top-0 left-0 flex h-full w-full flex-col space-y-4 bg-[#0F0F0F]/80 p-2 text-sm opacity-0 transition-opacity hover:opacity-100 lg:p-6 lg:text-base">
                  {Object.entries(post.details).map(([key, value]) => (
                    <div key={key} className="flex flex-row space-x-3">
                      <span className={`font-bold capitalize ${post.color}`}>
                        {key}
                      </span>
                      <span>{value} </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div
                className={`mt-6 w-full sm:mt-0 ${
                  index % 2 !== 0 && "sm:mr-6 lg:mr-16"
                }`}
              >
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
          )
        })}
      </div>
      <footer className="mx-auto max-w-screen-xl px-4 lg:px-8">
        <div className="border-t border-neutral-600 py-6 text-center text-sm text-[#A4A4A4]">
          Made by{" "}
          <a
            href="https://rfsan.co/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Rafael Sanabria
          </a>
        </div>
      </footer>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      posts,
    },
  }
}
