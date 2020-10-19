import Header from './Header';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="pt-3 pb-3 pr-3 pl-3">
                <Header />
                {children}
            </div>
        </React.Fragment>
    );
};

export default Layout;