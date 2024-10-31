"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
}

export default function LatestPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://amplitudea.guidev.com.br/wp-json/wp/v2/posts?_embed&per_page=4"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(
            `Erro ao carregar as notícias: ${err.message}. Por favor, tente novamente mais tarde.`
          );
        } else {
          setError(
            "Erro desconhecido ao carregar as notícias. Por favor, tente novamente mais tarde."
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-10 text-amppurple-300 text-xl">
        Carregando notícias...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-ampyellow-300 bg-amppurple-900 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <section
      id="noticias"
      className="py-16 bg-gradient-to-br from-amppurple-100 to-ampyellow-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-amppurple-700 relative">
          Notícias
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-ampyellow-300"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white"
            >
              <CardHeader className="p-0 relative">
                {post._embedded?.["wp:featuredmedia"] ? (
                  <Image
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-r from-ampyellow-300 to-amppurple-300"></div>
                )}
                <div className="absolute top-0 right-0 bg-white text-amppurple-700 px-3 py-1 m-2 rounded-full text-sm font-semibold">
                  Novo
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-amppurple-700 line-clamp-2">
                  {post.title.rendered}
                </CardTitle>
                <div
                  className="text-sm text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <div className="flex items-center text-sm text-amppurple-400">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("pt-BR")}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/post?id=${post.id}`} passHref>
                  <Button className="w-full bg-amppurple-400 hover:bg-amppurple-400 text-white transition-colors duration-300">
                    Ler mais
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-ampyellow-400 hover:bg-ampyellow-400 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300">
            Ver todas as notícias
          </Button>
        </div>
      </div>
    </section>
  );
}
