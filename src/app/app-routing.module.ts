import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FriendRequestComponent } from './pages/friend-request/friend-request.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'new-user', component: NewUserComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'friend-request', component: FriendRequestComponent},
  {path: '', component: LoginComponent}

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}