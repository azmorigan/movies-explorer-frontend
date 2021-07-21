import './Navigation.css';

function Navigation(props) {
  return (
    <nav className={`Navigation  ${props.className}`}>
      {props.children}
    </nav>
  );
}

export default Navigation;