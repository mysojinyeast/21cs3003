const mockFetchNumbers = async (numberType) => {
    const mockData = {
        'p': [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
        'f': [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
        'e': [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        'r': [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
    };

    // Simulate API response delay (for testing purposes)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return mock data for the requested number type
    return mockData[numberType];
};

export { mockFetchNumbers };
