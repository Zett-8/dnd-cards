import React from 'react'

const ItemCard = props => {
  const provided = props.provided
  return (
    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
      {props.children}
    </div>
  )
}

export default ItemCard
