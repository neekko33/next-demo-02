import { DUMMY_NEWS } from "@/data/dummy-news"

export default function NewsDetailPage({ params }) {
  const newsItem = DUMMY_NEWS.find(news => news.slug === params.slug)
  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
    </div>
  )
}