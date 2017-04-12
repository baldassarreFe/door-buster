import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './core/auth-guard.service';
import {NotFoundComponent} from './not-found/not-found.component';

/*
 loadChildren: 'app/home/home.module#HomeModule'
 lazily load HomeModule from this path app/home/home.module

 The feature module must export its own routing module
 to specify which component to load.

 In this way this router (main one) does not need to know
 the components that its children will load.

 The WelcomeModule is not lazy loaded, its import is in app.module.ts
 and there are also loaded its routes.

 The canActivate guard prevents unauthorized users from accessing the dashboard.
 */
const appRoutes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule', canActivate: [AuthGuard]},
  {path: 'editor', loadChildren: 'app/editor/editor.module#EditorModule', canActivate: [AuthGuard]},
  {path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule'},
  {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
  {path: 'not-found', loadChildren: 'app/not-found/not-found.module#NotFoundModule'},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
