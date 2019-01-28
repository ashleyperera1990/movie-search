import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './routes/search/search.component';
import {MovieComponent} from './routes/movie/movie.component';
import {TopMoviesComponent} from './routes/top-movies/top-movies.component';
import {PopularMoviesComponent} from './routes/popular-movies/popular-movies.component';
import {TvShowComponent} from './routes/tv-show/tv-show.component';
import {TopTvComponent} from './routes/top-tv/top-tv.component';
import {PopularTvComponent} from './routes/popular-tv/popular-tv.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'movie',
    component: MovieComponent
  },
  {
    path: 'tv-show',
    component: TvShowComponent
  },
  {
    path: 'topRatedMovies',
    component: TopMoviesComponent
  },
  {
    path: 'popularMovies',
    component: PopularMoviesComponent
  },
  {
    path: 'topRatedTv',
    component: TopTvComponent
  },
  {
    path: 'popularTv',
    component: PopularTvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
