import mongoose from "mongoose";
const ConnectDB = async () => {
  await mongoose
    .connect(
      `mongodb://${process.env.MONGODB_CONTAINER_NAME}:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.5`,
      {
        dbName: "course-goals",
      }
    )
    .then(() => {
      console.log("DB is Connected !");
    })
    .catch((err) => {
      console.log(`Error Occured while conecting to DB --> ${err.message}`);
    });
};

export default ConnectDB;
