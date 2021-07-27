import './CloseButton.css';

function CloseButton(props) {
  return (
    <button
      className={`CloseButton ${props.className}`}
      onClick={props.onClose}
    />
  );
}

export default CloseButton;