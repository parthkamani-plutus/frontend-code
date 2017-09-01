
function makeAppConfig() {
  const date = new Date();
  const year = date.getFullYear();

  const AppConfig = {
    apiUrl: 'http://localhost:8888/'
  };

  return AppConfig;
}

export const APPCONFIG = makeAppConfig();
