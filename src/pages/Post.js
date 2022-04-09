import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { id } = useParams();
  return (
    <div>
      <h4>Post ke-{id}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        blanditiis, corrupti laborum aut omnis autem voluptatibus adipisci
        impedit expedita eligendi ipsam aperiam quibusdam nam sed officiis quod,
        in facere labore praesentium enim necessitatibus. Qui, nulla debitis
        omnis quam at fugiat dolor porro minus nesciunt dolores! Aliquam libero
        alias recusandae fugit neque veritatis, deserunt iusto accusantium
        doloribus architecto maiores, nam ipsam optio officiis aspernatur nemo
        vitae mollitia ipsa error unde dolores possimus commodi. Nobis iure, ad
        illum unde, dolorum incidunt labore perferendis eum, consectetur iusto
        voluptates voluptatum assumenda. Quisquam consectetur recusandae
        temporibus aspernatur laboriosam consequuntur delectus! Saepe
        repellendus a quibusdam architecto.
      </p>
    </div>
  );
};
