import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Contact} from "../model/model.contact";
/**
 * Created by Mostafa ACHRAF on 10/8/2017.
 */

@Injectable()

export class ContactsService {

  constructor(public http:Http) {}

  getContacts(key:string, page: number, size: number) {
    return this.http.get("http://localhost:8080/chercher?key=" + key + "&page=" + page + "&size=" + size)
      .map(resp => resp.json());
  }

  saveContact(c) {
    return this.http.post("http://localhost:8080/contacts", c)
      .map(resp => resp.json());
  }

  getContact(id:number) {
    return this.http.get("http://localhost:8080/contacts/" + id)
      .map(resp => resp.json())
  }

  updateContact(contact:Contact) {
    return this.http.put("http://localhost:8080/contacts/" + contact.id, contact)
      .map(resp => resp.json());
  }

  deleteContact(id:number) {
    return this.http.delete("http://localhost:8080/contacts/" + id)
      .map(resp => resp.json());
  }

}
