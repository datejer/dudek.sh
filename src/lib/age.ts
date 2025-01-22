const getCurrentAge = (birthday: string) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  const differenceInMilliseconds = today.getTime() - birthDate.getTime();
  const dateSince1970 = new Date(differenceInMilliseconds);
  const age = dateSince1970.getFullYear() - 1970;

  return age;
};

const getIndefiniteArticle = (age: number) => {
  return [8, 11, 18].includes(age) ? "an" : "a";
};

export { getCurrentAge, getIndefiniteArticle };
