export const isVerseRange = (verse: string): boolean => {
  return verse.includes('-');
};

export const getVerseRange = (verse: string): number[] => {
  if (!isVerseRange(verse)) {
    return [parseInt(verse)];
  }
  
  const [start, end] = verse.split('-').map(v => parseInt(v));
  const range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

export const getCombinedChineseVerses = (
  bibleData: any,
  book: string,
  chapter: string,
  verseRange: number[]
): string => {
  return verseRange
    .map(verse => bibleData[book]?.[chapter]?.[verse.toString()] || '')
    .filter(text => text !== '')
    .join(' ');
}; 