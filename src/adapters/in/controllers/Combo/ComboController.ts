import { Request, Response } from 'express'
import InMemoryComboRepository from '@/adapters/out/persistence/Combo/InMemoryComboRepository'
import ComboService from '@/core/combo/domain/usecases/Combo.usecase'

const comboRepository = new InMemoryComboRepository()
const comboService = new ComboService(comboRepository)

export default class ComboController {
  static async createCombo(req: Request, res: Response) {
    const { name, items } = req.body
    try {
      const combo = await comboService.createCombo(name, items)
      res.status(201).json(combo)
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }

  static async addItemToCombo(req: Request, res: Response) {
    const { comboId, item } = req.body
    try {
      await comboService.addItemToCombo(comboId, item)
      res.status(200).json({ message: 'Item adicionado aocombo' })
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }
}
