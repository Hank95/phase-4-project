class LineItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    wrap_parameters format: []

    def index 
        user = @current_user
        items = user.line_items.all
        render json: items
    end

    def create 
        user = @current_user
        item = user.shopping_cart.line_items.create(item_params)
        render json: item
    end

    private

    def item_params
        params.permit(:product_id, :quantity)
    end

end
