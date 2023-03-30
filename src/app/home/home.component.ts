import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public modalThanks: any;
  public submit: boolean;
  @ViewChild('thanks') thanks!: TemplateRef<any>;
  constructor(
    private dialog: MatDialog
    ){
    this.submit = false;
  }

  ngOnInit(): void {}
  openDialog() {
    const dialog = this.modalThanks.open(this.dialog, {
      width: '850px',
      height: 'auto',
      disableClose: false,
    });
  }

  close() {
    this.modalThanks.close();
  }
}
