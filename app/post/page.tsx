// app/post/page.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ArrowRightIcon, User, Tag, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  author: { name: string };
  categories: string[];
  featuredImage: string;
  estimatedReadTime: string;
}

export default function PostPage() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (!id) return;

    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://amplitudea.guidev.com.br/wp-json/wp/v2/posts/${id}?_embed`
        );
        if (!response.ok) throw new Error("Erro ao carregar o post");
        const data = await response.json();
        setPost({
          id: data.id,
          title: data.title,
          content: data.content,
          date: data.date,
          author: data._embedded.author[0],
          categories: data._embedded["wp:term"][0].map(
            (cat: { name: string }) => cat.name
          ),
          featuredImage: data._embedded["wp:featuredmedia"][0].source_url,
          estimatedReadTime: `${Math.ceil(
            data.content.rendered.split(" ").length / 200
          )} min read`,
        });
      } catch (error) {
        console.error("Erro ao carregar o conteúdo do post.", error);
      }
    };

    fetchPost();
  }, []);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Carregando...
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen"
    >
      <Header />
      <header className="bg-gradient-to-r from-amppurple-100 to-ampyellow-100 mt-16 py-24">
        <div className="container w-full max-w-[1080px] mx-auto px-6  ">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl font-bold text-amppurple-800 mb-6 leading-tight"
          >
            {post.title.rendered}
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center text-sm text-amppurple-600 gap-6"
          >
            <span className="flex items-center">
              <CalendarIcon size={18} className="mr-2" />
              {new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center">
              <User size={18} className="mr-2" />
              {post.author.name}
            </span>
            <span className="flex items-center">
              <Tag size={18} className="mr-2" />
              {post.categories.join(", ")}
            </span>
            <span className="flex items-center">
              <Clock size={18} className="mr-2" />
              {post.estimatedReadTime}
            </span>
          </motion.div>
        </div>
      </header>

      <main className="container w-full max-w-[1080px] mx-auto px-6 py-10 ">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Image
            src={post.featuredImage}
            alt={post.title.rendered}
            width={800}
            height={400}
            className="w-full h-auto rounded-xl shadow-2xl mb-12 object-cover"
          />
        </motion.div>
        <motion.article
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="prose prose-lg max-w-none prose-headings:text-amppurple-800 prose-a:text-ampyellow-600 hover:prose-a:text-ampyellow-700 prose-img:rounded-lg prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </main>

      <footer className="bg-amppurple-800 text-white py-8 mt-16">
        <div className="container w-full max-w-[1080px] mx-auto px-6  ">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-ampyellow-100 transition-colors duration-200"
          >
            <ArrowRightIcon size={20} className="mr-2 transform rotate-180" />
            Voltar a Home
          </Link>
        </div>
      </footer>
      <Footer />
    </motion.div>
  );
}
