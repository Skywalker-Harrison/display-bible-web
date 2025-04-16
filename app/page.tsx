'use client';

import { useState, useEffect } from 'react';
import { getBookName } from './utils/bibleBooks';
import { isVerseRange, getVerseRange, getCombinedChineseVerses } from './utils/bibleVerses';

interface BibleData {
  [book: string]: {
    [chapter: string]: {
      [verse: string]: string;
    };
  };
}

export default function Home() {
  const [pollardBibleData, setPollardBibleData] = useState<BibleData>({});
  const [chineseBibleData, setChineseBibleData] = useState<BibleData>({});
  const [selectedBook, setSelectedBook] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<string>('');
  const [selectedVerse, setSelectedVerse] = useState<string>('');

  useEffect(() => {
    // Load Pollard Bible data
    fetch('/pollard_bible_data.json')
      .then(response => response.json())
      .then(data => setPollardBibleData(data));

    // Load Chinese Bible data
    fetch('/chinese_bible_data.json')
      .then(response => response.json())
      .then(data => setChineseBibleData(data));
  }, []);

  const books = Object.keys(pollardBibleData);
  const chapters = selectedBook ? Object.keys(pollardBibleData[selectedBook]) : [];
  const verses = selectedBook && selectedChapter ? Object.keys(pollardBibleData[selectedBook][selectedChapter]) : [];

  const renderVerseContent = () => {
    if (!selectedBook || !selectedChapter || !selectedVerse) return null;

    let chineseContent = '';
    if (isVerseRange(selectedVerse)) {
      const verseRange = getVerseRange(selectedVerse);
      chineseContent = getCombinedChineseVerses(chineseBibleData, selectedBook, selectedChapter, verseRange);
    } else {
      chineseContent = chineseBibleData[selectedBook]?.[selectedChapter]?.[selectedVerse] || 'Verse not found';
    }

    const pollardContent = pollardBibleData[selectedBook]?.[selectedChapter]?.[selectedVerse] || 'Verse not found';

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chinese Bible */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Chinese Bible
          </h3>
          <div className="text-lg text-gray-700 leading-relaxed">
            <div className="mb-2 text-gray-600">
              {getBookName(selectedBook)} {selectedChapter}:{selectedVerse}
            </div>
            <p>{chineseContent}</p>
          </div>
        </div>

        {/* Pollard Bible */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Pollard Bible
          </h3>
          <div className="text-lg text-gray-700 leading-relaxed">
            <div className="mb-2 text-gray-600">
              {getBookName(selectedBook)} {selectedChapter}:{selectedVerse}
            </div>
            <p>{pollardContent}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen p-8 bg-gray-100 flex flex-col">
      <div className="max-w-6xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Bible Parallel Reader
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Book Selection */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Select Book</h2>
            <select
              className="w-full p-2 border rounded"
              value={selectedBook}
              onChange={(e) => {
                setSelectedBook(e.target.value);
                setSelectedChapter('');
                setSelectedVerse('');
              }}
            >
              <option value="">Choose a book...</option>
              {books.map((book) => (
                <option key={book} value={book}>{getBookName(book)}</option>
              ))}
            </select>
          </div>

          {/* Chapter Selection */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Select Chapter</h2>
            <select
              className="w-full p-2 border rounded"
              value={selectedChapter}
              onChange={(e) => {
                setSelectedChapter(e.target.value);
                setSelectedVerse('');
              }}
              disabled={!selectedBook}
            >
              <option value="">Choose a chapter...</option>
              {chapters.map((chapter) => (
                <option key={chapter} value={chapter}>{chapter}</option>
              ))}
            </select>
          </div>

          {/* Verse Selection */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Select Verse</h2>
            <select
              className="w-full p-2 border rounded"
              value={selectedVerse}
              onChange={(e) => setSelectedVerse(e.target.value)}
              disabled={!selectedChapter}
            >
              <option value="">Choose a verse...</option>
              {verses.map((verse) => (
                <option key={verse} value={verse}>{verse}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Display Selected Verses */}
        {selectedBook && selectedChapter && selectedVerse && renderVerseContent()}
      </div>

      {/* Footer with personal information */}
      <footer className="mt-16 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">关于本项目</h2>
            <p className="text-gray-600 mt-2">
              这是一个中文圣经与柏格理苗文圣经对照阅读网站。
              旨在帮助读者更好地理解和比较两种版本的圣经内容。
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800">联系方式</h3>
            <p className="text-gray-600 mt-1">
              Email: <a href="liangjunhong2022@ia.ac.cn" className="text-blue-600 hover:underline">liangjunhong2022@ia.ac.cn</a>
              
            </p>
          </div>

          <div className="text-sm text-gray-500">
            <p>© 2024 Bible Parallel Reader. All rights reserved.</p>
            <p className="mt-1">
              Built with ❤️ using Next.js and Tailwind CSS.
              {' '}
              <a 
                href="https://github.com/your-username/display-bible-web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Repository
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
