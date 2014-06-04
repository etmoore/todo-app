
$(function() {

  //Keybindings
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  // create an object that handles basic utility tasks

  var util = {
    //create a unique id for each task
    uuid: function () {
      /*jshint bitwise:false */
      var i, random;
      var uuid = '';

      for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += '-';
        }
        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
      }
    pluralize: function (count, word) {
      return count === 1 ? word : word + 's';
    },
    //handle local storage
    store: function(){}
  };

  var App = {
    init: function(){},
    cacheElements: function(){},
    bindEvents: function(){},
    render: function(){},
    renderFooter: function(){},
    toggleAll: function(){},
    getActiveTodos: function(){},
    getCompletedTodos: function(){},
    getFilteredTodos: function(){},
    destroyCompleted: function(){},
    // accepts an element from inside the `.item` div and returns the corresponding index in the `todos` array
    indexFromEl: function(){},
    create: function(){},
    toggle: function(){},
    edit: function(){},
    editKeyup: function(){},
    update: function(){},
    destroy: function(){},
  }
}