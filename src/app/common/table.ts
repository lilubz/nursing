export class Table {
  constructor() {
    this.list = [];
    this.first = 0;
    this.pageSize = 10;
    this.pageNumber = 1;
    this.loading = false;
    this.total = 0;
    this.selected = [];
    this.rows = 10;
  }
  list?: object | [any] = [];
  first?: number;
  pageSize?: number;
  pageNumber?: number;
  loading?: boolean;
  total?: number;
  selected?: any;
  rows?: number;
}

