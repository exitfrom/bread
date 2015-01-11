
angular.module("breadApp",[])
.controller("myCtrl", myCtrl)

function myCtrl ($scope) {

  // models 資料
  angular.extend($scope, {  
  	moods: [
    '困惑',
    '生氣',
    '開心',
    '難過',
    '失望',
    '無聊',
    '忌妒',
    '悠閒',
    '情傷',
    ],
    
    breads: [
      {name:'', img:'', mood: ''},
      {},
      {}

      /*  ENTER YOUR DATA HERE USING A LIST OF OBJECTS  */
    ]

  });

}
