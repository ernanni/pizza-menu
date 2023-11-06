const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <>
            <p>
              We're open until {closeHour}:00. Come visit us or order online.
            </p>
            <button
              className="btn"
              onClick={() => alert("We're still working on it")}
            >
              Order
            </button>
          </>
        ) : (
          <p>We're closed.</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
