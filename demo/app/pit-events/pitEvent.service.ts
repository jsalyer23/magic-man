import { Injectable } from '@angular/core';
import { PitEvent } from './pitEvent.class';

@Injectable()

export class PitEventService {

  public pitEvents: Array<any> = [
    { driver: 'Austin Dillon', lap: '107', content: 'Problems: Smoking' },
    { driver: 'Austin Dillon', lap: '107', content: 'Problems: Smoking' },
    { driver: 'Austin Dillon', lap: '107', content: 'Problems: Smoking' },
    { driver: 'Austin Dillon', lap: '107', content: 'Pitting Now' },
    { driver: 'Austin Dillon', lap: '107', content: 'Problems: Smoking' },
    { driver: 'Austin Dillon', lap: '107', content: 'Pitting Now' },
    { driver: 'Austin Dillon', lap: '107', content: 'Problems: Smoking' },
    { driver: 'Austin Dillon', lap: '107', content: 'Pitting Now' },
    { driver: 'Austin Dillon', lap: '107', content: 'Problems: Smoking' }
  ];
}
