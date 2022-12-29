import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  // declaramos las variables de resultado y condicional para ejecutar la funcion
  resultado:number = 0;
  condicional:number = 1;

  // declaramos la funcion lanzar()
  lanzar(){
    // creamos un numero random entero positivo y le asignamos a una variable
    this.condicional = Math.round(Math.random()*10) ;

    // creamos una condicional que valide si el resultado y el valor aleatorio son iguales
    // de desta forma solo se establecera el resultadi unicamente cuando sean diferentes y no repitira el mismo valor
    if (this.condicional != this.resultado) {
      // creamos otra condicional la cual nos establecera un rango entre el 1 y el 6
      if (this.condicional!= 0 && this.condicional <7) {
        // asignamos el valor de la condicional al resultado para imprimirlo en la vista
        this.resultado = this.condicional;
      }else{
        // en caso no sea valida la condicion se ejecutara la funcion nuevamente
        this.lanzar();
      }
    }else{
      // en caso no sea valida la condicion se ejecutara la funcion nuevamente
      this.lanzar();
    }
    
    // imprimimos de forma interna los resultados obtenidos para validar
    console.log(this.resultado);
  }
}
