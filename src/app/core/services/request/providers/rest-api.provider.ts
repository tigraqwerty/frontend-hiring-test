import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { IAuth } from '@core/models/auth.interface';
import { IRequestProvider } from '@core/models/request-provider.interface';
import { IUser } from '@core/models/user.interface';
import { CallModel } from '@core/models/call.model';

export class RestAPIProvider implements IRequestProvider {
  constructor(private _httpClient: HttpClient) {}

  public auth(user: IAuth): Observable<{ access_token: string; user: IUser }> {
    let url = `${environment.apiURL.RestAPI}/auth/login`;
    return this._httpClient.post<{ access_token: string; user: IUser }>(
      url,
      user
    );
  }

  public refreshToken(): Observable<string> {
    let url = `${environment.apiURL.RestAPI}/auth/refresh-token`;
    return this._httpClient
      .post<{ access_token: string }>(url, {})
      .pipe(map((res) => res.access_token));
  }

  public getCalls(offset: number, limit: number): Observable<any> {
    let url = `${environment.apiURL.RestAPI}/calls?offset=${offset}&limit=${limit}`;
    return this._httpClient
      .get<{ nodes: CallModel[]; hasNextPage: boolean }>(url)
      .pipe(map((res) => ({ calls: res.nodes, hasNextPage: res.hasNextPage })));
  }

  public archiveCall(id: string): Observable<{ id: string }> {
    let url = `${environment.apiURL.RestAPI}/calls/${id}/archive`;
    return this._httpClient.put(url, {}).pipe(map((_) => ({ id })));
  }

  public getCallById(id: string): Observable<any> {
    let url = `${environment.apiURL.RestAPI}/calls/${id}`;
    return this._httpClient.get<CallModel>(url).pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    );
  }
}
