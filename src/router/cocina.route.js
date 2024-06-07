import { Router } from "express";

const router = Router();

router.get("/cocina", (req,res)=>{

    return res.render("cocina",{title: "Cocina"});
})


export default router;