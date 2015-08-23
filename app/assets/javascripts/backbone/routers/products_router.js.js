(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  WiserTest.Routers.ProductsRouter = (function(_super) {
    __extends(ProductsRouter, _super);

    function ProductsRouter() {
      _ref = ProductsRouter.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ProductsRouter.prototype.initialize = function(options) {
      return this.products = new WiserTest.Collections.ProductsCollection();
    };

    ProductsRouter.prototype.routes = {
      "": "index",
      "new": "newProduct",
      "index": "index",
      ":id/edit": "edit",
      ":id": "show"
    };

    ProductsRouter.prototype.newProduct = function() {
      this.view = new WiserTest.Views.Products.NewView({
        collection: this.products
      });
      return $("#products").html(this.view.render().el);
    };

    ProductsRouter.prototype.index = function() {
      this.products.fetch({
        reset: true
      });
      this.view = new WiserTest.Views.Products.IndexView({
        collection: this.products
      });
      return $("#products").html(this.view.render().el);
    };

    ProductsRouter.prototype.show = function(id) {
      var product;

      product = this.products.get(id);
      this.view = new WiserTest.Views.Products.ShowView({
        model: product
      });
      return $("#products").html(this.view.render().el);
    };

    ProductsRouter.prototype.edit = function(id) {
      var product;

      product = this.products.get(id);
      this.view = new WiserTest.Views.Products.EditView({
        model: product
      });
      return $("#products").html(this.view.render().el);
    };

    return ProductsRouter;

  })(Backbone.Router);

}).call(this);
