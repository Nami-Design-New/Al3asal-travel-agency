export const storeUniqueAirlines = (airlineNames = []) => {
    const stored = JSON.parse(localStorage.getItem("airlines")) || [];

    const unique = Array.from(
        new Set([...stored, ...airlineNames])
    );

    localStorage.setItem("airlines", JSON.stringify(unique));
};
