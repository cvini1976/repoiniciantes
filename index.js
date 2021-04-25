const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Ola meu mundo cruel esse é meu rep clonado..."
    })
})

app.listen(4001, () => {
    console.log("----Essa API está sendo executada na porta 4001----")
})