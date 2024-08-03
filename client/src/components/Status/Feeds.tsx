import React, { useState } from 'react';
import { FaImage, FaVideo, FaUser } from 'react-icons/fa';

const Feeds: React.FC = () => {
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);

  // Dummy data
  const friendFeeds = [
    { id: 1, username: 'John Doe', content: 'Just finished a great book! The narrative was incredible and the characters were so well-developed.', image: '/images/book1.jpg', video: null, comments: ['Great read!', 'I loved it too!'] },
    { id: 2, username: 'Jane Smith', content: 'Check out my latest review! I dive deep into the themes and characters of this book.', image: null, video: '/videos/review.mp4', comments: ['Nice review!', 'Very insightful.'] },
  ];

  const topRatedFeeds = [
    { id: 1, username: 'Michael Johnson', content: 'Amazing book! Highly recommend. The story was gripping from start to finish and the plot twists were brilliant.', image: '/images/book2.jpg', video: null, comments: ['Totally agree!', 'It’s on my reading list now.'] },
  ];

  const summary = {
    hotPosts: [
      { id: 1, username: 'Alice Doe', content: 'Loved this novel! The writing style was captivating and the story was so engaging.', image: '/images/book3.jpg' },
    ],
    popularFeeds: [
      { id: 1, username: 'Bob Smith', content: 'A must-read for everyone! The book offers a fresh perspective on an old topic.', image: '/images/book4.jpg' },
    ]
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the post submission logic here
    console.log('Post submitted:', postText, image, video);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 h-screen">
      {/* Add Post Section */}
      <div className="flex-1 flex flex-col">
        <form className="flex flex-col mt-4 mb-4" onSubmit={handlePostSubmit}>
          <div className="flex mb-4">
            <textarea
              placeholder="What's on your mind?"
              className="p-2 border border-gray-400 rounded-md flex-1 h-20 resize-none"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
            <button
              type="submit"
              className="ml-4 p-2 bg-blue-500 text-white rounded-md self-end"
            >
              Post
            </button>
          </div>
          <div className="flex items-center mb-4">
            <label className="flex items-center mr-4 cursor-pointer">
              <FaImage className="text-gray-500 mr-2" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files && setImage(e.target.files[0])}
              />
              <span>Upload Image</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <FaVideo className="text-gray-500 mr-2" />
              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => e.target.files && setVideo(e.target.files[0])}
              />
              <span>Upload Video</span>
            </label>
          </div>
        </form>

        {/* Feeds */}
        <div className="flex-1 overflow-y-auto">
          <div className="sticky top-0 bg-white z-10">
            <h2 className="text-xl font-bold mb-4">Friend Feeds</h2>
          </div>
          <div className="space-y-4">
            {friendFeeds.map(feed => (
              <div key={feed.id} className="p-4 border border-gray-300 rounded-lg bg-white">
                <div className="flex items-start mb-2">
                  <FaUser className="text-gray-500 mr-2" />
                  <div>
                    <p className="font-semibold">{feed.username}</p>
                    <p>{feed.content}</p>
                    {feed.image && <img src={feed.image} alt="Feed" className="w-full h-64 object-cover mt-2" />}
                    {feed.video && <video controls className="w-full h-64 object-cover mt-2"><source src={feed.video} /></video>}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Comments</h4>
                  {feed.comments.length > 0 ? (
                    <ul className="space-y-2">
                      {feed.comments.map((comment, index) => (
                        <li key={index} className="border-t border-gray-300 pt-2">
                          <p>{comment}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No comments yet.</p>
                  )}
                </div>
              </div>
            ))}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Top Rated Feeds</h3>
              {topRatedFeeds.map(feed => (
                <div key={feed.id} className="p-4 border border-gray-300 rounded-lg bg-white">
                  <div className="flex items-start mb-2">
                    <FaUser className="text-gray-500 mr-2" />
                    <div>
                      <p className="font-semibold">{feed.username}</p>
                      <p>{feed.content}</p>
                      {feed.image && <img src={feed.image} alt="Feed" className="w-full h-64 object-cover mt-2" />}
                      {feed.video && <video controls className="w-full h-64 object-cover mt-2"><source src={feed.video} /></video>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Comments</h4>
                    {feed.comments.length > 0 ? (
                      <ul className="space-y-2">
                        {feed.comments.map((comment, index) => (
                          <li key={index} className="border-t border-gray-300 pt-2">
                            <p>{comment}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No comments yet.</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Sidebar */}
      <div className="w-96 pl-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-md font-semibold mb-2">Hot Posts</h3>
              {summary.hotPosts.length > 0 ? (
                summary.hotPosts.map((post) => (
                  <div key={post.id} className="mb-2">
                    <div className="flex items-start mb-2">
                      <FaUser className="text-gray-500 mr-2" />
                      <div>
                        <p className="font-semibold">{post.username}</p>
                        <p>{post.content}</p>
                        {post.image && <img src={post.image} alt="Post" className="w-full h-24 object-cover mt-2" />}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No hot posts at the moment.</p>
              )}
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Popular Feeds</h3>
              {summary.popularFeeds.length > 0 ? (
                summary.popularFeeds.map((feed) => (
                  <div key={feed.id} className="mb-2">
                    <div className="flex items-start mb-2">
                      <FaUser className="text-gray-500 mr-2" />
                      <div>
                        <p className="font-semibold">{feed.username}</p>
                        <p>{feed.content}</p>
                        {feed.image && <img src={feed.image} alt="Feed" className="w-full h-24 object-cover mt-2" />}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No popular feeds at the moment.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
