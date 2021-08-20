class ProductsController < ApplicationController

    def index 
        products = Product.all
        render json: products
    end

    def show
        product = Product.find(params[:id])
        if product
            render json: product
        else
            render json: {error: "Product not found"}, status: :unprocessable_entity
        end
    end

end
