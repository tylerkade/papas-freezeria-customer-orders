// "use client";

// import { useState } from "react";
// import characterData from "../../lib/data/Customers.json"; // Update path if needed

// type Character = {
//   gender: string;
//   headwear: boolean;
//   skin_colour: string;
//   glasses: boolean;
//   facial_hair: boolean;
// };

// export default function CharacterEditorPage() {
//   const [characters, setCharacters] =
//     useState<Record<string, Character>>(characterData);

//   const updateCharacter = (
//     name: string,
//     field: keyof Character,
//     value: string | boolean
//   ) => {
//     setCharacters((prev) => ({
//       ...prev,
//       [name]: {
//         ...prev[name],
//         [field]: value,
//       },
//     }));
//   };

//   const saveToFile = () => {
//     const json = JSON.stringify(characters, null, 2);
//     const blob = new Blob([json], { type: "application/json" });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "updated-characters.json";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Edit Characters</h1>

//       <div className="mb-6">
//         <button
//           onClick={saveToFile}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//         >
//           💾 Save Changes
//         </button>
//       </div>

//       <div className="space-y-4">
//         {Object.entries(characters).map(([name, info]) => (
//           <div key={name} className="border p-4 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold mb-2">{name}</h2>

//             <img
//               src={`/${name}.png`}
//               alt={`${name}`}
//               className="mx-auto mb-2 w-32 h-64 object-contain"
//               onError={(e) => (e.currentTarget.style.display = "none")}
//             />

//             {/* Gender */}
//             <div className="mb-2">
//               <span className="font-medium">Gender:</span>
//               <div className="flex space-x-4 mt-1">
//                 {["male", "female"].map((option) => (
//                   <label key={option} className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       checked={info.gender === option}
//                       onChange={() => updateCharacter(name, "gender", option)}
//                     />
//                     <span className="capitalize">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Headwear */}
//             <div className="mb-2">
//               <span className="font-medium">Headwear:</span>
//               <div className="flex space-x-4 mt-1">
//                 {[
//                   { label: "Yes", value: true },
//                   { label: "No", value: false },
//                 ].map((opt) => (
//                   <label
//                     key={String(opt.value)}
//                     className="flex items-center space-x-2"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={info.headwear === opt.value}
//                       onChange={() =>
//                         updateCharacter(name, "headwear", opt.value)
//                       }
//                     />
//                     <span>{opt.label}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Skin Colour */}
//             <div>
//               <span className="font-medium">Skin Colour:</span>
//               <div className="flex space-x-4 mt-1">
//                 {["light", "dark"].map((option) => (
//                   <label key={option} className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       checked={info.skin_colour === option}
//                       onChange={() =>
//                         updateCharacter(name, "skin_colour", option)
//                       }
//                     />
//                     <span className="capitalize">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Glasses */}
//             <div className="mb-2">
//               <span className="font-medium">Glasses:</span>
//               <div className="flex space-x-4 mt-1">
//                 {[
//                   { label: "Yes", value: true },
//                   { label: "No", value: false },
//                 ].map((opt) => (
//                   <label
//                     key={String(opt.value)}
//                     className="flex items-center space-x-2"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={info.glasses === opt.value}
//                       onChange={() =>
//                         updateCharacter(name, "glasses", opt.value)
//                       }
//                     />
//                     <span>{opt.label}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Facial Hair */}
//             <div className="mb-2">
//               <span className="font-medium">Facial Hair:</span>
//               <div className="flex space-x-4 mt-1">
//                 {[
//                   { label: "Yes", value: true },
//                   { label: "No", value: false },
//                 ].map((opt) => (
//                   <label
//                     key={String(opt.value)}
//                     className="flex items-center space-x-2"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={info.facial_hair === opt.value}
//                       onChange={() =>
//                         updateCharacter(name, "facial_hair", opt.value)
//                       }
//                     />
//                     <span>{opt.label}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Hair Colour */}
//             {/* <div>
//               <span className="font-medium">Hair Colour:</span>
//               <div className="flex space-x-4 mt-1">
//                 {["black", "blonde", "brown", "ginger", "white", "bald", "dyed"].map((option) => (
//                   <label key={option} className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       checked={info.hair_colour === option}
//                       onChange={() =>
//                         updateCharacter(name, "hair_colour", option)
//                       }
//                     />
//                     <span className="capitalize">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
