import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async (): Promise<mongoose.Connection> => {
    console.log('Connecting to MongoDB...');
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log('Already connected to MongoDB');
        return mongoose.connection;  // Retourner directement la connexion
    }
    if (connectionState === 2) {
        console.log('Connecting to MongoDB...');
        return new Promise(resolve => {
            mongoose.connection.once('open', () => {
                resolve(mongoose.connection);
            });
        });
    }

    try {
        console.log('Connecting to MongoDB 2...');
        await mongoose.connect(MONGODB_URI!, {
            dbName: 'batiplatre57',
            bufferCommands: false,
        });
        console.log('Connected to MongoDB');
        return mongoose.connection;  // Retourner directement la connexion
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw new Error('Failed to connect to MongoDB');
    }
};

export default connectDB;