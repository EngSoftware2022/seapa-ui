import { WithdrawComponent } from '../../components/wallet/withdraw/withdraw.component';
import { DepositComponent } from '../../components/wallet/deposit/deposit.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExtratosService } from 'src/app/service/extrato/extratos.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastrService: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.userId = localStorage.getItem('userId')
    this.getSaldos();

  }

  getSaldos(){
    this.extratoService.getAllTransations(this.userId).subscribe(data => {
      this.saldo = data;
    }, (err: any)=> {
      this.toastrService.error('Erro', 'Erro ao carregar lista de transferência');
    });
  }

  deposit() {
    const dialogRef = this.dialog.open(DepositComponent, {
      width: 'auto',
      height : 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
       this.getSaldos();
    });

  }

  withdraw() {
    const dialogRef = this.dialog.open(WithdrawComponent, {
      width: 'auto',
      height : 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSaldos();
    });
  }

}
