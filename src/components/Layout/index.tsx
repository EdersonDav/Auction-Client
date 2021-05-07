import Header from './Header';
import { LayoutWrapper } from './style';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;