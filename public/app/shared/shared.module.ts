import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';

import { AutoFocusDirective }       from './auto-focus.directive';
import { SelectOnFocusDirective }   from './select-on-focus.directive'

@NgModule({
    imports:        [ CommonModule ],
    declarations:   [ AutoFocusDirective, 
                      SelectOnFocusDirective ],
    exports:        [ AutoFocusDirective, 
                      SelectOnFocusDirective, 
                      CommonModule, 
                      FormsModule ]
})
export class SharedModule { }