import './Headline.css';

function Headline(props) {
  return (
    <h3 className="Headline">{props.children}</h3>
  );
}

export default Headline;