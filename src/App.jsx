import React, { useState } from "react";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import TicketCard from "./components/ticketCard";
import TaskStatus from "./components/taskStatus";
import Footer from "./components/footer";
import initialTickets from "./data/tickets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToTask = (ticket) => {
  if (inProgress.find((t) => t.id === ticket.id) || resolved.find((t) => t.id === ticket.id)) {
    toast.info("Ticket already added or resolved");
    return;
  }

  // ✅ Add to In Progress but DO NOT remove from tickets
  setInProgress((prev) => [ticket, ...prev]);
  toast.success(`Added "${ticket.title}" to Task Status`);
};


  const handleComplete = (ticketId) => {
  const ticket = inProgress.find((t) => t.id === ticketId);
  if (!ticket) return;

  // Remove from inProgress
  setInProgress((prev) => prev.filter((t) => t.id !== ticketId));
  // Add to resolved
  setResolved((prev) => [ticket, ...prev]);
  // ✅ Remove from tickets list (optional, if tickets list represents live server)
  setTickets((prev) => prev.filter((t) => t.id !== ticketId));

  toast.success(`Marked "${ticket.title}" as resolved`);
};


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-6xl w-full mx-auto p-4">
        <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />
      </div>

      <main className="flex flex-col lg:flex-row gap-6 max-w-6xl w-full mx-auto p-4 flex-1">
        <section className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} onAdd={() => handleAddToTask(ticket)} />
            ))}
            {tickets.length === 0 && <p className="text-gray-500">No tickets available.</p>}
          </div>
        </section>

        <aside className="w-full lg:w-1/3">
          <TaskStatus tasks={inProgress} onComplete={handleComplete} resolved={resolved} />
        </aside>
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2200} />
    </div>
  );
}
