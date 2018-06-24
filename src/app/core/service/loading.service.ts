import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {
  private loadingSource = new Subject();
  public loadingObserver = this.loadingSource.asObservable();
  constructor() { }

  show(parentSelector: string = '.main') {
    this.loadingSource.next({ parent: parentSelector, showLoading: true});
  }

  hide() {
    this.loadingSource.next({ showLoading: false});
  }

}
