import Head from 'next/head';
import { useState } from 'react';

const Contact = () => {

  const [user, setUser] = useState({
    name: '', phone: '', email: '', desc: ''
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  }

  return (
    <section className="mt-14">
      <Head>
        <title>Contact</title>
      </Head>

      <div className="mx-4 md:w-1/2 md:mx-auto mt-24 p-4  bg-gray-200 rounded shadow">

        <h2 className="text-2xl text-center pb-3">Contact with us...</h2>

        <form action="" className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" id="name" name="name"
            value={user.name} onChange={handleChange}
            className="w-full py-2 px-3 rounded outline-gray-500" />

          <input type="phone" placeholder="Phone" id="phone" name="phone"
            value={user.phone} onChange={handleChange}
            className="w-full py-2 px-3 rounded outline-gray-500" />

          <input type="email" placeholder="Email" id="email" name="email"
            value={user.email} onChange={handleChange}
            className="w-full py-2 px-3 rounded outline-gray-500" />

          <textarea type="text" placeholder="Comment" id="desc" name="desc"
            value={user.decs} onChange={handleChange}
            className="w-full py-2 px-3 rounded outline-gray-500 resize-none h-32" />

          <div className="text-right">
            <button className="py-2 px-4 bg-blue-500 rounded shadow hover:bg-blue-600 hover:text-white duration-300">Submit</button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default Contact