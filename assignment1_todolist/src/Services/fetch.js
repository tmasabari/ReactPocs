// apiService.js

// Create a reusable function for making HTTP requests using Fetch
const createApiService = (baseURL) =>
{
    const get = async (endpoint) =>
    {
        try
        {
            const response = await fetch(`${baseURL}${endpoint}`, {
                method: 'GET',
                credentials: 'include', // Include cookies in the request
            });
            if (!response.ok)
            {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error)
        {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    const post = async (endpoint, data) =>
    {
        try
        {
            const response = await fetch(`${baseURL}${endpoint}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok)
            {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error)
        {
            console.error('Error posting data:', error);
            throw error;
        }
    };
    const put = async (endpoint, data) => 
    {
        try
        {
            const response = await fetch(`${baseURL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok)
            {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error)
        {
            console.error('Error updating data:', error);
            throw error;
        }
    };
    const del = async (endpoint) => //delete is the keyword do not use
    {
        try
        {
            const response = await fetch(`${baseURL}${endpoint}`, {
                method: 'DELETE',
            });

            if (!response.ok)
            {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error)
        {
            console.error('Error deleting data:', error);
            throw error;
        }
    } ;
    return {
        get,
        post,
        // Add other methods as needed
        put,
        del,

    };
};

export default createApiService;
