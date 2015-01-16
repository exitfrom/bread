
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
    '迷惘',
    ],

    breads: [
      {name:'波羅麵包', img:'./images/2599.jpg',
      	 mood: '難過+失望', text:'天冷的時候吃著剛出爐的波蘿麵包會讓心中溫暖起來，如果你有某些事情讓心情有點sad建議要吃波蘿麵包（不管是不是剛吃爐的喔）'},

      {name:'奶酥吐司', img:'./images/2600.jpg',
      	 mood: '開心',text:'咬下去甜而不膩，吃完一口又想再吃一口，完全停不下來。'},
      {name:'起司吐司', img:'./images/2603.jpg',
        mood: '困惑',text:'裡面有濃濃的cheese，鹹香的口感，令人愛不釋手。'},

      {name:'鮮奶吐司', img:'./images/2527.jpg'},
      mood: '悠閒', text:'沒有內陷但其實每一口都已經蘊含在裡面了，每一口都是香醇濃郁，建議心情好的時候吃會感覺心情又更好的，當心情不好的時候吃，會感覺比較緩和一點。'},
      {name:'芋頭吐司', img:'./images/2600.jpg',
      	 mood: '迷惘+困惑',text:'吐司中有濃郁的芋頭香，用看的彷彿就可以感覺到芋頭在嘴裡融化，咬下去就感覺到喔~好好吃的芋頭喔~'},
      {name:'紅豆麵包', img:'./images/2603.jpg',
        mood: '無聊',text:'裡面滿滿的紅豆餡，咬下去，微甜的紅豆使你溫暖，直達你心窩。'},
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
