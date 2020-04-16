import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HotSpotServiceComponent} from './hot-spot-service/hot-spot-service.component';
import {HotSpotProfileComponent} from './hot-spot-profile/hot-spot-profile.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {RoutersComponent} from './routers/routers.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';

const appRoutes: Routes = [
  {path: 'profiles', component: HotSpotProfileComponent},
  {path: 'services', component: HotSpotServiceComponent},
  {path: 'routers', component: RoutersComponent},
  {path: 'home', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HotSpotServiceComponent,
    HotSpotProfileComponent,
    RoutersComponent,
    DashboardComponent,
  ],
  imports: [
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
