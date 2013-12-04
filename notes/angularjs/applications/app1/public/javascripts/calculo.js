function calculoJS($scope){
	$scope.testing = function(){
		if($scope.option=="Base"){
			$scope.ch = parseFloat($scope.value) + 4;
		}else if($scope.option=="Total"){
			$scope.ch = parseFloat($scope.value) + 8;
		}else{
			alert('You have not used a parameter on the select field above, please, select one and try again!!')
			$scope.ch = '';
		}
		if($scope.value==null){
			alert('You have not used an amount, please, set one and try again!!')
			$scope.ch = '';
		}
	};
}
