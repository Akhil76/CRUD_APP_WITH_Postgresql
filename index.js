const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({limit: '50mb', extended:true}));
app.use(express.urlencoded({limit: '50mb', extended:true}));





PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`);
});
