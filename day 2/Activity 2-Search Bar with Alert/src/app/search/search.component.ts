import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export default class SearchComponent{
  @Output() searchEmitter: EventEmitter<any> = new EventEmitter();

  public filterData(data:any){
    this.searchEmitter.emit(data);
  }

}