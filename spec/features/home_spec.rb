require 'securerandom'
require 'rails_helper'

RSpec.feature "Home page", type: :feature do 
    context "displays todo list", :js => true do
    
        scenario " Should search todo" do

            visit 'http://localhost:3000/'

            expect(page.body).to include("Todo Project")

            within('#frmSearchTag') do
                fill_in 'tag', :with => "impx" 
                
                click_button("Search") 
                sleep(3)
                
            end
            expect(page).to have_content("No records found")
                
        end
        # click_link("add new Todo")
        # expect(current_path).to eql("/todo-new")


        context "displays todo list" do
    
            scenario " Should search todo" do
                visit("/todo-new")
            
                fill_in 'title', :with => "Title 1" + " - " + SecureRandom.hex.to_s
                fill_in 'description', :with => "test description" + " - " + SecureRandom.hex.to_s
                #sleep(3)
                click_button("Submit")  
                sleep(1)
                click_button("Search") 
                sleep(1)
                expect(page).to have_content "Title 1"
            end
        end
         
    end


end 