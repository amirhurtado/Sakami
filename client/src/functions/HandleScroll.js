export const HandleScroll = (setHasScrolled) => {
  if (window.scrollY > 0) {
     setHasScrolled(true);
  } else {
     setHasScrolled(false);
  }
};
