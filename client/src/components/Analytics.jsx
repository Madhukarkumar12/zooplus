import React from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis,
  Tooltip, Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

// ✅ Sample data — Replace this with your dynamic data later
const chartData = [
  { day: "Mon", Savanna: 100, Rainforest: 140, Ocean: 210 },
  { day: "Tue", Savanna: 380, Rainforest: 400, Ocean: 250 },
  { day: "Wed", Savanna: 450, Rainforest: 290, Ocean: 310 },
  { day: "Thu", Savanna: 420, Rainforest: 350, Ocean: 320 },
  { day: "Fri", Savanna: 370, Rainforest: 430, Ocean: 320 },
  { day: "Sat", Savanna: 520, Rainforest: 410, Ocean: 400 },
  { day: "Sun", Savanna: 530, Rainforest: 420, Ocean: 510 },
];

const habitatKeys = Object.keys(chartData[0]).filter(key => key !== "day");
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F", "#A28EFF"];

const Analytics = () => {
  return (
    <div className="w-full px-4 py-6 bg-white rounded-md shadow-md overflow-x-auto space-y-6">
      <h2 className="text-xl font-semibold mb-4">Google Analytics</h2>

      {/* ✅ Line Chart */}
      <div className="min-w-[600px]">
        <h3 className="text-lg font-medium mb-2">Habitat Views Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            {habitatKeys.map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={COLORS[index % COLORS.length]}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ✅ Bar Chart */}
      <div className="min-w-[600px]">
        <h3 className="text-lg font-medium mb-2">Weekly Habitat Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            {habitatKeys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
