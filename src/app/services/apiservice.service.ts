import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient,
  ) { }

  public async getFeriados(): Promise<any> {
    const headers = new HttpHeaders({'content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get('https://apis.digital.gob.cl/fl/feriados/2022', {headers}).toPromise();
  }

}
