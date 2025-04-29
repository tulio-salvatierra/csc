import { useEffect } from "react";
import gsap from "gsap";

export function useMenuAnimation(isOpen, menuRef, overlayRef, menuLinksRef, socialIconsRef, bookNowRef) {
  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    if (isOpen) {
      gsap.set(menuRef.current, { y: "-100%", autoAlpha: 0 });

      gsap.fromTo(
        overlayRef.current,
        {
          autoAlpha: 0,
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
        {
          autoAlpha: 0.8,
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          duration: 0.8,
          ease: "power2.out",
        }
      );

      tl.to(menuRef.current, {
        y: "0%",
        autoAlpha: 1,
        duration: 0.8,
        ease: "power4.out",
      })
      .from(
        menuLinksRef.current,
        {
          y: 50,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .from(
        socialIconsRef.current,
        {
          y: 30,
          autoAlpha: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .from(
        bookNowRef.current,
        {
          scale: 0.8,
          autoAlpha: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
    } else {
      const tlClose = gsap.timeline({ defaults: { ease: "power3.out" } });

      tlClose
        .to(bookNowRef.current, {
          scale: 0.8,
          autoAlpha: 0,
          duration: 0.4,
        })
        .to(
          socialIconsRef.current,
          {
            y: 30,
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.3,
          },
          "-=0.3"
        )
        .to(
          menuLinksRef.current,
          {
            y: 50,
            autoAlpha: 0,
            stagger: 0.05,
            duration: 0.3,
          },
          "-=0.3"
        )
        .to(menuRef.current, {
          y: "-100%",
          autoAlpha: 0,
          duration: 0.8,
          ease: "power4.in",
        })
        .to(overlayRef.current, {
          autoAlpha: 0,
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(0, 0, 0, 0)",
          duration: 0.6,
          ease: "power2.in",
        }, "-=0.6")
        .set(menuRef.current, { clearProps: "all" });
    }

    return () => {
      tl.kill();
    };
  }, [isOpen, menuRef, overlayRef, menuLinksRef, socialIconsRef, bookNowRef]);
}