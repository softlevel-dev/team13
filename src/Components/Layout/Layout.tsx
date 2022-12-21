import React, {useState, useCallback} from "react";

interface ILayoutProps {
    children: React.ReactNode;
    pageHeader?: React.ReactNode;
    pageFooter?: React.ReactNode;
}

const Layout = ({pageHeader, pageFooter, children}:ILayoutProps) => {

    return <><header style={{padding:0}}>
                {pageHeader}
            </header>
             {children}
            <footer>
                {pageFooter}
            </footer></>

}

export default Layout;