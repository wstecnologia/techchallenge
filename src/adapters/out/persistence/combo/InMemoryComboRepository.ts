import Combo from '@/core/combo/domain/entities/Combo'
import ComboRepository from '@/core/combo/ports/ComboRepository'

export default class InMemoryComboRepository implements ComboRepository {
  private combos: Combo[] = []

  async findById(comboId: string): Promise<Combo | null> {
    return this.combos.find(combo => combo.id === comboId) || null
  }

  async save(combo: Combo): Promise<void> {
    const existingComboIndex = this.combos.findIndex(c => c.id === combo.id)
    if (existingComboIndex !== -1) {
      this.combos[existingComboIndex] = combo
    } else {
      this.combos.push(combo)
    }
  }
}
