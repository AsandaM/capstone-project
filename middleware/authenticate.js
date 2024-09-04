import { compare } from "bcrypt"
import { loginDb } from "../model/usersDb.js"
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()


const emailCheck = async(req, res, next)=>{
    const {emailAdd} = req.body
    // console.log(req.body);
    
    let user = await loginDb(emailAdd)
    if(user){
        next()
        return
    }
    res.send('Email not found')
}


const checkUser = async(req, res, next)=>{
    const {emailAdd, userPass} = req.body
    let userInfo =await loginDb(emailAdd)
    let hashedPassword = userInfo.userPass
    let userRole = userInfo.userRole
    let userID = userInfo.userID
   
    compare(userPass, hashedPassword, (err, result)=>{
        if(result == true){
            let token = jwt.sign({emailAdd:emailAdd,userRole:userRole,userID:userID}, process.env.SECRET_KEY, {expiresIn: '1h'})
            req.body.token = token
            next()
            return
        }
        res.send('Password incorrect')

    })

}

const verifyAToken = (req, res, next)=>{
    let {cookie} = req.headers
    //checks if the token exits first
    let token = cookie && cookie.split('=')[1]
    console.log(token);
    
    // console.log(token.split(';')[0])
    let token1 = token.split(';')[0]


    jwt.verify(token1, process.env.SECRET_KEY, (err, decoded)=>{
        // console.log(token);
        
        if(err){
            res.json({message: 'Token is invalid'})
            return
        }
        // req.body.username = decoded.username
        // req.body = decoded.username
        req.body.userID = decoded.userID
        console.log(decoded);
        
        req.user = decoded.emailAdd
        console.log(req.user);
        next()       
    })
}

export {checkUser, emailCheck, verifyAToken}