import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HotSpotServiceComponent} from './hot-spot-service/hot-spot-service.component';
import {HotSpotProfileComponent} from './hot-spot-profile/hot-spot-profile.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RoutersComponent} from './routers/routers.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddHSProfileComponent} from './add-hsprofile/add-hsprofile.component';
import {AllMaterialModule} from '../all-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouteraddComponent } from './routeradd/routeradd.component';


const appRoutes: Routes = [
  {path: 'profiles', component: HotSpotProfileComponent},
  {path: 'services', component: HotSpotServiceComponent},
  {path: 'routers', component: RoutersComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'addhsprofile', component: AddHSProfileComponent},
  {path: 'routeradd', component: RouteraddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HotSpotServiceComponent,
    HotSpotProfileComponent,
    RoutersComponent,
    DashboardComponent,
    AddHSProfileComponent,
    RouteraddComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    AllMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
