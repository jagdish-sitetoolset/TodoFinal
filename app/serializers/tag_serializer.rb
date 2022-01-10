class TagSerializer
    include FastJsonapi::ObjectSerializer
    attributes :tagname, :Todoitem_id
    
  end
  