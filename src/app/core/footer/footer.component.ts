import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  completedProjectsCount: number = 0;
  runningProjectsCount:number=0;
  membersCount: number = 0;
  clientsCount: number = 0;

  constructor() { }
  ngOnInit(): void {
    // Simulate loading data from API or other source
    // setTimeout(() => {
    //   this.completedProjectsCount = 50; // Update with your actual count
    //   this.membersCount = 100; // Update with your actual count
    //   this.clientsCount = 200;
    //   this.runningProjectsCount=200; // Update with your actual count
    // }, 5000); // Adjust the delay as per your preference
    this.incrementProjectCount();
    this.incrementClientCount();
    this.incrementMemberCount();
    this.incrementClientsCount();
  
  
  }

  // // Real-time counting animation
  // animateCounting(finalCount: number, increment: number, duration: number, target: string) {
  //   const interval = setInterval(() => {
  //     if (increment < finalCount) {
  //       increment += increment;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, duration / (finalCount / increment));
  // }

  // ngAfterViewInit(): void {
  //   this.animateCounting(50, 1, 1000, 'projectsCount'); // Example: Projects count
  //   this.animateCounting(100, 1, 1000, 'membersCount'); // Example: Members count
  //   this.animateCounting(200, 1, 1000, 'clientsCount'); // Example: Clients count
  // }

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
  incrementMemberCount()
  {
    this.membersCount++;
    if(this.membersCount < 200){

      setTimeout(() => {
        this.incrementMemberCount();
      }, 25);
    }

  }
  incrementClientsCount()
  {
    this.clientsCount++;
    if(this.clientsCount < 200){

      setTimeout(() => {
        this.incrementClientsCount();
      }, 25);
    }

  }


}

