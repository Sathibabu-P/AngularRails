class ProductsController < ApplicationController
respond_to :json 

  def index 
    respond_with(@products = Product.all)
  end

  def show
    @product = Product.find(params[:id])
    respond_with(@product)
  end
  
end
