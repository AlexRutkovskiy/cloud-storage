import mongoose from "mongoose";
import { app } from "./App.js";
import { config } from "./utils/config/config.js";

async function bootstrap() {
  const connectionOptions = {
    dbName: "cloud-storage",
  };

  try {
    await mongoose.connect(config.DB.URL, connectionOptions);
    app.listen(config.PORT, () => {
      console.log(
        `Server run on PORT=${config.PORT} URL=http://localhost:${config.PORT}`
      );
    });
  } catch (e) {
    console.error(e);
  }
}

bootstrap().catch(() => process.exit(1));
