import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${req.query.username}`);
  const data = await response.json();
  res.status(response.status).json(data);
}
