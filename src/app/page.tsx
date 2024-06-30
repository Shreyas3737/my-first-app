import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import PromptCard from '../components/PromptCard';
import SearchBar from '../components/SearchBar';
import { fetchBcfBoardsData, fetchPromptsData } from '../lib/utils';
import Sidebar from 'src/components/Sidebar';

interface Props {
  bcfBoards: any[];
  prompts: any[];
}

const Page: React.FC<Props> = ({ bcfBoards, prompts }) => {
  const [filteredPrompts, setFilteredPrompts] = useState(prompts);

  const handleSearch = (searchTerm: string) => {
    setFilteredPrompts(
      prompts.filter((prompt) => prompt.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <Layout>
      <Sidebar bcfBoards={bcfBoards} />
      <div className="main-content">
        <h2>Prompts</h2>
        <SearchBar onSearch={handleSearch} />
        <div className="prompts-container">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} {...prompt} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const bcfBoards = await fetchBcfBoardsData();
  const prompts = await fetchPromptsData();

  return {
    props: {
      bcfBoards,
      prompts,
    },
  };
}

export default Page;
