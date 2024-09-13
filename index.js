import express from 'express'
import cors from 'cors'
import usersRoutes from './routes/usersRoutes.js'
import productsRoutes from './routes/productsRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import wishlistRoutes from './routes/wishlistRoutes.js'


const app = express()
let port = process.env.PORT || 5005

app.use(cors({origin:'https://capstone-ecommerce-3d5bf.web.app/', credentials:true}))
app.use(express.json())
app.use(express.static('public'))
app.use('/users', usersRoutes)
app.use('/products', productsRoutes)
app.use('/cart', cartRoutes)
app.use('/wishlist', wishlistRoutes)


app.listen(port, ()=>{
    console.log('http://localhost:' + port)
})