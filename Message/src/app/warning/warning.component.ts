import{ Component} from'@angular/core';
@Component({
  selector: 'app-warning',
  template: 'Warning! Something is wrong!',
  styles:[':host{border: 1px solid white;background: orange;text-align: center;width: 25%;border-radius: 3px;}']
})
export class WarningComponent{
  constructor() {}
}
