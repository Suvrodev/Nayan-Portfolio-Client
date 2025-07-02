import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  //   MutableRefObject,
} from "react";

// Generic useEventListener hook in TypeScript
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: Document | HTMLElement = document
) {
  const savedHandler = useRef<
    ((event: DocumentEventMap[K]) => void) | undefined
  >(undefined);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event) => {
      // Cast generic Event back to the expected type
      if (savedHandler.current) {
        savedHandler.current(event as DocumentEventMap[K]);
      }
    };

    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

interface CursorProps {
  color?: string; // e.g., "255, 255, 255"
  outerAlpha?: number;
  innerSize?: number;
  outerSize?: number;
  outerScale?: number;
  innerScale?: number;
  borderWidth?: number;
  borderColor?: string;
}

const Cursor: React.FC<CursorProps> = ({
  color = "255, 255, 255",
  outerAlpha = 0.4,
  innerSize = 38,
  outerSize = 18,
  outerScale = 5,
  innerScale = 0,
  //   borderWidth = 10,
  //   borderColor = "green",
}) => {
  const cursorOuterRef = useRef<HTMLDivElement | null>(null);
  const cursorInnerRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number | undefined>(undefined);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = `${e.clientY}px`;
      cursorInnerRef.current.style.left = `${e.clientX}px`;
    }
    endX.current = e.clientX;
    endY.current = e.clientY;
  }, []);

  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;

        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [coords]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnter = useCallback(() => setIsVisible(true), []);
  const onMouseLeave = useCallback(() => setIsVisible(false), []);

  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", onMouseDown);
  useEventListener("mouseup", onMouseUp);
  useEventListener("mouseenter", onMouseEnter);
  useEventListener("mouseleave", onMouseLeave);

  useEffect(() => {
    if (cursorInnerRef.current && cursorOuterRef.current) {
      if (isActive) {
        cursorInnerRef.current.style.transform = `scale(${innerScale})`;
        cursorOuterRef.current.style.transform = `scale(${outerScale})`;
      } else {
        cursorInnerRef.current.style.transform = "scale(1)";
        cursorOuterRef.current.style.transform = "scale(1)";
      }
    }
  }, [isActive, innerScale, outerScale]);

  useEffect(() => {
    if (cursorInnerRef.current && cursorOuterRef.current && isActiveClickable) {
      cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`;
    }
  }, [isActiveClickable, innerScale, outerScale]);

  useEffect(() => {
    if (cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.opacity = isVisible ? "1" : "0";
      cursorOuterRef.current.style.opacity = isVisible ? "1" : "0";
    }
  }, [isVisible]);

  const updateClickables = useCallback(() => {
    const clickables = document.querySelectorAll<HTMLElement>(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    );

    clickables.forEach((el) => {
      el.style.cursor = "none";

      const handleMouseOver = () => setIsActive(true);
      const handleClick = () => {
        setIsActive(true);
        setIsActiveClickable(false);
      };
      const handleMouseDown = () => setIsActiveClickable(true);
      const handleMouseUp = () => setIsActive(true);
      const handleMouseOut = () => {
        setIsActive(false);
        setIsActiveClickable(false);
      };

      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("click", handleClick);
      el.addEventListener("mousedown", handleMouseDown);
      el.addEventListener("mouseup", handleMouseUp);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseover", () => setIsActive(true));
        el.removeEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener("mousedown", () => setIsActiveClickable(true));
        el.removeEventListener("mouseup", () => setIsActive(true));
        el.removeEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, []);

  useEffect(() => {
    const cleanup = updateClickables();

    const observer = new MutationObserver(() => {
      updateClickables();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      cleanup?.();
    };
  }, [updateClickables]);

  const styles: { [key: string]: React.CSSProperties } = {
    cursorInner: {
      position: "fixed",
      borderRadius: "50%",
      width: innerSize,
      height: innerSize,
      pointerEvents: "none",
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "white",
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
    },
    cursorOuter: {
      position: "fixed",
      borderRadius: "50%",
      pointerEvents: "none",
      width: outerSize,
      height: outerSize,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
  };

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </>
  );
};

export default Cursor;
