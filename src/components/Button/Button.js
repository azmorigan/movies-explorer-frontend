import './Button.css';

function Button(props) {
  return (
    <button className={`Button  ${props.className}`}>{props.children}</button >
  );
}

export default Button;