import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SechompageComponent } from './components/sechompage/sechompage.component';

const appRoutes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login', component:SechompageComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SechompageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
