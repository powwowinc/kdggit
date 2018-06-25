/***  Generated file, do not change.  */
import { MenuComponent } from './menu/menu';
import { login_PhonePortrait } from '../pages/login/PhonePortrait/login';
import { categorylistview_PhonePortrait } from '../pages/categorylistview/PhonePortrait/categorylistview';
export class Screens {
  static declarations = [
    MenuComponent,
    login_PhonePortrait,
    categorylistview_PhonePortrait
  ];
  static mapping = {
    'login': {
      PhonePortrait: login_PhonePortrait
    },
    'categorylistview': {
      PhonePortrait: categorylistview_PhonePortrait
    }
  }
}