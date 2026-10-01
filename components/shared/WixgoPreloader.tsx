"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const STORAGE_KEY = "wixgo-preloader-shown";

export default function WixgoPreloader() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldShow = !sessionStorage.getItem(STORAGE_KEY);

    if (!shouldShow) {
      return;
    }

    setIsVisible(true);

    const finish = () => {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setProgress(100);
      window.setTimeout(() => setIsVisible(false), reducedMotion ? 120 : 220);
    };

    const start = performance.now();
    const maxDuration = reducedMotion ? 650 : 2500;
    let rafId = 0;
    let finishTimer: number | undefined;

    const tick = (time: number) => {
      const elapsed = time - start;
      const value = Math.min(100, (elapsed / maxDuration) * 100);
      setProgress(value);

      if (value < 100) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    const onLoad = () => {
      window.clearTimeout(finishTimer);
      finish();
    };

    finishTimer = window.setTimeout(() => {
      finish();
    }, maxDuration);

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(finishTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <div
      className="wixgo-preloader"
      aria-live="polite"
      aria-label="Wixgo loading screen"
      role="status"
    >
      <div className="wixgo-preloader__inner">
        <div className="wixgo-preloader__brand" aria-label="Wixgo Digital Studio">
          <div className="wixgo-preloader__logo-wrap">
            <Image
              src="/images/wixgo-mark.svg"
              alt="Wixgo logo"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className="wixgo-preloader__wordmark">WIXGO</div>
        </div>

        <div className="wixgo-preloader__status" aria-live="polite">
          <span className="wixgo-preloader__label">LOADING</span>
          <span className="wixgo-preloader__percent">{Math.round(progress)}%</span>
        </div>

        <div className="wixgo-preloader__bar" aria-hidden="true">
          <span className="wixgo-preloader__fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
