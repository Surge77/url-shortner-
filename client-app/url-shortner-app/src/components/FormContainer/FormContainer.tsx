import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;
  const [fullUrl, setFullUrl] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">Shorten Your Links</h1>
          <p className="text-gray-400">Transform long URLs into short, shareable links</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="url"
              placeholder="Enter your long URL here..."
              required
              className="w-full px-4 py-4 bg-[#1a1a24] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={fullUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFullUrl(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Shortening...
              </>
            ) : (
              "Shorten URL"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;