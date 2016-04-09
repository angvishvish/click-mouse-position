'use strict';

describe('myApp.click module', function() {

  beforeEach(module('myApp.click'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('ClickCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});