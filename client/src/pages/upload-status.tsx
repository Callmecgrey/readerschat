import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import UploadStatus from '../components/Status/UploadStatus';

const UploadStatusPage: React.FC = () => {
  return (
    <DashboardLayout>
      <UploadStatus />
    </DashboardLayout>
  );
};

export default UploadStatusPage;
