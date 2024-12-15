app.get('/cart/:id(\\d+)', (req, res) => {
    const { id } = req.params;
    res.send(`Payment methods for cart ${id}`);
});
