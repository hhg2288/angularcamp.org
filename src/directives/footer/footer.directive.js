import './footer.css';
import template from './footer.html';

export const footerDirective = () => {
	return {
		template,
		restrict: 'E',
		scope: {},
		replace: true
	};
};
