import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css'
})
export class MyListComponent {
  @Input() name:string="";
  @Input() lastname:string="";

}
