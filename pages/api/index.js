import * as fs from 'fs';

export default function handler(req, res) {

  fs.readdir("blogJsonDB", (err, data) => {

    res.status(200).json(data);

  })
}
