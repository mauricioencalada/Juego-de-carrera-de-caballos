import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.page.html',
  styleUrls: ['./dos.page.scss'],
})
export class DosPage implements OnInit {

  dado: number ; // dado
  contador = 0;
  jugador = 0;
  contadorbot1 = 0;
  bot1 = 0;
  dado1: number;
  contadorbot2 = 0;
  bot2 = 0;
  dado2: number;
  contadorbot3 = 0;
  bot3 = 0;
  dado3: number;

  turno = 1;

  ganador: string;


  constructor() {}

  ngOnInit() {
  }

  clickedStar() {
    // tslint:disable-next-line: triple-equals
    // tslint:disable-next-line: triple-equals
    if (this.turno == 1) {
  this.dado = Math.round(Math.random() * 6); // dado
  this.contador = this.dado + this.contador; // contador para ver quien va ganado
  this.jugador = this.contador / 100; // variable para ver en la html
  this.turno = 2 ;

  // tslint:disable-next-line: triple-equals
  if (this.contador >= 100) {  // if para que no supera el 100
    this.contador = 100;
    if (this.contadorbot1 <= 100 || this.contadorbot2 <= 100  || this.contadorbot3 <= 100) {
    // tslint:disable-next-line: no-unused-expression
    this.ganador = 'el caballo ganador es  el numero 1 ';
    }
  }
}
  }

  dadobot1() {
    // tslint:disable-next-line: triple-equals
    if (this.turno == 2) {
    this.dado1 = Math.round(Math.random() * 6); // dado
    this.contadorbot1 = this.dado1 + this.contadorbot1 ; // contador para ver quien va ganado
    this.bot1 = this.contadorbot1 / 100; // variable para ver en la html
    this.turno = 3 ; // turno
    // tslint:disable-next-line: triple-equals
    if (this.contadorbot1 == 100) {  // if para que no supera el 100
      this.contadorbot1 = 100;
      if (this.contador <= 100 || this.contadorbot2 <= 100  || this.contadorbot3 <= 100) {
        // tslint:disable-next-line: no-unused-expression
        this.ganador = 'el caballo ganador es  el numero 2 ';
        }
    }
    }
  }

  dadobot2() {
    // tslint:disable-next-line: triple-equals
    if (this.turno == 3) {
    this.dado2 = Math.round(Math.random() * 6); // dado
    this.contadorbot2 = this.dado2 + this.contadorbot2;  // contador para ver quien va ganado
    this.bot2 = this.contadorbot2 / 100; // variable para ver en la html
    // tslint:disable-next-line: triple-equals
    this.turno = 4 ;
    // tslint:disable-next-line: triple-equals
    if (this.contadorbot2 == 100) {  // if para que no supera el 100
      this.contadorbot2 = 100;
      if (this.contador <= 100 || this.contadorbot1 <= 100  || this.contadorbot3 <= 100) {
        // tslint:disable-next-line: no-unused-expression
        this.ganador = 'el caballo ganador es  el numero 3 ';
        }
    }
    }
  }
   dadobot3() {
    // tslint:disable-next-line: triple-equals
    if (this.turno == 4) {
    this.dado3 = Math.round(Math.random() * 6); // dado
    this.contadorbot3 = this.dado3 + this.contadorbot3; // contador para ver quien va ganado
    this.bot3 = this.contadorbot3 / 100; // variable para ver en la html
    this.turno = 1 ;
    // tslint:disable-next-line: triple-equals
    if (this.contadorbot3 == 100) {  // if para que no supera el 100
      this.contadorbot3 = 100;
      if (this.contador <= 100 || this.contadorbot1 <= 100  || this.contadorbot2 <= 100) {
        // tslint:disable-next-line: no-unused-expression
        this.ganador = 'el caballo ganador es  el numero 4 ';
        }
    }
  }
   }

  limpiar() {

    this.contador = null;
    this.jugador = null;
    this.contadorbot1 = null;
    this.bot1 = null;
    this.contadorbot2 = null;
    this.bot2 = null;
    this.contadorbot3 = null;
    this.bot3 = null;
  }


}
