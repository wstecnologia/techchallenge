import { Identification } from '@/core/identification/domain/entities/Identification'
import { IdentificationRepository } from '@/core/identification/ports/out/IdentificationRepository'

export default class InMemoryIdentificationRepository implements IdentificationRepository {
  private identifications: Identification[] = []
  save(identification: Identification): void {
    const existingIdentificationIndex = this.identifications.findIndex(
      i => i.id === identification.id,
    )
    if (existingIdentificationIndex !== -1) {
      this.identifications[existingIdentificationIndex] = identification
    } else {
      this.identifications.push(identification)
    }
  }
  findById(id: string): Identification {
    return this.identifications.find(identification => identification.id === id) || null
  }
}
