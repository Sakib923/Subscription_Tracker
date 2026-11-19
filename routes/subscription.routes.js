import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({ title: 'GET  all subscriptions' });
});

subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({ title: 'GET  all subscriptions of a user' });
});

subscriptionRouter.post('/', (req, res) => {
    res.send({ title: 'CREATE subscriptions' });
});

subscriptionRouter.post('/:id', (req, res) => {
    res.send({ title: 'CREATE a subscription' });
});

subscriptionRouter.put('/id', (req, res) => {
    res.send({ title: 'UPDATE subscriptions' });
});

subscriptionRouter.delete('/id', (req, res) => {
    res.send({ title: 'DELETE subscriptions' });
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({ title: 'CANCEL a subscriptions' });
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: 'GET  all upcoming renewals of subscriptions' });
});


export default subscriptionRouter;