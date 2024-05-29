import Combo from '../../domain/entities/Combo'

export default interface IComboRepositoryUseCase {
  findById(comboId: string): Promise<Combo | null>
  save(combo: Combo): Promise<void>
}