import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tabs/account',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
      path:'avatar',
      loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule )
    },
    {
      path:'grid',
      loadChildren: () => import('../grid/grid.module').then( m => m.GridPageModule )
    },
    {
      path:'progress',
      loadChildren: () => import('../progress/progress.module').then( m => m.ProgressPageModule )
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
