import Head from 'next/head';
import { useState } from 'react';

const Contact = () => {

  const [user, setUser] = useState({
    name: '', phone: '', email: '', desc: ''
  })

  // collect all input values from user input fields...
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const clearAll = () => {
    setUser({ name: '', phone: '', email: '', desc: '' });
  }

  const isNullUndefEmptyStr = Object.values(user).every(value => {
    // 👇️ check for multiple conditions
    if (value === null || value === undefined || value === '') {
      return true;
    }
    return false;
  });

  // send data to server or backend 
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    clearAll();
    console.log(user);

    if (isNullUndefEmptyStr) {
      alert('Please provide all info...')
    } else {
      // send data to server at this api endpoint... 
      const url = 'http://localhost:3000/api/contact';
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(response => response.text())
        .then(data => alert("Message send successfully..."))
        .catch(error => console.log(error));
    }
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
            value={user.name} onChange={handleChange} required
            className="w-full py-2 px-3 rounded outline-gray-500" />

          <input type="phone" placeholder="Phone" id="phone" name="phone"
            value={user.phone} onChange={handleChange} required
            className="w-full py-2 px-3 rounded outline-gray-500" />

          <input type="email" placeholder="Email" id="email" name="email"
            value={user.email} onChange={handleChange} required
            className="w-full py-2 px-3 rounded outline-gray-500" />

          <textarea type="text" placeholder="Comment" id="desc" name="desc"
            value={user.decs} onChange={handleChange} required
            className="w-full py-2 px-3 rounded outline-gray-500 resize-none h-32">{user.decs}</textarea>

          <div className="flex justify-between">
            <button className="py-2 px-4 bg-blue-500 rounded shadow hover:bg-red-500 hover:text-white duration-300" onClick={clearAll}>Reset</button>

            <button className="py-2 px-4 bg-blue-500 rounded shadow hover:bg-green-500 hover:text-white duration-300">Submit</button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default Contact