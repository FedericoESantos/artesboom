import { Router } from "express";

const router = Router();

router.get("/chat", (req,res)=>{

    return res.render("chat",{title: "Chat"});
})


export default router;