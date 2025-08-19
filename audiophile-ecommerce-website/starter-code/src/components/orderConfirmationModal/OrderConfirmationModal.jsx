import AppModal from "../modal/AppModal";
import classes from "./OrderConfirmationModal.module.scss";

function OrderConfirmationModal() {
  return (
    <AppModal>
      <div className={classes["confirmation-modal-container"]}>
        <div className={classes["confirmed-img-container"]}></div>
        <h1>THANK YOU FOR YOUR ORDER</h1>
        <p>You will receive an email confirmation shortly.</p>
      </div>
    </AppModal>
  );
}

export default OrderConfirmationModal;
