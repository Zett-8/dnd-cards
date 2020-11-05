import React, { useEffect, useState } from 'react'
import VerticalList from '../components/verticalList'

const getItem = n => Array.from({ length: n }).map((v, i) => ({ id: i, content: `content-${i}` }))

const VerticalListPageContainer = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    setItem(getItem(10))
  }, [])

  return <VerticalList item={item} setItem={setItem} droppableId={'droppable'} />
}

export default VerticalListPageContainer
