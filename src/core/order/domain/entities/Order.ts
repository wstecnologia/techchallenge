export default class Order {
  constructor(
    public id: string,
    public customerId: string,
    public items: string[],
    public status: string,
  ) {}
}
