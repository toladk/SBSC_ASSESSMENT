import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from 'src/app/components/services/main.service';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm!: FormGroup

  userList: any[] = [];

  isSpinning = false;
  isSpinningSubmit = false;
  fullName: any;
  updateId: any;

  p!: number;
  itemsPerPage = 6;
  totalItems: any;

  constructor(
    private mainService: MainService,
    private toast: HotToastService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      job: ['', Validators.required]
    });

    this.getAllUsers();

  }

  getAllUsers(): void{
    this.isSpinning = true;
    this.mainService.getAllUsersTest().subscribe((result: any) => {
      if(result.data){
        this.userList = result.data;
        this.totalItems = result.total;
        this.isSpinning = false;
      }
    }, error => {
      this.toast.error(error.error.error, { position: 'top-right', style: { padding: '16px', color: '#000'}});
      this.isSpinning = false;
    })
  }

  getAllUserPaginated(page: any): void{
    this.isSpinning = true;
    this.mainService.getAllUsersPaginated( page, this.itemsPerPage).subscribe((result: any) => {
      if(result.data){
        this.userList = result.data;
        this.isSpinning = false;
      }
    }, error => {
      this.toast.error(error.error.error, { position: 'top-right', style: { padding: '16px', color: '#000'}});
      this.isSpinning = false;
    })
  }

  openAdd(addUser: any): void{
    this.modalService.open(addUser, {centered: true, scrollable: true, size: 'md'})
  }
  close(): void{
    this.modalService.dismissAll();
    this.userForm.reset();
  }

  addUserSubmit(): void{
    this.isSpinningSubmit = true;
    this.mainService.addUser(this.userForm.value).subscribe((result: any) => {
      if(result.createdAt){
        this.toast.success('User Created Successfully !!', { position: 'top-right', style: { padding: '16px', color: '#000'}});
        this.close()
        this.isSpinningSubmit = false;
        this.getAllUsers()
      }
    }, error => {
      this.toast.error(error.error.error, { position: 'top-right', style: { padding: '16px', color: '#000'}});
      this.isSpinningSubmit = false;
    })
  }

  openUpdate(updateUser: any, id: any): void{
    this.updateId = id;
    this.isSpinningSubmit = true;
    this.modalService.open(updateUser, {centered: true, scrollable: true, size: 'md'})
    this.mainService.getUserTest(id).subscribe((result: any) => {
      if(result.data){
        this.fullName = `${result.data.first_name} ${result.data.last_name}`;
        this.isSpinningSubmit = false;
      }
    }, error => {
      this.toast.error(error.error.error, { position: 'top-right', style: { padding: '16px', color: '#000'}});
      this.isSpinningSubmit = false;
    })
  }
  close2(): void{
    this.modalService.dismissAll();
    this.userForm.reset();
  }

  updateUserSubmit(): void{
    this.isSpinningSubmit = true;
    this.mainService.updateUser(this.userForm.value, this.updateId).subscribe((result: any) => {
      if (result.updatedAt){
        this.toast.success('User Updated Successfully !!', { position: 'top-right', style: { padding: '16px', color: '#000'}});
        this.close2()
        this.isSpinningSubmit = false;
        this.getAllUsers()
      }
    }, error => {
      this.toast.error(error.error.error, { position: 'top-right', style: { padding: '16px', color: '#000'}});
      this.isSpinningSubmit = false;
    })
  }

  deleteUser(id: any): void{
    this.isSpinning = true;
    this.mainService.deleteUser(id).subscribe((result: any) => {
      this.toast.success('User Deleted Successfully !!', { position: 'top-right', style: { padding: '16px', color: '#000'}});
      this.isSpinning = false;
      this.getAllUsers()
    }, error => {
      this.toast.error(error.error.error, { position: 'top-right', style: { padding: '16px', color: '#000'}});
      this.isSpinning = false;
    })
  }

}
