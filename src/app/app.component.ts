import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  template: 
    `<h1>{{title}}</h1>
    <h2> My Heroes </h2>
    <ul class = "heroes">
      <li *ngFor="let hero of heroes" 
        [class.selected]= "hero === selectedHero"
        (click)= "onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

const HEROES: Hero[] = [
  { id: 1, name: 'The Undertaker'},
  { id: 2, name: 'Andre The Giant'},
  { id: 3, name: 'Earthquake'},
  { id: 4, name: 'Rey Mysterio'},
  { id: 5, name: 'Batista'},
  { id: 6, name: 'Goldberg'},
  { id: 7, name: 'Sgt.Slaughter'},
  { id: 8, name: 'RVD'},
  { id: 9, name: 'Iron Sheik'},
  { id: 10, name: 'Kevin Nash'},
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