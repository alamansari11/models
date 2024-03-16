import express from "express";
import { config } from "dotenv";
// import { cors } from "cors";

config();

const app = express();
// app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"Welcome",
            content: "This is a  joke"
        },
        {
            id:2,
            title:"Weasdflcome",
            content: "This is a  joke"
        },
        {
            id:3,
            title:"Welcomasdfasdfasde",
            content: "This is a  joke"
        },
        {
            id:4,
            title:"asdfaeqfWelcome",
            content: "This is a  joke"
        },
        {
            id:5,
            title:"asedfqweWelcome",
            content: "This is a  joke"
        }
    ]
    res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server listening on ${port}`);
});