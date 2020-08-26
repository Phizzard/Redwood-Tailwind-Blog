import BlogPostCard from 'src/components/BlogPostCard'

const BlogPost = ({ post }) => {
  return (
    <BlogPostCard
      key={post.id}
      title={post.title}
      date={post.createdAt}
      body={post.body}
    />
  )
}

export default BlogPost
