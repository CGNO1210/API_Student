const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const data = []

    for (let i = 0; i < 10; i++) {
        let item = {
            id: 0,
            name: "",
            dtb: 0,
        }
        item.id = i
        item.name = `SV${i}`
        item.dtb = Math.floor(Math.random() * 10);
        data[i] = item
    }
    return res.status(200).json(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})