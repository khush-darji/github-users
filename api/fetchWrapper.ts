export const fetchWrapper = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint);

  if (!response.ok) throw new Error("Error!");

  return await response.json();
};
