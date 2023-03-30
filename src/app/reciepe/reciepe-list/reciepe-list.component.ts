import { Component, OnInit } from '@angular/core';

import { Reciepes } from '../reciepe.model';


@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {
reciepes: Reciepes[]=[
  new Reciepes('A Test reciepie','Thia is simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  new Reciepes('A Test reciepie','Thia is simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
];
  constructor() {

   }

  ngOnInit(): void {
  }

}
