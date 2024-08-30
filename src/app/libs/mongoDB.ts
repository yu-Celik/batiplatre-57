import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async (): Promise<mongoose.Connection> => {
    console.log('Checking MongoDB connection state...');
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log('Already connected to MongoDB');
        return mongoose.connection;
    } else if (connectionState === 2) {
        console.log('Connection to MongoDB is currently being established...');
        return new Promise((resolve, reject) => {
            mongoose.connection.once('open', resolve);
            mongoose.connection.once('error', reject);
        });
    } else {
        console.log('Connecting to MongoDB...');
        console.log(MONGODB_URI);
        try {
            await mongoose.connect(MONGODB_URI!, {
                dbName: 'batiplatre57',
                bufferCommands: false,
            });
            console.log('Connected to MongoDB');
            return mongoose.connection;
        } catch (error) {
            console.error('Failed to connect to MongoDB:', error);
            throw new Error('Failed to connect to MongoDB');
        }
    }
};

export default connectDB;