import React, { useState } from 'react';

export default function App() {
  const [order, setOrder] = useState("none")

  return (
    <>
      <OrderView order={order} />
      <OrderMenu setOrder={setOrder} />
    </>
  )
}

function OrderView({ order }) {
  return <div>{ order }</div>
}

function OrderMenu({ setOrder }) {
  return (
      <>
          <button onClick={() => setOrder("tacos")}>Tacos</button>
          <button onClick={() => setOrder("burritos")}>Burritos</button>
      </>
  )
}