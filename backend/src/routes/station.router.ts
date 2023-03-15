import express from "express";
import StationController from "../controllers/station.controller";

const router = express.Router();

router.get("/", async(_req: any, res: any) => {
    const controller = new StationController();
    const response = await controller.getStations();
    return res.send(response);
}); 

router.get("/:stationId", async(req: any, res: any) => {
    const controller = new StationController();
    const response = await controller.getStation(req.params.stationId);
    if (!response) res.status(404).send({ message: "No station found" });
    return res.send(response);
}); 

export default router;