import React, { useState } from "react";
import { Button, View, Linking } from "react-native";
import oauthConfig from "../oauthConfig"; // Make sure you have a valid OAuth configuration here

export default function SalesforceOAuth() {
  const [navData, setNavData] = useState("");
  //   const authUrl = "https://languageveda--uat.sandbox.my.site.com/";
  const authUrl =
    "https://languageveda--uat.sandbox.my.salesforce.com/services/oauth2/token";

  const handleLogin = () => {
    const authUrl =
      `${oauthConfig.authorizationUrl}?` +
      `response_type=token&` +
      `client_id=${oauthConfig.client_id}&` +
      `grant_type=password` +
      `redirect_uri=${encodeURIComponent(oauthConfig.redirectUrl)}`; // Use "+" to separate scope values
    setNavData(authUrl);
  };

  const handleLinking = () => {
    console.log(navData, "77777");
    Linking.openURL(authUrl) // Use Linking.openURL to open the URL
      .catch((err) => console.error("Error opening URL: ", err));
  };

  return (
    <View>
      <Button
        title="Login to Salesforce"
        onPress={() => {
          handleLogin(); // Trigger handleLogin
          handleLinking(); // Trigger handleLinking after setting the URL
        }}
      />
    </View>
  );
}

// import React, { useState } from "react";
// import { View, Button, Alert } from "react-native";
// import { WebView } from "react-native-webview";
// import oauthConfig from "../oauthConfig";

// export default function SalesforceOAuth() {
//   const [showWebView, setShowWebView] = useState(false);
//   const clientId =
//     "3MVG9fe4g9fhX0E4w2XjNCo0zR5rUcJsb32npSGB6uEREefLModRY2RHTu_IgJxB3Z54dbdXdYKiQK1IL36Tm";
//   const redirectUri =
//     "https://cloudodyssey-e-dev-ed.develop.my.site.com/HospitalPortal/s/";
//   const authUrl =
//     "https://cloudodyssey-e-dev-ed.develop.my.site.com/HospitalPortal/s/";
//   const handleLogin = () => {
//     // Replace with your Salesforce OAuth configuration
//     const clientId =
//       "3MVG9fe4g9fhX0E4w2XjNCo0zR5rUcJsb32npSGB6uEREefLModRY2RHTu_IgJxB3Z54dbdXdYKiQK1IL36Tm";
//     const redirectUri =
//       "https://cloudodyssey-e-dev-ed.develop.my.site.com/HospitalPortal/s/";
//     const authUrl =
//       "https://cloudodyssey-e-dev-ed.develop.my.site.com/HospitalPortal/s/";
//     console.log(authUrl, "56789");
//     setShowWebView(true);
//   };

//   const handleWebViewNavigation = (event) => {
//     if (event.url.startsWith("YOUR_REDIRECT_URI")) {
//       const regex = /access_token=([^&]*)/;
//       const match = event.url.match(regex);
//       const accessToken = match && match[1] ? match[1] : null;

//       if (accessToken) {
//         console.log("Access Token:", accessToken);
//         setShowWebView(false);
//       } else {
//         Alert.alert("OAuth Error", "Access token not found in the URL.");
//       }
//     }
//   };

//   return (
//     <View>
//       <Button title="Login to Salesforce" onPress={handleLogin} />
//       {showWebView && (
//         <WebView
//           source={{ uri: authUrl }}
//           onNavigationStateChange={handleWebViewNavigation}
//         />
//       )}
//     </View>
//   );
// }
