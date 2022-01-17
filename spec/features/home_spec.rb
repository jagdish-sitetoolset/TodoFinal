require 'securerandom'
require 'rails_helper'

RSpec.feature "Home page", type: :feature do 
    context "displays todo list" do
    
        scenario " Should search todo" do

            visit 'http://localhost:3000/'
            within('form') do
                fill_in 'tag', :with => "imp" + " - "
                #expect(page).to have_content("Todo Project")
                click_button("Search") 
            end
        end
        # click_link("add new Todo")
        # expect(current_path).to eql("/todo-new")

        visit("/todo-new")

    
        fill_in 'title', :with => "Title 1" + " - " + SecureRandom.hex.to_s
        fill_in 'description', :with => "test description" + " - " + SecureRandom.hex.to_s
        sleep(3)
        click_button("Submit")  
         
    end


end 