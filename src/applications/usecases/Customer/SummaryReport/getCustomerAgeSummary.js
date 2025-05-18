import Summary from "../../../../domains/Customer/Summary.js";

class GetCustomerAgeSummary {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }

    async execute() {
        const summaries = [];
        const results = await this.customerRepository.getAgeSummary()
        results.forEach((customer) => {
            const payload = {
                key: 'age',
                name: customer.age,
                total: customer.total,
            }

            summaries.push(new Summary(payload))
        })
        return summaries;
    }
}

export default GetCustomerAgeSummary;