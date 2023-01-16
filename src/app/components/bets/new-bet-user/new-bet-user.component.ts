import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BetsService } from 'src/app/service/bets/bets.service';

@Component({
  selector: 'app-new-bet-user',
  templateUrl: './new-bet-user.component.html',
  styleUrls: ['./new-bet-user.component.scss']
})
export class NewBetUserComponent implements OnInit {

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
  }

  initForm() {
    this.formBet =  this.formBuilder.group({
      option: ['', Validators.required],
    });
  }

  apostar(){
    const obj = {
      "apostaId": this.bet.id,
      "apostadorId": this.userId,
      "opcaoEscolhida": this.formBet.get('option').value
    }

    this.betService.setBet(obj).subscribe((res:any) => {
      this.toastrService.success('Sucesso', 'Aposta realizada com sucesso');

    },(err: any)=> {
      this.toastrService.error('Erro', 'Erro ao carregar lista de amigos');
    })
  }





}
