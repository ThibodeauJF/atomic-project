"use strict";
async function renewAccessToken() {
  const response = await fetch('.netlify/functions/token');
  const { token } = await response.json();
  return token;
}
async function main() {
  await customElements.whenDefined('atomic-search-interface');
  const searchInterface = document.querySelector('#search');
  const platformUrl = "https://platform.cloud.coveo.com";
  const organizationId = "searchuisamples";
  await searchInterface.initialize({
    accessToken: await renewAccessToken(),
    renewAccessToken,
    organizationId,
    platformUrl,
  });
  searchInterface.executeFirstSearch();
}
main();
