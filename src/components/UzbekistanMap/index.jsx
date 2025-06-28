import React, { useLayoutEffect, useRef, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_uzbekistanLow from "@amcharts/amcharts5-geodata/uzbekistanLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import regionInfo from "./regionInfo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function UzbekistanMap() {
  const chartRef = useRef(null);
  const [selectedRegionKey, setSelectedRegionKey] = useState(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        projection: am5map.geoMercator(),
      })
    );

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_uzbekistanLow,
        valueField: "value",
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
    });

    polygonSeries.mapPolygons.template.events.on("click", function (ev) {
      const regionName = ev.target.dataItem.dataContext.name;
      setSelectedRegionKey(regionName);
    });

    polygonSeries.data.setAll([]);

    return () => root.dispose();
  }, []);

  const region = selectedRegionKey ? regionInfo[selectedRegionKey] : null;

  return (
    <div className="flex flex-col mt-10 md:flex-row gap-6 p-6">
      <div ref={chartRef} className="w-full md:w-2/3 h-[500px]" />
      <div className="w-full md:w-1/3 bg-white p-4 shadow rounded">
        {region ? (
          <div>
            <div className="flex flex-col justify-center items-center">
              <img src="" alt={region.img} />
              <p className="text-2xl">{t(region.headKey)}</p>
              <p>{t(region.nameKey)} {t("labels.governor")}</p>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 mt-1 text-[#113892]" />
                <div className="flex flex-col">
                  <strong className="text-[#113892]">{t("labels.phone")}:</strong>
                  <span>{t(region.phoneKey)}</span>
                </div>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 mt-1 text-[#113892]" />
                <div className="flex flex-col">
                  <strong className="text-[#113892]">{t("labels.email")}:</strong>
                  <span>{t(region.emailKey)}</span>
                </div>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 mt-1 text-[#113892]" />
                <div className="flex flex-col">
                  <strong className="text-[#113892]">{t("labels.address")}:</strong>
                  <span>{t(region.addressKey)}</span>
                </div>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-5 h-5 mt-1 text-[#113892]" />
                <div className="flex flex-col">
                  <strong className="text-[#113892]">{t("labels.hours")}:</strong>
                  <span>{t(region.hoursKey)}</span>
                </div>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">{t("labels.selectRegion")}</p>
        )}
      </div>
    </div>
  );
}