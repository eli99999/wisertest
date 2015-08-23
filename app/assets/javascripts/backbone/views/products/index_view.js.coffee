WiserTest.Views.Products ||= {}

class WiserTest.Views.Products.IndexView extends Backbone.View
  template: JST["backbone/templates/products/index"]

  events: 
    "submit #find-category" : "filterCat"

  initialize: () ->
    @collection.bind('reset', @addAll)

  addAll: () =>
    @collection.each(@addOne)

  addOne: (product) =>
    view = new WiserTest.Views.Products.ProductView({model : product})
    @$("tbody").append(view.render().el)

  filterCat: (e) =>
    e.preventDefault()
    e.stopPropagation()
    catName = @$el.find("#categoryname").val()
    @$("tbody").html('')   
    @collection.url =  '/products?category=' + catName         
    @collection.fetch({reset: true})

  render: =>
    @$el.html(@template(products: @collection.toJSON() ))
    @addAll()

    return this
