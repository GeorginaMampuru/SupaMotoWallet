import React from 'react';
// import Footer from './Footer';
import Header from './Header';
// import SignUpForm from './SignUpForm';
import BuyPalletes from './BuyPalletes';  
 // Verify the correct path

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen">
                <Header />
                <div className="py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
                    {children}
                    <BuyPalletes /> 
                    {/* <SignUpForm /> Include the SignUp component */}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default Layout;
