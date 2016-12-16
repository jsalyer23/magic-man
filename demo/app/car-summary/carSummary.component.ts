import { Component } from '@angular/core';
import { CarSummaryService } from './carSummary.service';
import { GridItemService } from '../shared/gridItem.service';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-car-summary',
  templateUrl: '/app/car-summary/carSummary.component.html',
  providers: [ CarSummaryService, ConfigService ]
})
export class CarSummaryComponent extends GridItemService {

  private carSummary: Array<any>;

  constructor(private data: CarSummaryService, public config: ConfigService) {
    super(config);
    this.carSummary = this.data.carSummary;
  }
}
