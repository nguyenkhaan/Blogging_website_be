import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router as blogRouter } from './routes/blog.router.mts';
import { router as userRouter } from './routes/user.router.mts';
import { router as searchRouter } from './routes/search.router.mts';
import { jsonConfig, urlEncodedConfig, staticFileConfig } from './config/server.config.mts';
dotenv.config({ path: './.env' });
console.log(process.env.HOST);
const HOST = process.env.PORT;
const app = express();
app.use(cors({
    origin: 'https://blogging-website-fe.vercel.app/', // hoặc '*' nếu cho tất cả
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));
jsonConfig(app);
urlEncodedConfig(app);
staticFileConfig(app);
app.use(blogRouter);
app.use(userRouter);
app.use(searchRouter);
app.listen(process.env.HOST || 3000, function () {
    console.log('Khoi dong thanh cong');
});
