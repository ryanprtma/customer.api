import mongoose from 'mongoose';

class Pool {
    constructor(uri) {
        if (Pool._instance) {
            return Pool._instance;
        }

        this._uri = uri;
        this._connection = null;

        Pool._instance = this;
    }

    async connect() {
        if (!this._connection) {
            await mongoose.connect(this._uri);

            this._connection = mongoose.connection
            console.log('MongoDB connected via Mongoose');
        }

        return this._connection;
    }

    getConnection() {
        if (!this._connection) {
            throw new Error('MongoDB not connected. Call connect() first.');
        }
        return this._connection;
    }
}

export default Pool;
