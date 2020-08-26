export const BlogPostCard = ({
  title,
  date,
  body,
  children,
  className = '',
}) => {
  return (
    <article className={`rounded overflow-hidden shadow-lg ${className}`}>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
        <div>Posted at: {date}</div>
        {body && <p className="text-gray-700 text-base">{body}</p>}
      </div>
      <div className="px-6 pt-4 pb-2">{children}</div>
    </article>
  )
}

export default BlogPostCard
