
angular.module("breadApp",[])
.controller("myCtrl", myCtrl)

function myCtrl ($scope) {

  // models 資料
  angular.extend($scope, {  
    breads: [
      
      {name:'', img:'', mood: ''},
      {},
      {}

      /*  ENTER YOUR DATA HERE USING A LIST OF OBJECTS  */
    ]

  });

}
