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
];

export default function EventsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="eventos"
      className="w-full py-16 bg-gradient-to-br from-amppurple-700 via-amppurple-500 to-ampyellow-300 relative overflow-hidden"
    >
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

        <div className="flex justify-center mt-8">
          <Link href="/eventos">
            <Button className="bg-ampyellow-100 hover:bg-ampyellow-200 text-amppurple-700 font-semibold px-6 py-3 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105">
              Confira a galeria de momentos dos eventos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
