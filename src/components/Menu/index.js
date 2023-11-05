import Pizza from "../Pizza";

const Menu = ({ menu }) => {
  console.log(menu);
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {menu.map(item =>
        <Pizza
          key={item.name}
          name={item.name}
          ingredients={item.ingredients}
          photoName={item.photoName}
          price={item.price}
        />
      )}
    </main>
  );
};

export default Menu;