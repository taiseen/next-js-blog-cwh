import { useState, useEffect } from 'react';

const useFetchDB = (endPoint) => {

    const url = `http://localhost:3000/api/${endPoint}`;

    const [allBlog, setAllBlog] = useState([]);

    useEffect(() => {

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setAllBlog(data))
        //     .catch(err => console.log("Error Reading data " + err));

        async function getData() {
            const request = fetch(url);
            const response = await request;
            const data = await response.json();
            setAllBlog(data);
        }

        getData();

    }, [endPoint]);

    return { allBlog };
}

export default useFetchDB