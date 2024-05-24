import Combo from '../entities/Combo'
import ComboRepository from '../../ports/ComboRepository'

export default class ComboService {
  constructor(private comboRepository: ComboRepository) {}

  async createCombo(name: string, items: string[]): Promise<Combo> {
    const combo = new Combo(Date.now().toString(), name, items)
    await this.comboRepository.save(combo)
    return combo
  }

  async addItemToCombo(comboId: string, item: string): Promise<void> {
    const combo = await this.comboRepository.findById(comboId)
    if (!combo) {
      throw new Error('Combo not found')
    }
    combo.items.push(item)
    await this.comboRepository.save(combo)
  }
}
