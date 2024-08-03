import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import FindReaders from '../components/Readers/FindReaders';

const FindReadersPage: React.FC = () => {
  return (
    <DashboardLayout>
      <FindReaders />
    </DashboardLayout>
  );
};

export default FindReadersPage;
