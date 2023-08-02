import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // public get background(): Object {
  //   return {
  //     '--background': `url('../../../assets/background/dark/background3.svg') no-repeat center center fixed`,
  //     'background-size': 'cover',
  //   };
  // }

  public loginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private navController: NavController
  ) {}

  ngOnInit() {}

  public async login() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    const valido = await this.loginService.login(email!, password!);
    if (valido) {
      this.navController.navigateRoot('/home/user', { animated: true });
    } else {
      //TODO Mostrar Alerta de usuario y contrasela no correctos
    }
  }
}
