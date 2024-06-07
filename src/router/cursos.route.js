import { Router } from "express";

const router = Router();

router.get("/cursos", (req,res)=>{

    return res.render("cursos",{title: "Cursos"});
})


export default router;