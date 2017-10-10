import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ContactsService} from "../../service/contacts.service";
import {Router} from "@angular/router";
import {Contact} from "../../model/model.contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{

  pageContacts:any;
  key:string = "";
  currentPage:number = 0;
  size:number = 5;
  pages:Array<number>;

  constructor(public http:Http, public contactService:ContactsService, public router:Router) {}

  ngOnInit() {


  }

  doSearch() {
    this.contactService.getContacts(this.key, this.currentPage, this.size)
      .subscribe(data => {this.pageContacts = data, this.pages = new Array(data.totalPages)}, err => {console.log('error')});
  }

  chercher() {
    this.currentPage = 0;
    this.doSearch();
  }

  goToPage(i:number) {
    this.currentPage = i;
    this.doSearch();
  }

  onEditContact(id:number) {
    this.router.navigate(['editContact', id]);
  }

  onDeleteContact(c:Contact) {
    let confirm = window.confirm('Are you sure You will delete this contact !');

    if (confirm == true) {
      this.contactService.deleteContact(c.id)
        .subscribe(data => this.pageContacts.content.splice(
          this.pageContacts.content.indexOf(c), 1
        ), err => console.log('erreur!'));
    }

  }

}
