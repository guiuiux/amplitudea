// components/UpcomingEvents.tsx
"use client";

import { useState, useEffect } from "react";

// Interface para o evento
interface Event {
  title: string;
  start_date: string;
  url: string;
  description: string;
}

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // Função que busca os eventos na API do WordPress
  const fetchEvents = async () => {
    try {
      const response = await fetch(
        "https://amplitudea.guidev.com.br/wp-json/tribe/events/v1/events"
      );
      const data = await response.json();
      const upcomingEvents = data.events.slice(0, 3); // Pega os 3 próximos eventos
      setEvents(upcomingEvents);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return <p>Carregando eventos...</p>;
  }

  if (events.length === 0) {
    return <p>Não há eventos disponíveis.</p>;
  }

  return (
    <div className="p-6 bg-zinc-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Próximos Eventos</h2>
      <ul>
        {events.map((event) => (
          <li key={event.url} className="mb-4">
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
            </a>
            <p className="text-sm text-gray-600">{event.start_date}</p>
            <p>{event.description.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
