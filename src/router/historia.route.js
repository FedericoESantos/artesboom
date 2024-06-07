import { Router } from "express";

const router = Router();

router.get("/historia", (req,res)=>{

    return res.render("historia",{title: "Historia"});
})


export default router;