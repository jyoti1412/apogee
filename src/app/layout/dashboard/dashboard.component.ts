import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var flip = 0;
    $(document).ready(function() {
    
         setInterval(function() { 
            flip=flip+1;
            $(".flipcard").hide();
            $("#card"+flip).show();
            if(flip==4) {
              flip=0;
            }
    
         }, 1000);
        });

  }



  
}
