import { Injectable } from '@angular/core';

@Injectable()

export class WatchListService {

  public watchList: Array<any> = [
    { name: 'Austin Dillon', marker: 'teal' },
    { name: 'Ryan Blaney', marker: 'blue' },
    { name: 'Austin Dillon', marker: 'pink' },
    { name: 'Paul Menard', marker: 'orange-brown' },
    { name: 'Austin Dillon', marker: 'teal' }
  ];
}
