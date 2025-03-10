import { TELEPHONE } from "../../constants";
import "./FloatingCallButton.css";


export default function FloatingCallbutton() {
  return (
    <div className="floating-call-button">
      <a href={TELEPHONE}>
        <button className="btn btn-dark">
          Call us now!
        </button>
      </a>
    </div>
    
  )
}

