class WiserTest.Routers.ProductsRouter extends Backbone.Router
  initialize: (options) ->
    @products = new WiserTest.Collections.ProductsCollection()
   

  routes:
    ""        : "index"
    "new"      : "newProduct"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
   

  newProduct: ->
    @view = new WiserTest.Views.Products.NewView(collection: @products)
    $("#products").html(@view.render().el)

  index: ->
    @products.fetch({reset: true})
    @view = new WiserTest.Views.Products.IndexView(collection: @products)
    $("#products").html(@view.render().el)

  show: (id) ->
    product = @products.get(id)

    @view = new WiserTest.Views.Products.ShowView(model: product)
    $("#products").html(@view.render().el)

  edit: (id) ->
    product = @products.get(id)

    @view = new WiserTest.Views.Products.EditView(model: product)
    $("#products").html(@view.render().el)
