import { Component, OnInit } from '@angular/core';
import { Phones } from 'src/app/classes/phones';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
phones: Array<Phones>=[]
ngOnInit(): void {
  this.phones=[{code:123, name:"miriam", kosher:true,pic:"uytfr"},{code:234,name:"chana",kosher:false, pic:"cccc"}]
}
morethen5()
{
  alert("ראיתי את הקובץ שיש בו יותר מ5 משתתפים")
}
}
