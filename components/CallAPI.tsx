import React, { useState, useEffect } from "react";

const CallAPI: React.FC = () => {
const [data, setData] = useState<any>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
        throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
    } catch (err: any) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };

    fetchData();
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;

return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", marginTop: "10px" }}>
    <h2>{data.title}</h2>
    <p>{data.body}</p>
    </div>
);
};

export default CallAPI;
