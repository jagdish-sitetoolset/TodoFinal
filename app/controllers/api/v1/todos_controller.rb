module Api 
    module V1
        class TodosController < ApplicationController
            protect_from_forgery with: :null_session
            
            def index   

                todos = Todo.all

                render json: TodoSerializer.new(todos, options).serialized_json
            end

            def show

                todo = Todo.find_by(id: params[:id])
                render json: TodoSerializer.new(todo, options).serialized_json
            end

            def create

                todo = Todo.new(todo_params)

                if todo.save
                    render json: TodoSerializer.new(todo).serialized_json
                else
                    render json: {error: todo.errors.messages},status: 422
                end

            end

            def update

                todo = Todo.find_by(id: params[:id])

                if todo.update(todo_params)
                    render json: TodoSerializer.new(todo,options).serialized_json
                else
                    render json: {error: todo.errors.messages},status: 422
                end

            end

            def destroy

                todo = Todo.find_by(id: params[:id])

                if todo.destroy
                    head :no_content
                else
                    render json: {error: todo.errors.messages},status: 422
                end

            end
            private 

            def todo_params
                params.require(:todo).permit(:title,:description)
            end

           

            def options
                @options ||= { include: %i[todoitems],includetag: %i[tags] }
            end

           
        end
    end
end