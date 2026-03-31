import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BOOKING_URL_2 } from "../../constants";
import BookingButton from "../BookingButton/BookingButton";
import "./PromoModal.css";

const DEFAULT_DELAY_MS = 9000;

/**
 * Full-screen promo modal: opens after `delayMs`, optional title + body (children),
 * CTA to booking URL, hero image via URL string (e.g. `/promo.jpg` from `public/` or a Vite asset URL).
 */
export default function PromoModal({
  backgroundImage,
  title,
  children,
  buttonLabel = "Book appointment",
  bookingUrl = BOOKING_URL_2,
  delayMs = DEFAULT_DELAY_MS,
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const closeBtnRef = useRef(null);
  const prevActiveElRef = useRef(null);

  useEffect(() => {
    const t = window.setTimeout(() => setOpen(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    prevActiveElRef.current = document.activeElement;
    const id = window.requestAnimationFrame(() => closeBtnRef.current?.focus());
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(id);
      document.removeEventListener("keydown", onKeyDown);
      prevActiveElRef.current?.focus?.();
    };
  }, [open]);

  if (!open || !backgroundImage) return null;

  const modal = (
    <div
      className="promo-modal-backdrop"
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <div
        className="promo-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : "Promotion"}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="promo-modal-bg"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden
        />
        <div className="promo-modal-scrim" aria-hidden />
        <button
          ref={closeBtnRef}
          type="button"
          className="promo-modal-close"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <div className="promo-modal-inner">
          {title ? (
            <h2 id={titleId} className="promo-modal-title">
              {title}
            </h2>
          ) : null}
          <div className="promo-modal-content-bottom">
            <div className="promo-modal-body">{children}</div>
            <div className="promo-modal-booking">
              <BookingButton href={bookingUrl} label={buttonLabel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
