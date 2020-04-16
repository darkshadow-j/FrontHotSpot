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
    return this.httpClient.get<Profiles[]>('http://localhost:8080/profiles');
  }

  public getRoutersList(): Observable<RouterModel[]> {
    return this.httpClient.get<RouterModel[]>('http://localhost:8080/router');
  }

  public addProfile(): Observable<Profiles> {
    const prof: Profiles = ({
      name: 'test',
      dnsName: 'ss',
      limit: 'ss',
    });
    console.log('dodaje');
    console.log('xxx' + prof.name);
    return this.httpClient.post<Profiles>('http://localhost:8080/profiles', prof);
  }

  public addRouter(router: RouterModel): Observable<RouterModel> {
    console.log(router);
    return this.httpClient.post < RouterModel > ('http://localhost:8080/router', router);
}


}

export interface Profiles {
  name: string;
  dnsName: string;
  limit: string;
}

export interface RouterModel {
  name: string;
  ipAdress: string;
  username: string;
  password: string;
}

