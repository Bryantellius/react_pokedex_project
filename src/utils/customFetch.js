export const customFetch = async (url) => {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
