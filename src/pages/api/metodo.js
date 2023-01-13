export default function metodo(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      nome: "Neander",
    });
  } else {
    res.status(200).json({
      nome: "John Doe",
    });
  }
}
