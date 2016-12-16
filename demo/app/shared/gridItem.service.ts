import { Injectable, Input } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable()

export class GridItemService {

  @Input() edit: boolean;
  @Input() item: any;
  @Input() gridItems: Array<any>;
  @Input() resized: boolean;
  @Input() size: any;
  public selectedItems: Array<any> = [];

  constructor(public config: ConfigService) {
  }

  // Add a new grid item with default configuration
  add(): void {
    if (this.maxItems()) return;
    let newCount: number = this.gridItems.length + 1;
    this.gridItems.push({ id: newCount, name: 'New Item', config: this.config.defaultConfig });
  }

  copy(item: any): void {
    if (this.maxItems()) return;
    let copy: any = JSON.parse(JSON.stringify(item));
    copy.id = this.gridItems.length + 1;
    copy.edit = false;
    item.edit = false;
    this.gridItems.push(copy);
  }

  remove(id: number): void {
    let index: number = ((id - 1) === this.gridItems.length) ? id - 2 : id - 1;
    if (this.gridItems[index]) this.gridItems.splice(index, 1);
  }

  toggle(item: any): void {
    let index: number = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems.splice(index, 1);
    }
  }

  log(): void {
    console.log(this.size):
  }

  update(item: any): void {
    item = this.selectedItems;
    this.selectedItems = [];
    this.edit = false;
  }

  maxItems(): boolean {
    return (this.gridItems.length >= 9);
  }
}
