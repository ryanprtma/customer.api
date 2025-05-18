class Summary {
    constructor(payload) {
        this.key = payload.key;
        this.name = payload.name;
        this.total = payload.total;

        this._verifyPayload(payload);
    }

    _verifyPayload(payload) {
        const { key, name, total } = payload;

        if (!key || !name || !total) {
            throw new Error('SUMMARY.NOT_CONTAIN_NEEDED_PROPERTY');
        }
    }
}

export default Summary