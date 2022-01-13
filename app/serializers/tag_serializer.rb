class TagSerializer
    include FastJsonapi::ObjectSerializer
    attributes :tagname, :todoitem_id
    
  end
  