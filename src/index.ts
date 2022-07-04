import express from "express";
import crypto from "crypto";
import { generateMockedAuthentication, generateRefundResponse, generateTransactResponse } from "./utils";

const app = express();
app.use(express.json())
app.get("/connect/authorize", (req, res) => {
  const { redirect_uri, state } = req.query as {
    [key: string]: string;
  };

  if (redirect_uri) {
    const code = crypto.randomUUID().replace(/-/g, "");
    const redirect = `${redirect_uri}?state=${state}&code=${code}`;
    res.redirect(redirect);
  } else {
    res.sendStatus(400);
  }
});

// TODO: Retornar objeto de sucesso ao adicionar cartão da Ticket
app.post('/transactions/:authorizationId/actions/refund', (req, res) => {
  console.log('refunding...')
  res.json(generateRefundResponse(req.body.amount))
})

app.post('/transactions', (req, res) => {
  console.log('transacting')

  res.json(generateTransactResponse(req.body.amount))
})

// TODO: Rota de refund
app.get('/connect/endsession', (_req, res) => {
  console.log('ending session')
  return res.sendStatus(200)
})

// ROTA DE CONEXÃO TICKET
app.post('/connect/token', (req, res) => {
  console.log('Connecting Token......')
  res.json(generateMockedAuthentication())
})

// app.post()

app.listen(3999, () => {
  console.log("Server is running on port 3999");
});
