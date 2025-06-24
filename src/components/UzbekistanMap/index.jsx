import React, { useLayoutEffect, useRef, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_uzbekistanLow from "@amcharts/amcharts5-geodata/uzbekistanLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import regionInfo from "./regionInfo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function UzbekistanMap() {
    const chartRef = useRef(null);
    const [selectedRegion, setSelectedRegion] = useState(null);

    useLayoutEffect(() => {
        let root = am5.Root.new(chartRef.current);
        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "none",
                panY: "none",
                projection: am5map.geoMercator(),
            })
        );

        let polygonSeries = chart.series.push(
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
            setSelectedRegion(regionInfo[regionName]);
        });

        polygonSeries.data.setAll([]);

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div className="flex flex-col mt-10 md:flex-row gap-6 p-6">
            <div ref={chartRef} className="w-full md:w-2/3 h-[500px]" />
            <div className="w-full md:w-1/3 bg-white p-4 shadow rounded">
                {selectedRegion ? (
                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <img src='' alt={selectedRegion.img} />
                            <p className="text-2xl"> {selectedRegion.head}</p>
                            <p >{selectedRegion.name}  hokimi</p>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p className="flex items-center gap-2">
                                <Phone className="w-5 h-5 mt-1 text-[#113892]" />
                                <div className="flex flex-col">
                                    <strong className="text-[#113892]">Telefon:</strong>
                                    <span>{selectedRegion.phone}</span>
                                </div>
                            </p>

                            <p className="flex items-center gap-2">
                                <Mail className="w-5 h-5 mt-1 text-[#113892]" />
                                <div className="flex flex-col">
                                    <strong className="text-[#113892]">Email:</strong>
                                    <span>{selectedRegion.email}</span>
                                </div>
                            </p>

                            <p className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 mt-1 text-[#113892]" />
                                <div className="flex flex-col">
                                    <strong className="text-[#113892]">Manzil:</strong>
                                    <span>{selectedRegion.address}</span>
                                </div>
                            </p>

                            <p className="flex items-center gap-2">
                                <Clock className="w-5 h-5 mt-1 text-[#113892]" />
                                <div className="flex flex-col">
                                    <strong className="text-[#113892]">Ish vaqti:</strong>
                                    <span>{selectedRegion.hours}</span>
                                </div>
                            </p>
                        </div>


                    </div>
                ) : (
                    <p className="text-gray-600">Xaritadan viloyatni tanlang.</p>
                )}
            </div>
        </div>
    );
}
