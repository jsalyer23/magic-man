import { Component } from '@angular/core';
import { LeaderBoardService } from './leaderBoard.service';
import { GridItemService } from '../shared/gridItem.service';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: '/app/leader-board/leaderBoard.component.html',
  providers: [ LeaderBoardService, ConfigService ]
})
export class LeaderBoardComponent extends GridItemService {

  private leaderBoard: Array<any>;

  constructor(private data: LeaderBoardService, public config: ConfigService) {
    super(config);
    this.leaderBoard = this.data.leaderBoard;
  }
}
