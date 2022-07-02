import express from "express";
import crypto from "crypto";

const app = express();

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

// app.post()

app.listen(3999, () => {
  console.log("Server is running on port 3999");
});
