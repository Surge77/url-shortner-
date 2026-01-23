import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.get("/", (req, res) => {
    res.send("Hello Server");
});
app.listen(port, () => {
    console.log(`Server listening of port ${port}`);
});
//# sourceMappingURL=server.js.map