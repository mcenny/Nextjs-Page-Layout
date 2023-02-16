import DashboardLayout from '@/components/layout/dashboard-layout'
import React from 'react'

function Dashboard() {
    return (
        <DashboardLayout>
            <div style={{ width: '80vw', height: '200vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '42px' }}>Dashboard</div>
        </DashboardLayout>
    )
}

export default Dashboard