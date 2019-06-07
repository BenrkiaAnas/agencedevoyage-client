import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ConfirmationMailComponent} from './confirmation-mail/confirmation-mail.component';

const routes: Routes = [
  {path: '', component: SignUpComponent},
  { path: 'confirmation/:cle', component: ConfirmationMailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule {
}
