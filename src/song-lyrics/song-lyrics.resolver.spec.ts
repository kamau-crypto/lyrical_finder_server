import { Test, TestingModule } from '@nestjs/testing';
import { SongLyricsResolver } from './song-lyrics.resolver';

describe('SongLyricsResolver', () => {
  let resolver: SongLyricsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongLyricsResolver],
    }).compile();

    resolver = module.get<SongLyricsResolver>(SongLyricsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
