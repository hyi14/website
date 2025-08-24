import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
          <li>Point 4</li>
          <li>Point 5</li>
        </ul>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
