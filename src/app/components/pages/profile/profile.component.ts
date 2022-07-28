import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from 'src/app/components/services/main.service';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  updateForm!: FormGroup;

  loggedInUserId: any;
  imageFile: any;
  userEmail: any;
  name: any;

  isSpinning = false;
  showUpdate = false;
  longti: any;
  latt: any;
  placeDetails: any;

  constructor(
    private mainService: MainService,
    private toast: HotToastService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern('^[A-Za-z]*$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[A-Za-z]*$')]],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
    });

    this.getUserDetails();
    this.getLocation();

  }

  getLocation(): void{
    this.isSpinning = true;
    this.mainService.getPosition().then(pos=>
      {
        this.longti = pos.lng;
        this.latt = pos.lat;
         console.log('latt', this.longti, 'long', this.latt);

         this.mainService.getPlace(this.longti, this.latt).subscribe((result: any) => {
          this.placeDetails = result.address;
          this.isSpinning = false;
        })
      });

  }


  async getUserDetails(): Promise<void>{
    this.isSpinning = true;
    this.loggedInUserId = localStorage.getItem('id');
    await this.mainService.getUserTest(this.loggedInUserId).toPromise().then((result: any) => {
      this.updateForm.patchValue({...result.data});
      if (result.data) {
        this.imageFile = result.data.avatar;
        this.userEmail = result.data.email;
        this.name = `${result.data.first_name} ${result.data.last_name}`;


      } else {
        this.isSpinning = false;
      }
    }, error => {
      this.toast.error(error.error.responseMessage, { position: 'top-right', style: { padding: '16px', color: '#000'}});
      this.isSpinning = false;
    })
  }

  updateBtn(): void{
    this.showUpdate = true;
  }

  submitUpdate(): void{

  }

}
