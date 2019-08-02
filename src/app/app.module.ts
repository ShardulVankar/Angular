import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { InfoCreateComponent } from './info-create/info-create.component';
import { InfoEditComponent } from './info-edit/info-edit.component';
import { InfoViewComponent } from './info-view/info-view.component';
import { InfoService } from './info.service';
import { HttpInfoService } from './http-info.service';
import { IntervalInfoViewComponent } from './interval-info-view/interval-info-view.component';

var Routes1 = [
  {path: 'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'Create', component:InfoCreateComponent},
  {path:'info-view/:url', component:InfoViewComponent},
  {path:'interval-info-view/:character',component:IntervalInfoViewComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    BlogsComponent,
    InfoCreateComponent,
    InfoEditComponent,
    InfoViewComponent,
    IntervalInfoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(Routes1)
  ],
  providers: [InfoService, HttpInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
