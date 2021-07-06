import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ComputadorService } from 'src/app/services/computador.service';
import { Computador } from 'src/models/computadores';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  dono!: String;
  placamae!: String;
  processador!: String;
  memoria!: Number;
  armazenamento!: String;
  fonte!: String;

  constructor(private service: ComputadorService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar(): void {
    let computador = new Computador()

    computador.dono = this.dono
    computador.placaMae = this.placamae
    computador.processador = this.processador
    computador.memoria = Number(this.memoria)
    computador.armazenamento = this.armazenamento
    computador.fonte = this.fonte

    this.service.cadastrar(computador).subscribe((computador) => {
      this.snack.open("Computador cadastrado", "computador", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      })
      this.router.navigate([""]);
    });

  }

}