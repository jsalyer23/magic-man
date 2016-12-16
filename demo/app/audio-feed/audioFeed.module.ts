import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioFeedComponent } from './audioFeed.component';
import { AudioFeedService } from './audioFeed.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ AudioFeedComponent ],
  exports: [ AudioFeedComponent ],
  providers: [ AudioFeedService ]
}) export class AudioFeedModule {}
