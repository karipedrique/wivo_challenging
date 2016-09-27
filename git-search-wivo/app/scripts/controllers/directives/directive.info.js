angular.
module('gitSearchWivoApp.directives', [])
.directive('infoDetail', InfoDetail);

function InfoDetail(){
  var directive = {
      templateUrl: 'views/directives/directive.info.html',
      restrict: 'EA',
      scope: {detail: "=info", index: "@"},
      controller: InfoDetailCtrl,
      controllerAs: 'vm',
      bindToController: true
  };

  return directive;

  function InfoDetailCtrl($scope, $element,GitContentService, ContentService){
     var vm = this;
     vm.name = "";
     vm.email ="";
     vm.location = "";
     vm.followers  = -1;
     vm.markAsFavorite = markAsFavorite;
     getInfo();

     function getInfo(){
        checkMarked();
        GitContentService.getRowInfo(vm.detail.url).then(success,error);

        function success(response){
          if(response.data !== null){
            vm.name = response.data.name;
            vm.location = response.data.location;
            vm.email = response.data.email;
            vm.followers = response.data.followers;
          }
        }

        function error(response){
          console.log("error ",response);
        }
      }

      function checkMarked(){
       ContentService.isFavorite(vm.detail.login).then(success,error);

       function success(response) {
         if(response.data.response.favorite == 1){
           angular.element("#element_"+vm.index).removeClass("glyphicon-star-empty");
           angular.element("#element_"+vm.index).addClass("glyphicon-star");
         }
       }

       function error(response){
         console.log("error ",response);
       }
     }

     function markAsFavorite(){
          if(angular.element("#element_"+vm.index).hasClass("glyphicon-star-empty")){
            angular.element("#element_"+vm.index).removeClass("glyphicon-star-empty");
            angular.element("#element_"+vm.index).addClass("glyphicon-star");
            addFavorite();
            console.log("mark");
          }else{
            angular.element("#element_"+vm.index).removeClass("glyphicon-star");
            angular.element("#element_"+vm.index).addClass("glyphicon-star-empty");
            removeFavorite();
            console.log("unmark");
          }
        }

        function addFavorite(){
          jsonTosend ={
            "login": vm.detail.login,
            "email": vm.email,
            "location": vm.location,
            "followers": vm.followers,
            "avatar_url": vm.detail.avatar_url,
            "html_url": vm.detail.html_url
          };
          ContentService.addFavorite(jsonTosend).then(success,error);

          function success(response){
            if(response.data.response.status == 1){
              console.log("added successfully")
            }
          }

          function error(response){
            console.log("error ",response);
          }
        }

        function removeFavorite(){
          ContentService.removeFavorite(vm.detail.login).then(success,error);

          function success(response){
            if(response.data.response.status == 1){
              console.log("removed successfully")
            }
          }

          function error(response){
            console.log("error ",response);
          }
        }


   }
}
