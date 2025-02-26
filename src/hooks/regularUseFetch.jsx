import { useQuery } from '@tanstack/react-query';


// This useFetch custom hook is used to make RestFul API Fetching
// This custom hook does not require a Token
// !IMPORTANT => You have to provide the imported useFetch with the key (String) to discriminate the data while caching such as => const { data, isLoading, error } = useFetch('users', 'https://api.example.com/users');

const RegularUseFetch = (key, url) => {
  const fetchData = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('an error occurred while fetching');
    }
    return response.json();
  };

  return useQuery({
    queryKey: [key],
    queryFn: fetchData,
  });
};

export default RegularUseFetch;