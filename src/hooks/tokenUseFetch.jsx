import { useQuery } from '@tanstack/react-query';


// This useFetch custom hook is used to make RestFul API Fetching
// This custom hook requires a token to work
// The query will automatically update the data if the token changed
// !IMPORTANT => You have to provide the imported useFetch with the key (String) to discriminate the data while caching such as => const { data, isLoading, error } = useFetch('users', 'https://api.example.com/users', token);

const TokenUseFetch = (key, url, token) => {
  const fetchData = async () => {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('an error occurred while fetching');
    }
    
    return response.json();
  };

  return useQuery({
    queryKey: [key, token],
    queryFn: fetchData,
    enabled: !!token, // The query will not work if there is no token
  });
};

export default TokenUseFetch;
