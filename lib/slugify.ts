export const slugify = (name: string) => {
  return name.toLocaleLowerCase().split(" ").join("-").replace(/[^\w]/g, "");
};
