import { pool } from "../config/config.js";

// get all

const getProductsDb = async () => {
    let [data] = await pool.query(`SELECT * FROM products`);
        return data;
};

// get single item

const getProductDb = async (id) => {
    let [[data]] = await pool.query("SELECT * FROM products WHERE prodID = ?", [id]);
    return data;
};

const getPackageDb = async (id) => {
    let [[data]] = await pool.query("SELECT * FROM packages WHERE packageID = ?", [id]);
    return data;
};

// delete item
const deleteProductDb = async (id) => {
    await pool.query("DELETE FROM products WHERE prodID = ?", [id]);
};

// insert
const insertProductDb = async (prodName, prodDesc, type, image, category, price, duration_days, calories, benefits, instructions, ingredients) => {
    let [data] = await pool.query(`INSERT INTO products (prodName, prodDesc, type, image, category, price, duration_days, calories, benefits, instructions, ingredients) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
        [prodName, prodDesc, type, image, category, price, duration_days, calories, benefits, instructions, ingredients]);
    return data;
};

const insertPackageDb = async (packageName, price, packageDesc, image, category, duration, usage_instructions) => {
    let [data] = await pool.query(`INSERT INTO packages (packageName, price, packageDesc, image, category, duration, usage_instructions) VALUES (?,?,?,?,?,?,?)`,
        [packageName, price, packageDesc, image, category, duration, usage_instructions]);
    return data;
};

// update

const editProductDb = async (prodName, prodDesc, type, image, category, price, duration_days, calories, benefits, instructions, ingredients, id) => {
    await pool.query(`UPDATE products  SET prodName = ?, prodDesc = ?, type = ?, image = ?, category = ?, price = ?,
                    duration_days = ?, calories = ?, benefits = ?, instructions = ?, ingredients = ? WHERE prodID = ?`, 
                    [prodName, prodDesc, type, image, category, price, duration_days, calories, benefits, instructions, ingredients, id,]);
};


export {getProductsDb, getProductDb, deleteProductDb, insertProductDb, editProductDb, insertPackageDb, getPackageDb};
