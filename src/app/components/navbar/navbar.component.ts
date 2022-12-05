import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userId!: any;
  showFiller = false;


  constructor() { }


  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    console.log(this.userId)
  }


}
