var app = app || angular.module('myapp', ['ui.router']);
app.controller('foodCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	$('.all').addClass('divheight');
	$scope.cardInfo = [
		{
			cardid:'card1',
			img: '../img/1.jpg',
			date: '19',
			month: '四月',
			color: '#fa2163',
			category: 'FOOD',
			title: '草莓真好吃',
			subtitle: '我超级想吃草莓！',
			description: '正文的详细内容描述，草莓的具体种植方法以及...',
			time: '10分钟前',
			praiseNum: '328 赞',
			article: '每次做蛋挞只取蛋黄，蛋清总是浪费，索性就用全蛋做啦～也是灰常好吃哒～总结下大家的问题：全蛋可以换成4个蛋黄，口感灰常好。②烤箱一定要提前预热，一般5-10分钟提前打开烤箱， 调整温度。③大一些的烤箱放在烤箱中层，30升以下烤箱放在底层（参考建议，根据自己的烤箱定）。④全程用一个手动打蛋器就搞定了，所以一定要动作轻。。。动作轻。。动作轻。。每次混合的时候不要过度，不要打出太多的气泡。⑤每个烤箱的温度脾气不同，有180°烤25分钟，也有200°烤的，第一次烘烤一定要观察蛋挞颜色，蛋挞中间的黑点是“美人点”正常情况不要着急拿出来，熟的状态要观察皮的颜色，微黄即可。⑥蛋挞液一定要倒满，9分满，9分满，9分满。（烤盘底下垫油纸或者油布，保护烤盘，另外方便清洗。。）最后ps：一定要按照顺序放原料噢~ 各种步骤准确的情况下，烤出来的蛋挞才会表皮酥脆，内心柔软，美人点均匀，表皮光亮~ 蛋挞是烘焙入门第一课，祝大家成功~',
			notPraise: '../img/zan.png',
			isPraise: '../img/yizan.png',
			praisenum: '328',
			addpraise: '+1',
			deletepraise: '-1',
			isHover: false,
			isAnimation: false,
			isHovers: true,
			isHoverss: false
		}, {
			cardid:'card2',
			img: '../img/1.jpg',
			date: '20',
			month: '四月',
			color: '#fa2163',
			category: 'FOOD',
			title: '草莓真好吃',
			subtitle: '我超级想吃草莓！',
			description: '正文的详细内容描述，草莓的具体种植方法以及...',
			time: '10分钟前',
			praiseNum: '328 赞',
			article: '每次做蛋挞只取蛋黄，蛋清总是浪费，索性就用全蛋做啦～也是灰常好吃哒～总结下大家的问题：全蛋可以换成4个蛋黄，口感灰常好。②烤箱一定要提前预热，一般5-10分钟提前打开烤箱， 调整温度。③大一些的烤箱放在烤箱中层，30升以下烤箱放在底层（参考建议，根据自己的烤箱定）。④全程用一个手动打蛋器就搞定了，所以一定要动作轻。。。动作轻。。动作轻。。每次混合的时候不要过度，不要打出太多的气泡。⑤每个烤箱的温度脾气不同，有180°烤25分钟，也有200°烤的，第一次烘烤一定要观察蛋挞颜色，蛋挞中间的黑点是“美人点”正常情况不要着急拿出来，熟的状态要观察皮的颜色，微黄即可。⑥蛋挞液一定要倒满，9分满，9分满，9分满。（烤盘底下垫油纸或者油布，保护烤盘，另外方便清洗。。）最后ps：一定要按照顺序放原料噢~ 各种步骤准确的情况下，烤出来的蛋挞才会表皮酥脆，内心柔软，美人点均匀，表皮光亮~ 蛋挞是烘焙入门第一课，祝大家成功~',
			notPraise: '../img/zan.png',
			isPraise: '../img/yizan.png',
			praisenum: '328',
			addpraise: '+1',
			deletepraise: '-1',
			isHover: false,
			isAnimation: false,
			isHovers: true,
			isHoverss: false
		}, {
			cardid:'card3',
			img: '../img/1.jpg',
			date: '21',
			month: '四月',
			color: '#fa2163',
			category: 'FOOD',
			title: '草莓真好吃',
			subtitle: '我超级想吃草莓！',
			description: '正文的详细内容描述，草莓的具体种植方法以及...',
			time: '10分钟前',
			praiseNum: '328 赞',
			article: '每次做蛋挞只取蛋黄，蛋清总是浪费，索性就用全蛋做啦～也是灰常好吃哒～总结下大家的问题：全蛋可以换成4个蛋黄，口感灰常好。②烤箱一定要提前预热，一般5-10分钟提前打开烤箱， 调整温度。③大一些的烤箱放在烤箱中层，30升以下烤箱放在底层（参考建议，根据自己的烤箱定）。④全程用一个手动打蛋器就搞定了，所以一定要动作轻。。。动作轻。。动作轻。。每次混合的时候不要过度，不要打出太多的气泡。⑤每个烤箱的温度脾气不同，有180°烤25分钟，也有200°烤的，第一次烘烤一定要观察蛋挞颜色，蛋挞中间的黑点是“美人点”正常情况不要着急拿出来，熟的状态要观察皮的颜色，微黄即可。⑥蛋挞液一定要倒满，9分满，9分满，9分满。（烤盘底下垫油纸或者油布，保护烤盘，另外方便清洗。。）最后ps：一定要按照顺序放原料噢~ 各种步骤准确的情况下，烤出来的蛋挞才会表皮酥脆，内心柔软，美人点均匀，表皮光亮~ 蛋挞是烘焙入门第一课，祝大家成功~',
			notPraise: '../img/zan.png',
			isPraise: '../img/yizan.png',
			praisenum: '328',
			addpraise: '+1',
			deletepraise: '-1',
			isHover: false,
			isAnimation: false,
			isHovers: true,
			isHoverss: false
		}, {
			cardid:'card4',
			img: '../img/1.jpg',
			date: '22',
			month: '四月',
			color: '#fa2163',
			category: 'FOOD',
			title: '草莓真好吃',
			subtitle: '我超级想吃草莓！',
			description: '正文的详细内容描述，草莓的具体种植方法以及...',
			time: '10分钟前',
			praiseNum: '328 赞',
			article: '每次做蛋挞只取蛋黄，蛋清总是浪费，索性就用全蛋做啦～也是灰常好吃哒～总结下大家的问题：全蛋可以换成4个蛋黄，口感灰常好。②烤箱一定要提前预热，一般5-10分钟提前打开烤箱， 调整温度。③大一些的烤箱放在烤箱中层，30升以下烤箱放在底层（参考建议，根据自己的烤箱定）。④全程用一个手动打蛋器就搞定了，所以一定要动作轻。。。动作轻。。动作轻。。每次混合的时候不要过度，不要打出太多的气泡。⑤每个烤箱的温度脾气不同，有180°烤25分钟，也有200°烤的，第一次烘烤一定要观察蛋挞颜色，蛋挞中间的黑点是“美人点”正常情况不要着急拿出来，熟的状态要观察皮的颜色，微黄即可。⑥蛋挞液一定要倒满，9分满，9分满，9分满。（烤盘底下垫油纸或者油布，保护烤盘，另外方便清洗。。）最后ps：一定要按照顺序放原料噢~ 各种步骤准确的情况下，烤出来的蛋挞才会表皮酥脆，内心柔软，美人点均匀，表皮光亮~ 蛋挞是烘焙入门第一课，祝大家成功~',
			notPraise: '../img/zan.png',
			isPraise: '../img/yizan.png',
			praisenum: '328',
			addpraise: '+1',
			deletepraise: '-1',
			isHover: false,
			isAnimation: false,
			isHovers: true,
			isHoverss: false
		}
	];
    $scope.pageNum = [0,1,2];  

    $scope.currentPage = 0;                       //设置当前页是 0

    $scope.setPage = function(num){             // 当点击页码数字时执行的函数
      $scope.currentPage = num;                 //将当前页 设置为 页码数
    }
    $scope.prevPage = function(){               //点击上一页执行的函数
  		if($scope.currentPage > 0){
  			$scope.currentPage--;
  		}
  	}
     $scope.nextPage = function(){              //点击下一页执行的函数
  		if ($scope.currentPage < 3){
  			$scope.currentPage++;
  		}
  	}
  	$scope.showarticle = function(e) {
		e.stopPropagation();  //防止冒泡
		e.preventDefault();   //防止默认行为
		var $this = $(e.target);
		var height = $('body').height() - $('#header').height() - $('#footer').height();
		$this.closest('.mask').siblings('.js-card-content').css({
			width: '100%',
			height: height,
			opacity: 1,
			zIndex: 1
		});
	};
	$scope.hidearticle = function(e) {
		e.stopPropagation();  //防止冒泡
		e.preventDefault();   //防止默认行为
		var $this = $(e.target);
		var $self = $this;
		$self.closest('.js-card-content').css({
			width: 0,
			height: 0,
			opacity: 0
		});
		setTimeout(function() {
			$self.closest('.js-card-content').css({
				zIndex: -9999
			});
		}, 0)
	};
	$scope.praiseit = function(e, index) {
		var item = $scope.cardInfo[index];
		if (item.notPraise === '../img/yizan.png') {

			item.isAnimation = false; // 变大
			item.isHover = false; // 数字变色
			item.notPraise = '../img/zan.png'; // 换图片
			item.addpraise = '-1';
			item.isHovers = false; // -1字的动画
			item.isHoverss = false; // -1字的颜色
			$timeout(function() {
				item.isHovers = true;
			}, 300);
			item.praisenum -= 1;
		} else {
			item.isAnimation = true;
			item.isHover = true;
			item.notPraise = '../img/yizan.png';
			item.addpraise = '+1';
			item.isHovers = false;
			item.isHoverss = true;
			$timeout(function() {
				item.isHovers = true;
			}, 300);
			item.praisenum = +item.praisenum + 1;
		}

		// var $this = $(e.target).closest('.praise_icon');
		// var $praise_img = $this.find(".praise-img");
		// var $box = $this.closest('.praise');
		// var $text_box = $box.find(".add-num");
		// var $praise_txt = $box.find(".praise-txt");
		// var num = parseInt($praise_txt.text(), 10);
		// if($praise_img.attr("src") == ("../img/yizan.png")){
		// 	$praise_img.removeClass('animation');
		// 	//praise_img.attr('src', '../img/zan.png');
		// 	$scope.cardInfo[index].isPraise = '../img/zan.png';
		// 	$scope.cardInfo[index].isHover = false;
		// 	// praise_txt.removeClass("hover");
		// 	$text_box.show().html("<em class='add-animation'>-1</em>");
		// 	$box.find(".add-animation").removeClass("hover");
		// 	num -=1;
		// 	$praise_txt.text(num)
		// }else{
		// 	// praise_img.attr('src', '../img/yizan.png');
		// 	$scope.cardInfo[index].isPraise = '../img/yizan.png';
		// 	// $praise_txt.addClass("hover");
		// 	$scope.cardInfo[index].isHover = true;
		// 	$praise_img.addClass('animation');
		// 	$text_box.show().html("<em class='add-animation'>+1</em>");
		// 	$box.find(".add-animation").addClass("hover");
		// 	num +=1;
		// 	$praise_txt.text(num)
		// }
	};

}]);


