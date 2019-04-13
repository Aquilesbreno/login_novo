import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireAuth: AngularFireAuth) {
  }

  ionViewDidLoad(){
    const userState = this.angularFireAuth.authState.subscribe( user => {
      if(user){
        this.userName = user.displayName;
        userState.unsubscribe();
      }
    })
  }

  sair(){
    this.angularFireAuth.auth.signOut();
    this.userName='';
  }

  }
