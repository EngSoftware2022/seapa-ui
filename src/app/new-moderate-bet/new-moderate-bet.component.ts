import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GroupService } from '../service/group/group.service';
import { BetsService } from '../service/bets/bets.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-moderate-bet',
  templateUrl: './new-moderate-bet.component.html',
  styleUrls: ['./new-moderate-bet.component.scss']
})
export class NewModerateBetComponent implements OnInit {

  formModerateBet: any;
  groupList: any;
  userId: any;
  options: any = [];
  idGroup: any;
  private routeSub: Subscription | undefined;


  constructor(private formBuilder: FormBuilder,
    private groupService: GroupService,
    private betService: BetsService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastrService: ToastrService, ) { }

  ngOnInit() {
    this.initForm();
    this.userId = localStorage.getItem('userId')
    this.idGroup = this.data.idGroup;

  }

  initForm() {
    this.formModerateBet =  this.formBuilder.group({
      event: ['', Validators.required],
      dateInit: ['', Validators.required],
      dateEnd: ['', Validators.required],
      managementType: ['', Validators.required],
      tipoAposta: ['', Validators.required],
      teams: [''],
      optionOne: [''],
      optionTwo: [''],
      value: ['']
    });
  }

  createBetModerate(idCenter: number) {

    if(this.formModerateBet.get('tipoAposta').value === "BISTATE") {
      this.addOption();
    }
    const bet = {
      "centralApostasId": idCenter,
      "dataInicio": new Date(),
      "dataFim":  new Date(),
      "descricaoAposta": this.formModerateBet.get('event').value,
      "tipoAposta": this.formModerateBet.get('tipoAposta').value,
      "tipoGerenciamento": "AUTOGERENCIAVEL",
      "valorAposta": this.formModerateBet.get('value').value,
      "opcoesAposta": this.options
    }

    this.betService.newbet(bet).subscribe((res:any) => {
      console.log(res);
    },(err)=> {
      this.toastrService.error('Erro', 'Erro ao carregar lista de amigos');
    })

  }

  createCenterBet() {
    console.log(this.formModerateBet.value)
    this.groupService.newCenter(this.idGroup).subscribe((res:any) => {
      console.log(res);
      this.createBetModerate(res);
    },(err)=> {
      this.toastrService.error('Erro', 'Erro ao carregar lista de amigos');
    })
  }

  deleteOption(id: number) {
    this.options.splice(id,1);
  }

  addOption() {
    const option = {
      "primeiraOpcao": this.formModerateBet.get('optionOne').value,
      "segundaOpcao": this.formModerateBet.get('optionTwo').value
    }

    this.formModerateBet.get('optionOne').setValue('');
    this.formModerateBet.get('optionTwo').setValue('');
    this.options.push(option);

  }

}
