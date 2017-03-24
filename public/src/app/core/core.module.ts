import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';

import { CommonModule } from '@angular/common';

import { LayoutModule } from "./layout/layout.module";

@NgModule({
    imports: [CommonModule],
    exports: [LayoutModule],
    providers: []
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