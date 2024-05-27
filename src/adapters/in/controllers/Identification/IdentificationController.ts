import { Identification } from '@/core/identification/domain/entities/Identification'
import { IdentificationUseCase } from '@/core/identification/domain/usecases/Identification.usecase'
import { Request, Response } from 'express'
const identificationUseCase = new IdentificationUseCase()

export class IdentificationController {
  public static addIdentification(req: Request, res: Response): void {
    const { id, type, value } = req.body
    const identification = identificationUseCase.addIdentification(
      new Identification(id, type, value),
    )
    res.json(identification)
  }

  public static getIdentifications(req: Request, res: Response): void {
    res.json(identificationUseCase.getIdentifications())
  }
}
