import { Router } from "express";

const router = Router();

router.get("/contacto", (req,res)=>{

    return res.render("contacto",{title: "Contacto"});
})


export default router;