import { compare } from "bcrypt"
import { loginDb } from "../model/usersDb.js"
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()


const emailCheck = async(req, res, next)=>{
    const {emailAdd} = req.body
    
    let user = await loginDb(emailAdd)
    if(user){
        next()
        return
    }
    res.send({err:'Incorrect email'})
}


const checkUser = async(req, res, next)=>{
    const {emailAdd, userPass} = req.body
    let userInfo =await loginDb(emailAdd)
    let hashedPassword = userInfo.userPass
    let userRole = userInfo.userRole
    let userID = userInfo.userID
   
    compare(userPass, hashedPassword, (err, result)=>{
        if(result == true){
            let token = jwt.sign({emailAdd:emailAdd,userRole:userRole,userID:userID}, process.env.SECRET_KEY, {expiresIn: '3h'})
            req.body.token = token
            next()
            return 
        }
        res.send({err:'Password incorrect'})

    })

}

const verifyAToken = (req, res, next)=>{
    let {cookie} = req.headers
    console.log(cookie);
    console.log(req.headers);
    

    // Check if cookie exists
    if (!cookie) {
        return res.json({ err: 'No token provided' });
    }

    //checks if the token exits first
    let token = cookie && cookie.split('=')[1]
    let token1 = token.split(';')[0]

    jwt.verify(token1, process.env.SECRET_KEY, (err, decoded)=>{
      
        if(err){
            res.json({err: 'Token has expired, please logout and login again'})
            return
        }
        
        req.body.userID = decoded.userID
        req.user = decoded.emailAdd
        
        next()       
    })
}

export {checkUser, emailCheck, verifyAToken}