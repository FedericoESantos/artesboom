import { Router } from "express";

const router = Router();

router.get("/fotos", (req,res)=>{

    return res.render("fotos",{title: "Fotos"});
})


export default router;