import { TodoItem } from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { reorderTodos } from '../todoSlice'

export function TodoList() {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.items)

  function onDragEnd(result) {
    if (!result.destination) return
    const startIndex = result.source.index
    const endIndex = result.destination.index
    dispatch(reorderTodos({ startIndex, endIndex }))
  }

  return (
    !todos.length ? <p className='message'>Good job! There are no tasks for today</p> :

    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todos">
        {provided => (
          <ul className='todo__list' {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo, index) => (
              <Draggable key={todo.id.toString()} draggableId={todo.id.toString()} index={index}>
                {provided => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <TodoItem todo={todo}/>  
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}