import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../core/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading: any = false;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loadingService.loadingObserver.subscribe(loading => {
      console.log(loading);
      this.isLoading = loading;
    });
  }

}
