import { Component } from '@angular/core';
import { Hero } from './hero';
import { PipeFilter } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color;
  title:string;
  myHero;
  heroes:Hero[] = [
    {id:1, name: "Shaktiman", isHuman: true}, 
    {id:2, name: "Hanuman", isHuman: false}, 
    {id:3, name: "Jwala", isHuman: true}, 
    {id:4, name: "Indra", isHuman: false}
  ];

  constructor(private filterPipe: PipeFilter){
    this.title = 'displaying-data';
    this.myHero = this.heroes[0];
  }

  onAdd(inputHero){
    // console.log(inputHero);
    this.heroes.push({id: this.heroes[this.heroes.length-1].id+1, name: inputHero, isHuman: true});
  }

  onFilter(filterText){
    console.log(filterText);
  }


}
