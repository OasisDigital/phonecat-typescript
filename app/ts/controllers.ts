'use strict';

/* Controllers */
interface PhoneListScope extends ng.IScope {
  phones: ng.resource.IResourceArray<any>;
  orderProp: string;
}

class PhoneListCtrl {

  static $inject = ['$scope', 'Phone'];
  constructor(private $scope: PhoneListScope,
              private Phone: PhoneService) {
    $scope.phones = Phone.resource.query();
    $scope.orderProp = 'age';
  }
}

interface PhoneDetailRouteParams {
  phoneId: string;
}

interface PhoneDetails {
  images: Array<string>;
}

interface PhoneDetailScope extends ng.IScope {
  phone: ng.resource.IResource<any>;
  mainImageUrl: string;
  setImage: (url: string) => void;
}

class PhoneDetailCtrl {
  static $inject = ['$scope', '$routeParams', 'Phone'];
  constructor(private $scope: PhoneDetailScope,
              private $routeParams: PhoneDetailRouteParams,
              private Phone: PhoneService) {
    $scope.phone = Phone.resource.get({phoneId: $routeParams.phoneId}, function(phone: PhoneDetails) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl: string) {
      $scope.mainImageUrl = imageUrl;
    }
  }
}

var phonecatControllers: ng.IModule = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', PhoneListCtrl);

phonecatControllers.controller('PhoneDetailCtrl', PhoneDetailCtrl);
