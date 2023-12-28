import mongoose from "mongoose";
import { DB_NAME } from "@/app/components/constants";


const dburi = process.env.DB_URI;
const newUsers = async () => {
  try {
   const connectionInstance = await mongoose.connect(dburi!);
    console.log(connectionInstance.connection.host)
  } catch (error) {
    console.error("error: in connection", error);
  }
}
export default newUsers;


