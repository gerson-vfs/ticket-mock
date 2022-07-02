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

// http://localhost:3000/connect/authorize?response_type=code&client_id=c036da03a5c34c1b9d2b1694dd38f29b&scope=openid edg-xp-mealdelivery-api offline_access&redirect_uri=https://siteapi.shoppertest.com.br/wallet/ticket/add-card-callback&state=abc123&nonce=456azerty&acr_values=tenant:br-ben&ui_locales=pt


// TODO: Retornar objeto de sucesso ao adicionar cartão da Ticket

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
