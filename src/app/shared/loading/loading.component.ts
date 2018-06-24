import { Component, OnInit, Renderer2} from '@angular/core';
import { LoadingService } from '../../core/service/loading.service';

@Component({
  selector: 'wit-loading',
  template: '',
})
export class LoadingComponent implements OnInit {

  constructor(
    private loadingService: LoadingService,
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
    this.loadingService.loadingObserver.subscribe(opt => {
      if (opt['showLoading']) {
        this.removeLoading();
        this.appendLoading(opt as any);
      } else {
        this.removeLoading();
      }
    });
  }

  removeLoading() {
    const loadingBoxList = document.querySelectorAll('.loading-box');
    for (let i = 0, len = loadingBoxList.length; i < len; i++) {
      const loadingBox = loadingBoxList[i];
      loadingBox.parentElement.removeChild(loadingBox);
    }
  }

  appendLoading(opt: {parent: string, showLoading: boolean}) {
    const parent = document.querySelector(opt.parent);
    const div = this.renderer2.createElement('div');
    this.renderer2.addClass(div, 'loading-box');
    div.innerHTML = '<img class="loading" src="./assets/img/loading-black.gif" alt="加载中..." title="加载中...">';
    this.renderer2.appendChild(parent, div);
  }

}
