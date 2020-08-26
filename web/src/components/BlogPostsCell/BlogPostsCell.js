import BlogPostCard from 'src/components/BlogPostCard'
import { Button } from 'src/components/Button'
import { routes } from '@redwoodjs/router'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
      {posts.map((post) => (
        <BlogPostCard key={post.id} title={post.title} date={post.createdAt}>
          <Button to={routes.blogPost({ id: post.id })}>View Post</Button>
        </BlogPostCard>
      ))}
    </div>
  )
}
