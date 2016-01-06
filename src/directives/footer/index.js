import angular from 'angular';

import {footerDirective} from './footer.directive';

export const acFooter = angular.module('footer', []).directive('acFooter', footerDirective);
