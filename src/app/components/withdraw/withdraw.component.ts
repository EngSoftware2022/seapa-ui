import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExtratosService } from 'src/app/service/extrato/extratos.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  formBusca: any;
  userId: any;

  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    public extratoService: ExtratosService, ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId')
    this.initForm();
  }

  initForm() {
    this.formBusca =  this.formBuilder.group({
      value: ['', Validators.required],
    })
  }

  onSubmit() {
    this.extratoService.withdraw(this.userId, this.formBusca.get('value').value).subscribe((res:any) => {
      this.toastrService.success('Sucesso', 'Saque realizado com sucesso');
      console.log(res);
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao realizar saque');

    })
  }

}
