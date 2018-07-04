import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { ROUTES } from '../common/routes';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import { LoadingService } from './loading.service';

@Injectable()
export class PermissionService implements OnInit {
  ROUTES = ROUTES;
  private routes = []; // 修改后的路由树
  private menuSource = new Subject();
  public menuObserver = this.menuSource.asObservable();
  routesList = [];
  currentRouterLink = '';
  currentRouterData = null;
  mainMenu = [];
  sideMenu = [];
  subMenu = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService
  ) { }


  ngOnInit() {
    this.ROUTES.forEach(item => {
      this.routes.push(this.transformRoutes(item, null));
    });
    setTimeout(() => {
      this.menuSource.next({
        mainMenu: this.routes
      });
    }, 0);

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .do(next => {
        const url = next['urlAfterRedirects'];
        this.currentRouterLink = url.split('?')[0];
        this.loadingService.hide();
      })
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe(next => {
        this.currentRouterData = next;
        this.getMenu();
        this.menuSource.next({
          mainMenu: this.mainMenu,
          sideMenu: this.sideMenu,
          subMenu: this.subMenu
        });
    });

  }

  transformRoutes(data, parent = null) {
    const temp = {
      pageName: data.pageName,
      pageId: data.pageId,
      routerLink: data.routerLink,
      children: null,
      parent: parent,
      notMenu: data.notMenu || false,
    };
    if (data.children) {
      const arr = [];
      for (const item of data.children) {
        arr.push(this.transformRoutes(item, temp));
      }
      temp.children = arr;
    }
    this.routesList.push(temp);
    return temp;
  }

  getMenu() {
    let currentLocation = this.routesList.find(item => item.routerLink === this.currentRouterLink);
    this.mainMenu = this.routes;
    const menuArr = [];
    if (currentLocation) {
      while (currentLocation.parent) {
        menuArr.unshift(currentLocation.parent);
        currentLocation = currentLocation.parent;
      }
      this.sideMenu = menuArr[0] ? menuArr[0].children : [];
      this.subMenu = menuArr[1] && (!menuArr[1].notMenu) ? menuArr[1].children : [];
    }
  }
}

