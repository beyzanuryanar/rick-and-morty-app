export const handleResponse = response =>
  new Promise(resolve => resolve(response.text()))
    .catch(err =>
      Promise.reject({
        type: "NetworkError",
        status: response.status,
        message: err,
      }),
    )
    .then(responseBody => {
      try {
        const parsedJSON = JSON.parse(responseBody);
        if (response.ok) return parsedJSON;
        if (response.status >= 500) {
          return Promise.reject({
            type: "ServerError",
            status: response.status,
            body: parsedJSON,
          });
        }
        if (response.status <= 501) {
          return Promise.reject({
            type: "ApplicationError",
            status: response.status,
            body: parsedJSON,
          });
        }
      } catch (e) {
        return Promise.reject({
          type: "InvalidJSON",
          status: response.status,
          body: responseBody,
        });
      }
    });

