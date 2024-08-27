import express from 'express'
import cors from 'cors'
// import usersRoutes from './routes/usersRoutes.js'
// import productsRoutes from './routes/productsRoutes.js'


let port = process.env.PORT || 5005

const app = express()
app.use(express.json())
app.use(cors({origin:'*', credentials:true}))
// app.use('/users', usersRoutes)
// app.use('/products', productsRoutes)

app.use(express.static('public'))


app.listen(port, ()=>{
    console.log('http://localhost:' + port)
})