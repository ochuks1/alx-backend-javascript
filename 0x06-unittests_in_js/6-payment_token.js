function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        }
        // Do nothing for false success
    });
}

module.exports = { getPaymentTokenFromAPI };
