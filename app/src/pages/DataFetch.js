"use client";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/firebaseConfig";

export default function DataFetch() {
  const [test_data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(database, "test_data");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const flattenedData = [];

          // Flatten the data structure
          for (const date in data) {
            for (const entryId in data[date]) {
              const entry = data[date][entryId];
              flattenedData.push({
                date,
                ...entry,
              });
            }
          }

          console.log("Flattened data:", flattenedData); // Log flattened data
          setData(flattenedData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-10">
        Fetch Data From Realtime DB
      </h1>
      <table className="mx-auto border-collapse border border-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-600 p-2">Date</th>
            <th className="border border-gray-600 p-2">Time</th>
            <th className="border border-gray-600 p-2">Temperature</th>
            <th className="border border-gray-600 p-2">Humidity</th>
          </tr>
        </thead>
        <tbody>
          {test_data.map((data, index) => (
            <tr key={index}>
              <td className="border border-gray-600 p-2">{data.date}</td>
              <td className="border border-gray-600 p-2">{data.time}</td>
              <td className="border border-gray-600 p-2">{data.temperature}</td>
              <td className="border border-gray-600 p-2">{data.humidity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
