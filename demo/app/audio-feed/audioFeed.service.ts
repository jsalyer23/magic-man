import { Injectable } from '@angular/core';

@Injectable()

export class AudioFeedService {

  public audioFeed: Array<any> = this.mockData(30);

  mockData(num: number): Array<any> {
    let mock: Array<any> = [];
    for (let i=0; i < num; i++) {
      mock.push({
        driver: 'Denny Hamlin',
        lap: '107',
        transcription: 'bowman we can go seventy',
        classification: '#balance_feedback',
        timestamp: '17:33:00'});
    }
    return mock;
  }
}
