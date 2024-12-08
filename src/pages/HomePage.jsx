import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews, setCategory } from '../features/news/newsSlice';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import NewsCard from '../components/NewsCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, category, error } = useSelector(
    (state) => state.news
  );

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [category, dispatch]);

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [category, dispatch]);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    'top',
    'world',
    'science',
    'entertainment',
    'sports',
    'technology',
    'politics',
    'business',
    'health',
    'environment',
    'food',
  ];

  return (
    <div className="min-h-screen mx-6 py-2 px-4">
      <header className="px-2 py-1 bg-gradient-to-r from-customRed/25 to-customdarkRed/25 rounded-3xl sticky top-4 flex flex-col justify-center items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-2xl font-bold text-white text-center my-2 text-nowrap">
          News App
        </h1>

        <div className="flex flex-col space-y-2 sm:space-x-4 sm:space-y-0 w-full sm:w-1/2 sm:flex-row">
          <SearchBar onSearch={setSearchQuery} />
          <FilterDropdown
            categories={categories}
            selectedCategory={category}
            onCategoryChange={(newCategory) =>
              dispatch(setCategory(newCategory))
            }
          />
        </div>
      </header>
      {status === 'failed' && (
        <p className="pt-16 text-center text-xl text-white font-semibold">
          {error} (TOO MANY REQUESTS) Rate limit exceded. <br />
          Try again after 15 mintues
        </p>
      )}
      {status === 'loading' ? (
        <p className="pt-16 text-center text-xl text-white font-semibold">
          Loading...
        </p>
      ) : (
        <div className="my-4 sm:m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArticles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.image_url || 'https://via.placeholder.com/150'}
              link={article.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
