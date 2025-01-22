import { atom, useAtom } from "jotai";

const fallbackIconsAtom = atom<{ [key: string]: string }>({});

export const useFallbackIcons = () => {
  const [fallbackIcons, setFallbackIcons] = useAtom(fallbackIconsAtom);

  const addFallbackIcon = (gameName: string, icon: string) => {
    setFallbackIcons((prev) => ({ ...prev, [gameName]: icon }));
  };

  return { fallbackIcons, addFallbackIcon };
};
