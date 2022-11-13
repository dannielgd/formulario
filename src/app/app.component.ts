import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string = '';
  email: string = '';
  profissao: string = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente = new Cliente();

  profissoes = ['Programador', 'Empresário', 'Outra'];
  profissao = "";

  salvar(form: NgForm) {

    form.reset({ primeiroNome: 'Sebastião', profissao: ''});

  }

}
