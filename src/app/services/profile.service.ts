import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private httpClient: HttpClient) {
  }

  public getProfilesList(): Observable<Profiles[]> {
    return this.httpClient.get<Profiles[]>('http://localhost:8080/profile');
  }

  public getRoutersList(): Observable<Router[]> {
    return this.httpClient.get<Router[]>('http://localhost:8080/router');
  }

  public addOneProfile(prof: Profiles): Observable<Profiles> {
    return this.httpClient.post<Profiles>('http://localhost:8080/profile', prof);
  }

  public addProfile(): Observable<Profiles> {
    const prof: Profiles = ({
      name: 'test',
      dnsName: 'ss',
      rateLimit: 'ss',
    });
    console.log('dodaje');
    console.log('xxx' + prof.name);
    return this.httpClient.post<Profiles>('http://localhost:8080/profiles', prof);
  }

  public addRouter(router: Router): Observable<RouterModel> {
    return this.httpClient.post<RouterModel>('http://localhost:8080/router', router);
}

  public getRoutersCount(): Observable<any>{
    return this.httpClient.get<any>('http://localhost:8080/router/count');
  }


}

export interface Router {
  name: string;
  username: string;
  password: string;
  ipAddress: string;
  portList: PortList[];
}
export interface PortList {
  id: number;
  name: string;
}

export interface Profiles {
  name: string;
  dnsName: string;
  rateLimit: string;
}

export interface RouterModel {
  name: string;
  ipAdress: string;
  username: string;
  password: string;
}



export interface HotSpotProfileModel {
  name: string;
  dnsName: string;
  limit: string;
}

export interface HotSpotServiceModel {
  name: string;
  hotSpotProfileModel: HotSpotProfileModel;
}



