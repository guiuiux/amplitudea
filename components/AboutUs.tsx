"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: "🎤",
    title: "Mais de 24 anos de experiência",
    text: "Produção e organização de grandes shows e eventos",
  },
  {
    icon: "🎸",
    title: "Gerenciamento de carreira de artistas",
    text: "Apoiando o desenvolvimento de carreiras de sucesso",
  },
  {
    icon: "🛠️",
    title: "Serviços",
    text: (
      <ul className="list-none space-y-2">
        <li>Organização de eventos</li>
        <li>Produção de conteúdos audiovisuais</li>
        <li>Gerenciamento de carreira</li>
        <li>Coordenação de palco</li>
        <li>Consultoria artística</li>
      </ul>
    ),
  },
  {
    icon: "🎯",
    title: "Missão",
    text: "Produzir ideias que encantam e agregam valor à marca do cliente",
  },
  {
    icon: "📜",
    title: "Valores",
    text: (
      <ul className="list-none space-y-2">
        <li>Entrega extraordinária</li>
        <li>Verdade</li>
        <li>Honestidade</li>
        <li>Profissionalismo</li>
      </ul>
    ),
  },
  {
    icon: "🌟",
    title: "Diferencial",
    text: "Experiência em comunicação, gestão de pessoas e produção de eventos",
  },
];

export default function AboutUs() {
  return (
    <section
      id="quem-somos"
      className="py-20 bg-gradient-to-br from-amppurple-50 to-ampyellow-50"
    >
      <div className="container max-w-[1080px] mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-amppurple-700 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Quem Somos
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-ampyellow-300 mt-4"></span>
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-6xl mb-6"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-amppurple-600">
                {item.title}
              </h3>
              {typeof item.text === "string" ? (
                <p className="text-zinc-700">{item.text}</p>
              ) : (
                <div className="text-zinc-700">{item.text}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
