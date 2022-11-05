import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kmi',
  templateUrl: './kmi.component.html',
  styleUrls: ['./kmi.component.css']
})
export class KmiComponent implements OnInit {
  public talpa:number|null = null;
  public greitis:number|null = null;
  public laikas:number|null = null;
  public kmi = "";
  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuok(){
    if (this.talpa!=null && this.greitis!=null && this.laikas!=null){
      this.kmi=((((this.greitis*this.laikas)/this.talpa))*100).toFixed(2);
    }
  }

}
