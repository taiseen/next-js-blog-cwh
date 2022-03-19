import Head from 'next/head';
import Link from 'next/link';
import useFetchDB from './useFetchDB';

const Blog = () => {

  const { allBlog } = useFetchDB('blogList')

  return (
    <section className="mt-14">

      <Head>
        <title>Blog</title>
      </Head>

      <div className="w-2/3 mx-auto pt-6">
        <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
        {
          allBlog.map((blog, i) => (
            <div key={i} className="mb-8">
              <Link href={`./blogPost/${blog.slug}`} passHref={true}>
                <a>
                  <h3 className="text-2xl mb-1 cursor-pointer duration-300 hover:text-red-400">
                    {blog.title}
                  </h3>
                  <p className="text-xl text-gray-600">
                    {blog.article.substr(0, 140)}
                    <span className="text-gray-400 hover:text-gray-600"> read more...</span>
                  </p>
                </a>
              </Link>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Blog