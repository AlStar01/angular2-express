import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { AutoFocusDirective }       from './auto-focus.directive';
import { SelectOnFocusDirective }   from './select-on-focus.directive'

// import { Ng2BootstrapModule }       from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports:        [ CommonModule ],
    declarations:   [ AutoFocusDirective, 
                      SelectOnFocusDirective ],
    exports:        [ AutoFocusDirective, 
                      SelectOnFocusDirective, 
                      CommonModule, 
                      FormsModule,
                      HttpModule ]
                      //Ng2BootstrapModule 
})
export class SharedModule { }