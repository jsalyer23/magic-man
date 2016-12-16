import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchListComponent } from './watchList.component';
import { WatchListService } from './watchList.service';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  imports: [ CommonModule, SettingsModule ],
  declarations: [ WatchListComponent ],
  exports: [ WatchListComponent ],
  providers: [ WatchListService ]
}) export class WatchListModule {}
