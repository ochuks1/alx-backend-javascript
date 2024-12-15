app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false,
        },
    });
});

app.post('/login', express.json(), (req, res) => {
    const { userName } = req.body;
    res.send(`Welcome ${userName}`);
});
