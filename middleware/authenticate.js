import { compare } from "bcrypt"
import { loginDb } from "../model/usersDb.js"
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()


const emailCheck = async(req, res, next)=>{
    const {emailAdd} = req.body
    console.log(req.body);
    
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
   
    compare(userPass, hashedPassword, (err, result)=>{
        if(result == true){
            let token = jwt.sign({emailAdd:emailAdd,userRole:userRole}, process.env.SECRET_KEY, {expiresIn: '1h'})
            req.body.token = token
            next()
            return
        }
        res.send('Password incorrect')

    })

}

export {checkUser, emailCheck}