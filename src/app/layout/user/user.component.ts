import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  dtOptions: any = {};
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  

  openWindowCustomClass(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  public generatePDF() 
  { 
  var data = document.getElementById('contentToConvert'); 
  html2canvas(data).then(canvas => { 
  // Few necessary setting options 
  var imgWidth = 208; 
  var pageHeight = 295; 
  var imgHeight = canvas.height * imgWidth / canvas.width; 
  var heightLeft = imgHeight; 
  const contentDataURL = canvas.toDataURL('image/png') 
  let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF 
  var position = 0; 
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) 
  pdf.save('MYPdf.pdf'); // Generated PDF  
  }); 
  } 
  
 
  ngOnInit(): void {
    this.dtOptions = {
      // Use this attribute to enable the responsive extension
      responsive: true,
      columnDefs: [{
        targets: 1,
        render: function (data, type, row) {
          return data.length > 50 ? data.substr(0, 50) + '…' : data;
        },
      }, {
        targets: 2,
        // targets: '_all',
        orderable: false
      }]
    };
  }
}
