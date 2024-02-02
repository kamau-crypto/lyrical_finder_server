import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class SongLyricsEntity {
  @Field(() => ID)
  id!: string;

  @Field()
  copyright!: string;

  @Field(() => Boolean)
  explicit!: boolean;

  @Field()
  lyrics!: string;
}
