import { Router } from "express";

const router = Router();

router.get("/carrito", (req,res)=>{

    return res.render("carrito",{title: "Carrito"});
})


export default router;