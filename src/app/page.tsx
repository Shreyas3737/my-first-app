'use client';

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Layout from '../components/Layout';
import PromptCard from '../components/PromptCard';
import SearchBar from '../components/SearchBar';
import { fetcher } from '../lib/utils';

const Page: React.FC = () => {
  const { data: bcfBoards, error: bcfError } = useSWR('https://demo6396395.mockable.io/bcf-boards', fetcher);
  const { data: prompts, error: promptsError } = useSWR('https://demo6396395.mockable.io/prompts', fetcher);
  
  const [filteredPrompts, setFilteredPrompts] = useState<any[]>([]);
  
  useEffect(() => {
    if (prompts) {
      setFilteredPrompts(prompts);
    }
  }, [prompts]);

  const handleSearch = (searchTerm: string) => {
    if (!prompts) return;

    setFilteredPrompts(
      prompts.filter((prompt: any) => 
        prompt?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  if (bcfError || promptsError) return <div>Failed to load</div>;

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />
      {bcfBoards && filteredPrompts.length > 0 ? (
        filteredPrompts.map((prompt: any) => (
          <PromptCard key={prompt.id} prompt ={prompt} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export default Page;
