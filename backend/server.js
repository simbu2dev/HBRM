const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const bedRouter = require("./routes/beds");

app.use("/beds", bedRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running at ", process.env.PORT || 3000);
})