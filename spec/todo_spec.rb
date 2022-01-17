require "rails_helper"

describe Todo, type: :model do
    

    it 'check for title' do
        
        todo = Todo.new(title:"",description: "test desc")
        expect(todo).to_not be_valid


        todo.title = "added title"
        expect(todo).to be_valid
    end


    it "check description required" do
        
        todo = Todo.new(title:"this is title",description: "")
        expect(todo).to_not be_valid


        todo.description = "added title"
        expect(todo).to be_valid
    
    end

    it "check save" do
        
        todo = Todo.new(title: "test title", description: "test desc")
        todo.save

        expect(todo.id).to be_a(Integer)
    end



end