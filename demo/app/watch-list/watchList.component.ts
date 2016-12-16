import { Component } from '@angular/core';
import { WatchListService } from './watchList.service';
import { GridItemService } from '../shared/gridItem.service';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: '/app/watch-list/watchList.component.html',
  providers: [ WatchListService ]
})
export class WatchListComponent extends GridItemService {

  private watchList: Array<any>;

  constructor(private data: WatchListService, public config: ConfigService) {
    super(config);
    this.watchList = this.data.watchList;
  }
}
