import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from "../models/serie"
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  baseUrl = "https://magnosscan.000webhostapp.com/magnosBD";
  //baseUrl = "http://localhost/MagnosBD";

  constructor(private http: HttpClient) { }

  getSeries() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getSerie(name: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?nameSerie=${name}`);
  }

  getCap(name: string | number, cn: any) {
    return this.http.get(`${this.baseUrl}/getCap.php?nameSerie=${name}&capNumero=${cn}`);
  }

  getCaps(id: string | number) {
    return this.http.get(`${this.baseUrl}/getCaps.php?nameSerie=${id}`);
  }

  getLastCaps() {
    return this.http.get(`${this.baseUrl}/getLastCaps.php`);
  }

  addSerie(serie: Serie) {
    return this.http.post(`${this.baseUrl}/post.php`, serie);
  }

  addCap(infoCap: any){
    return this.http.post(`${this.baseUrl}/postCap.php`, infoCap);
  }
  addCapPags(infoCap: any){
    return this.http.post(`${this.baseUrl}/postCapPags.php`, infoCap);
  }

  deleteCap(n: number, name: string){
    return this.http.delete(`${this.baseUrl}/postCapPags.php?numeroCap=${n}?nameSerie=${name}`);
  }
}