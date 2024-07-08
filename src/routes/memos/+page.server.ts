import { getMemosFiltered } from "../../services/memos/memosServices";

export async function load() {
  const fetchMemos = async () => {
    const response = await getMemosFiltered();

    try {
      const memos = await response; //
      return memos;
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      throw new Error("Failed to parse JSON from response.");
    }
  };

  const memos = await fetchMemos();

  return {
    memos: memos,
  };
}
