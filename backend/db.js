import mongoose from "mongoose";

const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log("faild");
      console.error(err);
    });
};

export default dbConnect;
