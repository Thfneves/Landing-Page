import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {
  
  show: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  
showMessage():void{
  this.show=!this.show;

const app = document.getElementById("app");
// 2. Cria um novo elemento <p></p> programáticamente
const p = document.createElement("p");
// 3. Adiciona conteúdo de texto
p.textContent = "Olá, Mundo!";
// 4. Acrescenta o elemento p no elemento div
app?.appendChild(p);

}
}
