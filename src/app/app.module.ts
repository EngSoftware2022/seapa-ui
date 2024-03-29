import { AddUserGroupComponent } from './pages/add-user-group/add-user-group.component';
import { ControlCenterBetsComponent } from './pages/control-center-bets/control-center-bets.component';
import { DepositComponent } from './components/wallet/deposit/deposit.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './pages/faq/faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FriendRequestComponent } from './components/friends/friend-request/friend-request.component';
import { LoginComponent } from './pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { GroupsListComponent } from './pages/groups-list/groups-list.component';
import { GroupsFormComponent } from './pages/groups-form/groups-form.component'
import {MatSelectModule} from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { FriendsSolicitationComponent } from './components/friends/friends-solicitation/friends-solicitation.component';
import { BetsComponent } from './pages/bets/bets.component';
import { NewModerateBetComponent } from './components/bets/new-moderate-bet/new-moderate-bet.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { NewBetComponent } from './new-bet/new-bet.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProfileComponent } from './pages/profile/profile.component';
import { FriendsListComponent } from './pages/friends-list/friends-list.component'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatBadgeModule} from '@angular/material/badge';
import { WithdrawComponent } from './components/wallet/withdraw/withdraw.component'; 
import { MatCardModule } from '@angular/material/card';
import { RequestGroupComponent } from './components/request-group/request-group.component';
import { NewBetUserComponent } from './components/bets/new-bet-user/new-bet-user.component';
import { ValidadeBetComponent } from './components/bets/validade-bet/validade-bet.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [	
    AppComponent,
    NewUserComponent,
    FaqComponent,
    NavbarComponent,
    FriendRequestComponent,
    LoginComponent,
    ExtratoComponent,
    GroupsListComponent,
    GroupsFormComponent,
    FriendsSolicitationComponent,
    BetsComponent,
      NewModerateBetComponent,
      NewBetComponent,
      ProfileComponent,
      EditUserComponent,
      FriendsListComponent,
      DepositComponent,
      WithdrawComponent,
      ControlCenterBetsComponent,
      AddUserGroupComponent,
      RequestGroupComponent,
      NewBetUserComponent,
      ValidadeBetComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ToastrModule.forRoot({
      timeOut: 150000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    NgxMaskModule.forRoot(maskConfig),    
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    NgSelectModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
