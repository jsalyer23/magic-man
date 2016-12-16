import { Component } from '@angular/core';
import { PitEventService } from './pitEvent.service';
import { GridItemService } from '../shared/gridItem.service';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-pit-events',
  templateUrl: '/app/pit-events/pitEvent.component.html',
  providers: [ PitEventService, ConfigService ]
})
export class PitEventComponent extends GridItemService {

  private pitEvents: Array<any>;

  constructor(private data: PitEventService, public config: ConfigService) {
    super(config);
    this.pitEvents = this.data.pitEvents;
  }
}
