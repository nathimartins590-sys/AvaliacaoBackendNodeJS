import express from 'express'
import temperatura from './repository/temperatura.js'
import temperatura2 from './repository/temperatura2.js'
import temperatura3 from './repository/temperatura3.js'
import temperatura4 from './repository/temperatura4.js'
import temperatura5 from './repository/temperatura5.js'

const app = express()

app.use(express.json())

app.use('/api/v1/celciusF', temperatura)
app.use('/api/v1/fahrenheitC', temperatura2)
app.use('/api/v1/celciusK', temperatura3)
app.use('/api/v1/kelvinC', temperatura3)
app.use('/api/v1/celciusRe', temperatura4)
app.use('/api/v1/celciusRa', temperatura5)

app.listen(3000, () => {
    console.log("O servidor esta funcionando 3000")
});