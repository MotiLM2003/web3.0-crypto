import {
  Loader,
  Navbar,
  Footer,
  Welcome,
  Transactions,
  Services,
} from './components';

export default () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome bg-black'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};
