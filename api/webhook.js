export default function handler(req, res) {
  // 1. Logar o que está chegando para você ver nos Logs da Vercel
  console.log("Recebi uma chamada do RD Station!");
  console.log("Método:", req.method);
  console.log("Corpo:", req.body);

  // 2. O PULO DO GATO: Responder sempre 200 OK para o RD não travar
  // Não importa o que venha, nós dizemos que recebemos.
  return res.status(200).json({ status: "recebido" });
}