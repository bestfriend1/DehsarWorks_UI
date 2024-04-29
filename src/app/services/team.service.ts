import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";


import { Team, serverURL } from "../interfaces";


@Injectable({
  providedIn: "root",
})
export class TeamService {
  public teams: Team[] = [];

  constructor(private http: HttpClient) {}

  getTeamsFromServer() {
    return this.http.get<any>(
      `${serverURL}teams`
    );
  }
}