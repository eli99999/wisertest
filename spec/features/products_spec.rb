describe "Products", type: :feature do
  describe "GET /products" do
    it "displays products" do
      Product.make(name: "prd99")
      visit products_path
    end

	it "displays products for a category" do
      Product.make(name: "product 1", category: "cat 1")
	  Product.make(name: "product 2", category: "cat 2")
      visit products_path(category: "cat 2")
	  expect(page).to have_content("product 2")
    end

  end
end