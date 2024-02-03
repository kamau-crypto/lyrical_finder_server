import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { MusicService } from 'src/musixmatch';
import { TYPES } from '../musixmatch/ioc/types';
import { SongLyricsEntity } from './song-lyrics.dto';

@Resolver('SongLyrics')
export class SongLyricsResolver {
  constructor(
    @Inject(TYPES.MUSIC_SERVICE) private readonly musicService: MusicService,
  ) {}
  @Query(() => SongLyricsEntity)
  songLyrics(@Args('id') id: string) {
    return this.musicService.findLyrics(id);
  }
}
