import ExpressAdapter from "../ExpressAdapter";

export default class OrderRoutes {
    private router: any;
    
    constructor(router: any){
        this.router = router

        this.initiazeRoutes()
    }

    private initiazeRoutes(){
        this.router.post('/orders/new',ExpressAdapter.adaptRoute(this.newOrder.bind(this)))
        this.router.post('/orders/add-item',ExpressAdapter.adaptRoute(this.addItemOrder.bind(this)))
        this.router.put('/orders/update-status',ExpressAdapter.adaptRoute(this.updateStatusOrder.bind(this)))
        this.router.get('/orders/status',ExpressAdapter.adaptRoute(this.getOrderPerStatus.bind(this)))
        this.router.post('/orders/payment',ExpressAdapter.adaptRoute(this.addPaymentOrders.bind(this)))
    }

    private async newOrder({body}){
        console.log(body)
        return {message: "New order created success"}
    }

    private async addItemOrder(){
        return {message: "Item Add order success"}
    }

    private async updateStatusOrder(){
        return {message: "Update order status success"}
    }

    private async getOrderPerStatus(){
        return {message: "Get order status success"}
    }

    private async addPaymentOrders (){
        return {message: "Payment add success"}
    }

    
}