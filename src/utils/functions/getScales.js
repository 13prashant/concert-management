const getScales = () => {
  const letters = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  let res = [];

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    let sharpOrFlat = '#';

    if (letter === 'E' || letter === 'B') {
      sharpOrFlat = 'b';
    }

    res.push(`${letter}`);
    res.push(`${letter}m`);
    res.push(`${letter} Sus`);
    res.push(`${letter}m Sus`);
    res.push(`${letter}${sharpOrFlat}`);
    res.push(`${letter}${sharpOrFlat}m`);
    res.push(`${letter}${sharpOrFlat} Sus`);
    res.push(`${letter}${sharpOrFlat}m Sus`);
  }

  return res;
};
