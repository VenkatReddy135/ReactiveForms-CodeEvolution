import { Component } from '@angular/core';
import { FormControl,FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  submitted;
  constructor(private fb:FormBuilder){
     
  }
  // registrationForm=new FormGroup({
  //   username:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmpassword:new FormControl(''),
  //   address: new FormGroup({
  //     city:new FormControl(''),
  //     place:new FormControl('')
  //   })
  // })
  // loadData(){
  //   this.registrationForm.patchValue({
  //     username:"venkat",
  //     password:1234,
  //     confirmpassword:1234,
  //     address:{
  //     city:"hyderabad",
  //     }
  //   })
  // }

  registrationForm=this.fb.group({
    username:['VenkatReddy',Validators.required],
    password:['',Validators.required],
    Cpassword:['',Validators.required]
  })
onSubmit(m){
  alert("Form has has has been Submitted");
  console.log(m);
  this.submitted=true;

}
get f(){
  return this.registrationForm.controls
}


}
