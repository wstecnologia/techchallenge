import Combo from '../../../domain/entities/Combo'

export default interface IComboUseCase {
  createCombo(name: string, items: string[]): Promise<Combo>
  addItemToCombo(comboId: string, item: string): Promise<void>
}
