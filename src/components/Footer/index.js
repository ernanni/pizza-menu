const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  return <footer>{isOpen && "We're currently open."}</footer>;
};

export default Footer;