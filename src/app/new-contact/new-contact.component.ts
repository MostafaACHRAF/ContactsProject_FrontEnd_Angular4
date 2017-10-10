import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../../service/contacts.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})

export class NewContactComponent implements OnInit {

  constructor(public contactService:ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm) {
    this.contactService.saveContact(dataForm)
      .subscribe(data => console.log(data), err => console.log(JSON.parse(err._body).message));
  }

}
