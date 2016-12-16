import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarSummaryComponent } from './carSummary.component';
import { CarSummaryService } from './carSummary.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ CarSummaryComponent ],
  exports: [ CarSummaryComponent ],
  providers: [ CarSummaryService ]
}) export class CarSummaryModule {}
