import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { SidebarComponent } from './side-bar/side-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule, 
    MatSidenavModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: 'Formulario', component: FormsComponent}
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    MatSelectModule,
    MatNativeDateModule, 
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
