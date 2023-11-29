import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Complaint } from './models/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  complaints: Complaint[] = [{
    id: 1,
    name: 'ME',
    title: 'Fuck it',
    body: 'This is bullshit'
  }]
  constructor(http: HttpClient) { }

  getConplaints(): Observable<Complaint[]> {
    return of(this.complaints);
  }

  createComplaint(c: Complaint): Observable<Complaint> {
    return of();
  }

  updateComplaint(c: Complaint): Observable<Complaint> {
    return of();
  }

  deleteComplaint(c: number): Observable<any> {
    return of();
  }
}
