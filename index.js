import express from 'express'
import cors from 'cors'
import usersRoutes from './routes/usersRoutes.js'
import productsRoutes from './routes/productsRoutes.js'
import cartRoutes from './routes/cartRoutes.js'


let port = process.env.PORT || 5005

const app = express()
app.use(express.json())
app.use(cors({origin:'http://localhost:8080', credentials:true}))
app.use('/users', usersRoutes)
app.use('/products', productsRoutes)
app.use('/cart', cartRoutes)

app.use(express.static('public'))


app.listen(port, ()=>{
    console.log('http://localhost:' + port)
})