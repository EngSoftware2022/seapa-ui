import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BetsService } from 'src/app/service/bets/bets.service';

@Component({
  selector: 'app-validade-bet',
  templateUrl: './validade-bet.component.html',
  styleUrls: ['./validade-bet.component.scss']
})
export class ValidadeBetComponent implements OnInit {

  formBet: any;
  bet: any;
  options: any;
  userId: any;

  constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private betService: BetsService,
    private toastrService: ToastrService,


    ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')

    this.initForm();
    this.options = this.data.bet.opcoesApostas;
    this.bet = this.data.bet;
    console.log(this.data)
    console.log(this.options)
  }

  initForm() {
    this.formBet =  this.formBuilder.group({
      option: ['', Validators.required],
    });
  }

  validate() {

    if(this.bet.tipoAposta === "BISTATE") {
      console.log(this.formBet.get('option').value.id)
      this.betService.validateBetBistate(this.bet.id, this.options[0].id, this.formBet.get('option').value).subscribe((res:any) => {
        console.log(res);
      },(err: any)=> {
        this.toastrService.error('Erro', 'Erro ao carregar lista de amigos');
      })

    } else {
      this.betService.validateBetRange(this.bet.id, this.formBet.get('option').value).subscribe((res:any) => {
        console.log(res);
      },(err: any)=> {
        this.toastrService.error('Erro', 'Erro ao carregar lista de amigos');
      })

    }

    




  }
}
