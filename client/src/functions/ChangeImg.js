export const ChangeImgAuto = (setImg) => {
    const interval = setInterval(() => {
        setImg((prev) => (prev + 1) % 5); 
    }, 7000);

    return () => clearInterval(interval);
}

export const PrevImg = (setImg) => {
    setImg((img) => (img === 0 ? 4 : img - 1));
}

export const NextImg = (setImg) => {
    setImg((img) => (img === 4 ? 0 : img + 1));
}