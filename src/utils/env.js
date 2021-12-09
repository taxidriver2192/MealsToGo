const liveHost = "https://us-central1-mealstogo-885bc.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-885bc/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

// xport const host = isDevelopment ? localHost : liveHost;
export const host = liveHost;
