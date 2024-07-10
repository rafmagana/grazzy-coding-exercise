import dotenv from "dotenv"
import { connectDB, collections } from "./services/database.js";
import appFactory from "./app.js";

dotenv.config()

const port = parseInt(<string>process.env.PORT, 10) || 3000;

connectDB()
    .then(() => {
        appFactory(collections.sunsetdatas).listen(port, () => {
            console.log(`Now listening on port ${port}`)
        })
    }).catch((error) => {
        console.error("Database connection failed", error);
        process.exit();
    })