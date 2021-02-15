import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services';
import { Select, Store } from '@ngxs/store';
import { Login } from '../../state/auth.action';
import { AuthState } from '../../state/auth.state';
import { Observable } from 'rxjs';

const PASSWORD_MIN_LENGTH = 6;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  hide = true;
  form: FormGroup = new FormGroup({});

  @Select(AuthState.getLoginStatus)
  status$!: Observable<string>;

  constructor(private fb: FormBuilder, private notificationService: NotificationService, private store: Store) {}

  ngOnInit(): void {
    this.generateForm();
  }

  forgotPass(): void {
    this.notificationService.openSnackBar('default', 5);
  }

  login(): void {
    this.store.dispatch(new Login(this.form.value));
  }

  private generateForm(): void {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          ),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(PASSWORD_MIN_LENGTH)]],
    });
  }
}
