import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import CustomerRepositoryMongo from './src/infrastructures/repository/customerRepositoryMongo.js';
import GetCustomerGenderSummary from './src/applications/usecases/Customer/SummaryReport/getCustomerGenderSummary.js';
import GetCustomerAgeSummary from "./src/applications/usecases/Customer/SummaryReport/getCustomerAgeSummary.js";
import GetCustomerBrandDeviceSummary
    from "./src/applications/usecases/Customer/SummaryReport/getCustomerBrandDeviceSummary.js";
import CustomerController from './src/interfaces/api/customer/controllers/customerController.js';
import customerRoutes from './src/interfaces/api/customer/routes/customerRoutes.js';
import mongo from './src/config/database/mongo.js';
import Pool from "./src/infrastructures/database/mongo/pool.js";
import GetCustomerDigitalInterestSummary
    from "./src/applications/usecases/Customer/SummaryReport/getCustomerDigitalInterestSummary.js";

const app = express();

const mongoUri = mongo.uri;

// Dependency Injection
const mongoPool = new Pool(mongoUri);
const customerRepository = new CustomerRepositoryMongo(mongoPool);
const getCustomerGenderSummary = new GetCustomerGenderSummary(customerRepository);
const getCustomerAgeSummary = new GetCustomerAgeSummary(customerRepository);
const getCustomerBrandDeviceSummary = new GetCustomerBrandDeviceSummary(customerRepository);
const getCustomerDigitalInterestSummary = new GetCustomerDigitalInterestSummary(customerRepository);
const customerController = new CustomerController({
    getCustomerGenderSummary,
    getCustomerAgeSummary,
    getCustomerBrandDeviceSummary,
    getCustomerDigitalInterestSummary,
});

// Setup
app.use(cors());

// Routing
app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    }),
);

app.use('/api', customerRoutes(customerController));

app.listen(process.env.APP_PORT, () => {
    console.log(`Server Started at ${process.env.APP_PORT}`)
});