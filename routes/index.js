import express from 'express';

const router = express.Router();

const routes = (app) => {
router.use('/',(req,res)=>{
    res.send("home page")
})
}

export default routes