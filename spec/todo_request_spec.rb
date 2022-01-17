require "rails_helper"
require 'securerandom'


describe Todo, type: :request do
    
    @todo_id = 0

    let(:valid_attributes) do
        {          
          'title' => 'New Todo - ' + SecureRandom.hex.to_s,
          'description' => 'test description - ' + SecureRandom.hex.to_s
        }
    end

    describe 'Todo list - create' do
        context "with valid parameter" do
            it "create new todo" do
                expect do
                    todolist = Todo.new(valid_attributes)
                    todolist.save
                end.to change(Todo, :count).by(1)
            end
        end
    end

    describe "Todo list / delete" do
        
        it  "delete current todo" do
            todolist = Todo.new(valid_attributes)
            todolist.save          
            expect do
            todolist.destroy
            end.to change(Todo, :count).by(-1)
        end
       
    end
end