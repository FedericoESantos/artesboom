import { Router } from "express";

const router = Router();

router.get("/literatura", (req,res)=>{

    return res.render("literatura",{title: "Literatura"});
})


export default router;