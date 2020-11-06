import React, { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import VerticalList from '../components/verticalList'

const getItem = n => Array.from({ length: n }).map((v, i) => ({ id: i, content: `content-${i}` }))

const VerticalListPageContainer = () => {
  const [item, setItem] = useState([])

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

  useEffect(() => {
    setItem(getItem(10))
  }, [])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <VerticalList item={item} droppableId={'droppable'} />
    </DragDropContext>
  )
}

export default VerticalListPageContainer
