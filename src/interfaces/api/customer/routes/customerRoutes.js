import express from 'express';

export default (controller) => {
    const router = express.Router();

    router.get('/customers/summary/gender', controller.getGenderSummary);
    router.get('/customers/summary/age', controller.getAgeSummary);
    router.get('/customers/summary/brand-device', controller.getBrandDeviceSummary);
    router.get('/customers/summary/digital-interest', controller.getDigitalInterestSummary);

    return router;
}