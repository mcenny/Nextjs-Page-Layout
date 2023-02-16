import React, { ReactNode } from 'react';
import Footer from '../footer';
import Header from '../header';

type LandingLayoutProps = {
    children: ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default LandingLayout;
