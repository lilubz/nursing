import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { BlockUIModule } from 'primeng/blockui';

import {
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  CarouselModule,
  ConfirmDialogModule,
  DataTableModule,
  DropdownModule,
  // DialogModule,
  FileUploadModule,
  GrowlModule,
  InputSwitchModule,
  InputTextareaModule,
  InputTextModule,
  InputMaskModule,
  LightboxModule,
  MegaMenuModule,
  MenuModule,
  MultiSelectModule,
  OverlayPanelModule,
  PanelModule,
  PaginatorModule,
  PickListModule,
  RadioButtonModule,
  SpinnerModule,
  SharedModule as _SharedModule,
  TieredMenuModule,
  TooltipModule,
  ToggleButtonModule,
  StepsModule,
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { TreeModule } from './tree/tree';
import { LoadingComponent } from './loading/loading.component';
import { DialogModule } from 'primeng/dialog';
import { MenuComponent } from './layout/menu/menu.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SubmenuComponent } from './layout/submenu/submenu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BackComponent } from './back/back.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmissionNavbarComponent } from './admission/admission-navbar/admission-navbar.component';
import { AdmissionOlderComponent } from './admission/admission-older/admission-older.component';
import { AdmissionHealthComponent } from './admission/admission-health/admission-health.component';
@NgModule({
  imports: [
    ButtonModule,
    BlockUIModule,
    CommonModule,
    CheckboxModule,
    CalendarModule,
    CarouselModule,
    CommonModule,
    ConfirmDialogModule,
    DropdownModule,
    DialogModule,
    DataTableModule,
    FileUploadModule,
    FileUploadModule,
    GrowlModule,
    InputSwitchModule,
    InputTextareaModule,
    InputTextModule,
    InputMaskModule,
    LightboxModule,
    MegaMenuModule,
    MenuModule,
    MultiSelectModule,
    OverlayPanelModule,
    PanelModule,
    PaginatorModule,
    PickListModule,
    RadioButtonModule,
    SpinnerModule,
    SpinnerModule,
    TieredMenuModule,
    ToggleButtonModule,
    TooltipModule,
    TableModule,
    TreeModule,
    _SharedModule,
    StepsModule,
  ],
  declarations: [
    BackComponent,
    HeaderComponent,
    LayoutComponent,
    LoadingComponent,
    MenuComponent,
    PageNotFoundComponent,
    SidebarComponent,
    SubmenuComponent,
    AdmissionComponent,
    AdmissionNavbarComponent,
    AdmissionOlderComponent,
    AdmissionHealthComponent,
  ],
  exports: [
    ButtonModule,
    BlockUIModule,
    CalendarModule,
    CommonModule,
    CheckboxModule,
    CarouselModule,
    CommonModule,
    ConfirmDialogModule,
    DropdownModule,
    DataTableModule,
    DialogModule,
    FileUploadModule,
    FileUploadModule,
    GrowlModule,
    InputSwitchModule,
    InputTextareaModule,
    InputTextModule,
    InputMaskModule,
    MegaMenuModule,
    MenuModule,
    MultiSelectModule,
    OverlayPanelModule,
    PanelModule,
    PaginatorModule,
    LightboxModule,
    PickListModule,
    RadioButtonModule,
    SubmenuComponent,
    SpinnerModule,
    SpinnerModule,
    TieredMenuModule,
    ToggleButtonModule,
    TableModule,
    TreeModule,
    TooltipModule,
    _SharedModule,
    StepsModule,
    
    BackComponent,
    LoadingComponent,
    PageNotFoundComponent,
  ]
})
export class SharedModule { }
