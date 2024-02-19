import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SongDto {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  artistId!: string;

  @Field(() => Boolean)
  hasLyrics!: boolean;

  @Field(() => [String])
  genres!: string[];
}
