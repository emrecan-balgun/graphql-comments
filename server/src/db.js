import mongoose from 'mongoose';

export default () => {
    const PASS = process.env.MONGO_PASSWORD;
    mongoose.connect(
        `mongodb+srv://root:${PASS}@cluster0.9hv9n.mongodb.net/commentsApp?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
    );

    mongoose.connection.on("open", () => console.log("MongoDB: Connected!"));
    mongoose.connection("error", err, (e) => console.log("MongoDB: Not Connected!", err));
}