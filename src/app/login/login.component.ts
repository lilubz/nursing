import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';
import { API } from '../common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  api = API;
  constructor(
    private httpService: HttpService,
    private messageService: MessageService
  ) { }

  ngOnInit() {

  }

}
