import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticaProvider } from './../../providers/autentica/autentica';

/**
 * Generated class for the BemvindoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bemvindo',
  templateUrl: 'bemvindo.html',
})
export class BemvindoPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BemvindoPage');
  }

}
