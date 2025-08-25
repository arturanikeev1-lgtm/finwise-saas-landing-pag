"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [items] = useState([
    {
      id: 1,
      title: "Дизайн",
      description: "Красивый фирменный стиль, баннеры и оформление.",
      image: "/images/design.png",
    },
    {
      id: 2,
      title: "Продвижение",
      description: "Маркетинг, реклама и привлечение клиентов.",
      image: "/images/marketing.png",
    },
    {
      id: 3,
      title: "Разработка",
      description: "Создание сайтов, приложений и ботов.",
      image: "/images/dev.png",
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Каталог услуг</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden p-4 flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 flex-1">{item.description}</p>
            <button
              className="mt-4 bg-blue-500 text-white rounded-xl py-2 hover:bg-blue-600 transition"
              onClick={() => alert(`Заказ оформлен: ${item.title}`)}
            >
              Заказать
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
