export const getHash = () => (typeof window !== "undefined" ? window.location.hash : undefined);
