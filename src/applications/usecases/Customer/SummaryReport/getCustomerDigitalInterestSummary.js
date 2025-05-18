import Summary from "../../../../domains/Customer/Summary.js";

class GetCustomerDigitalInterestSummary {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }

    async execute() {
        const summaries = [];
        const results = await this.customerRepository.getDigitalInterestSummary();
        results.forEach((customer) => {
            const payload = {
                key: 'digital_interest',
                name: customer.digital_interest,
                total: customer.total,
            }

            summaries.push(new Summary(payload))
        })
        return summaries;
    }
}

export default GetCustomerDigitalInterestSummary;