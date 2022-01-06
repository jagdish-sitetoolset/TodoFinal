class CreateTodoitems < ActiveRecord::Migration[7.0]
  def change
    create_table :todoitems do |t|
      t.string :name
      t.boolean :completed
      t.date :datecompleted
      t.belongs_to :todo, null: false, foreign_key: true

      t.timestamps
    end
  end
end
