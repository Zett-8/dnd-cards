import React, { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import VerticalList from '../components/verticalList'

const getItems = n => Array.from({ length: n }).map((v, i) => ({ id: i, content: `content-${i}` }))

const VerticalListPageContainer = () => {
  const [list, setList] = useState([])

  const onDragEnd = result => {
    if (!result.destination) return null
    setList(reorder(result.source.index, result.destination.index))
  }

  const reorder = (source, destination) => {
    const newList = list.slice(0)
    const [x] = newList.splice(source, 1)
    newList.splice(destination, 0, x)
    return newList
  }

  useEffect(() => {
    setList(getItems(10))
  }, [])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <VerticalList list={list} droppableId={'droppable'} />
    </DragDropContext>
  )
}

export default VerticalListPageContainer
