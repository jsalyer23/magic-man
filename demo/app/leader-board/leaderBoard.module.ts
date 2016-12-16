import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderBoardComponent } from './leaderBoard.component';
import { LeaderBoardService } from './leaderBoard.service';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  imports: [ CommonModule, SettingsModule ],
  declarations: [ LeaderBoardComponent ],
  exports: [ LeaderBoardComponent ],
  providers: [ LeaderBoardService ]
}) export class LeaderBoardModule {}
