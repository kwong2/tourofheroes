import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: 
    `<h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>
    <input [(ngModel)]="hero.name" placeholder = "name">
    </div>`
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

const HEROES: Hero[] = [
  { id: 11, name: 'Ric Flair'},
  { id: 12, name: 'Hulk Hogan'},
  { id: 13, name: 'The Rock'},
  { id: 14, name: 'Stone Cold'},
  { id: 15, name: 'Randy Savage'},
  { id: 16, name: 'Ultimate Warrior'},
  { id: 17, name: 'Dusty Rhodes'},
  { id: 18, name: 'Triple H'},
  { id: 19, name: 'Mick Foley'},
  { id: 20, name: 'Big Bossman'}
];
