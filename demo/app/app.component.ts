import {Component} from '@angular/core';
import {NgGrid, NgGridItem} from 'angular2-grid';
import { ConfigService } from './shared/config.service';
import { GridItemService } from './shared/gridItem.service';

@Component({
    selector: 'my-app',
    templateUrl: '/app/default.component.html',
    providers: [ ConfigService ]
})
export class AppComponent extends GridItemService {

  public gridItems: Array<any>;
  public resized: boolean = false;
  private gridConfig: any;

    constructor(public config: ConfigService){
      super(config);
      this.gridConfig = this.config.gridConfig;
      this.gridItems = this.config.gridItems;
  }
}
