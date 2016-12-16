import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchListComponent } from './watchList.component';
import { WatchListService } from './watchList.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ WatchListComponent ],
  exports: [ WatchListComponent ],
  providers: [ WatchListService ]
}) export class WatchListModule {}
