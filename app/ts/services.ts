'use strict';

/* Services */
class PhoneService {
  static $inject = ['$resource'];
  constructor(private $resource: ng.resource.IResourceService) { }

  resource = this.$resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
}

var phonecatServices: ng.IModule = angular.module('phonecatServices', ['ngResource']);

phonecatServices.service('Phone', PhoneService);
