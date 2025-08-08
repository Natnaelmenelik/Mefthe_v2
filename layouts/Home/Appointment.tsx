"use client";

import { useTranslations } from "next-intl";

const Appointment = () => {
  const t = useTranslations("appointment");

  return (
    <section className="mt-20 p-4">
      <div className="max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px]">
        <div className="grid gap-5 md:grid-cols-2">
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
          <div className="bg-rose-50 rounded-lg shadow p-4 space-y-4">
            <h3 className="text-2xl font-semibold text-primary">
              {t("form.title")}
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder={t("form.name")}
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="tel"
                placeholder={t("form.phone")}
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                type="email"
                placeholder={t("form.email")}
                className="w-full border px-3 py-2 rounded-md"
              />
              <select className="w-full border px-3 py-2 rounded-md">
                <option>{t("form.callOption.label")}</option>
                <option>{t("form.callOption.phone")}</option>
                <option>{t("form.callOption.video")}</option>
              </select>
              <select className="w-full border px-3 py-2 rounded-md">
                <option>{t("form.topic.label")}</option>
                <option>{t("form.topic.behavior")}</option>
                <option>{t("form.topic.speech")}</option>
                <option>{t("form.topic.stress")}</option>
              </select>
              <input
                type="datetime-local"
                className="w-full border px-3 py-2 rounded-md"
              />
              <textarea
                rows={3}
                placeholder={t("form.message")}
                className="w-full border px-3 py-2 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800"
              >
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
