"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Phone, Music } from "lucide-react";
import { motion } from "framer-motion";

import Link from "next/link";

type Evento = {
  nome: string;
  local: string;
  cidade: string;
  estado: string;
  banda: string;
  data: string;
  horario: string;
  telefone: string;
};

const eventos: Evento[] = [
  {
    nome: "Festival de Adoração",
    local: "Parque Ibirapuera",
    cidade: "São Paulo",
    estado: "SP",
    banda: "Resgate",
    data: "2024-11-20",
    horario: "19:00",
    telefone: "(11) 9876-5432",
  },
  {
    nome: "Louvor na Praia",
    local: "Praia do Flamengo",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    banda: "Soul Livre",
    data: "2024-12-15",
    horario: "18:00",
    telefone: "(21) 9123-4567",
  },
  {
    nome: "Culto da Juventude",
    local: "Teatro Municipal",
    cidade: "Curitiba",
    estado: "PR",
    banda: "Vocal Livre",
    data: "2025-01-12",
    horario: "20:30",
    telefone: "(41) 9988-7766",
  },
  {
    nome: "Encontro de Louvor",
    local: "Centro de Eventos",
    cidade: "Belo Horizonte",
    estado: "MG",
    banda: "Gabi Sampaio",
    data: "2025-02-25",
    horario: "19:30",
    telefone: "(31) 9123-9876",
  },
  // Add more events as needed
];

export default function EventsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 bg-gradient-to-br from-amppurple-700 via-amppurple-500 to-ampyellow-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10 z-0 ">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="music-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 35q2.5 0 4.25-1.75T26 29V13.45q0-1-.75-1.725T23.8 11H22V7h-4v14.125q-1.25-.625-2.625-.625T12.5 21q-2.5 0-4.25 1.75T6.5 27q0 2.5 1.75 4.25T12.5 33q2.3 0 3.9-1.6t1.6-3.9V13h3.8v16q-1.25.625-2.625.625T16.5 30q-2.5 0-4.25 1.75T10.5 36q0 2.5 1.75 4.25T16.5 42q2.3 0 3.9-1.6t1.6-3.9V27q1.25.625 2.625.625T27.5 27q2.5 0 4.25-1.75T33.5 21q0-2.5-1.75-4.25T27.5 15q-2.3 0-3.9 1.6T22 20.5V7h6q1 0 1.725.75T30.4 9.5V29q0 4.15-2.925 7.075T20.4 39H20Z"
                fill="currentColor"
                fillOpacity="0.05"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#music-pattern)" />
        </svg>
      </div>
      <div className="container w-full max-w-[1080px] mx-auto px-6 py-10 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center text-ampyellow-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Próximos Eventos
        </motion.h2>
        {eventos.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {eventos.map((evento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="bg-amppurple-100/10 border-ampyellow-200 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <CardHeader className="bg-gradient-to-r from-ampyellow-300  to-ampyellow-200 text-amppurple-900">
                    <CardTitle className="text-2xl font-bold ">
                      {evento.nome}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-ampyellow-50">
                    <div className="flex items-center mb-4">
                      <Music className="mr-2 h-6 w-6 text-ampyellow-300" />
                      <p className="font-semibold text-xl">{evento.banda}</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <motion.div
                        className="flex items-center"
                        initial={false}
                        animate={hoveredIndex === index ? { x: 10 } : { x: 0 }}
                      >
                        <MapPin className="mr-2 h-5 w-5 text-ampyellow-200" />
                        <span>{`${evento.local}, ${evento.cidade} - ${evento.estado}`}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center"
                        initial={false}
                        animate={hoveredIndex === index ? { x: 10 } : { x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Calendar className="mr-2 h-5 w-5 text-ampyellow-200" />
                        <span>
                          {new Date(evento.data).toLocaleDateString("pt-BR", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </motion.div>
                      <motion.div
                        className="flex items-center"
                        initial={false}
                        animate={hoveredIndex === index ? { x: 10 } : { x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Clock className="mr-2 h-5 w-5 text-ampyellow-200" />
                        <span>{evento.horario}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center"
                        initial={false}
                        animate={hoveredIndex === index ? { x: 10 } : { x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Phone className="mr-2 h-5 w-5 text-ampyellow-300" />
                        <span>{evento.telefone}</span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-8 text-center">
            <p className="text-xl text-ampyellow-100 mb-4 italic">
              Não há eventos agendados no momento.
            </p>
            <Link href="/agendar-evento">
              <Button className="bg-ampyellow-400 hover:bg-ampyellow-500 text-amppurple-900">
                Agende seu evento
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
