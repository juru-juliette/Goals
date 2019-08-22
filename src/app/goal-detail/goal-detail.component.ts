// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-goal-detail',
//   templateUrl: './goal-detail.component.html',
//   styleUrls: ['./goal-detail.component.css']
// })
// export class GoalDetailComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
//---------------------
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})

export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();
  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  //---------------Deleting Goals
    goalDelete(complete:boolean){
      this.isComplete.emit(complete);
    }
  
  constructor() { }

  ngOnInit() {
  }

}