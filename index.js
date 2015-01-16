
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
      {name:'一包', img:'./images/2599.jpg',
      	 mood: '難過+失望', text:'難過的時候，咬一咬「一包」，心情好點了嗎?'},

      {name:'二包', img:'./images/2600.jpg',
      	 mood: '開心'},
      
      {name:'三包', img:'./images/2603.jpg',
        mood: '開心'},
      

      {name:'起司麵包', img:'./images/2527.jpg'},
      mood: '悠閒'

      /* 請修改名字，並加入心情 */

    ]

  });


  angular.extend($scope, { 
  	getBread: function(){
  		var k = $scope.key;
  		var ls = $scope.breads.filter(function(o){
  			var m = o.mood;
  			return !k || (m && m.indexOf(k) > -1);
  		})

  		return ls[0] || {'name': '對不起，找不到'};
  	}
  });
}
