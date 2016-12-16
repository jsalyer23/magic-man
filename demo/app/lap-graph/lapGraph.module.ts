import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LapGraphComponent } from './lapGraph.component';
import { LapGraphService } from './lapGraph.service';
import { ChartModule } from 'angular2-highcharts';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  imports: [ CommonModule, ChartModule, SettingsModule ],
  declarations: [ LapGraphComponent ],
  exports: [ LapGraphComponent ],
  providers: [ LapGraphService ]
}) export class LapGraphModule {}
