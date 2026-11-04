import { useEffect, useRef, useState } from "react";
import "./VideoBackdrop.css";

export default function VideoBackdrop({ src, poster, children, className = "", label = "Treatment video" }) {
  const videoRef = useRef(null);
  const [userPaused, setUserPaused] = useState(null);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const updatePlayback = () => {
      if (visible && !document.hidden && (!reducedMotion.matches || userPaused === false) && !userPaused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0.1 });
    observer.observe(video);
    reducedMotion.addEventListener("change", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [userPaused, src]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (video.paused) {
      setUserPaused(false);
      video.play().catch(() => {});
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  return (
    <div className={`video-backdrop ${className}`}>
      <video ref={videoRef} src={src} poster={poster} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} onPlay={() => setPaused(false)} onPause={() => setPaused(true)} />
      <div className="video-backdrop-shade" aria-hidden="true" />
      <div className="video-backdrop-content">{children}</div>
      <button type="button" className="video-backdrop-toggle" onClick={togglePlayback} aria-label={`${paused ? "Play" : "Pause"} ${label.toLowerCase()}`}>{paused ? "Play video" : "Pause video"}</button>
    </div>
  );
}
