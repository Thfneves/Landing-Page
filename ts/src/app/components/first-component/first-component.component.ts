import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
//aqui podemos trazer codigos TS e utiliar no html usando {{ duas chaves e o nome da variavel }} O Leg de usar esseformato e que sempre que
// for atualizado alguma informacao o sistema ira rodar primeiro aqui e atualizar a pagina com as informacoes
  constructor() { }

  ngOnInit(): void {
  }
// esse component, e um meta component, uum decorate.
// aqui ele faz 3 configuracoes, selector o template rl o caminho que esta sendo utilizado
//ea style scss.
}

// Apos estar tudo setado demaneira correta, jogamos <app-first-component></app-first-component> para o app.component html