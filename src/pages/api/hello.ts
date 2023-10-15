// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch("https://api.myip.com/", {
    method: "GET",
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result) => res.status(200).json(result))
    .catch((error) => console.log("error", error));
}
