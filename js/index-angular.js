var ngapp = angular.module('app', []);

ngapp.controller('controller', ['$scope', '$http', function($scope, $http) {
    $scope.groups = [["黃○聿", "蔡○恩", "張○霖", "王○洋", "蕭○芙"], ["黃○穎", "黃○霖", "朱○誼", "龔○旭", "尤○安"],
                        ["謝○宇", "蕭○佑", "吳○臻", "陳○安", "吳○頡"], ["邱○瑜", "李○威", "陳○勳", "林○芮", "林○民"],
                        ["田○僖", "劉○亞", "胡○姍", "胡○豪", "劉○安"], ["謝○展", "許○傑", "許○翔", "趙○澄", "郭○容"],
                        ["柯○筠", "柯○謙", "張○維", "張○幃", "-"]];

    $scope.groups = []

    process_table_set($scope);
    gameitem_table_set($scope);



    function gameitem_table_set($scope) {

        var gameitem_table = new Array();

        var col1 = [
        "A",
        "B",
        "C"
        ];

        var col2 = [
        "投籃機器人",
        "mBot闖關競賽",
        "自走車避障比賽"
        ];


        var col3 = [
        "A-1",
        "B-1",
        "C-1"
        ];
        var col4 = [
        "A-2",
        "B-2",
        "C-2"
        ];
        var col5 = [
        "A-3",
        "B-3",
        "C-3"
        ];



        for (var i = 0 ; i < col1.length; i++) {
            var train = new Object();
            train.col1 = col1[i];
            train.col2 = col2[i];
            train.col3 = col3[i];
            train.col4 = col4[i];
            train.col5 = col5[i];

            gameitem_table.push(train);
        }
        $scope.gameitem_table = gameitem_table;

    }

    function process_table_set($socpe) {

    	var process_table = new Array();

    	var time = [
    	"8:00~10:00",
		"10:00~10:30",
		"10:30~12:00",
		"12:00~13:15",
		"13:15~16:15",
		"16:30~17:30",
		
		];

    	var item = [
    	"人員及機器人檢錄",
		"開幕式",
		"比賽開始(上午場)",
		"休息時間",
		"比賽開始(下午場)",
        "頒獎以及閉幕式",
    	];

    	for (var i = 0 ; i < time.length; i++) {
    		var train = new Object();
    		train.time = time[i];
    		train.item = item[i];
    		process_table.push(train);
    	}
    	$scope.process_table = process_table;

    }

}]);
