angular.module('dreampicker.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('BrowserCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleProjects = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('TodoCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.tasks = [
    { title: '菜鸟教程' },
    { title: 'www.runoob.com' },
    { title: '菜鸟教程' },
    { title: 'www.runoob.com' }
  ];
  $scope.toggleProjects = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
