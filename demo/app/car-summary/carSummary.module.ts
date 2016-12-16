import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarSummaryComponent } from './carSummary.component';
import { CarSummaryService } from './carSummary.service';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  imports: [ CommonModule, SettingsModule ],
  declarations: [ CarSummaryComponent ],
  exports: [ CarSummaryComponent ],
  providers: [ CarSummaryService ]
}) export class CarSummaryModule {}
