import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface NovelCardProps {
  availableNovels: {
    title: string;
    readers: number;
    rating: number;
    dateAdded: string;
    wishlist: boolean;
    image: string;
  }[];
  myNovels: {
    title: string;
    rating: number;
  }[];
  summary: {
    newlyAdded: { title: string; rating: number }[];
    topRated: { title: string; rating: number }[];
  };
}

const NovelCard: React.FC<NovelCardProps> = ({ availableNovels, myNovels, summary }) => {
  const [activeTab, setActiveTab] = useState<'novels' | 'my-novels'>('novels');

  return (
    <div className="flex flex-col lg:flex-row p-4">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Novels</h1>

        <div className="mb-6">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('novels')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'novels' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
              }`}
            >
              Novels
            </button>
            <button
              onClick={() => setActiveTab('my-novels')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'my-novels' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
              }`}
            >
              My Novels
            </button>
          </div>

          {activeTab === 'novels' && (
            <div>
              {/* Novel Search */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search novels..."
                  className="p-2 pl-8 border border-gray-400 rounded-md w-full"
                />
                <FaSearch className="absolute left-2 top-2 text-gray-500" />
              </div>

              {/* Available Novels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableNovels.map((novel, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white flex flex-col items-center"
                  >
                    <img
                      src={novel.image}
                      alt={novel.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <h2 className="text-lg font-semibold mt-2">{novel.title}</h2>
                    <p>No of Readers: {novel.readers}</p>
                    <p>Rating: {novel.rating}</p>
                    <p>Date Added: {novel.dateAdded}</p>
                    <p>Wishlist: {novel.wishlist ? 'Yes' : 'No'}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'my-novels' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">My Novels</h2>
              <div className="space-y-4">
                {myNovels.length > 0 ? (
                  myNovels.map((novel, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white"
                    >
                      <h2 className="text-lg font-semibold mb-2">{novel.title}</h2>
                      <p>Rating: {novel.rating}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No novels rated yet.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Summary Sidebar */}
      <div className="w-80 pl-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-md font-semibold mb-2">Newly Added Novels</h3>
              {summary.newlyAdded.length > 0 ? (
                summary.newlyAdded.map((novel, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-semibold">{novel.title}</p>
                    <p className="text-gray-600">Rating: {novel.rating}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No new novels added.</p>
              )}
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Top Rated Novels</h3>
              {summary.topRated.length > 0 ? (
                summary.topRated.map((novel, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-semibold">{novel.title}</p>
                    <p className="text-gray-600">Rating: {novel.rating}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No top-rated novels.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelCard;
