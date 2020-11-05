import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import ItemCard from './itemCard'

const verticalList = ({ item, setItem, droppableId }) => {
  const onDragEnd = result => {
    if (!result.destination) return null
    setItem(reorder(result.source.index, result.destination.index))
  }

  const reorder = (source, destination) => {
    const newItem = item.slice(0)
    const [x] = newItem.splice(source, 1)
    newItem.splice(destination, 0, x)
    return newItem
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  )
}

const CardList = styled.div`
  display: grid;
  justify-items: center;

  width: 300px;
  border: 1px black solid;
`

export default verticalList
