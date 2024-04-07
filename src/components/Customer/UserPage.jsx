import React from 'react'
import FlightTickets from '../Customer/FlightTickets'
import Destination from '../Dest/Destination'
import TicketsData from '../Tickets/TicketsData'

export default function UserPage() {
  return (
    <>
        <TicketsData />
        <FlightTickets />
        <Destination />
    </>
  )
}
