import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { SharedModule } from '../../shared/shared.module';

import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
    declarations: [NavigationComponent],
    imports: [SharedModule, RouterModule],
    exports: [NavigationComponent]
})
export class LayoutModule {}
