class AddIsRecurringToTodoitems < ActiveRecord::Migration[7.0]
  def change
    add_column :todoitems, :isrecurring, :boolean
  end
end
