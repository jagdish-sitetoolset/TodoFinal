class TodoItemManager
    
    def self.SaveTags(todo_item, params)

        unless todo_item.new_record?
  
            todo_item.tags.destroy_all
            #todo_item.id
        end
  
        tagnames = params[:tags].split(',')
  
        tagnames.each do |tag|
              
            #todo_item.tags.create!(tagname: tag)
            todo_item.tags.create!(:tagname=>tag,:todoitem_id=>todo_item.id)
        end

        #params[:tagname].split(',').map( |tag| todo_item.tags.create!(:tagname=>tag,:todoitem_id=>todo_item.id) )
  
     end

end