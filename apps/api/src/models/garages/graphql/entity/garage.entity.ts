import { Field, ObjectType } from '@nestjs/graphql'
import { Garage as GarageType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Garage implements RestrictProperties<Garage, GarageType> {
  id: number
  createdAt: Date
  updatedAt: Date
  companyId: number
  images: string[]
  @Field({ nullable: true })
  displayName: string
  @Field({ nullable: true })
  description: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
