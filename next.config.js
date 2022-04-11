/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.pixabay.com"],
    },
    publicRuntimeConfig: {
        apiUrl:
            process.env.NODE_ENV === "development"
                ? "http://localhost:3000/api" // development api
                : "http://localhost:3000/api", // production api
    },
};
