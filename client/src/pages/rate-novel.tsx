import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import NovelCard from '../components/Status/NovelCard';

const RateNovelPage: React.FC = () => {
  // Dummy data
  const availableNovels = [
    { title: 'The Great Gatsby', readers: 120, rating: 4.2, dateAdded: '2024-08-01', wishlist: true, image: '/images/great-gatsby.jpg' },
    { title: 'To Kill a Mockingbird', readers: 95, rating: 4.8, dateAdded: '2024-07-25', wishlist: false, image: '/images/to-kill-a-mockingbird.jpg' },
    { title: '1984', readers: 110, rating: 4.5, dateAdded: '2024-06-15', wishlist: true, image: '/images/1984.jpg' },
  ];

  const myNovels = [
    { title: 'The Great Gatsby', rating: 4 },
    { title: '1984', rating: 5 },
  ];

  const summary = {
    newlyAdded: [
      { title: 'New Novel 1', rating: 4.0 },
      { title: 'New Novel 2', rating: 4.5 },
    ],
    topRated: [
      { title: 'Top Novel 1', rating: 4.9 },
      { title: 'Top Novel 2', rating: 4.8 },
    ]
  };

  return (
    <DashboardLayout>
      <NovelCard
        availableNovels={availableNovels}
        myNovels={myNovels}
        summary={summary}
      />
    </DashboardLayout>
  );
};

export default RateNovelPage;
