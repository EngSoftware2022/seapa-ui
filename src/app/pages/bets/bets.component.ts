import { NewBetComponent } from './../../new-bet/new-bet.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewModerateBetComponent } from 'src/app/new-moderate-bet/new-moderate-bet.component';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

  betsList = [{
    idModerador: "1",
    userModerador: "1",
    dataInicio: "20/02/20",
    dataFim:  "20/02/20",
    tipoGerenciamento: false,
    evento: "Aposto que vamos terminar o projeto",
    jaApostei: false,
    valorApostado: 1000,
    valorGanho: 3000,
    ganhadores: [
      "amanda",
       "pedro"
    ],
    statusAposta: "FECHADA"
  }, {
    idModerador: "1",
    userModerador: "1",
    dataInicio: "20/02/20",
    dataFim:  "20/02/20",
    tipoGerenciamento: false,
    evento: "Aposto que vamos terminar o projeto",
    jaApostei: true,
    valorApostado: 1000,
    valorGanho: 3000,
    ganhadores: [
      "amanda",
       "pedro"
    ],
    statusAposta: "FECHADA"
  }]

  userId: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId')

    console.log(this.betsList)
  }

  openNewBetManagement() {
    const dialogRef = this.dialog.open(NewModerateBetComponent, {
      width: '500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  newBet() {
    const dialogRef = this.dialog.open(NewBetComponent, {
      width: '500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
