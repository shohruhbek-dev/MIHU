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
  root.autoResize = false; // ✅ Prevent auto resize

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
    navigate(`/yangiliklar?menu_id=2&region=${encodeURIComponent(regionName)}#hududlar`);
  });

  polygonSeries.data.setAll([]);

  return () => root.dispose();
}, [navigate]);


  return (
  <div className="flex justify-center mt-10 p-6">
  <div
    ref={chartRef}
    className="w-[800px] h-[500px] overflow-hidden" // ✅ Fixed size
  />
</div>

  );
}
