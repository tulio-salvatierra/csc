import VideoBackdrop from "../VideoBackdrop/VideoBackdrop";
import BookingButton from "../BookingButton";
import { BOOKING_URL_2 } from "../../constants";
import poster from "../../assets/images/video-posters/skincare-booking.webp";

export default function VideoBooking() {
  return (
    <section id="book-your-session" aria-labelledby="video-booking-heading">
      <VideoBackdrop src="/videos/skincare-booking.mp4" poster={poster} className="video-booking" label="Skincare background video">
        <p className="video-booking-eyebrow">Personalized skincare in Midland</p>
        <h2 id="video-booking-heading">Your skin deserves exceptional care.</h2>
        <p>Personalized treatments with Carolina in Midland, Texas. Take a moment for yourself and let’s find the right care for your skin.</p>
        <BookingButton href={BOOKING_URL_2} label="Book your session today" />
      </VideoBackdrop>
    </section>
  );
}
