import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ItemCard from './itemCard'

const getItem = n => Array.from({ length: n }).map((v, i) => ({ id: i, content: `content-${i}` }))

const verticalList = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    setItem(getItem(10))
  }, [])

  const onDragEnd = re => {
    if (!re.destination) return null
  }

  console.log(item)
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {item.map((v, i) => (
              <Draggable key={v.id} draggableId={v.id + ''} index={i}>
                {(provided, snapshot) => <ItemCard provided={provided}>{v.content}</ItemCard>}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default verticalList
