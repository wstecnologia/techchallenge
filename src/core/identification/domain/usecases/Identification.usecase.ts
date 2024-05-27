import { Identification } from '../entities/Identification'
import { IIdentificationUseCase } from '../../ports/in/IIdentification.usecase'
export class IdentificationUseCase implements IIdentificationUseCase {
  private identifications: Identification[] = []

  public addIdentification(identification: Identification): Identification {
    this.identifications.push(identification)
    return identification
  }

  public getIdentifications(): Identification[] {
    return this.identifications
  }
}
