import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public modalThanks: any;
  public submit: boolean;
  @ViewChild('thanks') thanks!: TemplateRef<any>;
  constructor(private dialog: MatDialog,) { this.submit = false; }

  ngOnInit(): void {
  }
  openDialog() {
    let width = '';
    if (window.innerWidth > 992) {
      width = '712px';
    } else {
      width = '315px';
    }
    this.modalThanks = this.dialog.open(this.thanks, {
      maxWidth: width,
      width: '100%',
      disableClose: false,
    });
    this.modalThanks.afterClosed().subscribe((result: undefined) => {
      
    });
  }

  close() {
    this.modalThanks.close();
  }
}
