import { Identification } from '../../domain/entities/Identification'

export interface IRegisterIdentificationUseCase {
  register(identification: Identification): Identification
}
