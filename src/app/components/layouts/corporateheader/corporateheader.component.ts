import { MainService } from 'src/app/components/services/main.service';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-corporateheader',
  templateUrl: './corporateheader.component.html',
  styleUrls: ['./corporateheader.component.css']
})
export class CorporateheaderComponent implements OnInit {
  userDetails: any;
  orgId: any;
  organizationDetails: any;
  loggedInUserId: any;
  imageFile: any;
  name: any;
  userEmail: any;

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.getUserDetails()
  }

  logout(): void{
    this.authService.logout();
  }

  async getUserDetails(): Promise<void>{
    this.loggedInUserId = localStorage.getItem('id');
    await this.mainService.getUserTest(this.loggedInUserId).toPromise().then((result: any) => {
      if (result.data) {
        this.imageFile = result.data.avatar;
        this.userEmail = result.data.email;
        this.name = `${result.data.first_name} ${result.data.last_name}`;
      } else {

      }
    }, error => {
      this.toast.error(error.error.responseMessage, { position: 'top-right', style: { padding: '16px', color: '#000'}});
    })
  }

}
