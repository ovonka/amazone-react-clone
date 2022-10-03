const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Lbmi7AFaspdMw48BkEobGnCfjQnb6lPXNUMkHqYMO4XaoGff8dHursM0msXq0YZ301PezwPnjvxXcQny7BXUWdG00Dh6US9nQ"
);

const app = express();
//MIDDLEWARE

app.use(cors({ origin: true }));

app.use(express.json());

//API ROUTE

app.get("/", (req, res) => res.status(200).send("HELLO WORLD"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //if created okay
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

//LISTEN COMMAND

exports.api = functions.https.onRequest(app);
