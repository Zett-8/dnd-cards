import React from 'react'
import styled from 'styled-components'

const ItemCard = ({ provided, children }) => {
  return (
    <Card {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
      {children}
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
