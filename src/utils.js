// Get Image URL from the Assets
export const getImageUrl = (path) => {
    return new URL(
        `/assets/${path}`,
        import.meta.url
    ).href;
};