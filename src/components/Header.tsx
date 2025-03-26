import React from 'react';
import { Link } from 'react-router';

const sortList = ['Все', 'Избранное'];

const Header: React.FC = () => {
  const [showSort, setShowSort] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

  const onSelectFilter = (i: number) => {
    setSelected(i);
    setShowSort(false);
  };
  return (
    <div className="header">
      <div className="sort">
        Показать:
        <span onClick={() => setShowSort((showSort) => !showSort)}>{sortList[selected]}</span>
      </div>
      {showSort && (
        <div className="sort-popup">
          <ul>
            {sortList.map((item, i) => (
              <li
                key={i}
                onClick={() => onSelectFilter(i)}
                className={selected === i ? 'active' : ''}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/create">Создать товар</Link>
    </div>
  );
};

export default Header;
