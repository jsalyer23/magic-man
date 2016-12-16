import { Injectable } from '@angular/core';

@Injectable()

export class LapGraphService {

  public driverNames: Array<string> = [
    'Joey Logano', 'Austin Dillon', 'Ryan Blaney'
  ];

  public lapData: Array<any> = [
    {
      id: 1,
      name: 'Joey Logano',
      data: [29.9, 71.5, 106.4, 129.2, 144.0,
            176.0, 135.6, 148.5, 216.4, 194.1,
            95.6, 54.4, 70.3, 86.7, 100.3]
    },
    {
      id: 2,
      name: 'Austin Dillon',
      data: [20, 79.5, 10.4, 129.2, 184.0,
            196.0, 115.6, 138.5, 216.4, 194.1,
            95.6, 54.4, 70.3, 68.1, 75.4]
    },
    {
      id: 3,
      name: 'Ryan Blaney',
      data: [28, 79.5, 80.4, 149.2, 194.0,
            184.0, 118.6, 158.5, 226.4, 199.1,
            90.6, 34.4, 60.3, 70.1, 79.4]
    }
  ];
}
