import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminThemeComponent } from '../../theme/admin-theme/admin-theme.component';
import { DefaultThemeComponent } from '../../theme/default-theme/default-theme.component';
const routes: Routes = [
  {
    path:'admin',
    component:AdminThemeComponent,
    children:[
      {
        path:'',
        loadChildren:()=> import ( '../../modules/admin/admin.module').then( m=> m.AdminModule)
      }
    ]
  },
  {
    path:'',
    component:DefaultThemeComponent,
    children:[
      {
        path:'',
        loadChildren:()=> import ( '../../modules/default/default.module').then( m=> m.DefaultModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
