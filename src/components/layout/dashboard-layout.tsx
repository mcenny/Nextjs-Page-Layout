import React, { ReactNode } from 'react';

type DashboardLayoutProps = {
    children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div style={{ width: '100vw', display: 'flex' }}>
            <div style={{ width: '20vw', height: '100Vh', border: '1px solid red', position: 'sticky', top: '0' }}>SideBar</div>
            {children}
        </div>
    );
};

export default DashboardLayout;
