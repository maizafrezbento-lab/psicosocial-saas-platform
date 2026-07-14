import React from 'react';
import SidebarLayout from '../components/layout/SidebarLayout';
import DashboardContent from '../components/dashboard/DashboardContent';

const DashboardPage = () => {
  return (
    <SidebarLayout>
      <DashboardContent />
    </SidebarLayout>
  );
};

export default DashboardPage;
