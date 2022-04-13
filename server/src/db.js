import mongoose from 'mongoose';

export default () => {
    const PASS = process.env.MONGO_PASSWORD;
    mongoose.connect(
        `mongodb+srv://root:${PASS}@cluster0.9hv9n.mongodb.net/commentsApp?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    );

    mongoose.connection.on("open", () => console.log("MongoDB: Connected!"));
    mongoose.connection.on("err", (e) => console.log("MongoDB: Not Connedted!", e));
}