import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        <ul>
          <li>• Independent Researcher on AI Governance</li>
          <li>• UW Cybersecurity Teaching Assistant - cultivating next generation of cybersecurity leaders</li>
          <li>iSchool Research Assistant - Creative ownership and digital remixing</li>
        </ul>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
