import { useState } from "react";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
import Link from 'next/link';
import Head from 'next/head';;
import * as fs from 'fs';


const Post = ({ post }) => {

    // const router = useRouter();
    // const { slug } = router.query;

    const [blogPost, setBlogPost] = useState(post);

    // useEffect(() => {

    //     if (!router.isReady) return;

    //     const url = `http://localhost:3000/api/getBlog?slug=${slug}`;

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setBlogPost(data))
    //         .catch(err => console.log("Error Reading data " + err));

    // }, [router.isReady])


    return (
        <article className="mt-14 p-8">
            <Head>
                <title>{blogPost && blogPost.title}</title>
            </Head>

            <div className="p-4 shadow-md rounded">
                <h2 className="text-2xl mb-1.5">
                    {blogPost && blogPost.title}
                </h2>

                <p className="text-xl text-gray-600 mb-2">
                    {blogPost && blogPost.article}
                </p>
                <Link href="./../">
                    <a> ⬅ Home </a>
                </Link>
            </div>
        </article>
    )
}

/*
SSR ==> Server Side Rendering...
export async function getServerSideProps(context) {

    const { slug } = context.query;
    const url = `http://localhost:3000/api/getBlog?slug=${slug}`;

    const request = await fetch(url);
    const post = await request.json();

    return {
        props: { post }
    }

}
*/





// SSG ==> Static Site Generation...
export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-install-tailwindcss-in-react' } },
            { params: { slug: 'next-js-image-components' } },
            { params: { slug: 'react-router-v6' } },
        ],
        fallback: true
    }
}


// SSG ==> Static Site Generation...
export async function getStaticProps(context) {

    const { slug } = context.params;

    let post = await fs.promises.readFile(`blogJsonDB/${slug}.json`, "utf-8");

    return {
        props: { post: JSON.parse(post) }
    }

}


export default Post;