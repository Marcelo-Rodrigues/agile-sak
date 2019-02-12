import { AutoSaveService } from './shared/auto-save.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';

import { PlanningModule } from './planning/planning.module';
import { HistoryState } from './planning/history/history.state';
import { SharedModule } from './shared/shared.module';

import { LOCALE_ID, NgModule } from '@angular/core';

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
  providers: [{ provide: LOCALE_ID, useValue: 'pt-br' },
   AutoSaveService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
