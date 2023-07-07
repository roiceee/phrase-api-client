import HeadWrapper from "@/components/head-wrapper";
import AdminPageLayout from "@/components/layouts/admin/admin-page-layout";
import { Container, Row } from "react-bootstrap";
import DataDiv from "../../components/admin-page-components/data-div";
import { useCallback, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import RefreshButton from "@/components/refresh-button";
import LoadingDiv from "@/components/loading-div";
import LoadingScreen from "@/components/loading-screen";
import AdminContext from "@/contexts/admin-context/admin-context";
import UnauthorizedScreen from "@/components/unauthorized-screen";

interface AnalyticsData {
  totalPhrases: number;
  quotes: number;
  jokes: number;
  userDefinedPhrases: number;
  requests: number;
  apiKeys: number;
}

function AdminPage() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalPhrases: 0,
    quotes: 0,
    jokes: 0,
    userDefinedPhrases: 0,
    requests: 0,
    apiKeys: 0,
  });

  const [isLoadingAnalytics, setIsLoadingAnalytics] = useState<
    "loading" | "failed" | "success"
  >("loading");

  const { getAccessTokenSilently } = useAuth0();

  const {isAdmin} = useContext(AdminContext);

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

  if (!isAdmin) {
    return <UnauthorizedScreen/>
  }

  

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
          {isLoadingAnalytics === "loading" && (
            <LoadingDiv/>
          )}
          {isLoadingAnalytics === "failed" && (
            <div className="text-danger">
              Failed to load analytics data. Please try again later.
            </div>
          )}
          {isLoadingAnalytics === "success" && (
            <Container fluid className="mt-3">
              <Row className="gap-2">
                <DataDiv xl={5}>
                  <h5>Total Phrases: {analyticsData.totalPhrases}</h5>
                  <div>Quotes: {analyticsData.quotes}</div>
                  <div>Jokes: {analyticsData.jokes}</div>
                  <div>User-defined: {analyticsData.userDefinedPhrases}</div>
                </DataDiv>
                <DataDiv xl={5}>
                  <h5>All-time requests: {analyticsData.requests}</h5>
                  <div>Active API keys: {analyticsData.apiKeys}</div>
                </DataDiv>
              </Row>
            </Container>
          )}
        </section>
      </Container>
    </AdminPageLayout>
  );
}

export default AdminPage;
