import express from "express";

const PORT = 5000;
const app = express();

app.get('/', (req, res) => {
    res.send( "Welcome to the Subscriber Tracker API!")
})

app.listen(PORT, () => {
    console.log(`Subscription Tracker API running on http://localhost:${PORT}`)
});