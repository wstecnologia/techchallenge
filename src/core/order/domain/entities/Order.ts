import OrderItems from "./OrderItems";

export default class Order {
  constructor(
    public id: string,
    public number:number,
    public dataCreated: string,
    public customerId: string,
    public items: OrderItems[],
    public situationId:string,
    public observation:string
  ) {}
}
