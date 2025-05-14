import React, { useState } from 'react';

const initialCameraData = [
  {
    id: 1,
    name: "Savanna-004",
    isLive: true,
    views: 5234,
    habitat: "Savanna Plains",
    ip: "192.168.0.1",
    port: 5101,
    actions: 3,
  },
  {
    id: 2,
    name: "Savanna-003",
    isLive: false,
    views: 4140,
    habitat: "Savanna Plains",
    ip: "192.168.0.2",
    port: 5102,
    actions: 2,
  },
  {
    id: 3,
    name: "Treetop-011",
    isLive: true,
    views: 7280,
    habitat: "Treetop Rainforest",
    ip: "192.168.0.3",
    port: 5103,
    actions: 1,
  },
   {
    id: 4,
    name: "Treetop-012",
    isLive: true,
    views: 7180,
    habitat: "Treetop Rainforest",
    ip: "192.168.0.5",
    port: 5104,
    actions: 1,
  },
  {
    id: 5,
    name: "Ocean-012",
    isLive: true,
    views: 6180,
    habitat: "Ocean",
    ip: "192.167.0.5",
    port: 5109,
    actions: 1,
  },
];

const Camera = () => {
  const [cameraData, setCameraData] = useState(initialCameraData);

  const toggleLiveStatus = (id) => {
    setCameraData((prev) =>
      prev.map((cam) =>
        cam.id === id ? { ...cam, isLive: !cam.isLive } : cam
      )
    );
  };

  const totalLive = cameraData.filter((cam) => cam.isLive).length;

  return (
    <div className="px-4 md:px-10 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="text-xl font-semibold">
          Camera Management 
          <span className="ml-4 text-sm text-black-700 font-medium bg-green-200 px-2 py-1 rounded-full">
              Live Cameras: {totalLive}
          </span>
        </h2>
        <button className="bg-green-600 text-white px-4 py-1 rounded-full text-sm">
          + Add New Camera
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse shadow-md rounded-xl overflow-hidden">
          <thead className="bg-[#7ca76c] text-sm text-white">
             <tr>
            <th className="px-4 py-3">Camera Name ↓</th>
            <th className="px-4 py-3">Status ↓</th>
            <th className="px-4 py-3">Views ↓</th>
            <th className="px-4 py-3">Habitat ↓</th>
            <th className="px-4 py-3">IP ↓</th>
            <th className="px-4 py-3">Port ↓</th>
            <th className="px-4 py-3">Action ↓</th>
          </tr>
          </thead>
          <tbody>
            {cameraData.map((cam) => (
              <tr key={cam.id} className="border-b hover:bg-gray-50 text-sm">
                <td className="px-4 py-3 font-medium">{cam.name}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cam.isLive
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {cam.isLive ? 'Live' : 'Offline'}
                  </span>
                </td>
                <td className="px-4 py-3">{cam.views}</td>
                <td className="px-4 py-3">{cam.habitat}</td>
                <td className="px-4 py-3">{cam.ip}</td>
                <td className="px-4 py-3">{cam.port}</td>
                <td className="px-4 py-3">
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cam.isLive}
                      onChange={() => toggleLiveStatus(cam.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 relative">
                      <div className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
                    </div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Camera;
