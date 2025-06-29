import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_uzbekistanLow from "@amcharts/amcharts5-geodata/uzbekistanLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useNavigate } from "react-router-dom";

export default function UzbekistanMap() {
  const chartRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);
    root.autoResize = true;

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
        panX: "none",
        panY: "none",
        wheelX: "none",
        wheelY: "none",
        pinchZoom: false,
      })
    );

    // Disable all zoom and pan interactions
    chart.set("wheelable", false);
    chart.set("panX", false);
    chart.set("panY", false);
    chart.set("zoomControl", null);
    chart.chartContainer.get("background").events.disableType("wheel");

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
      navigate(`/yangiliklar?menu_id=2&region=${encodeURIComponent(regionName)}#hududlar`);
    });

    chart.appear(1000, 100); // Ensures layout/animation

    return () => root.dispose();
  }, [navigate]);

  return (
    <div className="w-full py-4 px-4 md:px-10 mt-10">
      <div
        ref={chartRef}
        className="w-full aspect-[2/1] sm:aspect-[3/1] md:aspect-[16/7] max-h-[600px]"
      />
    </div>
  );
}
