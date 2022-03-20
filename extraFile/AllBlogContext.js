import { createContext, useEffect, useState } from "react";
import useFetchDB from './useFetchDB';

export const AllBlogContext = createContext();

const AllBlogContextProvider = (props) => {

    const [allBlogPost, setAllBlogPost] = useState([]);
    const { allBlog } = useFetchDB('blogList');

    useEffect(() => {
        setAllBlogPost(allBlog);
    }, []);

    return (
        <AllBlogContext.Provider value={{ allBlogPost }}>

            {props.children}

        </AllBlogContext.Provider>
    );
};

export default AllBlogContextProvider;