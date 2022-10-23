import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Region } from 'src/interface/region';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  
  url:string =environment.apiKey+environment.apiControllers.region;
  constructor(private httpClient:HttpClient) { }

  getAllRegion():Observable<Region[]>
  {
   return this.httpClient.get<Region[]>(this.url);
  }

  addRegion(region:Region):Observable<any>
  {
    return this.httpClient.post(this.url,region);
  }

  getRegionById(id:any):Observable<Region>{
    return this.httpClient.get<Region>(this.url+"/"+id);
  }


  updateRegion(region:Region):Observable<any>
  {
    return this.httpClient.put(this.url,region);
  }
 
  
  deleteRegion(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+id);
  }

}