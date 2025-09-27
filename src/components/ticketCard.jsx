import React from "react";

export default function TicketCard({ ticket, onAdd }) {
  // Dynamically determine status badge color
  const statusColor =
    ticket.status === "Open"
      ? "bg-green-100 text-green-700"
      : ticket.status === "In-Progress"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-gray-200 text-gray-600";
      

  // Dot color matches status
  const dotColor =
    ticket.status === "Open"
      ? "bg-green-500"
      : ticket.status === "In-Progress"
      ? "bg-yellow-500"
      : "bg-gray-500";

  // Priority color
  const priorityColor =
    ticket.priority === "HIGH"
      ? "text-red-500 font-semibold"
      : ticket.priority === "MEDIUM"
      ? "text-yellow-500 font-semibold"
      : "text-green-500 font-semibold";

  return (
    <div
      className="card border shadow cursor-pointer hover:shadow-lg"
      onClick={onAdd}
    >
      <div className="card-body">
        {/* Status badge with colored dot */}
        <div className="flex justify-end items-center mb-2">
          <span
            className={`flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}
          >
            <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
            {ticket.status}
          </span>
        </div>

        {/* Ticket Title & Description */}
        <h3 className="font-semibold">{ticket.title}</h3>
        <p className="text-sm text-gray-600">{ticket.description}</p>

        {/* Footer: ID, Priority, Customer, Date */}
        <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
          <span>#{ticket.id}</span>
          <span className={priorityColor}>{ticket.priority} PRIORITY</span>
          <span>{ticket.customer}</span>

          {/* Calendar icon + date */}
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
}
