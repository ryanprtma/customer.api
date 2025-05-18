class Customer {
    constructor(payload) {
        this._verifyPayload(payload);

        this.name = payload.name;
        this.gender = payload.gender;
        this.age = payload.age;
        this.location = payload.location;
        this.location_type = payload.location_type;
        this.email = payload.email;
        this.phone_number = payload.phone_number;
        this.brand_device = payload.brand_device;
        this.digital_interest = payload.digital_interest;
        this.date = payload.date;
        this.login_hour = payload.login_hour;

    }

    _verifyPayload(payload) {
        const { name, gender, age, location, location_type, email, phone_number, brand_device, digital_interest, date, login_hour } = payload;

        if (!name || !gender) {
            throw new Error('CUSTOMER.NOT_CONTAIN_NEEDED_PROPERTY');
        }
    }
}