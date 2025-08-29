// // "use client";

// // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // import { Button } from "../ui/button";

// // const OneToOneDialog = () => {
// //   return (
// //     <Dialog>
// //       <DialogTrigger asChild>
// //         <Button className="text-white font-semibold text-lg px-4 py-3 bg-primary hover:bg-primary/90 rounded-md">
// //           One on One
// //         </Button>
// //       </DialogTrigger>

// //       <DialogContent className="w-full max-w-[95vw] sm:max-w-[400px] md:max-w-[800px]">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-4">
// //           {/* Left Section */}
// //           <div className="bg-white rounded-lg shadow p-4 space-y-4">
// //             <h2 className="text-2xl font-bold text-primary">
// //               🤝 Book a One-on-One Parenting Support Session
// //             </h2>
// //             <p className="text-md text-gray-600">
// //               Connect with certified parenting experts for personalized
// //               guidance. Whether you&#39;re facing behavioral challenges, speech
// //               concerns, or need general support—we&#39;re here to walk with you,
// //               step by step.
// //             </p>
// //             <ul className="text-md text-gray-700 space-y-2">
// //               <li>
// //                 🧠
// //                 <strong>Certified Experts: </strong>
// //                 Parenting, psychology & development specialists.
// //               </li>
// //               <li>
// //                 🗓️
// //                 <strong>Flexible Scheduling:</strong> Book weekends or evenings
// //                 too.
// //               </li>
// //               <li>
// //                 📞 <strong>Your Choice:</strong> Phone or video call — your
// //                 comfort, your pace.
// //               </li>
// //               <li>
// //                 🔒 <strong>Confidential & Supportive:</strong> Safe space to
// //                 talk freely and be heard.
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Right Form */}
// //           <div className="bg-rose-50 rounded-lg shadow p-4 space-y-4">
// //             <h3 className="text-lg font-semibold text-primary">
// //               Get Appointment
// //             </h3>
// //             <form className="space-y-3">
// //               <input
// //                 type="text"
// //                 placeholder="Full Name"
// //                 className="w-full border px-3 py-2 rounded-md"
// //               />
// //               <input
// //                 type="tel"
// //                 placeholder="Phone"
// //                 className="w-full border px-3 py-2 rounded-md"
// //               />
// //               <input
// //                 type="email"
// //                 placeholder="Email Address"
// //                 className="w-full border px-3 py-2 rounded-md"
// //               />
// //               <select className="w-full border px-3 py-2 rounded-md">
// //                 <option>Choose Phone or Video Call</option>
// //                 <option>Phone Call</option>
// //                 <option>Video Call</option>
// //               </select>
// //               <select className="w-full border px-3 py-2 rounded-md">
// //                 <option>Select Topic</option>
// //                 <option>Child Behavior</option>
// //                 <option>Speech Development</option>
// //                 <option>Parenting Stress</option>
// //               </select>
// //               <input
// //                 type="datetime-local"
// //                 className="w-full border px-3 py-2 rounded-md"
// //               />
// //               <textarea
// //                 rows={3}
// //                 placeholder="Write Message..."
// //                 className="w-full border px-3 py-2 rounded-md"
// //               />
// //               <button
// //                 type="submit"
// //                 className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800"
// //               >
// //                 SUBMIT NOW
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // };

// // export default OneToOneDialog;

// "use client";

// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Button } from "../ui/button";

// const OneToOneDialog = () => {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className="relative px-6 py-5 font-semibold text-white rounded-sm  overflow-hidden">
//           <span className="text-lg">Get free evaluation</span>
//           {/* The animated border */}
//           <span className="absolute inset-0 border border-transparent rounded-sm pointer-events-none">
//             {/* Top edge */}
//             <span
//               className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
//               style={{ animation: "run-border 2s linear infinite" }}
//             />
//             {/* Right edge */}
//             <span
//               className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent"
//               style={{
//                 animation: "run-border 2s linear infinite",
//                 animationDelay: "0.5s",
//               }}
//             />
//             {/* Bottom edge */}
//             <span
//               className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
//               style={{
//                 animation: "run-border 2s linear infinite",
//                 animationDelay: "1s",
//               }}
//             />
//             {/* Left edge */}
//             <span
//               className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent"
//               style={{
//                 animation: "run-border 2s linear infinite",
//                 animationDelay: "1.5s",
//               }}
//             />
//           </span>
//         </Button>
//       </DialogTrigger>

