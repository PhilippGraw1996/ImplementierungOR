import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "../homeAppComponents/Home";

import Piechart from "../scenes/PieChartScene";
import BarChart from "../scenes/BarChartSceneHorizontal";
import BarChartUp from "../scenes/BarChartSceneUp";
import Linechart from "../scenes/LineChartScene";
import Dashboard from "../scenes/MainDashboardScene";
import StandortKarte from "../scenes/StandortKarteScene";
import HeatMapCrossTab from "../scenes/HeatMapScene";
import QuerieResults from "../scenes/QuerieResultsByScooter";
import Heatmap from "../scenes/HeatmapMapScene";
import AreaDiagram from "../scenes/AreaDiagram";
import ScatterPlot from "../scenes/ScatterplotScene";
import DescriptiveTabs from "../scenes/DescriptiveTables";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pieChart" element={<Piechart/>}/>
      <Route path="/barChartHorizontal" element={<BarChart/>}/>
      <Route path="/barChartUp" element={<BarChartUp/>}/>
      <Route path="/lineChart" element={<Linechart/>}/>
      <Route path="/heatmapCrossTab" element={<HeatMapCrossTab/>}/>
      <Route path="/locationMap" element={<StandortKarte/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/querie" element={<QuerieResults/>}/>
      <Route path="/heatmapLocation" element={<Heatmap/>}/>
      <Route path="/areaDiagram" element={<AreaDiagram/>}/>
      <Route path="/scatterPlots" element={<ScatterPlot/>}/>
      <Route path="/descriptiveTables" element={<DescriptiveTabs/>}/>
    </Routes>
  );
}

export default AppRoutes;