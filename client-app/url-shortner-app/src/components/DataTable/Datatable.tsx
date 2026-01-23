import * as React from "react";
import type { UrlData } from "../../interface/UrlData";
import { serverUrl } from "../../helpers/Constants";
import axios from "axios";

interface IDataTableProps {
  data: UrlData[];
  updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  const { data, updateReloadState } = props;
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyToClipboard = async (url: string, id: string) => {
    try {
      const fullUrl = `${serverUrl}/shortUrl/${url}`;
      await navigator.clipboard.writeText(fullUrl);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUrl = async (id: string) => {
    try {
      await axios.delete(`${serverUrl}/shortUrl/${id}`);
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };

  if (data.length === 0) {
    return (
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-3xl mx-auto bg-[#1a1a24] border border-gray-800 rounded-lg p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-indigo-600/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No URLs Yet</h3>
          <p className="text-gray-400">Start by shortening your first URL above</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Your Links</h2>
          <span className="text-sm text-gray-400">{data.length} total</span>
        </div>

        <div className="space-y-3">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-[#1a1a24] border border-gray-800 rounded-lg p-4 hover:border-gray-700"
            >
              <div className="flex flex-col gap-3">
                {/* Original URL */}
                <div>
                  <div className="text-xs text-gray-500 mb-1">Original URL</div>
                  <a
                    href={item.fullUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-gray-300 hover:text-indigo-400 break-all line-clamp-1"
                  >
                    {item.fullUrl}
                  </a>
                </div>

                {/* Short URL and Actions */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 mb-1">Short URL</div>
                    <a
                      href={`${serverUrl}/shortUrl/${item.shortUrl}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-indigo-400 hover:text-indigo-300 font-mono"
                    >
                      {item.shortUrl}
                    </a>
                  </div>

                  {/* Clicks */}
                  <div className="text-center px-3 py-1 bg-[#0f0f17] border border-gray-800 rounded">
                    <div className="text-xs text-gray-500">Clicks</div>
                    <div className="text-lg font-semibold text-white">{item.clicks}</div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(item.shortUrl, item._id)}
                      className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded flex items-center gap-1.5"
                      title="Copy to clipboard"
                    >
                      {copiedId === item._id ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="hidden sm:inline">Copied</span>
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span className="hidden sm:inline">Copy</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        if (window.confirm('Delete this URL?')) {
                          deleteUrl(item._id);
                        }
                      }}
                      className="px-3 py-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 text-sm rounded border border-red-600/30"
                      title="Delete URL"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
