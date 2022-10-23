import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: 'new-user', component: NewUserComponent },
  { path: 'faq', component: FaqComponent}

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}