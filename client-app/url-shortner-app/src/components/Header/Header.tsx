import * as React from "react";

interface IHeaderProps { }

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <header className="border-b border-gray-800 bg-[#0f0f17]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-white">LinkSnap</h1>
          </div>
          <span className="text-sm text-gray-400 hidden sm:block">URL Shortener</span>
        </div>
      </div>
    </header>
  );
};

export default Header;