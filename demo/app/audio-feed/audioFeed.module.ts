import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioFeedComponent } from './audioFeed.component';
import { AudioFeedService } from './audioFeed.service';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  imports: [ CommonModule, SettingsModule ],
  declarations: [ AudioFeedComponent ],
  exports: [ AudioFeedComponent ],
  providers: [ AudioFeedService ]
}) export class AudioFeedModule {}
