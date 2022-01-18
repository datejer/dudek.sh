// ❤ https://github.com/facebook/flow/issues/4799#issuecomment-684085294

/**
 * Function adding/removing event listeners that execute an action depending on a state flag, if clicked outside of target element.
 *
 * @param {RefObject<any>} ref - target element
 * @param {boolean} state - state flag (ex. isOpen)
 * @param {() => void} action - action to execute (ex. closeMenu)
 *
 */

import { RefObject, useEffect } from "react";

const useOutsideClick = (ref: RefObject<HTMLElement>, state: boolean, action: () => void) => {
  const eventAction = (ev: Event) => {
    if (ref.current && ev.target instanceof Node && !ref.current.contains(ev.target)) {
      ev.preventDefault();
      action();
      removeGlobalListeners();
    }
  };

  const addGlobalListeners = () => {
    document.addEventListener("click", eventAction, false);
    document.addEventListener("touchend", eventAction, false);
    window.addEventListener("popstate", eventAction, false);
  };

  const removeGlobalListeners = () => {
    document.removeEventListener("click", eventAction, false);
    document.removeEventListener("touchend", eventAction, false);
    window.removeEventListener("popstate", eventAction, false);
  };

  useEffect(() => {
    if (state) {
      addGlobalListeners();
    }

    return function cleanup() {
      removeGlobalListeners();
    };
  });
};

export { useOutsideClick };
