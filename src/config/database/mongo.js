import dotenv from "dotenv";

dotenv.config();

function buildMongoURI() {
    if (process.env.NODE_ENV !== 'production') {
        return process.env.MONGO_CONNECTION_STRING;
    }

    const mongo = {
        host: process.env.MONGO_HOST || 'localhost',
        port: process.env.MONGO_PORT || '27017',
        db: process.env.MONGO_DB || 'clean',
        user: process.env.MONGO_USER || '',
        pass: process.env.MONGO_PASS || '',
    }

    if (mongo.user && mongo.pass) {
        return `mongodb://${encodeURIComponent(mongo.user)}:${encodeURIComponent(mongo.pass)}@${mongo.host}:${mongo.port}/${mongo.db}?authSource=admin`;
    }

    return `mongodb://${mongo.host}:${mongo.port}/${mongo.db}`;
}

const mongo = {
    uri: buildMongoURI(),
};

export default mongo;
