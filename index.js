import express from 'express'

import products from "./products.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded( { extended: false } ))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  res.json(products.find(product => req.params.id == product.id))
})

app.post('/products/', (req, res) => {
  products.push(req.body)
  res.send(req.body)
})

app.put('/products/', (req, res) => {

  let product = products.find(product => req.body.id == product.id)
  product.name = req.body.name
  res.send(req.body)
})

app.delete('/products/:id', (req, res) => {
  let product = products.find(product => req.params.id == product.id)
  products.splice(products.indexOf(product), 1)
  res.send(product)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})