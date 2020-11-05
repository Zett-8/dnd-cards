import React from 'react'
import styled from 'styled-components'

const ItemCard = props => {
  const provided = props.provided
  return (
    <Card {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
      {props.children}
    </Card>
  )
}

const Card = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;

  background-color: #eee;
  height: 60px;
  width: 98%;

  margin-bottom: 9px;
`

export default ItemCard
