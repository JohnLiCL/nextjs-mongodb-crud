import { Navbar } from './Navbar';

export const Layout = ({children}) => {
  return (<>
    <Navbar></Navbar>
    {children}
  </>)

}
