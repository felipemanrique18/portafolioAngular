import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { NofoundComponent } from './components/nofound/nofound.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'**',pathMatch:'full',component:NofoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
