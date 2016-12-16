import { Component } from '@angular/core';
import { GridItemService } from '../shared/gridItem.service';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-settings',
  templateUrl: '/app/settings/settings.component.html',
  providers: [ GridItemService ]
})
export class SettingsComponent extends GridItemService {

  constructor(public config: ConfigService) {
    super(config);
  }
}
