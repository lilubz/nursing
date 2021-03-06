import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './auth-guard.service';
import { CommonRequestService } from './common-request.service';
import { HttpService } from './http.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './userState.service';
import { Util } from './util';
import { ConfirmationService } from 'primeng/primeng';
import { LoadingService } from './loading.service';
import { PermissionService } from './permission.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    AuthGuard,
    CommonRequestService,
    ConfirmationService,
    HttpService,
    MessageService,
    UserStateService,
    Util,
    LoadingService,
    PermissionService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    this.throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
      throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
