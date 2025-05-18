import Summary from "../../../../domains/Customer/Summary.js";

class GetCustomerGenderSummary {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }

    async execute() {
        const summaries = [];
        const results = await this.customerRepository.getGenderSummary()
        results.forEach((customer) => {
            const payload = {
                key: 'gender',
                name: customer.gender,
                total: customer.total,
            }

            summaries.push(new Summary(payload))
        })
        return summaries;
    }
}

export default GetCustomerGenderSummary;