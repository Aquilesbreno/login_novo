import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AutenticaProvider {
  public month: any;
  public day: any;
  public year: any;
  private PATH = 'users/';
  rootPage: any = 'HomePage';


  constructor(public auth: AngularFireAuth,
    public db: AngularFireDatabase) {

  }

  createAccount(user: any){}

  public login(user: any){}

  public forgotEmail(email: string){}

  private handlerError(error: any) {
    let message = '';
    if (error.code == 'auth/email-already-in-use') {
      message = 'O e-mail informado já está sendo usado.';
    } else if (error.code == 'auth/invalid-email') {
      message = 'O e-mail informado é inválido.';
    } else if (error.code == 'auth/weak-password') {
      message = 'A senha informada é muito fraca.';
    } else if (error.code == 'auth/user-not-found') {
      message = 'Usuário não encontrado.';
    } else if (error.code == 'auth/wrong-password') {
      message = 'Usuário/senha inválido(s).';
    } else {
      message = 'Ocorreu algum erro, por favor tente novamente.';
    }

    return message;
  }


}
