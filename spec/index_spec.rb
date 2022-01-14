require 'rails_helper'

RSpec.describe 'index', type: :view do
    before(:each) do
    assign(:todolists, TodoList.includes(:todo_items).all)
  end

  it 'renders a list of todos' do
    render
    assert_select "div[class='container']", count: 1
    assert_select "div[class='card']", count: TodoList.includes(:todo_items).all.count
  end
end