import CustomerRepository from '../../domains/Customer/customerRepository.js';

class CustomerRepositoryMongo extends CustomerRepository {
    constructor(pool) {
        super();
        this._pool = pool;
    }
    async getGenderSummary() {
        const connection = await this._pool.connect()
        const db = connection.db
        return await db
            .collection('customers')
            .aggregate([
                {
                    $group: {
                        _id: '$gender',
                        total: {$sum: 1},
                    },
                },
                {
                    $project: {
                        gender: '$_id',
                        total: 1,
                        _id: 0,
                    },
                },
            ])
            .toArray();
    }

    async getAgeSummary() {
        const connection = await this._pool.connect()
        const db = connection.db
        return await db
            .collection('customers')
            .aggregate([
                {
                    $group: {
                        _id: '$Age',
                        total: {$sum: 1},
                    },
                },
                {
                    $project: {
                        age: '$_id',
                        total: 1,
                        _id: 0,
                    },
                },
            ])
            .toArray();
    }

    async getBrandDeviceSummary() {
        const connection = await this._pool.connect()
        const db = connection.db
        return await db
            .collection('customers')
            .aggregate([
                {
                    $group: {
                        _id: '$Brand Device',
                        total: {$sum: 1},
                    },
                },
                {
                    $project: {
                        brand_device: '$_id',
                        total: 1,
                        _id: 0,
                    },
                },
            ])
            .toArray();
    }

    async getDigitalInterestSummary() {
        const connection = await this._pool.connect()
        const db = connection.db
        return await db
            .collection('customers')
            .aggregate([
                {
                    $group: {
                        _id: '$Digital Interest',
                        total: {$sum: 1},
                    },
                },
                {
                    $project: {
                        digital_interest: '$_id',
                        total: 1,
                        _id: 0,
                    },
                },
            ])
            .toArray();
    }
}

export default CustomerRepositoryMongo;