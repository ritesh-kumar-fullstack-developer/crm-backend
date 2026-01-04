import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    return res.json({
        "msg": "Request recieved"
    });
});

app.listen(3000, () => {
    console.log("CRM Backend listening at http://localhost:3000");
});