import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit{

  
  get teams(){
    return this.teamService.teams;
  }
  constructor(private teamService: TeamService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.teamService.getTeamsFromServer().subscribe((teams)=>{
      this.teamService.teams = teams;
    })
  }

}
