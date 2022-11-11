import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.toastrService.success('Message Success!', 'Title Success!');
  }

  onSubmit() {
    
  }

}
