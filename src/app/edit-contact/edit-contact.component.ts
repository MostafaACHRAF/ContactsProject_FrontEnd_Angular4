import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {Http} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../../service/contacts.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode:number = 1;
  contact:Contact = new Contact;
  idContact:number = 0;

  constructor(public activatedRoute:ActivatedRoute, public contactsService:ContactsService, public router:Router) {
    this.idContact = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this.contactsService.getContact(this.idContact)
      .subscribe(data => this.contact = data, err => console.log('erreur...!'));

  }

  updateContact() {
    this.contactsService.updateContact(this.contact)
      .subscribe(data => {
        alert('Mise  a jour effectue');
        this.router.navigate(['contacts']);
      }, err => {alert('Erreur !'); console.log(err);});
  }
}
