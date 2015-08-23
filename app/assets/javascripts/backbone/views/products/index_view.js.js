(function() {
  var _base, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (_base = WiserTest.Views).Products || (_base.Products = {});

  WiserTest.Views.Products.IndexView = (function(_super) {
    __extends(IndexView, _super);

    function IndexView() {
      this.render = __bind(this.render, this);
      this.filterCat = __bind(this.filterCat, this);
      this.addOne = __bind(this.addOne, this);
      this.addAll = __bind(this.addAll, this);      _ref = IndexView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    IndexView.prototype.template = JST["backbone/templates/products/index"];

    IndexView.prototype.events = {
      "submit #find-category": "filterCat"
    };

    IndexView.prototype.initialize = function() {
      return this.collection.bind('reset', this.addAll);
    };

    IndexView.prototype.addAll = function() {
      return this.collection.each(this.addOne);
    };

    IndexView.prototype.addOne = function(product) {
      var view;

      view = new WiserTest.Views.Products.ProductView({
        model: product
      });
      return this.$("tbody").append(view.render().el);
    };

    IndexView.prototype.filterCat = function(e) {
      var catName;

      e.preventDefault();
      e.stopPropagation();
      catName = this.$el.find("#categoryname").val();
      this.$("tbody").html('');
      this.collection.url = '/products?category=' + catName;
      return this.collection.fetch({
        reset: true
      });
    };

    IndexView.prototype.render = function() {
      this.$el.html(this.template({
        products: this.collection.toJSON()
      }));
      this.addAll();
      return this;
    };

    return IndexView;

  })(Backbone.View);

}).call(this);
