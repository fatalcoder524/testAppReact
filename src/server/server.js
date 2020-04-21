var express=require('express');

const router=express.Router();

router.get('/testAppReact/test',(req,res,next)=>{
    res.json('world');
})

export default router;