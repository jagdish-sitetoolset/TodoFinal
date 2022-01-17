require "rails_helper"

describe Todoitem, type: :model do
    

    todo = Todo.new(title: "test title", description: "test desc")
    todo.save

    it "check for name" do
        todoitem = Todoitem.new(name: "", completed: false, datecompleted: nil,todo_id:todo.id)

        expect(todoitem).to_not be_valid
        
        todoitem.name = "test name"
        expect(todoitem).to be_valid  
    end


    it "check save " do
        
        todoitem = Todoitem.new(name: "test item", completed: false, datecompleted: nil,todo_id:todo.id)
        todoitem.save

        expect(todoitem.id).to be_a(Integer)  

    end
end
