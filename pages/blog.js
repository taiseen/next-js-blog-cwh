import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
// import useFetchDB from './useFetchDB';

const Blog = ({allBlog}) => {

  // const { allBlog } = useFetchDB('blogList');

  const [blogList, setBlogList] = useState(allBlog);

  return (
    <section className="mt-14">

      <Head>
        <title>Blog</title>
      </Head>

      <div className="w-2/3 mx-auto pt-6">
        <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
        {
          blogList.map((blog, i) => (
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

// SSR ==> Server Site Rendering...
export async function getServerSideProps(context) {

  const url = `http://localhost:3000/api/blogList`;

  const request = await fetch(url);
  const allBlog = await request.json();

  return {
    props: { allBlog }, // will be passed to the page component as props
  }
  
}

export default Blog