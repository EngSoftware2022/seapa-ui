import { WithdrawComponent } from './../../components/withdraw/withdraw.component';
import { DepositComponent } from './../../components/deposit/deposit.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExtratosService } from 'src/app/service/extrato/extratos.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  saldo: any;
  saldos: any[] | undefined;
  userId: any;

  constructor(public extratoService: ExtratosService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.userId = localStorage.getItem('userId')
    this.getSaldos();

  }

  getSaldos(){
    this.extratoService.getAllTransations(this.userId).subscribe(data => {
      this.saldo = data;
      console.log(this.saldo);
    });
  }

  deposit() {
    const dialogRef = this.dialog.open(DepositComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
       this.getSaldos();
    });

  }

  withdraw() {
    const dialogRef = this.dialog.open(WithdrawComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getSaldos();
    });
  }

}
