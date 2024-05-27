import { Request, Response } from 'express'
import InMemoryPaymentRepository from '@/adapters/out/persistence/Payment/InMemoryPaymentRepository'
import PaymentService from '@/core/payment/domain/usecases/Payment.usecase'

const paymentRepository = new InMemoryPaymentRepository()
const paymentService = new PaymentService(paymentRepository)

export default class PaymentController {
  static async processPayment(req: Request, res: Response) {
    const { customerId, amount } = req.body
    try {
      const payment = await paymentService.processPayment(customerId, amount)
      res.status(201).json(payment)
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }
}
