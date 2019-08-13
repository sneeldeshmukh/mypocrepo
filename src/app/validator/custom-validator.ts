
import { AbstractControl} from '@angular/forms';

export class CustomValidator {


    onlyNumberValidator(control: AbstractControl) {
        if (!control.value) {
            return null;
        }
        const REGEX = /[0-9]+/;
        const valid = REGEX.test(control.value);
        return valid ? null : { invalid: true};
    }
}
