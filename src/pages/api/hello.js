// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json([
      { name: "John Doe 1" },
      { name: "John Doe 2" },
      { name: "John Doe 3" },
      { name: "John Doe 4" },
    ]);
}
