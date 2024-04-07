const mongoose = require("mongoose");

const url = "mongodb+srv://raviprakashshrivastav7:Ravi%402000@cluster0.b8god0x.mongodb.net/";

const connectDB = () => {
    console.log("connect ho raha");
    return mongoose.connect(url).then(() => {
        console.log("ravi da!");
    })
    .catch((err) => {
        console.error("deepraj:", err);
    });

};
connectDB();
module.exports = connectDB;
