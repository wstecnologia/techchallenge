export default class OrderItems {
  constructor(
    public id: string,
    public numberOrder: number,
    public quantity:number,
    public productId: string,
    public productDescription:string,
    public productPrice:number,
    public active:boolean,
    public dataCreated:string
  ) {}
}
