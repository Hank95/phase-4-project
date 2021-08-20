class LineItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    wrap_parameters format: []

    def show 
        user = @current_user
        items = user.line_items.all
        rend json: items
    end

    def create 
        user = @current_user
        items = user.shopping_cart.line_items.create(item_params)
    end

    private

    def item_params
        params.permit(:product_id, :quantity)
    end

end
