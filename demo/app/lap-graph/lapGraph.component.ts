import { Component, OnInit } from '@angular/core';
import { LapGraphService } from './lapGraph.service';
import { GridItemService } from '../shared/gridItem.service';
import { ConfigService } from '../shared/config.service';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-lap-graph',
  templateUrl: '/app/lap-graph/lapGraph.component.html',
  providers: [ LapGraphService, ConfigService ]
})
export class LapGraphComponent extends GridItemService implements OnInit {

  private options: Object;
  private chart: Object;

  constructor(private data: LapGraphService, public config: ConfigService) {
    super(config);
    this.chart = Highcharts;
  }

  ngOnInit() {
    this.chart.setOptions({
      colors: ['#058DC7', '#50B432', '#ED561B']
    });
    this.options = {
         title: { text: '' }, // If you don't add a title, you'll get the default
         xAxis:  { title: { text: 'Lap Number' } },
         yAxis:  { title: { text: 'Lap Time' } },
         credits: { enabled: false }, // Removes link to Highcharts site
         chart: {
             type: 'spline',
             marginTop: 30,
             marginRight: 30,
             spacingBottom: 50, // Adds space so xAxis text isn't cut off
             zoomType: 'xy'
         },
         series: this.data.lapData
     };
  }

  saveInstance(chartInstance: any): void {
    this.chart = chartInstance;
    setInterval(() => {
      this.chart.reflow();
    }, 500);
  }

  // Refreshes chart so it fills the container
  refresh(resized: boolean): void {
    if (resized) this.chart.reflow();
  }

  // Well.... it zooms in
  zoom(event: any) {
    this.minX = event.context.min;
    this.maxX = event.context.max;
  }

  updateGraph(): void {
    if (this.selectedItems.length === 0) { return; }
    this.options.series = this.selectedItems;
    this.selectedItems = [];
    this.edit = false;
  }
}
