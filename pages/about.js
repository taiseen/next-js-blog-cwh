import Head from 'next/head';
// import Image from 'next/image';

const about = () => {
  return (
    <section className="mt-14">
      <Head>
        <title>About</title>
      </Head>
      
      <div className="my-16 flex justify-center flex-wrap md:justify-between  px-4">
        
        <div className="p-2 m-2 rounded">
          {/* <Image src="/me.jpg" alt="" width={350} height={350} className="rounded"/> */}
          
          <img src="/me.jpg" alt="" width={350} height={350} className="rounded"/>
        </div>

        <div className="w-[500px] flex-grow p-2 m-2">
          <h2 className="text-2xl mb-2">Hello</h2>
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor nesciunt autem mollitia atque ipsam consequuntur, ab pariatur iusto laudantium. Eligendi vel molestias tempora nihil.</p>
          <br />
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quibusdam illo earum quae! Amet rem id reiciendis quisquam! Illum, blanditiis doloribus ducimus veniam natus sequi quo officia obcaecati pariatur! Omnis dicta sequi quasi velit excepturi.</p>
        </div>
      </div>
    </section>
  )
}

export default about