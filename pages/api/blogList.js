import * as fs from 'fs';

export default async function handler(req, res) {

    let data = await fs.promises.readdir('blogJsonDB');

    let blog;
    let allBlog = [];

    for (let i = 0; i < data.length; i++) {
        const singlePost = data[i];
        blog = await fs.promises.readFile(('blogJsonDB/' + singlePost), 'utf-8');
        allBlog.push(JSON.parse(blog));
    }

    res.status(200).json(allBlog);
}
