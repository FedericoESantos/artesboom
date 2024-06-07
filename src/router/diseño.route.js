import { Router } from "express";

const router = Router();

router.get("/disenio", (req,res)=>{

    return res.render("diseño",{title: "Diseños"});
})


export default router;