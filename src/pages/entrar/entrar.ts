import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticaProvider } from './../../providers/autentica/autentica';
import {AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-entrar',
  templateUrl: 'entrar.html',
})
export class EntrarPage {

     form: FormGroup;
     userName: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private aut: AutenticaProvider,
              private auth: AngularFireAuth,
              private toast: ToastController,
              private formBuilder: FormBuilder){

              this.creatForm();



  }

  private creatForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  sair(){
    this.auth.auth.signOut();
      const userState = this.auth.authState.subscribe(user =>{
        if (!user){
          this.userName = '';
          this.navCtrl.setRoot('HomePage');
          userState.unsubscribe();
        }
      })


  }








  }
