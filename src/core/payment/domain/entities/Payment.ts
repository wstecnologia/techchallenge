export default class Payment {
  constructor(
    public id: string,
    public customerId: string,
    public amount: number,
    public status: string,
  ) {}
}
