export interface Post {
  date: string
  title: string
  tags: string[]
  description: string
  color: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  details: Record<string, string>
}
