import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './cont/tabla/tabla.component';
import { RegistroComponent } from './cont/registro/registro.component';


export const ROUTES: Routes = [
  { path: 'listado', component: TablaComponent }, 
  { path: 'forumulario', component: RegistroComponent },
  { path: '', pathMatch: 'full', redirectTo: 'listado' }, 
  { path: '**', pathMatch: 'full', redirectTo: 'listado' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
