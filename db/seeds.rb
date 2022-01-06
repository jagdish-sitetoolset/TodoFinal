# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Todo.create(title: "Todo 1", description: "this is first item")
Todo.create(title: "Todo 2", description: "this is second item")
Todo.create(title: "Todo 3", description: "this is third item")

Todoitem.create(name: "item 1", completed:false, todo_id: 1)
Todoitem.create(name: "item 2", completed:false,  todo_id: 1)
Todoitem.create(name: "item 3", completed:false,  todo_id: 1)

Todoitem.create(name: "item 1", completed:false,  todo_id: 2)
Todoitem.create(name: "item 2", completed:false,  todo_id: 3)

Todoitem.create(name: "item 1", completed:false,  todo_id: 3)

Tag.create(tagname: "new", Todoitem_id:1)
Tag.create(tagname: "imp", Todoitem_id:1)

Tag.create(tagname: "new", Todoitem_id:2)
Tag.create(tagname: "imp", Todoitem_id:2)

Tag.create(tagname: "new", Todoitem_id:3)
Tag.create(tagname: "imp", Todoitem_id:3)
Tag.create(tagname: "late", Todoitem_id:3)