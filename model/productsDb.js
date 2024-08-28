import { pool } from "../config/config.js";

// get all

const getProductsDb = async () => {
    let [data] = await pool.query(`SELECT 
            *
        FROM 
            products p

        UNION

        SELECT 
            pk.packageID AS id, 
            pk.packageName AS name, 
            pk.price, 
            pk.packageDesc AS description, 
            pk.image, 
            pk.category, 
            NULL AS quantity, 
            GROUP_CONCAT(p.prodName SEPARATOR ', ') AS ingredients,
            pk.usage_instructions, 
            'package' AS type 
        FROM 
            packages pk
        LEFT JOIN 
            package_products pp ON pk.packageID = pp.package_id
        LEFT JOIN 
            products p ON pp.product_id = p.prodID
        GROUP BY 
            pk.packageID;`);
        return data;
};

// get single item

const getProductDb = async (id) => {
    let [[data]] = await pool.query("SELECT * FROM products WHERE prodID = ?", [id]);
    return data;
};

// delete git branch --set-upstream-to=origin/<branch> backend
const deleteProductDb = async (id) => {
    await pool.query("DELETE FROM products WHERE prodID = ?", [id]);
};

// insert

const insertProductDb = async (prodName, price, prodDesc, image, category, quantity, ingredients, usage_instructions) => {
    let [data] = await pool.query(`INSERT INTO products (prodName, price, prodDesc, image, category, quantity, ingredients, usage_instructions) VALUES (?,?,?,?,?,?,?,?)`,
        [prodName, price, prodDesc, image, category, quantity, ingredients, usage_instructions]);
    return data;
};

// update

const editProductDb = async (prodName, price, prodDesc, image, category, quantity, ingredients, usage_instructions, id) => {
    await pool.query(`UPDATE products  SET prodName = ?, price = ?, prodDesc = ?, image = ?, category = ?, 
                    quantity = ?, ingredients = ?, usage_instructions = ? WHERE prodID = ?`, 
                    [prodName, price, prodDesc, image, category, quantity, ingredients, usage_instructions, id,]);
};


export {getProductsDb, getProductDb, deleteProductDb, insertProductDb, editProductDb};
