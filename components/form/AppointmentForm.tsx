// "use client";

// import React, { useRef, useState } from "react";
// import { useTranslations } from "next-intl";
// import emailjs from "@emailjs/browser";

// const AppointmentForm = () => {
//   const t = useTranslations("appointment");
//   const formRef = useRef<HTMLFormElement>(null);

//   const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
//     "idle"
//   );

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     // Honeypot
//     const hp = (new FormData(formRef.current).get("website") as string) || "";
//     if (hp.trim().length > 0) return;

//     setStatus("sending");
//     try {
//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         formRef.current,
//         { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
//       );
//       setStatus("sent");
//       formRef.current.reset();
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="bg-rose-50 rounded-lg shadow p-4 space-y-4">
//       <h3 className="text-2xl font-semibold text-primary">{t("form.title")}</h3>

//       <form ref={formRef} onSubmit={onSubmit} className="space-y-3">
//         {/* These names MUST match your EmailJS template variables */}
//         <input
//           name="from_name"
//           type="text"
//           placeholder={t("form.name")}
//           className="w-full border px-3 py-2 rounded-md"
//           required
//         />

//         <input
//           name="phone"
//           type="tel"
//           placeholder={t("form.phone")}
//           className="w-full border px-3 py-2 rounded-md"
//         />

//         <input
//           name="reply_to"
//           type="email"
//           placeholder={t("form.email")}
//           className="w-full border px-3 py-2 rounded-md"
//           required
//         />

//         <select
//           name="call_option"
//           className="w-full border px-3 py-2 rounded-md"
//           defaultValue=""
//         >
//           <option value="">{t("form.callOption.label")}</option>
//           <option value="Phone">{t("form.callOption.phone")}</option>
//           <option value="Video">{t("form.callOption.video")}</option>
//         </select>

//         <select
//           name="topic"
//           className="w-full border px-3 py-2 rounded-md"
//           defaultValue=""
//         >
//           <option value="">{t("form.topic.label")}</option>
//           <option value="Child Behavior">{t("form.topic.behavior")}</option>
//           <option value="Speech Development">{t("form.topic.speech")}</option>
//           <option value="Parenting Stress">{t("form.topic.stress")}</option>
//         </select>

//         <input
//           name="schedule"
//           type="datetime-local"
//           className="w-full border px-3 py-2 rounded-md"
//         />

//         <textarea
//           name="message"
//           rows={3}
//           placeholder={t("form.message")}
//           className="w-full border px-3 py-2 rounded-md"
//           required
//         />

//         {/* Optional extras for nicer emails */}
//         <input
//           type="hidden"
//           name="submission_time"
//           value={new Date().toLocaleString()}
//         />
//         <input
//           type="hidden"
//           name="page_url"
//           value={typeof window !== "undefined" ? window.location.href : ""}
//         />

//         {/* Honeypot field (hidden) */}
//         <input
//           type="text"
//           name="website"
//           tabIndex={-1}
//           autoComplete="off"
//           className="hidden"
//         />

//         <button
//           type="submit"
//           disabled={status === "sending"}
//           className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800 disabled:opacity-60"
//         >
//           {status === "sending"
//             ? t("form.sending", { default: "Sending..." })
//             : t("form.submit")}
//         </button>

//         {status === "sent" && (
//           <p className="text-green-700">
//             {t("form.success", {
//               default: "Sent! We’ll get back to you soon.",
//             })}
//           </p>
//         )}
//         {status === "error" && (
//           <p className="text-red-600">
//             {t("form.error", { default: "Failed to send. Please try again." })}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default AppointmentForm;

"use client";

import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";

const AppointmentForm = () => {
  const t = useTranslations("appointment");
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Honeypot
    const hp = (new FormData(formRef.current).get("website") as string) || "";
    if (hp.trim().length > 0) return;

    // === Format schedule for nicer email display ===
    const scheduleInput = formRef.current.elements.namedItem(
      "schedule"
    ) as HTMLInputElement | null;

    const scheduleLabelInput = formRef.current.elements.namedItem(
      "schedule_label"
    ) as HTMLInputElement | null;

    const raw = scheduleInput?.value || "";
    const label = raw ? new Date(raw).toLocaleString() : "N/A";
    if (scheduleLabelInput) scheduleLabelInput.value = label;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-rose-50 rounded-lg shadow p-4 space-y-4">
      <h3 className="text-2xl font-semibold text-primary">{t("form.title")}</h3>

      <form ref={formRef} onSubmit={onSubmit} className="space-y-3">
        {/* These names MUST match your EmailJS template variables */}
        <input
          name="from_name"
          type="text"
          placeholder={t("form.name")}
          className="w-full border px-3 py-2 rounded-md"
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder={t("form.phone")}
          className="w-full border px-3 py-2 rounded-md"
        />

        <input
          name="reply_to"
          type="email"
          placeholder={t("form.email")}
          className="w-full border px-3 py-2 rounded-md"
          required
        />

        <select
          name="call_option"
          className="w-full border px-3 py-2 rounded-md"
          defaultValue=""
        >
          <option value="">{t("form.callOption.label")}</option>
          <option value="Phone">{t("form.callOption.phone")}</option>
          <option value="Video">{t("form.callOption.video")}</option>
        </select>

        <select
          name="topic"
          className="w-full border px-3 py-2 rounded-md"
          defaultValue=""
        >
          <option value="">{t("form.topic.label")}</option>
          <option value="Child Behavior">{t("form.topic.behavior")}</option>
          <option value="Speech Development">{t("form.topic.speech")}</option>
          <option value="Parenting Stress">{t("form.topic.stress")}</option>
        </select>

        <input
          name="schedule"
          type="datetime-local"
          className="w-full border px-3 py-2 rounded-md"
        />

        <textarea
          name="message"
          rows={3}
          placeholder={t("form.message")}
          className="w-full border px-3 py-2 rounded-md"
          required
        />

        {/* Extras for nicer emails */}
        <input
          type="hidden"
          name="schedule_label"
          value="" /* set right before sendForm */
        />
        <input
          type="hidden"
          name="submission_time"
          value={new Date().toLocaleString()}
        />
        <input
          type="hidden"
          name="page_url"
          value={typeof window !== "undefined" ? window.location.href : ""}
        />

        {/* Honeypot field (hidden) */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800 disabled:opacity-60"
        >
          {status === "sending"
            ? t("form.sending", { defaultMessage: "Sending..." })
            : t("form.submit")}
        </button>

        {status === "sent" && (
          <p className="text-green-700">
            {t("form.success", {
              defaultMessage: "Sent! We’ll get back to you soon.",
            })}
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600">
            {t("form.error", {
              defaultMessage: "Failed to send. Please try again.",
            })}
          </p>
        )}
      </form>
    </div>
  );
};

export default AppointmentForm;
