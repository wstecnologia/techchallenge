import { Identification } from '../../domain/entities/Identification'

export interface IIdentificationUseCase {
  addIdentification(identification: Identification): Identification | null
}
