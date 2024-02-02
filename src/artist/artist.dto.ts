import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ArtistEntity {
  @Field()
  id!: string;
  @Field()
  name!: string;
}
