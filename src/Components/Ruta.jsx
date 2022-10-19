import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Swal from "sweetalert2";

// const reorder = (list, startIndex, endIndex) => {
//   const result = [...list];
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

const fireRouteModificationAlert = (newPosition) => {};

export default function Ruta(props) {
  const { client, id } = props;
  const [creditos, setCreditos] = useState([]);

  useEffect(() => {
    console.log("Ruta montada.");
    async function fetchLoans() {
      const response = await client.get(`/Cobros/${id}/Loans`);
      setCreditos(response.data.data);
    }

    fetchLoans();
  }, [id, client]);

  const onDragEndHandler = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index === destination.index)
      if (source.droppableId === destination.droppableId) return;

    const newPosition = destination.index + 1;

    Swal.fire({
      title: "Estas seguro?",
      text: `El credito tendrá la posición ${newPosition} en el cobro.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        // const response = await client.pos

        Swal.fire(
          "Modificado!",
          `Ahora el credito ocupa la pocision ${newPosition}.`,
          "success"
        );
      }
    });

    // setTasks((prevTasks) =>
    //   reorder(prevTasks, source.index, destination.index)
    // );
  };

  return (
    <div className="ruta">
      <DragDropContext onDragEnd={(result) => onDragEndHandler(result)}>
        <div className="app">
          <Droppable droppableId="creditos">
            {(droppableProvided) => (
              <ul
                className="loan-container"
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                {creditos.map((credito, index) => (
                  <Draggable
                    key={credito.id}
                    draggableId={`${credito.id}`}
                    index={index}
                  >
                    {(draggableProvided) => (
                      <li
                        className="loan-item"
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                      >
                        <div className="item">
                          <div className="item__posicion">{`${credito.routePosition}`}</div>
                          <div className="item__cliente">{`${credito.customer.name} ${credito.customer.lastName}`}</div>
                          <div className="item__saldo">{`$${credito.balance}`}</div>
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
