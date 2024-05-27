import { Identification } from '../../domain/entities/Identification'

export interface IdentificationRepository {
  save(user: Identification): void
  findById(id: string): Identification | null
}
