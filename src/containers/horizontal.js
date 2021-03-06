import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'

import VerticalList from '../components/verticalList'

const getItems = (n, x = 0) => Array.from({ length: n }).map((v, i) => ({ id: i + x, content: `content-${i + x}` }))

const HorizontalListPageContainer = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    setLists([getItems(10), getItems(10, 10)])
  }, [])

  const onDragEnd = result => {
    if (!result.destination) return null
    setLists(reorder(result.source, result.destination))
  }

  const reorder = (source, destination) => {
    const n = lists.slice(0)
    const si = Number(source.droppableId)
    const di = Number(destination.droppableId)

    const [x] = n[si].splice(source.index, 1)
    n[di].splice(destination.index, 0, x)

    return n
  }

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        {lists.map((v, i) => (
          // eslint-disable-next-line
          <VerticalList key={i} onDragEnd={onDragEnd} list={v} droppableId={String(i)} />
        ))}
      </DragDropContext>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

export default HorizontalListPageContainer
