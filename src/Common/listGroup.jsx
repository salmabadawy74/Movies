import React from "react";

const ListGroup = (props) => {
    const {items,onItemSelect,selectedItem}=props
  return (
    <div>
      <ul class="list-group">
        {items.map(item => <li key={item._id} onClick={()=>onItemSelect(item)} className={selectedItem===item?"list-group-item active":"list-group-item"}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default ListGroup;
