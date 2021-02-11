import {Component } from '@angular/core';


@Component({

    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
    
})
export class HeroeComponent{

    nombres: string = 'Iroman';
    edad: number = 45;
    

    get nombreCapitalizado() {
        return this.nombres.toUpperCase();
    }
    obtenerNombre() : string {
        return `${this.nombres} - ${this.edad}`;
    }

    cambiarNombre (): void{
        this.nombres = 'Spiderman';
    }

    cambiarEdad (): void {
        this.edad = 30;
    }
}
