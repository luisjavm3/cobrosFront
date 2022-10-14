import React from "react";
import { useParams } from "react-router-dom";
import CobroDetails from "../Components/CobroDetails";
import CobroList from "../Components/CobroList";

import { getAxios } from "../Utils/getAxios";

export default function Cobros() {
  const { id } = useParams();
  const client = getAxios();

  return id ? <CobroDetails client={client} /> : <CobroList client={client} />;
}
