import { NgModule, enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule }    from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { NgGridModule } from 'angular2-grid';
import { LeaderBoardModule } from './leader-board/leaderBoard.module';
import { CarSummaryModule } from './car-summary/carSummary.module';
import { AudioFeedModule } from './audio-feed/audioFeed.module';
import { SvgIconModule } from './svg-icons/svgIcon.module';
import { WatchListModule } from './watch-list/watchList.module';
import { PitEventModule } from './pit-events/pitEvent.module';
import { LapGraphModule } from './lap-graph/lapGraph.module';
import { ChartModule } from 'angular2-highcharts';

@NgModule({
  imports: [
    BrowserModule,
    NgGridModule,
    LeaderBoardModule,
    CarSummaryModule,
    AudioFeedModule,
    SvgIconModule,
    WatchListModule,
    PitEventModule,
    LapGraphModule,
    ChartModule
  ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
class AppModule { }

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
