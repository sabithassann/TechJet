import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth,private router : Router) { }



  //login method

  login(email : string,password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(res =>{
        localStorage.setItem('token','true');
        //this.router.navigate(['dashboard']);

        if (res.user) {
          if (res.user.emailVerified) {
            this.router.navigate(['dashboard']);
          } else {
            // Allow access to dashboard temporarily, prompt for verification
            alert('Please verify your email to access all features.');
            this.router.navigate(['dashboard']);
          }
        }

    },
    err =>{
          alert(err.message);
          this.router.navigate(['/login']);
    })
  }

  //register method

  register(email : string, password :string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
      alert('Registration Success');
       this.router.navigate(['/login']);
       this.sendEmailForVarification(res.user);
    },
    err =>{
      this.router.navigate(['/register']);
    })
  }


  //sign out
  logout(){
    this.fireauth.signOut().then(()=>{
   localStorage.removeItem('token');
   this.router.navigate(['/login']);

  },
  err=>{
      alert(err.message);
  })
  }


  forgotPassword(email : string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/varify-email']);
    },
    err =>{
      alert('Something went wrong');
    })

  }

  //for email varification

  sendEmailForVarification(user : any){



    this.fireauth.currentUser.then(currentUser => {
      if(currentUser){
        currentUser.sendEmailVerification()
          .then(() =>{
            this.router.navigate(['/verifyEmail']);
          })
          .catch((err: any) =>{
            alert('Something went wrong. Unable to send email to registered email.');
          });
      } else {
        alert('User not found.');
      }
    });
  }
}
