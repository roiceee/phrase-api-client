import AnalyticsData from "./analytics-data";

function createDefaultAnalyticsData(): AnalyticsData {
  return {
    totalPhrases: 0,
    quotes: 0,
    jokes: 0,
    userDefinedPhrases: 0,
    approvedPhrases: 0,
    pendingPhrases: 0,
    rejectedPhrases: 0,
    requests: 0,
    apiKeys: 0,
  };
}

export default createDefaultAnalyticsData;