//       <DialogContent className="w-full max-w-[95vw] sm:max-w-[400px] md:max-w-[750px] lg:max-w-[850px] max-h-[800px] overflow-y-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-4">
//           {/* Left Section */}
//           <div className="bg-white rounded-lg shadow p-4 space-y-4">
//             <h2 className="text-2xl font-bold text-primary">
//               🤝 Book a One-on-One Parenting Support Session
//             </h2>
//             <p className="text-md text-gray-600">
//               Connect with certified parenting experts for personalized
//               guidance. Whether you&#39;re facing behavioral challenges, speech
//               concerns, or need general support — we’re here to walk with you,
//               step by step.
//             </p>
//             <ul className="text-md text-gray-700 space-y-2">
//               <li>
//                 🧠 <strong>Certified Experts:</strong> Parenting, psychology &
//                 development specialists.
//               </li>
//               <li>
//                 🗓️ <strong>Flexible Scheduling:</strong> Book weekends or
//                 evenings too.
//               </li>
//               <li>
//                 📞 <strong>Your Choice:</strong> Phone or video call — your
//                 comfort, your pace.
//               </li>
//               <li>
//                 🔒 <strong>Confidential & Supportive:</strong> Safe space to
//                 talk freely and be heard.
//               </li>
//             </ul>
//           </div>

//           {/* Right Form */}
//           <div className="bg-rose-50 rounded-lg shadow p-4 space-y-4">
//             <h3 className="text-lg font-semibold text-primary">
//               Get Appointment
//             </h3>
//             <form className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full border px-3 py-2 rounded-md"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 className="w-full border px-3 py-2 rounded-md"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full border px-3 py-2 rounded-md"
//               />
//               <select className="w-full border px-3 py-2 rounded-md">
//                 <option>Choose Phone or Video Call</option>
//                 <option>Phone Call</option>
//                 <option>Video Call</option>
//               </select>
//               <select className="w-full border px-3 py-2 rounded-md">
//                 <option>Select Topic</option>
//                 <option>Child Behavior</option>
//                 <option>Speech Development</option>
//                 <option>Parenting Stress</option>
//               </select>
//               <input
//                 type="datetime-local"
//                 className="w-full border px-3 py-2 rounded-md"
//               />
//               <textarea
//                 rows={3}
//                 placeholder="Write Message..."
//                 className="w-full border px-3 py-2 rounded-md"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800"
//               >
//                 SUBMIT NOW
//               </button>
//             </form>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default OneToOneDialog;

"use client";

import { useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import AppointmentForm from "../form/AppointmentForm";

const OneToOneDialog = () => {
  const t = useTranslations("appointment");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="relative px-6 py-5 font-semibold text-white rounded-sm overflow-hidden">
          <span className="text-lg">
            {t("getFreeEvaluation") /* Get free evaluation */}
          </span>

          {/* Animated border (ensure you have @keyframes run-border in your globals) */}
          <span className="absolute inset-0 border border-transparent rounded-sm pointer-events-none">
            <span
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
              style={{ animation: "run-border 2s linear infinite" }}
            />
            <span
              className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent"
              style={{
                animation: "run-border 2s linear infinite",
                animationDelay: "0.5s",
              }}
            />
            <span
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
              style={{
                animation: "run-border 2s linear infinite",
                animationDelay: "1s",
              }}
            />
            <span
              className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent"
              style={{
                animation: "run-border 2s linear infinite",
                animationDelay: "1.5s",
              }}
            />
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-[95vw] sm:max-w-[400px] md:max-w-[750px] lg:max-w-[1000px] max-h-[670px] md:max-h-[700px] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-4">
          {/* LEFT: Text Section */}
          <div className="space-y-5 bg-white rounded-lg shadow p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              🤝 {t("title")}
            </h2>
            <p className="text-lg text-gray-600">{t("description")}</p>
            <ul className="text-lg text-gray-700 space-y-2">
              <li>
                🧠 <strong>{t("points.certified")}</strong>
              </li>
              <li>
                🗓️ <strong>{t("points.flexible")}</strong>
              </li>
              <li>
                📞 <strong>{t("points.choice")}</strong>
              </li>
              <li>
                🔒 <strong>{t("points.confidential")}</strong>
              </li>
            </ul>
          </div>

          {/* RIGHT: Form */}
          <AppointmentForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OneToOneDialog;
