app.controller('mmmCtrl', function($scope) {
	$scope.numbers = '';
	$scope.calculate = function() {
		var numArr = $scope.numbers.split(',');
		document.getElementById("mean").innerHTML = $scope.mean(numArr);
		document.getElementById("median").innerHTML = $scope.median(numArr);
		document.getElementById("mode").innerHTML = $scope.mode(numArr);
	}

	$scope.mean = function(numArr) {
		var total = 0;
		for(var i = 0; i<numArr.length; i++) {
			total += parseFloat(numArr[i]);
		}
		return total/numArr.length
	}
	
	$scope.median = function(numArr) {
		var median = 0;
		numArr.sort(function (a,b){return a - b})
		if(numArr.length % 2 === 0) {
			median = (parseFloat(numArr[numArr.length / 2 - 1]) + parseFloat(numArr[numArr.length / 2])) / 2;
		} 
		else {
			median = parseFloat(numArr[(numArr.length - 1) / 2]);
		}
		return median;
	}

	$scope.mode = function(numArr) {
		var counter = [];
		var mode = [];
		var max = 0;
		for (var i in numArr) {
			if (counter[numArr[i]] === undefined)
				counter[numArr[i]] = 0;
			counter[numArr[i]]++;

			if (counter[numArr[i]] == max) { 
				mode.push(numArr[i]);
			}
			if (counter[numArr[i]] > max) {
				max = counter[numArr[i]];
				mode = [numArr[i]];
			}
		}
		return mode;
	}
	
})