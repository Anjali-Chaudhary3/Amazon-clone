/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions=require('firebase-functions');
const express=require("express");
const cors=require("cors");
const stripe=require("stripe")
('sk_test_51ODMkNSAFI3WXksRj7rz2PEcluI2ZFs2YGyIavpqMkwJHGyuW3RnxiOrQpz6fCHqDqhsvnJcTzmtjRDw2pJ7xpTp00AMMQPiMm');

//-API

//-API CONFIG

const app=express();

//-mIDDLEWARE
app.use(cors({origin:true}));
app.use(express.json());

//-API ROUTES
app.get('/',(request,response) => response.status(200).send('hello world'))

app.post('/payment/create',async (request,response)=>{
    const total=request.query.total;
    console.log("payment reques recieved! for this amount", total)
    const paymentIntent =await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});
//-LISTEN COMMAND
exports.api=functions.https.onRequest(app);

// ?example optionsToEndpoint
// http://127.0.0.1:5001/challenge-37d0d/us-central1/api



// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
