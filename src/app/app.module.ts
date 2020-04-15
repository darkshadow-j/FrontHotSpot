import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotSpotServiceComponent } from './hot-spot-service/hot-spot-service.component';
import { HotSpotProfileComponent } from './hot-spot-profile/hot-spot-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

const appRoutes: Routes = [
  { path: 'profiles', component: HotSpotProfileComponent },
  { path: 'services', component: HotSpotServiceComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HotSpotServiceComponent,
    HotSpotProfileComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
