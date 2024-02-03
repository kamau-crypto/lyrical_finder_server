import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { MusicServiceImpl } from 'src/musixmatch';
import { MusicService } from '../musixmatch/services';
import { TYPES } from '../musixmatch/ioc/types';
import { ArtistEntity } from './artist.dto';

@Resolver()
export class ArtistResolver {
  constructor(
    @Inject(TYPES.MUSIC_SERVICE)
    private readonly musicService: MusicService,
  ) {}
  @Query(() => [ArtistEntity])
  async artists(@Args('name') name: string): Promise<ArtistEntity[]> {
    return this.musicService.findArtists(name).toPromise();
  }
}
