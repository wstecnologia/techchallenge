import { Router } from "express";

import CustomersRoutes from "./Customers";
import OrderRoutes from "./Orders";

const routes = Router()

new CustomersRoutes(routes);
new OrderRoutes(routes)

export {routes as allRoutes}