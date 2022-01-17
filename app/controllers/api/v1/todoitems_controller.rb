require 'date'

module Api 
    module V1
        class TodoitemsController < ApplicationController
            protect_from_forgery with: :null_session

            def index   

                @todoitem = Todoitem.all

                render json: TodoitemSerializer.new(@todoitem, options).serialized_json
            end
            def show

                todoitem = Todoitem.find_by(id: params[:id])
                render json: TodoitemSerializer.new(todoitem,options).serialized_json
            end

            def create
            
                todoitem = Todoitem.new(todoitem_params)

                if todoitem.save
                    if params[:tags].length > 0
                        TodoItemManager.SaveTags(todoitem,params.permit(:tags))
                    end
                    render json: TodoitemSerializer.new(todoitem,options).serialized_json
                else
                    render json: {error: todoitem.errors.messages},status: 422
                end

            end

            def update
            
                todoitem = Todoitem.find_by(params[:id])

                if todoitem.update(todoitem_params)
                    if params[:tags].length > 0
                       TodoItemManager.SaveTags(todoitem,params.permit(:tags))
                    end
                       render json: TodoitemSerializer.new(todoitem,options).serialized_json
                else
                    render json: {error: todoitem.errors.messages},status: 422
                end

            end

            def destroy
            
                todoitem = Todoitem.find_by(id: params[:id])
                #render json: TodoitemSerializer.new(todoitem,options).serialized_json
                if todoitem.destroy
                    head :no_content
                else
                    render json: {error: todoitem.errors.messages},status: 422

                end

            end

            def complete

                todoitem = Todoitem.find_by(id: params[:id])
                if todoitem.update(completed: true, datecompleted: DateTime.now)
                    render json: TodoitemSerializer.new(todoitem,options).serialized_json
                else
                    render json: {error: todoitem.errors.messages},status: 422
                end
              
            end
        
            def incomplete
                
                todoitem = Todoitem.find_by(id: params[:id])
                if todoitem.update(completed: false, datecompleted: nil)
                    render json: TodoitemSerializer.new(todoitem,options).serialized_json
                else
                    render json: {error: todoitem.errors.messages},status: 422
                end
            end

            private 

            def todoitem_params

                params.require(:todoitem).permit(:name, :completed, :datecompleted, :todo_id, :tagname, :isrecurring)
            end

            def options
                @options ||= { include: %i[tags] }
            end

            
        end
    end
end