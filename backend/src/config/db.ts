import mongoose from 'mongoose';

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            serverApi: { version: '1', strict: true, deprecationErrors: true }
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
