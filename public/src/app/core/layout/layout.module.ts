import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { SharedModule } from '../../shared/shared.module';

import { MdToolbarModule, MdIconModule, MdButtonModule, MdMenuModule } from '@angular/material';

import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
    imports: [
        SharedModule, 
        RouterModule,
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdMenuModule
    ],
    declarations: [NavigationComponent],
    exports: [NavigationComponent]
})
export class LayoutModule {}
