import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export default class UsersComponent{
  @Input() selectedUser:any;
}