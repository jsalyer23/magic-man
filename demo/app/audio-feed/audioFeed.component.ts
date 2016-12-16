import { Component } from '@angular/core';
import { AudioFeedService } from './audioFeed.service';
import { GridItemService } from '../shared/gridItem.service';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-audio-feed',
  templateUrl: '/app/audio-feed/audioFeed.component.html',
  providers: [ AudioFeedService, ConfigService]
})
export class AudioFeedComponent extends GridItemService {

  private audioFeed: Array<any>;

  constructor(private data: AudioFeedService, public config: ConfigService) {
    super(config);
    this.audioFeed = this.data.audioFeed;
  }
}
