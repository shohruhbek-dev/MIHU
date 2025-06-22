// import React, { useState } from "react";
// import { ReactComponent as UzbekistanSVG } from '/src/assets/uzbekistanHigh.svg';
// import regionInfo from "./regionInfo";

// export default function UzbekistanMap() {
//   const [selectedRegion, setSelectedRegion] = useState(null);

//   const handleClick = (e) => {
//     const id = e.target.id;
//     if (regionInfo[id]) {
//       setSelectedRegion(regionInfo[id]);
//     } else {
//       setSelectedRegion(null);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
//       {/* SVG MAP */}
//       <div
//         className="w-full md:w-2/3 max-w-4xl mx-auto [&_path]:cursor-pointer [&_path:hover]:fill-blue-600"
//         onClick={handleClick}
//       >
//         <UzbekistanSVG />
//       </div>

//       {/* INFO BOX */}
//       <div className="w-full md:w-1/3 bg-white border rounded-lg p-6 shadow-md">
//         {selectedRegion ? (
//           <>
//             <h2 className="text-2xl font-bold mb-3">{selectedRegion.name}</h2>
//             <p><strong>Rahbar:</strong> {selectedRegion.head}</p>
//             <p><strong>Telefon:</strong> {selectedRegion.phone}</p>
//             <p><strong>Email:</strong> {selectedRegion.email}</p>
//             <p><strong>Manzil:</strong> {selectedRegion.address}</p>
//             <p><strong>Ish vaqti:</strong> {selectedRegion.hours}</p>
//           </>
//         ) : (
//           <p className="text-gray-500 text-lg">Iltimos, xaritadan viloyatni tanlang.</p>
//         )}
//       </div>
//     </div>
//   );
// }
