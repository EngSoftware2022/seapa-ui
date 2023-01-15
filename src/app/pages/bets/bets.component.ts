import { ValidadeBetComponent } from './../../components/validade-bet/validade-bet.component';
import { NewBetUserComponent } from './../../components/new-bet-user/new-bet-user.component';
import { BetsService } from './../../service/bets/bets.service';
import { NewBetComponent } from './../../new-bet/new-bet.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewModerateBetComponent } from 'src/app/new-moderate-bet/new-moderate-bet.component';
import { UsersService } from 'src/app/service/user/users.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

  betsList : any;

  userId: any;
  idGroup: any;
  private routeSub: Subscription | undefined;

  constructor(public dialog: MatDialog,
    private userService: UsersService,
    private toastrService: ToastrService,
    private betService: BetsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId')
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.idGroup = params['id']
    });
    this.getAllBets();


    console.log(this.betsList)
  }

  openNewBetManagement() {
    const dialogRef = this.dialog.open(NewModerateBetComponent, {
      width: '500px',
      height: '500px',
      data: {
        idGroup: this.idGroup
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  newBet() {
    const dialogRef = this.dialog.open(NewBetComponent, {
      width: '500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // getAllBets() {
  //   this.userService.findBetsById(this.userId).subscribe((res:any) => {
  //       console.log(res);
  //       this.betsList = res;
  //   }, (err) => {
  //     this.toastrService.error('Erro', 'Erro ao carregar usuário');

  //   })
  // }

  getAllBets() {
    this.betService.getAllBetsByGruoup(this.idGroup).subscribe((res:any) => {
        console.log(res);
        this.betsList = res;
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar usuário');

    })
  }

  openBetUser(bet: any) {
    const dialogRef = this.dialog.open(NewBetUserComponent, {
      width: '500px',
      height: '500px',
      data: {
        bet: bet
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openValidateBet(bet: any) {
    const dialogRef = this.dialog.open(ValidadeBetComponent, {
      width: '500px',
      height: '500px',
      data: {
        bet: bet
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
