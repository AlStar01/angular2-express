import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.css']
})
export class FilterTextComponent {
  filter: string = '';
  
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  hasText() {
    return this.filter.length > 0;
  }

  clear($event: MouseEvent) {
    $event.preventDefault();
    
    this.filter = '';
    this.changed.emit(this.filter);
  }

  filterChanged($event: KeyboardEvent) {
    $event.preventDefault();
    this.changed.emit(this.filter);
  }
}
