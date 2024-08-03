import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import Feeds from '../components/Status/Feeds';

const UploadStatusPage: React.FC = () => {
  return (
    <DashboardLayout>
      <Feeds />
    </DashboardLayout>
  );
};

export default UploadStatusPage;
