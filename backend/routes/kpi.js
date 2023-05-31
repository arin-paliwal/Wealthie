import express from "express";
const router=express.Router();
import KPI from "../models/KPI.js";
router.get("/kips",async(req,res)=>{
    try {
        const kpis=await KPI.find();
        res.status(200).json(kpis);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
})
export default router;