import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderBoardComponent } from './leaderBoard.component';
import { LeaderBoardService } from './leaderBoard.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ LeaderBoardComponent ],
  exports: [ LeaderBoardComponent ],
  providers: [ LeaderBoardService ]
}) export class LeaderBoardModule {}
