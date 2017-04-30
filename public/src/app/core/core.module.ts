import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';

  import { HttpModule } from "@angular/http";

import { CommonModule } from '@angular/common';

import { LayoutModule } from "./layout/layout.module";
import { SearchService } from "./search/search.service";
import { NotificationService } from "./notification/notification.service";


@NgModule({
    imports: [
      CommonModule, 
      HttpModule
    ],
    exports: [LayoutModule],
    providers: [
      SearchService, 
      NotificationService
    ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}