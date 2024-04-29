import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";


import { Story, serverURL } from "../interfaces";


@Injectable({
  providedIn: "root",
})
export class StoryService {
  public stories: Story[] = [];

  constructor(private http: HttpClient) {}
  
  getStoriesFromServer() {
    return this.http.get<any>(
      `${serverURL}stories`,
      
    );
  }
}