import React from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import ItemCard from './itemCard'

const verticalList = ({ item, droppableId }) => {
  return (
    <Droppable droppableId={droppableId}>
      {provided => (
        <CardList {...provided.droppableProps} ref={provided.innerRef}>
          {item.map((v, i) => (
            <Draggable key={v.id} draggableId={String(v.id)} index={i}>
              {(provided, snapshot) => <ItemCard provided={provided}>{v.content}</ItemCard>}
            </Draggable>
          ))}
          {provided.placeholder}
        </CardList>
      )}
    </Droppable>
  )
}

const CardList = styled.div`
  display: grid;
  justify-items: center;

  width: 300px;
  height: min-content;
  border: 1px black solid;
`

export default verticalList
