import classes from "./Modal.module.css";

// eslint-disable-next-line react/prop-types
function Modal({children, onClose}) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}/>
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
}
export default Modal;
