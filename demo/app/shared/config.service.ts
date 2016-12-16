import { Injectable } from '@angular/core';

@Injectable()

export class ConfigService {

  // 16 Column (Basic grid without specified item heights)
  // max_cols will restrict horizontal movement on the grid
  // max_rows will restrict vertical movement on the grid
  // They cannot be used together.
  public gridConfig: any = {
    'margins': [10],
    'max_cols': 16,
    'col_width': 70,
    'auto_resize': false,
    'row_height': 200,
    'fix_to_grid': true,
    'limit_to_screen': true,
    'visable_rows': 4
  };

  public leaderBoardConfig: any = {
    'dragHandle': '.handle',
    'minWidth': 210,
    'minHeight': 200,
    'sizex': 3,
    'sizey': 1,
    'col': 1
  };

  public watchListConfig: any = {
    'dragHandle': '.handle',
    'minWidth': 210,
    'minHeight': 200,
    'sizex': 3,
    'sizey': 1,
    'col': 4
  };

  public carSummaryConfig: any = {
    'dragHandle': '.handle',
    'minWidth': 210,
    'minHeight': 200,
    'sizex': 9,
    'sizey': 1,
    'col': 7
  };

  public eventsConfig: any = {
    'dragHandle': '.handle',
    'minWidth': 210,
    'minHeight': 200,
    'sizex': 3,
    'sizey': 1,
    'col': 1,
    'row': 2
  };

  public lapGraphConfig: any = {
    'dragHandle': '.handle',
    'minWidth': 210,
    'minHeight': 400,
    'sizex': 8,
    'sizey': 2,
    'col': 4
  };

  public audioFeedConfig: any = {
    'dragHandle': '.handle',
    'minWidth': 280,
    'minHeight': 200,
    'sizex': 5,
    'sizey': 2,
    'col': 12,
    'row': 2
  };

  public defaultConfig: any = {
    'dragHandle': '.handle',
    'minWidth': 210,
    'minHeight': 200,
    'sizex': 3,
    'sizey': 1
  };

  public gridItems: Array<any> = [
    {
      id: 1,
      name: 'Leader Board',
      config: this.leaderBoardConfig,
      edit: false
    },
    {
      id: 2,
      name: 'Watch List',
      config: this.watchListConfig,
      edit: false
    },
    {
      id: 3,
      name: 'Car Summary',
      config: this.carSummaryConfig,
      edit: false
    },
    {
      id: 4,
      name: 'Events',
      config: this.eventsConfig,
      edit: false
    },
    {
      id: 5,
      name: 'Lap Graph',
      config: this.lapGraphConfig,
      edit: false
    },
    {
      id: 6,
      name: 'Audio Feed',
      config: this.audioFeedConfig,
      edit: false
    }
  ];
}
