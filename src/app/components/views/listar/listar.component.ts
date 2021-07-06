import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ComputadorService } from 'src/app/services/computador.service';
import { Computador } from 'src/models/computadores';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  computadores!: MatTableDataSource<Computador>

  listarColumns: string[] = ['dono', 'placamae', 'processador', 'memoria', 'armazenamento', 'fonte', 'criadoem', 'deletar'];

  constructor(private service: ComputadorService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.computadores = new MatTableDataSource<Computador>(lista)
    })
  }

  deletar(id: string) {
    this.service.deletar(id).subscribe((computador) => {
      this.snack.open("Computador deletado", "computador", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })

    })

  }

}