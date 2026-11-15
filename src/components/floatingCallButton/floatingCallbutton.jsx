import { BOOKING_URL_2 } from "../../constants";
import "./FloatingCallButton.css";
import BookingButton from "../BookingButton";


export default function FloatingCallbutton() {
  return (
    <div className="floating-call-button">
      <BookingButton href={BOOKING_URL_2} label={"Book Your Experience"} variant="light" />
    </div>
  );
}
