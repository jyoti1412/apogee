import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count = 0;
  public data: any[] = [
    [{
      gate: 'GATE 1',
      title: 'Current In',
      number: 100,
      backgroudColor: 'yellow'
    },
    {
      gate: 'GATE 2',
      title: 'Current Out',
      number: 200,
      backgroudColor: 'red'
    },
    {
      gate: 'GATE 3',
      title: 'Voltage In',
      number: 300,
      backgroudColor: 'green'
    },
    {
      gate: 'GATE 4',
      title: 'Voltage Out',
      number: 400,
      backgroudColor: 'black'
    }],

    [{
      gate: 'GATE 1',
      title: 'Current In',
      number: 100,
      backgroudColor: 'yellow'
    },
    {
      gate: 'GATE 2',
      title: 'Current Out',
      number: 200,
      backgroudColor: 'red'
    },
    {
      gate: 'GATE 3',
      title: 'Voltage In',
      number: 300,
      backgroudColor: 'green'
    },
    {
      gate: 'GATE 4',
      title: 'Voltage Out',
      number: 400,
      backgroudColor: 'black'
    }],
    [{
      gate: 'GATE 1',
      title: 'Current In',
      number: 100,
      backgroudColor: 'yellow'
    },
    {
      gate: 'GATE 2',
      title: 'Current Out',
      number: 200,
      backgroudColor: 'red'
    },
    {
      gate: 'GATE 3',
      title: 'Voltage In',
      number: 300,
      backgroudColor: 'green'
    },
    {
      gate: 'GATE 4',
      title: 'Voltage Out',
      number: 400,
      backgroudColor: 'black'
    }]

  ]


  public finalData = [
    {
      gate: 'GATE 1',
      title: 'Current In',
      number: 100,
      backgroudColor: 'yellow'
    },
     {
      gate: 'GATE 4',
      title: 'Voltage Out',
      number: 400,
      backgroudColor: 'yellow'
    },
    {
     gate: 'GATE 4',
     title: 'Voltage Out',
     number: 400,
     backgroudColor: 'yellow'
   }
  ];

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      debugger
      ++this.count;
      if (this.count > 3) this.count = 0;

      [0,1, 2].forEach((i, index) => {
        this.finalData[i] = this.data[i][this.count];
      })

    }, 1000)

  }

}
