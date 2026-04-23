import { Component, OnDestroy, OnInit } from '@angular/core';  /*es como si fuese el using en el framework en C#*/
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'dispositivos';
  nombreBotonSaludo: string;
  nombreBotonDespedida: string;
  mostrarMensaje: boolean;
   dispositivos: string[];
  //items: any[];

  constructor() {
    this.nombreBotonSaludo = "Saludar";
    this.nombreBotonDespedida = "BYE";
    this.mostrarMensaje = false;
     this.dispositivos = ["dispositivo 1", "dispositivo 2", "dispositivo 3", "dispositivo 4"];
    // this.items = [
    //   {
    //     name: "dispositivo 1",
    //     id: 0
    //   },
    //   {
    //     name: "dispositivo 2",
    //     id: 1
    //   },
    //   {
    //     name: "dispositivo 3",
    //     id: 2
    //   },
    //   {
    //     name: "dispositivo 4",
    //     id: 3
    //   }
    //];
     console.log(this.dispositivos);
  }

  onSaludar() {
    console.log("hola humanos");
    this.mostrarMensaje = true;

    // alert("hola humanos");
  }
  onDespedida() {
    console.log("adios humanos");
    alert("bye humanos");
  }

  ngOnInit(): void {
   console.log("inicializando componente app-root");
  }

  ngOnDestroy(): void {
   console.log("destruyendo componente app-root");
    
  }
}
