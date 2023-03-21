
import express from "express";
import JourneyController from "../controllers/journey.controller";

const router = express.Router();

router.get("/:page",async (req:any, res:any) => {
    const controller = new JourneyController;
    const response = await controller.getJourneys(req.params.page);
    return res.send(response);
});

export default router;