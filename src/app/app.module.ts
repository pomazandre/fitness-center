import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';

import { AbonementComponent } from './core/abon/abon.component';
import { IndexComponent } from './core/index/index.component';
import { ContactsComponent } from './core/contacts/contacts.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';

const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'abon', component: AbonementComponent },
  { path: 'contacts', component: ContactsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactsComponent,
    AbonementComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(ROUTES), MenubarModule,
    MenuModule, ButtonModule, DataViewModule, DialogModule,
    TableModule, InputTextModule, ListboxModule, RadioButtonModule, DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
