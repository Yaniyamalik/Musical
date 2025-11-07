import mongoose from "mongoose";

export async function connect() {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    console.log("❌ MONGO_URI not found in environment variables.");
    return;
  }

  if (mongoose.connection.readyState === 1) {
    console.log("✅ MongoDB already connected.");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "musicverse",  
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.log("❌ Something went wrong while connecting to DB");
    console.error(error);
  }
}


}
