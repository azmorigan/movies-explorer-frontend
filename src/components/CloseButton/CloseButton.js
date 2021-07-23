import './CloseButton.css';

function CloseButton(props) {
  return (
    <button
      className="CloseButton"
      onClick={props.onClose}
    />
  );
}

export default CloseButton;