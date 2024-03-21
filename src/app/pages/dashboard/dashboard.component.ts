import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  completedProjectsCount: number = 0;
  runningProjectsCount:number=0;
  membersCount: number = 0;
  clientsCount: number = 0;
  constructor(){}
  ngOnInit(): void {
    this.incrementProjectCount();
    this.incrementClientCount();
    this.incrementMemberCount();
    this.incrementClientsCount();
  }

  incrementProjectCount() {
    this.completedProjectsCount++;
    if(this.completedProjectsCount < 50){
      setTimeout(() => {
        this.incrementProjectCount();
      }, 50);
    }
  }

  incrementClientCount() {
    this.runningProjectsCount++;
    if(this.runningProjectsCount < 100){
      setTimeout(() => {
        this.incrementClientCount();
      }, 50);
    }
  }

  incrementMemberCount(){
    this.membersCount++;
    if(this.membersCount < 200){
      setTimeout(() => {
        this.incrementMemberCount();
      }, 25);
    }
  }

  incrementClientsCount(){
    this.clientsCount++;
    if(this.clientsCount < 200){
      setTimeout(() => {
        this.incrementClientsCount();
      }, 25);
    }
  }
}
