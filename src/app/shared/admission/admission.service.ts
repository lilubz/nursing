import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AdmissionService {
  private loadingSource = new Subject();
  public loadingObserver = this.loadingSource.asObservable();
  constructor() { }
  save(params:number) {
    this.loadingSource.next({index:params});
  }
  get(){

  }
}
