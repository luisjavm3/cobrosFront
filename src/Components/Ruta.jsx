import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const initialTasks = [
  {
    id: "1",
    text: "React.js",
  },
  {
    id: "2",
    text: "HTML/CSS",
  },
  {
    id: "3",
    text: "AWS",
  },
  {
    id: "4",
    text: "JavaScript",
  },
  {
    id: "5",
    text: "Five",
  },
  {
    id: "6",
    text: "Six",
  },
  {
    id: "7",
    text: "Seven",
  },
  {
    id: "8",
    text: "Eight",
  },
  {
    id: "9",
    text: "Nine",
  },
  {
    id: "10",
    text: "Ten",
  },
  {
    id: "11",
    text: "Eleven",
  },
  {
    id: "12",
    text: "Twelve",
  },
  {
    id: "13",
    text: "Thirteen",
  },
  {
    id: "14",
    text: "fourteen",
  },
  {
    id: "15",
    text: "fifteen",
  },
  {
    id: "16",
    text: "sixteen",
  },
  {
    id: "17",
    text: "seventeen",
  },
  {
    id: "18",
    text: "eighteen",
  },
  {
    id: "19",
    text: "nineteen",
  },
  {
    id: "20",
    text: "twenty",
  },
  {
    id: "21",
    text: "twenty one",
  },
  {
    id: "22",
    text: "twenty two",
  },
];

export default function Ruta(props) {
  const { client } = props;
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    // async function fetch
  }, []);

  return (
    <div className="ruta">
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }

          setTasks((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
          );
        }}
      >
        <div className="app">
          <Droppable droppableId="tasks">
            {(droppableProvided) => (
              <ul
                className="loan-container"
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(draggableProvided) => (
                      <li
                        className="loan-item"
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                      >
                        <div className="item">
                          <div className="item__posicion">{index + 1}</div>
                          <div className="item__cliente">{task.text}</div>
                          <div className="item__saldo">saldo</div>
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}
