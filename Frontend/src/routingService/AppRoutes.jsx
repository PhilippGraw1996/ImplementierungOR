import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "../homeAppComponents/Home";

import Boxplot from "../scenes/BoxPlotScene";
import Piechart from "../scenes/PieChartScene";
import BarChart from "../scenes/BarChartSceneHorizontal";
import Linechart from "../scenes/LineChartScene";
import ParallelLines from "../scenes/ParallelLinesScene";
import Dashboard from "../scenes/DashboardScene";
import StandortKarte from "../scenes/StandortKarteScene";
import HeatMapCrossTab from "../scenes/HeatMapScene";
import QuerieResults from "../scenes/QuerieResultsByScooter";
import Heatmap from "../scenes/HeatmapMapScene";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/boxPlot" element={<Boxplot/>}/>
      <Route path="/pieChart" element={<Piechart/>}/>
      <Route path="/barChart" element={<BarChart/>}/>
      <Route path="/lineChart" element={<Linechart/>}/>
      <Route path="/heatmapCrossTab" element={<HeatMapCrossTab/>}/>
      <Route path="/parallelLines" element={<ParallelLines/>}/>
      <Route path="/locationMap" element={<StandortKarte/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/querie" element={<QuerieResults/>}/>
      <Route path="/heatmapLocation" element={<Heatmap/>}/>
    </Routes>
  );
}

export default AppRoutes;