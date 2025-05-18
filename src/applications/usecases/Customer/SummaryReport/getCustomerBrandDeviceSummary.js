import Summary from "../../../../domains/Customer/Summary.js";

class GetCustomerBrandDeviceSummary {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }

    async execute() {
        const summaries = [];
        const results = await this.customerRepository.getBrandDeviceSummary();
        results.forEach((customer) => {
            const payload = {
                key: 'brand_device',
                name: customer.brand_device,
                total: customer.total,
            }

            summaries.push(new Summary(payload))
        })
        return summaries;
    }
}

export default GetCustomerBrandDeviceSummary;