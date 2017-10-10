import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ContactsService} from "../../service/contacts.service";




@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})

export class AddContactsComponent implements OnInit {

  // contact = {nom:"", prenom:"", email:"", dateNaissance:"", tel:"", photo:""};
  contact:Contact = new Contact;
  mode:number=1;

  constructor(public contactService:ContactsService) { }

  ngOnInit() {
  }

  saveContact() {
    this.contactService.saveContact(this.contact)
      .subscribe(
        data => {this.mode=2; this.contact = data},
        err => console.log('error..!')
      );
  }

}
