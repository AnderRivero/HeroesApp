import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from 'src/app/services/heroes.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html'
})
export class FiltroComponent  implements OnInit {
       heroes:any[] = [];
       termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private _router:Router  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.termino=params['termino'];
    this.heroes = this._heroesService.buscarHeroe(params['termino']);
    console.log(this.heroes);
    });
  }

  verHeroe(idx:number ){
    this._router.navigate(['/heroe',idx]);
  }
}
