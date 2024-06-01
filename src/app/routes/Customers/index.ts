// CustomerRoutes.ts
import CustomerController from '@/adapters/in/controllers/Customer/CustomerController';
import CustomerUseCase from '@/core/customer/domain/usecase/Customer.usecase';
import CustomerRepository from '@/adapters/out/persistence/Customer/CustomerRepository';
import ExpressAdapter from '../ExpressAdapter';

class CustomersRoutes {
    private router: any;
    private customerController: CustomerController;

    constructor(router: any) {
        this.router = router;
        const repositoryCustomer = new CustomerRepository();
        const customerUserCase = new CustomerUseCase(repositoryCustomer);
        this.customerController = new CustomerController(customerUserCase);

        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/customers', ExpressAdapter.adaptRoute(this.register.bind(this)));
        this.router.get('/customers', ExpressAdapter.adaptRoute(this.listAll.bind(this)));
        this.router.get('/customers/cpf', ExpressAdapter.adaptRoute(this.getCustomerCpf.bind(this)));
    }

    private async register({ body }: { body: any }) {
        return this.customerController.register(body);
    }

    private async listAll({ query }: { query: any }) {
        const { page } = query;
        return this.customerController.listAll(Number(page));
    }

    private async getCustomerCpf({ query }: { query: any }) {
        const { cpf } = query;
        return this.customerController.getCustomerCpf(cpf.toString());
    }
}

export default CustomersRoutes;
