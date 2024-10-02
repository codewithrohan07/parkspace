import { Valet } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetEntity implements RestrictProperties<ValetEntity, Valet> {
  createdAt: Date
  updatedAt: Date
  uid: string
  displayName: string
  @IsOptional()
  image: string
  licenceID: string
  @IsOptional()
  companyId: number
}
