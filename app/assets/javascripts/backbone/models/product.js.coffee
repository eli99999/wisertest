class WiserTest.Models.Product extends Backbone.Model
  paramRoot: 'product'

  defaults:
    name: null
    sku: null
    category: null

class WiserTest.Collections.ProductsCollection extends Backbone.Collection
  model: WiserTest.Models.Product
  url: '/products'


 

