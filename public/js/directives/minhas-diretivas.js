angular.module('minhasDiretivas', [])
.directive('meuPainel', function()
{
	var ddo = {};

	ddo.restrictive = "AE";

	ddo.scope =
	{
		titulo: '@'
		//É o mesmo que titulo: '@titulo'
	}

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})
.directive('minhaFoto', function()
{
	var ddo = {};

	ddo.restrictive = "AE";

	ddo.scope =
	{
		titulo: '@',
		url: '@'
	}

	ddo.templateUrl = 'js/directives/minha-foto.html';

	return ddo;
})
.directive('meuBotaoPerigo', function()
{
	var ddo = {}
	ddo.restrictive = "E";
	ddo.scope =
	{
		nome: '@',
		acao: '&'
	}

	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>'
	return ddo;
})
.directive('meuFocus', function()
{
	var ddo = {}
		
	ddo.restrictive = "A";
	
	ddo.link = function(scope, element)
	{
		scope.$on('fotoCadastrada', function()
		{
			element[0].focus();
		});
	}

	return ddo;
})