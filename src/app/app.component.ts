import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyListComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  persons = [
    {name: "Roman", lastname:"Tur"},
    {name: "Rita", lastname:"Ttinchuk"},
    {name: "Liliia", lastname:"Ivancchenko"},
    {name: "Bogdan", lastname:"Stupka"},
    {name: "Ilya", lastname:"Tkachenko"}
  ];
}
