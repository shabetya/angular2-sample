import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HomeComponent } from '/app/home/home.component';
import { EditComponent } from '/app/edit/edit.component';

@Component({
  selector: 'my-app',
  template: '<h1>Angular 2 App Example</h1><div><router-outlet></router-outlet></div>',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/edit',
    name: 'Edit',
    component: EditComponent
  }
])

export class AppComponent { }