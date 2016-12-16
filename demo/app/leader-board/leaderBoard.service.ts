import { Injectable } from '@angular/core';

@Injectable()

export class LeaderBoardService {

  public leaderBoard: Array<any> = [
    { pos: 1, carNumber: 58, driverName: 'Denny Hamlin'},
    { pos: 2, carNumber: 22, driverName: 'Denny Hamlin'},
    { pos: 3, carNumber: 44, driverName: 'Denny Hamlin'},
    { pos: 4, carNumber: 66, driverName: 'Denny Hamlin'},
    { pos: 5, carNumber: 88, driverName: 'Austin Dillon', marker: 'teal'},
    { pos: 6, carNumber: 77, driverName: 'Ryan Blaney', marker: 'blue'},
    { pos: 7, carNumber: 55, driverName: 'Austin Dillon', marker: 'pink'},
    { pos: 8, carNumber: 33, driverName: 'Paul Menard', marker: 'orange-brown'},
    { pos: 9, carNumber: 58, driverName: 'Austin Dillon', marker: 'teal'},
    { pos: 10, carNumber: 22, driverName: 'Denny Hamlin'},
    { pos: 11, carNumber: 44, driverName: 'Denny Hamlin'},
    { pos: 12, carNumber: 66, driverName: 'Denny Hamlin'},
    { pos: 13, carNumber: 88, driverName: 'Denny Hamlin'},
    { pos: 14, carNumber: 58, driverName: 'Denny Hamlin'},
    { pos: 15, carNumber: 22, driverName: 'Denny Hamlin'},
    { pos: 16, carNumber: 44, driverName: 'Denny Hamlin'},
    { pos: 17, carNumber: 66, driverName: 'Denny Hamlin'},
    { pos: 18, carNumber: 88, driverName: 'Denny Hamlin'},
  ];
}
