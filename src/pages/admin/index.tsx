import HeadWrapper from "@/components/head-wrapper";
import AdminPageLayout from "@/components/layouts/admin/admin-page-layout";
import LoadingDiv from "@/components/loading-div";
import RefreshButton from "@/components/refresh-button";
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

interface AnalyticsData {
  totalPhrases: number;
  quotes: number;
  jokes: number;
  userDefinedPhrases: number;
  approvedPhrases: number;
  pendingPhrases: number;
  rejectedPhrases: number;
  requests: number;
  apiKeys: number;
}

function AdminPage() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalPhrases: 0,
    quotes: 0,
    jokes: 0,
    userDefinedPhrases: 0,
    approvedPhrases: 0,
    pendingPhrases: 0,
    rejectedPhrases: 0,
    requests: 0,
    apiKeys: 0,
  });

  const [isLoadingAnalytics, setIsLoadingAnalytics] = useState<
    "loading" | "failed" | "success"
  >("loading");

  const { getAccessTokenSilently } = useAuth0();

 

  const fetchAnalyticsData = useCallback(async () => {
    try {
      setIsLoadingAnalytics("loading");

      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_RESOURCE_SERVER_URL}/phrase-management/admin/get-analytics`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setAnalyticsData(data);
        setIsLoadingAnalytics("success");
      } else {
        setIsLoadingAnalytics("failed");
      }
    } catch (error) {
      console.log(error);
      setIsLoadingAnalytics("failed");
    }
  }, [getAccessTokenSilently]);

  useEffect(() => {
    fetchAnalyticsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <AdminPageLayout>
      <HeadWrapper title="Phrase API Admin" />
      <Container fluid>
        <h2>Phrase API Admin</h2>
        <div>
          As admin, you have the permission to approve, or reject phrase
          submissions to be added to the resource API, as well as view essential
          API data.
        </div>
        <hr />
        <section>
          <h4>Analytics</h4>
          <p>Phrase API data.</p>
          <div>
            <RefreshButton onClick={fetchAnalyticsData} />
          </div>
          {isLoadingAnalytics === "loading" && <LoadingDiv />}
          {isLoadingAnalytics === "failed" && (
            <div className="text-danger">
              Failed to load analytics data. Please try again later.
            </div>
          )}
          {isLoadingAnalytics === "success" && (
            <Container fluid className="mt-4">
              <h4>Resource Phrases: {analyticsData.totalPhrases}</h4>
              <div>Quotes: {analyticsData.quotes}</div>
              <div>Jokes: {analyticsData.jokes}</div>
              <br />
              <h5>User-defined Phrases: {analyticsData.userDefinedPhrases}</h5>
              <div>Approved: {analyticsData.approvedPhrases}</div>
              <div>Pending: {analyticsData.pendingPhrases}</div>
              <div>Rejected: {analyticsData.rejectedPhrases}</div>
              <br />
              <h5>All-time requests: {analyticsData.requests}</h5>
              <div>Active API keys: {analyticsData.apiKeys}</div>
            </Container>
          )}
        </section>
      </Container>
    </AdminPageLayout>
  );
}

export default AdminPage;
