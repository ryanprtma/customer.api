import {AsyncResource as getBrandDeviceSummary} from "async_hooks";

class CustomerController {
    constructor({ getCustomerGenderSummary, getCustomerAgeSummary, getCustomerBrandDeviceSummary, getCustomerDigitalInterestSummary }) {
        this.getCustomerGenderSummary = getCustomerGenderSummary;
        this.getCustomerAgeSummary = getCustomerAgeSummary;
        this.getCustomerBrandDeviceSummary = getCustomerBrandDeviceSummary;
        this.getCustomerDigitalInterestSummary = getCustomerDigitalInterestSummary;


        this.getGenderSummary = this.getGenderSummary.bind(this);
        this.getAgeSummary = this.getAgeSummary.bind(this);
        this.getBrandDeviceSummary = this.getBrandDeviceSummary.bind(this);
        this.getDigitalInterestSummary = this.getDigitalInterestSummary.bind(this);
    }

    async getGenderSummary(req, res) {
        try {
            const result = await this.getCustomerGenderSummary.execute();
            res.status(200).json({data:{summaries: result}});
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "internal server error" });
        }
    }

    async getAgeSummary(req, res) {
        try {
            const result = await this.getCustomerAgeSummary.execute();
            res.status(200).json({data:{summaries: result}});
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "internal server error" });

        }
    }

    async getBrandDeviceSummary(req, res) {
        try {
            const result = await this.getCustomerBrandDeviceSummary.execute();
            res.status(200).json({data:{summaries: result}});
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "internal server error" });
        }
    }

    async getDigitalInterestSummary(req, res) {
        try {
            const result = await this.getCustomerDigitalInterestSummary.execute();
            res.status(200).json({data:{summaries: result}});
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "internal server error" });
        }
    }
}

export default CustomerController;