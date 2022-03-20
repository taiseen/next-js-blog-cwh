import * as fs from 'fs';

// http://localhost:3000/api/getBlog?slug=react-router-v6

export default function handler(req, res) {

  fs.readFile(`blogJsonDB/${req.query.slug}.json`, "utf-8", (err, data) => {

    if (err) {
      res.status(500).json({ error: "Post Not Find..." });
    } else {
      res.status(200).json(JSON.parse(data));
    }

  })
}
