import styles from "./Modal.module.css";
const Modal = ({ onClose, iframeSrc }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <iframe
          src={iframeSrc}
          frameBorder="0"
          height="500px"
          width="500px"
        ></iframe>
      </div>
    </div>
  );
};
export default Modal;
