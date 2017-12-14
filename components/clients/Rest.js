const REQUEST_OPTIONS_GET =  {
    headers: {
        'content-type': 'application/json',
    },
    method: 'GET',
    mode: 'cors',
};

const makeRequest = (requestOptions) => (url) => {
    return fetch(url, requestOptions)
        .then((response) => {
                if (response.status !== 200) {
                    console.log(`Error -> Status Code: ${response.status}`);
                    return;
                }

                return response;
            }
        )
        .catch((err) => {
            console.log('Fetch Error', err);
        });
};

const get = makeRequest(REQUEST_OPTIONS_GET);

export { get };