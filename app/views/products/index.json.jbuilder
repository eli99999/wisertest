json.array!(@products) do |product|
  json.extract! product, :id, :name, :sku, :category
  json.url product_url(product, format: :json)
end
