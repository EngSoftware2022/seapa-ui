import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/service/user/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  formNewUser: any;
  userId: any;
  user: any;

  constructor(private formBuilder: FormBuilder, 
    private toastrService: ToastrService,
    private userService: UsersService, 
    ) { }
  createNewUser() {
    this.formNewUser =  this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpf: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', Validators.required],
      passwordVerify: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.createNewUser();
    this.getCurrentUser();
  }

  onSubmit() {
    if(!this.formNewUser.valid) {
      this.toastrService.error('Erro', 'Necessário preencher todas as informações');
      return;

    }

    if (this.formNewUser.get('password').value !== this.formNewUser.get('passwordVerify').value  ) {
      this.toastrService.error('Erro', 'Senha diferentes!');
      return;
    }

    this.userService.editUser(this.createObjRequest()).subscribe((res) => {
      this.toastrService.success('Sucesso', 'Usuário editado com sucesso');
    },  (err) => {
      console.log(err);
      this.toastrService.error('Erro', 'Erro ao tentar editar usuário');
    });
    
  }

  createObjRequest() {
    return {
      "nome": this.formNewUser.get('firstName').value,
      "ultimoNome": this.formNewUser.get('lastName').value,
      "cpf": this.formNewUser.get('cpf').value,
      "dataNascimento": this.formNewUser.get('birthday').value,
      "telefone": this.formNewUser.get('phone').value,
      "nomeDeUsuario": this.formNewUser.get('userName').value,
      "email": this.formNewUser.get('email').value ,
      "senha": this.formNewUser.get('password').value 
    };
  }

  getCurrentUser() {
    this.userService.findUserById(this.userId).subscribe((res:any) => {
        console.log(res);
        this.user = res;
      this.setValueForm();
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar usuário');

    })
  }

  setValueForm() {
    this.formNewUser.setValue({
      firstName: this.user.usuario.nome,
      lastName: this.user.usuario.sobrenome,
      cpf: this.user.usuario.cpf,
      birthday: this.user.usuario.dataAniversario,
      phone: this.user.usuario.telefone,
      userName: this.user.nomeUsuario,
      email: this.user.email,
      password: '',
      passwordVerify: ''
    });
  }

}
