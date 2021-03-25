import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero ={
    id: 1,
    name: 'deadpool',
    edad: 25,
    poder: 'Habilidad como detective',
    identidad: 'Magnate Filantropo',
    universo: 'DC'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
