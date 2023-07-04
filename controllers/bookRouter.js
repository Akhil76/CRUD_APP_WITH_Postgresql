const pool = require('../DB/db');
const {v4: uuidv4} = require('uuid');



const books = async(req,res)=>{
    try {
        const books = await pool.query("SELECT*FROM book");
        res.json({data:books.rows});
    } catch (error) {
        console.log(error);
    };
}
const book = async(req,res)=>{
    try {
        const {id} = req.params; 
        const book = await pool.query("SELECT*FROM book WHERE id=$1",[id]);
        res.json({data:book.rows});
    } catch (error) {
        console.log(error);
    };
}

const addBook = async(req,res)=>{

    try {
        const {name,auther} = req.body;
        const id = uuidv4();
        const newbook = await pool.query("INSERT INTO book (id,name,auther) VALUES($1,$2,$3)RETURNING *",
        [id,name,auther]);
        res.json({data: newbook.rows});

    } catch (error) {
        console.log(error);
    }
};


module.exports = {books,book,addBook};