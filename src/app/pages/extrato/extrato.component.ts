import { Component, OnInit } from '@angular/core';
import { ExtratosService } from 'src/app/service/extrato/extratos.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  saldo: any;
  saldos: any[] | undefined;

  constructor(public extratoService: ExtratosService) { }

  ngOnInit(): void {


    this.saldos = [{
      saldo: 10000,
      data: "10/05/22"
    },
    {
      saldo: 12000,
      data: "05/05/22"
    }, 
    {
      saldo: 11000,
      data: "18/04/22"
    },
    {
      saldo: 14000,
      data: "10/04/22"
    },
    {
      saldo: 90000,
      data: "10/03/22"
    }]
  }

  getSaldos(){
    this.extratoService.getSaldo().subscribe(data => {
      this.saldo = data;
    });
  }

}
