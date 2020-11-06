import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'

import VerticalList from '../components/verticalList'

const getItem = (n, x = 0) => Array.from({ length: n }).map((v, i) => ({ id: i + x, content: `content-${i + x}` }))

const HorizontalListPageContainer = () => {
  const [item1, setItem1] = useState([])
  const [item2, setItem2] = useState([])

  useEffect(() => {
    setItem1(getItem(10))
    setItem2(getItem(10, 10))
  }, [])

  const onDragEnd = result => {
    console.log(result)
    if (!result.destination) return null
    const [i1, i2] = reorder(result.source, result.destination)
    setItem1(i1)
    setItem2(i2)
  }

  const reorder = (source, destination) => {
    const o = {}
    o.d1 = item1.slice(0)
    o.d2 = item2.slice(0)

    const [x] = o[source.droppableId].splice(source.index, 1)
    o[destination.droppableId].splice(destination.index, 0, x)
    return [o.d1, o.d2]
  }

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <VerticalList onDragEnd={onDragEnd} item={item1} droppableId={'d1'} />
        <VerticalList onDragEnd={onDragEnd} item={item2} droppableId={'d2'} />
      </DragDropContext>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

export default HorizontalListPageContainer
