import { AutoSaveService } from './shared/auto-save.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';

import { PlanningModule } from './planning/planning.module';
import { HistoryState } from './planning/histories/history.state';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([HistoryState], { developmentMode: !environment.production }),
    NgxsRouterPluginModule.forRoot(),
    SharedModule,
    PlanningModule
  ],
  providers: [AutoSaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
