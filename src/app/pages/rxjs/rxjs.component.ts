import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {
    const obs$ = new Observable((observer) => {
      let i = -1;
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if(i === 2){
          console.log('error');
          observer.error('Es xorge');
        }

        if(i=== 4){
        clearInterval(intervalo);
        observer.complete();
      }

      }, 500);
    });
    obs$.pipe().subscribe(
      (valor) => {
        console.log('NO:', valor);
      },
      (error) => {
       console.warn('Proceso terminado');
      },
      () => {
        console.log('proceso terminado');
      }
    );
   }

}
