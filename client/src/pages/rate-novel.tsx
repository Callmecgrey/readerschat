import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import RateNovel from '../components/Status/RateNovel';

const RateNovelPage: React.FC = () => {
  return (
    <DashboardLayout>
      <RateNovel />
    </DashboardLayout>
  );
};

export default RateNovelPage;
