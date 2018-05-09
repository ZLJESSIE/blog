var app = angular.module('myapp', ['ui.router']);
app.controller('headerCtrl', function($scope, searchService) {
	$scope.service = searchService.service; 
});
app.directive('searchDirective', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/html/header.html'   //路径根据此指令所在html文件选择
	};
});
app.service('searchService', function() {
	this.service = function() {
		var openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.querySelector('.search'),
		inputSearch = searchContainer.querySelector('.search__input');

		function init() {
			openSearch();
			initEvents();	
		}

		function initEvents() {
			closeCtrl.addEventListener('click', closeSearch);
			document.addEventListener('keyup', function(ev) {
				// escape key.
				if( ev.keyCode == 27 ) {
					closeSearch();
				}
			});
		}

		function openSearch() {
			searchContainer.classList.add('search--open');
			inputSearch.focus();
		}

		function closeSearch() {
			searchContainer.classList.remove('search--open');
			inputSearch.blur();
			inputSearch.value = '';
		}

		init();
	}
});