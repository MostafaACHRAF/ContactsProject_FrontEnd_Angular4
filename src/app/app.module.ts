import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {Routes, RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ContactsService} from "../service/contacts.service";
import {FormsModule} from "@angular/forms";
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const appRoutes:Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'addContacts', component: NewContactComponent},
  {path: 'editContact/:id', component: EditContactComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    AddContactsComponent,
    NewContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule,FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
