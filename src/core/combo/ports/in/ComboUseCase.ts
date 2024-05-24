import Combo from '../../domain/entities/Combo'

export default interface ComboUseCase {
  createCombo(name: string, items: string[]): Promise<Combo>
  addItemToCombo(comboId: string, item: string): Promise<void>
}
