import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { PracticeDatabindingComponent } from './practice-databinding/practice-databinding.component';
import { PracticeDirectivesComponent } from './practice-directives/practice-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PracticeDirectivesComponent,
    // PracticeDatabindingComponent,
    // WarningAlertComponent,
    // SuccessAlertComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
