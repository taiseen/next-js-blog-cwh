import * as fs from 'fs';

export default async function handler(req, res) {

    if (req.method === 'POST') {

        let data = await fs.promises.readdir('contactDB');
        fs.promises.writeFile(`contactDB/${data.length + 1}.json`, JSON.stringify(req.body));

        // send to user endpoint | display at console log...
        res.status(200).json("message store successfully");
        console.log("message store successfully... ... ... ... ... ... ");
        
    } else {
        res.status(200).json(["this is get request, at Contact page..."]);
    }
}