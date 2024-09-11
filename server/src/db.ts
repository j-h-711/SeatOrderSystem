import mongoose from "mongoose";

const connectToDatabase = () => {
  mongoose
    .connect(
      process.env.MONGO_URL ||
        "mongodb+srv://jh711:jh123456789@cluster0.ulocojn.mongodb.net/table-order?retryWrites=true&w=majority"
    )
    .then((res) => {
      console.log("몽고디비 연결 성공");
    })
    .catch((error) => console.log("몽고디비 연결 실패"));

  mongoose.connection.on("error", (error) => {
    console.error("mongoDB 연결에 실패하였습니다" + error);
  });
  mongoose.connection.on("disconnected", () => {
    console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.");
  });
};

export default connectToDatabase;
