import { ValidadeBetComponent } from '../../components/bets/validade-bet/validade-bet.component';
import { NewBetUserComponent } from '../../components/bets/new-bet-user/new-bet-user.component';
import { BetsService } from './../../service/bets/bets.service';
import { NewBetComponent } from './../../new-bet/new-bet.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewModerateBetComponent } from 'src/app/components/bets/new-moderate-bet/new-moderate-bet.component';
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

  betsList: any;

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
      this.idGroup = params['id']
    });
    this.getAllBets();
  }

  openNewBetManagement() {
    const dialogRef = this.dialog.open(NewModerateBetComponent, {
      width: '100%',
      height: 'auto',
      data: {
        idGroup: this.idGroup
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBets();
    });
  }

  getAllBets() {
    this.betService.getAllBetsByGruoup(this.idGroup).subscribe((res: any) => {
      console.log(res);
      this.betsList = res;
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar usuário');

    })
  }

  openBetUser(bet: any) {
    const dialogRef = this.dialog.open(NewBetUserComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        bet: bet
      },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openValidateBet(bet: any) {
    const dialogRef = this.dialog.open(ValidadeBetComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        bet: bet
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBets();
    });
  }

  deleteBet(id: number) {
    this.betService.getAllBetsByGruoup(this.idGroup).subscribe((res: any) => {
      console.log(res);
      this.betsList = res;
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar usuário');

    })
  }
}
