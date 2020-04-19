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

  public getAllHSService(): Observable<HotSpotUsluga[]> {
    return this.httpClient.get<HotSpotUsluga[]>('http://localhost:8080/usluga');
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

  public getRoutersCount(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/router/count');
  }


  addHSUsluga(usluga: HotSpotUsluga) {
    return this.httpClient.post<HotSpotUsluga>('http://localhost:8080/usluga', usluga);
  }
  public getUnAvailableRouters(): Observable<Router[]> {
    return this.httpClient.get<Router[]>('http://localhost:8080/router/unavailable');
  }

  editOneProfile(prof: Profiles): Observable<Profiles> {
    return this.httpClient.put<Profiles>('http://localhost:8080/profile', prof);
  }
/*  deleteOneProfile(prof: Profiles): Observable<Profiles>{
    return this.httpClient.delete<Profiles>('http://localhost:8080/profile', prof.id);
  }*/

  getUserProfile(): Observable<UserProfile>{
    return this.httpClient.get<UserProfile>('http://localhost:8080/userprofile');
  }

  editUserProfile(prof: UserProfile) {
    return this.httpClient.put<Profiles>('http://localhost:8080/userprofile', prof);
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
  id?: number;
  name?: string;
  dnsName?: string;
  rateLimit?: string;
}

export interface RouterModel {
  name: string;
  ipAdress: string;
  username: string;
  password: string;
}

export interface HotSpotUsluga {
  id?: number;
  name: string;
  profile: Profiles;
}

export interface UserProfile {
  id?: number;
  name: string;
  sessionTimeout: string;
}




