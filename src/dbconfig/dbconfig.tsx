import mongoose from "mongoose";

export default async function connect() {
      try {
            const dataBaseConnection = await mongoose.connect(process.env.DB_URI!)
            if (!dataBaseConnection) {
            console.error("failed")
            }
      }catch(error: any) {
            console.log("Connection to database failed", error.message)
      }

}
connect()