const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRouter");

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
})
    .then(() => console.log("DB Connected"))
    .catch(() => console.log("Error in DB Connection"));

app.use("/api/v1", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
})