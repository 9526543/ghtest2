import React from 'react';
import Product from '../components/Product';
import Header from '../components/Header';

const Home: React.FC = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://67e1e77958cc6bf785275f2e.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        {isLoading && <span>Загрузка...</span>}
        {items.map((item: any) => (
          <Product {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
