import { useTranslation } from "react-i18next";
import regionInfo from "../UzbekistanMap/regionInfo"; // ✅ adjust path if needed


export default function RegionDetail({ regionKey }) {
  const { t } = useTranslation();
  const selectedRegion = regionInfo[regionKey];

  if (!selectedRegion) {
    return (
      <div className="p-6  text-red-600">
        <p className="text-xl mb-4">{t("labels.regionNotFound")}</p>
        <Link
          to="/yangiliklar"
          className="text-blue-600 underline hover:text-blue-800"
        >
          ← {t("labels.backToNews") || "Янгиликларга қайтиш"}
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
=      {selectedRegion.img && (
        <div className="mb-6">
          <img
            src={selectedRegion.img}
            alt={t(selectedRegion.nameKey)}
            className="w-full rounded-lg object-cover"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold text-[#113892] mb-2">
        {t(selectedRegion.headKey)}
      </h1>
      <h2 className="text-xl text-gray-700 mb-6">{t(selectedRegion.nameKey)}</h2>

      <div className="space-y-4 text-gray-800">
        <p>
          <strong>{t("labels.phone")}:</strong> {t(selectedRegion.phoneKey)}
        </p>
        <p>
          <strong>{t("labels.email")}:</strong> {t(selectedRegion.emailKey)}
        </p>
        <p>
          <strong>{t("labels.address")}:</strong> {t(selectedRegion.addressKey)}
        </p>
        <p>
          <strong>{t("labels.hours")}:</strong> {t(selectedRegion.hoursKey)}
        </p>
      </div>
    </div>
  );
}
