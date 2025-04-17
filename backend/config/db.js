const mongoose = require('mongoose');




async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err.message);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;
