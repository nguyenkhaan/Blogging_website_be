import express from 'express' 
import dotenv from 'dotenv'
import cors from 'cors'
import { router as blogRouter } from './routes/blog.router.mts'
import { router as userRouter } from './routes/user.router.mts'
import { router as searchRouter } from './routes/search.router.mts'
import { jsonConfig , urlEncodedConfig , multerConfig , staticFileConfig } from './config/server.config.mts'
dotenv.config({path: './.env'}) 

console.log(process.env.HOST)
const HOST = process.env.PORT 
const app = express()

const allowedOrigins = [
  "http://localhost:5173", // dev local
  "https://blogging-website-fe.vercel.app", // FE Vercel, 
  "https://blogging-website-fe.vercel.app/"
];

app.use(cors({
  origin: function(origin, callback) {
    // Cho phép request không có origin (Postman, server-side)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET','POST','PUT','DELETE', 'OPTION'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
// app.use(cors({
//   origin: true,
//   credentials: true
// }));

jsonConfig(app) 
urlEncodedConfig(app) 
staticFileConfig(app) 

app.use(blogRouter) 
app.use(userRouter) 
app.use(searchRouter) 
app.get('/' , (req , res) => {
  res.send('Hello world'); 
})
app.listen(process.env.PORT ||3000 , function() {
    console.log('Khoi dong thanh cong') 
})