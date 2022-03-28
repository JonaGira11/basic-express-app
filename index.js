const express = require("express");
const app = express()

app.get('/greet', (req, res ) => {
    res.send('hey there')
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks');
    res.cookie('name', 'shrimp')
    res.send('sent you a cookie')
})

app.listen(3000, () => {
    console.log('listening on port f3000')
})
