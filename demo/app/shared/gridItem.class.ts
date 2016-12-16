export class GridItem {
  public id: number;
  public name: string;
  public config: {[key: string]: any};
  public payload: Array<any>;
  public edit: boolean;

  constructor() {
    this.edit = false;
  }
}
