import {pool} from '../config/config.js'

const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE userID = ?', [id])
    return data
}

const loginDb = async(emailAdd)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE emailAdd = ?', [emailAdd])
    return data
}

const deleteUserDb = async(id)=>{
    await pool.query('DELETE FROM users WHERE userID = ?', [id])
}

const getUserByEmailDb = async (email) => {
    const [user] = await pool.query('SELECT * FROM users WHERE emailAdd = ?', [email]);
    return user.length > 0 ? user[0] : null;
   
}

const insertUserDb = async(firstName, lastName, userAge, gender, emailAdd, userPass, userProfile, userRole, address, phone_number)=>{
    let [data] = await pool.query(`INSERT INTO users (firstName, lastName, userAge, gender, emailAdd, userPass, userProfile, userRole, address, phone_number) VALUES (?,?,?,?,?,?,?,?,?,?)`, 
        [firstName, lastName, userAge, gender, emailAdd, userPass, userProfile, userRole, address, phone_number])
    return data
}


const editUserDb = async(firstName, lastName, userAge, gender, emailAdd, userPass, userProfile, userRole, address, phone_number, id)=>{
    await pool.query(`UPDATE users 
        SET firstName = ?, lastName = ?, userAge = ?, gender = ?, emailAdd = ? , userPass = ?, userProfile = ?, userRole = ?, address = ?, phone_number = ?
        WHERE userID = ?`, [firstName, lastName, userAge, gender, emailAdd, userPass, userProfile, userRole, address, phone_number, id])
}

const updatePasswordDb = async (password, emailAdd) => {
    await pool.query('UPDATE users SET userPass = ? WHERE emailAdd = ?', [password, emailAdd]);
}

export {getUsersDb, getUserDb, deleteUserDb, insertUserDb, editUserDb, loginDb, getUserByEmailDb, updatePasswordDb}