import { Manager } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ManagerEntity
  implements RestrictProperties<ManagerEntity, Manager>
{
  createdAt: Date
  updatedAt: Date
  uid: string
  @IsOptional()
  displayName: string
  @IsOptional()
  companyId: number
}
