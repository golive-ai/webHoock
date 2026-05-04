export default function handler(req, res) {
  // Exibe no log da Vercel o que chegou
  console.log("--- NOVO WEBHOOK RECEBIDO ---");
  console.log("Headers:", req.headers);
  console.log("Corpo da mensagem:", req.body);

  // Responde com OK
  res.status(200).json({ status: 'recebido' });
}