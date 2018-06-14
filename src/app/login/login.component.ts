import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpService } from '../core/http.service';
import { API } from '../common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoadingService } from '../core/service/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  api = API;
  constructor(
    private httpService: HttpService,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    setTimeout(item => {
      console.log(this.elementRef);
    })
  }
  show() {
    this.loadingService.show();
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

}
