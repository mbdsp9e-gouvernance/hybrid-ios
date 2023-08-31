export async function wsUrl(url: String) {
    try {
        const wsUrl = "http://localhost:4000" + url;
        return wsUrl;
    } catch (error) {
        console.error("Error get url:", error);
    }
}
