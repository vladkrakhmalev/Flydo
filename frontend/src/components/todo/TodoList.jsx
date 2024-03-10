import { TodoItem } from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { reorderTodos } from '../todo/todoSlice'
import { toggleCategory } from '../category/categorySlice'
import { filterTodo } from '../../services/servicesTodo'

export function TodoList({category}) {
  
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.items)
  const hiddenComplited = useSelector(state => state.todos.hiddenComplited)
  const filtredTodos = filterTodo(todos, category, hiddenComplited)
  

  function handlerClick() {
    dispatch(toggleCategory({id: category.id, isVisible: false}))
  }

  function onDragEnd(result) {
    if (!result.destination) return
    const startId = filtredTodos[result.source.index].id
    const endId = filtredTodos[result.destination.index].id
    const startIndex = todos.findIndex(todo => todo.id === startId)
    const endIndex = todos.findIndex(todo => todo.id === endId)
    dispatch(reorderTodos({ startIndex, endIndex }))
  }



  return (
    <div className='todo__board'>
      <div className="todo__board-header">
        <h3 className='todo__board-title'>{category.name ? category.name : 'All'}</h3>
        <i
          className="fi fi-br-cross todo__board-delete"
          onClick={handlerClick}
        ></i>
      </div>

      {!filtredTodos.length ? 
      <p className='message'>Good job!</p>
      
      : <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todos">
            {provided => (
              <ul className='todo__list' {...provided.droppableProps} ref={provided.innerRef}>
                {filtredTodos.map((todo, index) => (
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
      }
    </div>
  )
}