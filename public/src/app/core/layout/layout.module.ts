import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { SharedModule } from '../../shared/shared.module';

import { NavigationComponent } from "./navigation/navigation.component";
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        SharedModule, 
        RouterModule
    ],
    declarations: [NavigationComponent],
    exports: [NavigationComponent]
})
export class LayoutModule {}
