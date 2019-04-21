import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  paises: [];
  sexos: "Hombre";
  acepta: boolean;
}

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `
  ]
})
export class TemplateComponent {
  usuario: Usuario = {
    nombre: null,
    apellido: null,
    correo: null,
    paises: [],
    sexos: "Hombre",
    acepta: false
  };

  paises = [
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ESP",
      nombre: "España"
    }
  ];

  sexos = ["Hombre", "Mujer"];

  constructor() {}

  guardar(forma: NgForm) {
    console.log("NgForm", forma);
    console.log("Valor Forma", forma.value);
    console.log("usuario", this.usuario);
  }
}
