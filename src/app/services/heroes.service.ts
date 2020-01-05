import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes:Heroe[]= [
	{
		nombre:"Antman",
		bio: "Este superhéroe, además de ser un ladron y estratega por naturaleza, cuenta con un traje que le permite cambiar su tamaño y ser tan pequeño como una hormiga o tan grande como un edificio, el traje tambien le da la habilidad de comunicarse con las hormigas y volverlas sus aliadas en las diferentes misiones que este personaje enfrente.",
		img:"assets/img/antman.png",
		aparicion: "1941-11-01",
		casa:"Marvel"
	},
	{
		nombre:"Aquaman",
		bio: "El poder más grande de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
		img:"assets/img/aquaman.png",
		aparicion: "1941-11-01",
		casa:"DC"
	},
	{
		nombre:"Batman",
		bio: "Los rasgos principales de Batman se resumen en <<destreza física, habilidades deductivas y obsesión>>. La mayor parte del las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
		img:"assets/img/batman.png",
		aparicion: "1939-05-01",
		casa:"DC"
	},
	{
		nombre:"Captain America",
		bio: "Cuando era joven le metieron una droga experimental que alteró su ADN y propulsó su sistema inmunologico, así como los demás sistemas, tiene un carisma inigulable como todo capitán debe tener, ",
		img:"assets/img/captain.png",
		aparicion: "1941-11-01",
		casa:"Marvel"
	},
	{
		nombre:"Daredevil",
		bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiaciòn a niveles superhumanos, en el accidente que tuvo  cuando era niño. A pesar de su invidencia, puede 'ver' a través de un SextoSentido que le sirve como un radar similar al de los murcielagos.",
		img:"assets/img/daredevil.png",
		aparicion: "1964-11-01",
		casa:"DC"
	},
	{
		nombre:"Groot",
		bio: "Es un estraterrestre originario de un planeta donde todos poseen un fenotipo muy similar al de los arboles terrestres, tiene la capacidad de cambiar de formar y estirar sus ramas o extremidades mas alla de la longitud habitual. Aunque su unico vocabulario se resume en  <<yo soy groot>> es capaz de ser muy tierno cuando es un bebé",
    img:"assets/img/groot.png",
		aparicion: "1941-11-01",
		casa:"Marvel"
	},
	{
		nombre:"Spider-man",
		bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar las paredes. La fuerza de Spiderman le permite levantar 10 tolenaladas o más. Gracias a esta gran fuerza Spider-man puede realizar saltos increibles. Un Sentido Aracnido, que le permite saber si un peligro se cierne sobre él, antes de que sucesa. En ocaciones este puede llevar a Spider-man al origen del peligro.",
		img:"assets/img/spiderman.png",
		aparicion: "1962-08-01",
		casa:"Marvel"
	},
		{
		nombre:"Thor",
		bio: "Es un Dios, proveniente de Afgarth,  sus poderes van desde manipular los rayos hasta volar con la ayuda de su martillo, tiene el cabello largo y después se lo corta sin ver afectada su fuerza, pierde un ojo pero después lo recupera para que no se vea afectada su imágen.",
		img:"assets/img/thor.png",
		aparicion: "1962-08-01",
		casa:"Marvel"
	},
		{
		nombre:"Wolverine",
		bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que esta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la tierra y algunas extraterrestres. Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
		img:"assets/img/wolverine.png",
		aparicion: "1974-11-01",
		casa:"Marvel"
	}
];


  constructor() {
    console.log("Servicio listo para usarse!");
  }

  getHeroes():Heroe[]{
      return this.heroes;
  }

  getHeroe(idx:string):Heroe{
    let heroeRes:Heroe;
    this.heroes.forEach(heroe => {
           if (heroe.nombre == idx) {
               heroeRes = heroe;
           }
       });
      return heroeRes;
  }

  buscarHeroe(termino:string):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for(let heroe of this.heroes){
      let nombre = heroe.nombre.toLowerCase();
      if(nombre.indexOf(termino) >= 0){
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }

}

export interface Heroe{
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
};
