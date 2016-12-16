import { Injectable } from '@angular/core';

@Injectable()

export class CarSummaryService {

  public carSummary: Array<any> = [
    'Pos.', 'Driver Name', 'Delta', 'Last Pit Lap',
    'Laps Led', 'Last Lap', 'Fastest Lap', 'Delta Change', 'Indications'
  ];
}
