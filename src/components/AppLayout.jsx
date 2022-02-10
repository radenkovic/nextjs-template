function Header() {
  return <div>Header</div>;
}

function Footer() {
  return <div>Footer</div>;
}
// console.log("ok");
function AppLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
