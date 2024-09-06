import {getUsersDb, getUserDb, deleteUserDb, insertUserDb, editUserDb, getUserByEmailDb, loginDb, updatePasswordDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'

const getUsers = async(req, res)=>{
    try {
        res.status(200).json(await getUsersDb())   
    } catch (err) {
        res.status(500).send({message:'Error fetching users'})
        throw err
    }
}

const getUser = async(req, res)=>{
    try{
        const user = await getUserDb(req.params.id);
        if(!user){
            return res.status(404).json({message:'User does not exist.'})
        }
        res.status(200).json(await getUserDb(req.params.id))   
    } catch(err){
        res.status(500).send({message:'Error fetching products'})
        throw err
    }
}
const fetchUser = async(req, res)=>{
    try{

        const user = await loginDb(req.user);
        // console.log(user);
        
        res.send(await getUserDb(user.userID));   
    } catch(err){
        res.status(500).send({message:'Error fetching products'})
        throw err
    }
}


const insertUser = async (req, res) => {
    let { firstName, lastName, userAge, gender, emailAdd, userPass, userProfile, userRole } = req.body;

    // Assign default profile image if none is provided
    if (userProfile === undefined) {
        userProfile = "https://codjoelmayer.github.io/projectImages/images/profile-Image.png";
    }
    if (userRole === undefined) {
        userRole = "user";
    }
    
    try {
        // Check if the user already exists
        const existingUser = await getUserByEmailDb(emailAdd);

        if (existingUser) {
            return res.status(400).json({ message: "User already exists. Try enter a different email address." });
        }
        // Hash the password and insert the new user
        hash(userPass, 10, async (err, hashedP) => {
            if (err) throw err;
            await insertUserDb(firstName, lastName, userAge, gender, emailAdd, hashedP, userProfile, userRole);
            res.status(200).json(await getUsersDb());
        });
    } catch (error) {
        res.status(500).json({ err: 'Internal server error' });
        throw error
    }
}


const deleteUser = async(req, res)=>{
    try {

        await deleteUserDb(req.params.id)
        res.status(200).json(await getUsersDb())
        
    } catch (err) {
        res.status(500).send({message:'Error deleting a user'})
    }
}

const editUser = async(req, res)=>{
    let {firstName, lastName, userAge, gender, emailAdd, userPass, userProfile, userRole} = req.body
    let user = await getUserDb(req.params.id)
    
    if(!user){
        res.status(404).send({message:'User not found'})
    }

    
    firstName? firstName = firstName: firstName = user.firstName
    lastName? lastName = lastName: lastName = user.lastName
    userAge? userAge = userAge: userAge = user.userAge
    gender? gender = gender: gender = user.gender
    emailAdd? emailAdd = emailAdd: emailAdd = user.emailAdd
    userProfile? userProfile = userProfile: userProfile = user.userProfile
    userRole? userRole = userRole: userRole = user.userRole

    try {
        if(userPass!=''){
        hash(userPass, 10, async(err, hashedP)=>{
            if(err) throw err
            userPass = hashedP
            await editUserDb(firstName, lastName, userAge, gender, emailAdd, hashedP, userProfile, userRole, req.params.id)    
        })
    }   else{
        
        userPass = user.userPass
        await editUserDb(firstName, lastName, userAge, gender, emailAdd, userPass, userProfile, userRole, req.params.id)    
    }
         res.status(200).send(await getUsersDb())
        
    } catch (err) {
        res.status(500).send({message:'Error fetching products'})
        throw err
    }

}

const loginUser = (req,res)=>{
    try {
        res.status(200).json({message:"You have signed in ", token:req.body.token})  
        
    } catch (err) {
        res.status(500).send({message:'Error logging in'})
    }
}

const updatePassword = async (req, res) => {
    const { userPass, emailAdd } = req.body;
    let user = await loginDb(emailAdd)
    
    if(!user){
        res.status(404).send({message:'Email not found, try creating an account'})
    }

    try {
        hash(userPass, 10, async (err, hashedP) => {
            if (err) throw err;
            await updatePasswordDb(hashedP, emailAdd);
            res.status(200).json({ message: "Password updated successfully." });
        });
    } catch (error) {
        res.status(500).json({ err: 'Internal server error' });
        throw error;
    }
}

export {getUsers, getUser, insertUser, deleteUser, editUser, loginUser, fetchUser, updatePassword}