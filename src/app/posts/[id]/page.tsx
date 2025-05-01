"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) {
    return <div className="text-center text-gray-500 text-lg">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <div className="mt-6 border border-gray-300 rounded-lg bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
}