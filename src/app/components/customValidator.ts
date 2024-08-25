import { ValidatorFn, AbstractControl, ValidationErrors, AsyncValidator, AsyncValidatorFn } from "@angular/forms";

export class CustomValidator{

    static matchPasswords(password: string, confirmPassword: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const passwordControl = control.get(password);
            const confirmPasswordControl = control.get(confirmPassword);
            return passwordControl && confirmPasswordControl && passwordControl.value === confirmPasswordControl.value ? null : { mismatch: true };
        }
    }
    }