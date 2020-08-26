import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <div className="sm:text-center lg:text-left">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          A blog made with <br className="xl:hidden"></br>
          <span className="text-pink-600">Redwood JS</span>
        </h2>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          This is a simple blog built using Redwood JS and styled with
          TailwindCSS. Both I think are super cool certified!
        </p>
      </div>
      <section className="mt-10">
        <BlogPostsCell />
      </section>
    </BlogLayout>
  )
}

export default HomePage
