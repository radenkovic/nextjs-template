// eslint-disable-line
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "../styles/globals.css";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});

function Document({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default Document;
