import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusixmatchModule } from './musixmatch/musixmatch.module';
import { SongModule } from './song/song.module';
import { ConfigModule } from '@nestjs/config';
import { ArtistModule } from './artist/artist.module';
import { SongLyricsResolver } from './song-lyrics/song-lyrics.resolver';
import { SongLyricsModule } from './song-lyrics/song-lyrics.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    MusixmatchModule,
    SongModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ArtistModule,
    SongLyricsModule,
  ],
  controllers: [AppController],
  providers: [AppService, SongLyricsResolver],
})
export class AppModule {}
