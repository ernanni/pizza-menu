import Pizza from '../Pizza';

const Menu = ({ menu }) => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cousine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious
      </p>
      <ul className="pizzas">
        {menu.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
