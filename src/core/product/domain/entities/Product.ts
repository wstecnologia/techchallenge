export default class Product {
  constructor(
    public id: string,
    public customerId: string,
    public amount: number,
    public status: string,
    public category: string,
  ) {}
}
