export interface Post {
  date: string
  title: string
  tags: string[]
  description: string
  color: string
  image: {
    src: string
    alt: string
  }
  details: Record<string, string>
}

export const posts: Post[] = [
  {
    date: "Tuesday, September 6, 2022",
    title: "Very happy with Stable Diffusion",
    tags: ["Stable Diffusion"],
    description:
      "Until yesterday I was using DreamStudio (paid option), but finally I set up the colab notebook and now I can generate images for free!",
    color: "text-[#DAC4A3]",
    image: {
      src: "/images/galaxy.png",
      alt: "A man drifting away in the abyss of a spiral galaxy.",
    },
    details: {
      model: "Stable Diffusion",
      prompt:
        "Cinematic portrait of a man drifting away in the abyss of a spiral galaxy, oil on canvas, masterpiece, trending on artstation, featured on pixiv, cinematic composition, dramatic pose, beautiful lighting, sharp details, hyper-detailed, hd, hdr, 4k, 8k, art by tim hildebrandt and wayne barlowe and bruce pennington and ruan jia and larry elmore",
      cost: "$0 USD",
    },
  },
  {
    date: "Monday, August 29, 2022",
    title: "Mocho",
    tags: [],
    description:
      "My first and only plant died today. I still don't know if I watered it too much or too little.",
    color: "text-[#B8D1DF]",
    image: {
      src: "/images/mocho.png",
      alt: "A post-apocalyptic warrior bonsai.",
    },
    details: {
      model: "Stable Diffusion",
      prompt:
        "A detailed portrait of a post - apocalyptic warrior bonsai, by justin gerard and greg rutkowski, digital art, realistic painting, dnd, character design, trending on artstation",
      cost: "$0 USD",
    },
  },
  {
    date: "Saturday, August 20, 2022",
    title: "Getting what you want is hard",
    tags: ["Paula", "DALL-E"],
    description:
      "I bought my first DALL-E credits and invited Paula to create some images. Getting exactly what we were thinking was difficult, especially because of the face filter.",
    color: "text-[#F9A983]",
    image: {
      src: "/images/space-cat.png",
      alt: "A cat in the space, digital art",
    },
    details: {
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
    tags: ["Juan", "Entrepreneurship"],
    description:
      "I decided to leave the project I've been working on for the last 8 months to focus on offering web development services as a freelancer. Juan made me realize that we were building a solution to a problem that neither we nor anyone close to us has.",
    color: "text-[#FFC86B]",
    image: {
      src: "/images/snake.png",
      alt: "A cute baby snake in a show store, 3d render, digital art.",
    },
    details: {
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
    tags: ["Paula", "Succession"],
    description:
      "Paula came up with a game while we were watching Succession. Every time Logan says “Fuck Off” we have to kiss.",
    color: "text-[#FF7777]",
    image: {
      src: "/images/fuckoff.png",
      alt: "A couple kissing while watching Succession.",
    },
    details: {
      model: "DALL-E 2",
      prompt:
        "Soviet propaganda featuring a woman and a man kissing, while a businessman yells on television",
      generations: "10",
      cost: "$1.30 USD",
    },
  },
]