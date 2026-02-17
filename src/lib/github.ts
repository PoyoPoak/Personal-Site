export async function getLatestCommitHash(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/PoyoPoak/Personal-Site/commits/main",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch commit hash");
    }
    const data = await response.json();
    return data.sha.substring(0, 7);
  } catch (error) {
    console.error("Error fetching latest commit:", error);
    return null;
  }
}
