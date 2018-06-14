import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {
  private loadingSource = new Subject();
  public loadingObserver = this.loadingSource.asObservable();
  constructor() { }

  show() {
    this.loadingSource.next(true);
  }

  hide() {
    this.loadingSource.next(false);
  }

}
