import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SearchComponent } from './routes/search/search.component';
import { MovieComponent } from './routes/movie/movie.component';
import {MovieService} from './service/movie.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TopMoviesComponent } from './routes/top-movies/top-movies.component';
import { PopularMoviesComponent } from './routes/popular-movies/popular-movies.component';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import {TextLimitPipe} from './pipes/text-limit-pipe';
import {SearchService} from './service/search.service';
import { MediaListComponent } from './components/media-list/media-list.component';
import { TvShowComponent } from './routes/tv-show/tv-show.component';
import {TvShowService} from './service/tv-show.service';
import { MediaVideosComponent } from './components/media-videos/media-videos.component';
import { MediaCastComponent } from './components/media-cast/media-cast.component';
import { MediaCrewComponent } from './components/media-crew/media-crew.component';
import { MediaReviewsComponent } from './components/media-reviews/media-reviews.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { TopTvComponent } from './routes/top-tv/top-tv.component';
import { PopularTvComponent } from './routes/popular-tv/popular-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    SearchComponent,
    MovieComponent,
    SearchBarComponent,
    TopMoviesComponent,
    PopularMoviesComponent,
    TextLimitPipe,
    MediaListComponent,
    TvShowComponent,
    MediaVideosComponent,
    MediaCastComponent,
    MediaCrewComponent,
    MediaReviewsComponent,
    TvDetailsComponent,
    TopTvComponent,
    PopularTvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    YoutubePlayerModule
  ],
  providers: [
    SearchService,
    MovieService,
    TvShowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
