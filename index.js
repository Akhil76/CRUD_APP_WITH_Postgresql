const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {v4: uuidv4} = require('uuid');
const pool = require('./DB/db');



const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({limit: '50mb', extended:true}));
app.use(express.urlencoded({limit: '50mb', extended:true}));

app.post('/book',async(req,res)=>{

    try {
        const {name,auther} = req.body;
        const id = uuidv4();
        const newbook = await pool.query("INSERT INTO book (id,name,auther) VALUES($1,$2,$3)RETURNING *",
        [id,name,auther]);
        res.json({data: newbook.rows});

    } catch (error) {
        console.log(error);
    }
})



PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`);
});
