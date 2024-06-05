import OrderController from "@/adapters/in/controllers/Order/OrderController";
import ExpressAdapter from "../ExpressAdapter";

export default class OrderRoutes {
    private router: any;
    
    constructor(router: any){
        this.router = router
        this.initiazeRoutes()
    }

    private initiazeRoutes(){
        this.router.post('/orders/new',ExpressAdapter.adaptRoute(this.newOrder.bind(this)))        
        this.router.get('/orders/list',ExpressAdapter.adaptRoute(this.listAllOrders.bind(this)))        
        this.router.post('/orders/payment',ExpressAdapter.adaptRoute(this.addPaymentOrders.bind(this)))
        this.router.put('/orders/status',ExpressAdapter.adaptRoute(this.updateOrderStatus.bind(this)))
    }

    private async newOrder({body}){        
        return await OrderController.addOrder(body)
    }

    private async listAllOrders(){
        return await OrderController.listAllOrders()   
    }

    private async addPaymentOrders (){
        return {message: "Payment add success"}
    }

    
    private async updateOrderStatus ({ query }){
        return await OrderController.updateOrderStatus(query.orderId, query.status)
    }
    
}