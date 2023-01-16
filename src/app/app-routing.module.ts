import { ControlCenterBetsComponent } from './pages/control-center-bets/control-center-bets.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BetsComponent } from './pages/bets/bets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FriendRequestComponent } from './pages/friend-request/friend-request.component';
import { LoginComponent } from './pages/login/login.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { GroupsFormComponent } from './pages/groups-form/groups-form.component';
import { GroupsListComponent } from './pages/groups-list/groups-list.component';

const routes: Routes = [
  { path: 'new-user', component: NewUserComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'friend-request', component: FriendRequestComponent},
  { path: 'wallet', component: ExtratoComponent},
  { path: '', component: LoginComponent},
  { path: 'new-group', component: GroupsFormComponent},
  { path:  'group', component: GroupsListComponent },
  { path:  'group/bets/:id', component: BetsComponent },
  { path: 'profile', component: ProfileComponent},  
  { path: 'profile/edit', component: EditUserComponent},  
  { path: 'central-bets/', component: ControlCenterBetsComponent},  

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}