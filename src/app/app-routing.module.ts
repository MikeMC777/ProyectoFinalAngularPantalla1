import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistropadreComponent } from './registropadre/registropadre.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registropadre', component: RegistropadreComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
