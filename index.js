import express from 'express'
import temperaturas from './router/temperaturas.js'

const app = express()

app.use(express.json())

app.use("/api/v1/celciusF" , temperaturas)
app.use("/api/v1/fahrenheitC" , temperaturas)
app.use("/api/v1/celciusK" , temperaturas)
app.use("/api/v1/kelvinC" , temperaturas)
app.use("/api/v1/celciusRe" , temperaturas)
app.use("/api/v1/celciusRa" , temperaturas)

app.listen(3000, () => {
    console.log("O servidor esta funcionando 3000")
});