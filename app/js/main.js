var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  	
  	//array categorys
    $scope.categorys = [
      {
        name : 'Chef-kok'
      },
      {
        name : 'Zelfstading werken-kok/sous-chef'
      },
      {
        name : 'Indiase-kok'
      },
      {
        name : 'chef-kok/zelfstading werkend kok'
      },
      {
        name: 'leerling kok'
      }
        
    ],

    $scope.categorys2 = [
      {
        name : 'Franse-kok'
      },
      {
        name : 'Zelfstading werken-kok'
      },
      {
        name : 'Chinese-kok'
      },
      {
        name : 'Thaise-kok'
      },
      {
        name: 'russian-kok'
      }
        
    ]
    
    // function add user
    $scope.addCategory = function(){
      $scope.errortext = "";
      if (!$scope.searchcategory) {return;}
       if ($scope.categorys.indexOf($scope.searchcategory) == -1) {
        $scope.categorys.unshift({
          name: $scope.searchcategory
        });
        $scope.searchcategory = '';
      } else {
        $scope.errortext = "This category already exists.";
      }
}
    


    $scope.save = function(index) {
        $scope.categorys = $scope.categorys.filter(c => {return c.checked});
}



    // function remove user
    $scope.removeCategory = function(index){
      $scope.categorys.splice(index, 1);
    }
    
    // function when you click on user
    $scope.profile = function(index){
      alert("you click on "+ $scope.categorys[index].name+" profile");
    }

     $scope.cancelCategory = function() {
        $scope.searchcategory = '';
     }

     $scope.addToLeft = function(index) {
      $scope.categorys.push({
        name: $scope.categorys2[index].name
      });
      $scope.categorys2.splice(index, 1);
     }

/* //prva zamisao 
     $scope.moveUp = function(){
       var tmpArr = [];
       // i ide do predzadnjeg
       for(let i = 0; i < $scope.categorys.length; i++) {
          if($scope.categorys[i].checked === true) {
            var prev = tmpArr.pop();
            tmpArr.push($scope.categorys[i]);
            if(prev)
              tmpArr.push(prev);
         } else {
           tmpArr.push($scope.categorys[i]);
         } 
       }
         $scope.categorys = tmpArr;
     }

     */

     $scope.moveUpSkroz = function(){
       var tmpArr = [];
       // i ide do predzadnjeg
       for(let i = 0; i <= $scope.categorys.length - 1; i++) {
          if($scope.categorys[i].checked  && $scope.categorys[i-1] && !$scope.categorys[i-1].checked) {
            var prev = tmpArr.pop();
            tmpArr.unshift($scope.categorys[i]);
            if(prev)
              tmpArr.push(prev);
         } else {
           tmpArr.push($scope.categorys[i]);
         } 
       }
         $scope.categorys = tmpArr;
     }

$scope.moveUp = function(){
       for(let i = 0; i <= $scope.categorys.length - 1;  i++) {
         if($scope.categorys[i].checked && $scope.categorys[i-1] && !$scope.categorys[i-1].checked) {
           let tmp = $scope.categorys[i-1];
           $scope.categorys[i-1] = $scope.categorys[i];
           $scope.categorys[i] = tmp;
         }
       }
     }


$scope.moveDown = function(){
       for(let i = $scope.categorys.length - 1; i >= 0; i--) {
         if($scope.categorys[i].checked && $scope.categorys[i+1] && !$scope.categorys[i+1].checked) {
           let tmp = $scope.categorys[i+1];
           $scope.categorys[i+1] = $scope.categorys[i];
           $scope.categorys[i] = tmp;
         }
       }
     }

 $scope.moveDownSkroz = function(){
       var tmpArr = [];
       for(let i = $scope.categorys.length - 1; i >= 0 ; i--) {
          if($scope.categorys[i].checked === true && $scope.categorys[i+1] && !$scope.categorys[i+1].checked) {
            var next = tmpArr.shift();
            tmpArr.push($scope.categorys[i]);
            if(next)
              tmpArr.unshift(next);
         } else {
           tmpArr.unshift($scope.categorys[i]);
         } 
       }
         $scope.categorys = tmpArr;
     }




});