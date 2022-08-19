import Button from '@components/Button';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">This is a homepage</h1>
      <Button />
    </div>
  );
};

export default Home;
