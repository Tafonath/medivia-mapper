/* Get params from url */
var url_coords = {};
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
  url_coords[key] = value;
});

var CopperOres = new L.LayerGroup(),
  SilverOres = new L.LayerGroup(),
  PhenakiteOres = new L.LayerGroup(),
  ChalcopyriteOres = new L.LayerGroup(),
  VanadiniteOres = new L.LayerGroup(),
  BorniteOres = new L.LayerGroup(),
  WolframiteOres = new L.LayerGroup(),
  GoldOres = new L.LayerGroup(),
  CarnotiteOres = new L.LayerGroup(),
  HeliodorOres = new L.LayerGroup(),
  MeteoriteOres = new L.LayerGroup();
  HellstoneOres = new L.LayerGroup();

var overlayLayers = [{
  name : "Copper Ore",
  layerName: CopperOres,
  icon: "CopperOre.png"},
{
  name : "Silver Ore",
  layerName: SilverOres,
  icon: "SilverOre.png"},
{
  name : "Phenakite Ore",
  layerName: PhenakiteOres,
  icon: "PhenakiteOre.png"},
{
  name : "Chalcopyrite Ore",
  layerName: ChalcopyriteOres,
  icon: "ChalcopyriteOre.png"},
{
  name : "Vanadinite Ore",
  layerName: VanadiniteOres,
  icon: "VanadiniteOre.png"},
{
  name : "Bornite Ore",
  layerName: BorniteOres,
  icon: "BorniteOre.png"},
{
  name : "Wolframite Ore",
  layerName: WolframiteOres,
  icon: "WolframiteOre.png"},
{
  name : "Gold Ore",
  layerName: GoldOres,
  icon: "GoldOre.png"},
{
  name : "Carnotite Ore",
  layerName: CarnotiteOres,
  icon: "CarnotiteOre.png"},
{
  name : "Heliodor Ore",
  layerName: HeliodorOres,
  icon: "HeliodorOre.png"},
{
  name : "Meteorite Ore",
  layerName: MeteoriteOres,
  icon: "MeteoriteOre.png"},
{
  name : "Hellstone Ore",
  layerName: HellstoneOres,
  icon: "HellstoneOre.png"
}];

const map = L.map('map', {
  crs: L.CRS.Simple,
  attributionControl: false,
  layers: []
});

var layerControl = L.control.layers().addTo(map);

for (var i = 0; overlayLayers.length > i; i++) {
  layerControl.addOverlay(overlayLayers[i].layerName, overlayLayers[i].name);
}

//////////////////////////////////////////////////////////
//                  Copper Ore Markers                  //
//////////////////////////////////////////////////////////

L.marker([-2035, 2846], {floor: 8}).addTo(CopperOres);
L.marker([-2433, 2613], {floor: 14}).addTo(SilverOres);
L.marker([-1718, 3259], {floor: 15}).addTo(GoldOres);
L.marker([-2088, 2379], {floor: 11}).addTo(CopperOres);
L.marker([-2741, 2925], {floor: 0}).addTo(PhenakiteOres);
L.marker([-930, 2434], {floor: 11}).addTo(BorniteOres);
L.marker([-1072, 2190], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2163, 2423], {floor: 8}).addTo(SilverOres);
L.marker([-4193, 2778], {floor: 3}).addTo(BorniteOres);
L.marker([-1655, 2279], {floor: 12}).addTo(PhenakiteOres);
L.marker([-1628, 1979], {floor: 5}).addTo(BorniteOres);
L.marker([-4177, 2764], {floor: 3}).addTo(BorniteOres);
L.marker([-2768, 2590], {floor: 9}).addTo(SilverOres);
L.marker([-4296, 2606], {floor: 6}).addTo(WolframiteOres);
L.marker([-1890, 2275], {floor: 12}).addTo(SilverOres);
L.marker([-1670, 3322], {floor: 15}).addTo(CarnotiteOres);
L.marker([-2546, 2674], {floor: 7}).addTo(SilverOres);
L.marker([-907, 2307], {floor: 10}).addTo(ChalcopyriteOres);
L.marker([-2717, 2959], {floor: 8}).addTo(VanadiniteOres);
L.marker([-1802, 2277], {floor: 6}).addTo(SilverOres);
L.marker([-2102, 2159], {floor: 7}).addTo(CopperOres);
L.marker([-2315, 2422], {floor: 8}).addTo(CopperOres);
L.marker([-1278, 1930], {floor: 7}).addTo(CopperOres);
L.marker([-2155, 2329], {floor: 13}).addTo(PhenakiteOres);
L.marker([-2521, 2803], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-1917, 2656], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1054, 2769], {floor: 10}).addTo(GoldOres);
L.marker([-2177, 2620], {floor: 14}).addTo(BorniteOres);
L.marker([-1826, 2404], {floor: 2}).addTo(SilverOres);
L.marker([-2297, 1833], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2904, 2619], {floor: 5}).addTo(CopperOres);
L.marker([-2785, 3534], {floor: 7}).addTo(BorniteOres);
L.marker([-1990, 2367], {floor: 8}).addTo(SilverOres);
L.marker([-2876, 2605], {floor: 1}).addTo(CopperOres);
L.marker([-2870, 2630], {floor: 7}).addTo(CopperOres);
L.marker([-2534, 2952], {floor: 8}).addTo(CopperOres);
L.marker([-4346, 2831], {floor: 10}).addTo(GoldOres);
L.marker([-2130, 2205], {floor: 8}).addTo(SilverOres);
L.marker([-1867, 2254], {floor: 8}).addTo(CopperOres);
L.marker([-1134, 2365], {floor: 8}).addTo(CopperOres);
L.marker([-1419, 2062], {floor: 10}).addTo(SilverOres);
L.marker([-1177, 2578], {floor: 13}).addTo(ChalcopyriteOres);
L.marker([-1803, 1948], {floor: 16}).addTo(CopperOres);
L.marker([-2012, 2424], {floor: 10}).addTo(SilverOres);
L.marker([-1250, 2551], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2513, 2711], {floor: 5}).addTo(CopperOres);
L.marker([-1629, 2349], {floor: 9}).addTo(SilverOres);
L.marker([-1259, 2555], {floor: 9}).addTo(VanadiniteOres);
L.marker([-2726, 3304], {floor: 7}).addTo(SilverOres);
L.marker([-2235, 1830], {floor: 9}).addTo(SilverOres);
L.marker([-2743, 2535], {floor: 7}).addTo(CopperOres);
L.marker([-2807, 3128], {floor: 7}).addTo(CopperOres);
L.marker([-1575, 2652], {floor: 8}).addTo(CopperOres);
L.marker([-2302, 1960], {floor: 10}).addTo(CarnotiteOres);
L.marker([-2100, 2281], {floor: 10}).addTo(PhenakiteOres);
L.marker([-1169, 2462], {floor: 8}).addTo(CopperOres);
L.marker([-1128, 2561], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1304, 2456], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2322, 2585], {floor: 5}).addTo(SilverOres);
L.marker([-1782, 2747], {floor: 8}).addTo(CopperOres);
L.marker([-2685, 3034], {floor: 6}).addTo(PhenakiteOres);
L.marker([-2428, 2841], {floor: 13}).addTo(CopperOres);
L.marker([-4126, 2695], {floor: 5}).addTo(BorniteOres);
L.marker([-2669, 2865], {floor: 9}).addTo(GoldOres);
L.marker([-1060, 2429], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-1707, 2005], {floor: 7}).addTo(PhenakiteOres);
L.marker([-4179, 2772], {floor: 9}).addTo(GoldOres);
L.marker([-1697, 2685], {floor: 9}).addTo(SilverOres);
L.marker([-1576, 2472], {floor: 8}).addTo(PhenakiteOres);
L.marker([-1995, 2295], {floor: 13}).addTo(PhenakiteOres);
L.marker([-2855, 3552], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2086, 2189], {floor: 6}).addTo(CopperOres);
L.marker([-1099, 2500], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-2743, 2540], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2110, 2676], {floor: 13}).addTo(BorniteOres);
L.marker([-4021, 2652], {floor: 11}).addTo(WolframiteOres);
L.marker([-2675, 3022], {floor: 7}).addTo(CopperOres);
L.marker([-1908, 2069], {floor: 12}).addTo(PhenakiteOres);
L.marker([-2156, 2609], {floor: 13}).addTo(CarnotiteOres);
L.marker([-2053, 2351], {floor: 10}).addTo(SilverOres);
L.marker([-1914, 2671], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2045, 2413], {floor: 12}).addTo(SilverOres);
L.marker([-1027, 2220], {floor: 10}).addTo(BorniteOres);
L.marker([-1994, 2354], {floor: 10}).addTo(SilverOres);
L.marker([-4082, 2764], {floor: 5}).addTo(BorniteOres);
L.marker([-2179, 2022], {floor: 7}).addTo(CopperOres);
L.marker([-1723, 2615], {floor: 6}).addTo(PhenakiteOres);
L.marker([-2084, 2039], {floor: 6}).addTo(PhenakiteOres);
L.marker([-2263, 1975], {floor: 10}).addTo(VanadiniteOres);
L.marker([-2147, 1874], {floor: 9}).addTo(CopperOres);
L.marker([-2569, 2835], {floor: 7}).addTo(PhenakiteOres);
L.marker([-951, 2355], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-2274, 1878], {floor: 8}).addTo(CopperOres);
L.marker([-1543, 2278], {floor: 7}).addTo(SilverOres);
L.marker([-2426, 2627], {floor: 14}).addTo(CopperOres);
L.marker([-2212, 1905], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2573, 2695], {floor: 7}).addTo(CopperOres);
L.marker([-1663, 2591], {floor: 15}).addTo(PhenakiteOres);
L.marker([-2836, 3118], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2120, 2338], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2033, 2649], {floor: 5}).addTo(SilverOres);
L.marker([-1100, 2425], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2045, 2298], {floor: 12}).addTo(PhenakiteOres);
L.marker([-1703, 2545], {floor: 7}).addTo(SilverOres);
L.marker([-1956, 2503], {floor: 8}).addTo(CopperOres);
L.marker([-2868, 2804], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2795, 3582], {floor: 7}).addTo(PhenakiteOres);
L.marker([-809, 2337], {floor: 12}).addTo(BorniteOres);
L.marker([-2794, 2952], {floor: 7}).addTo(CopperOres);
L.marker([-2363, 2808], {floor: 8}).addTo(CopperOres);
L.marker([-2302, 1835], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2315, 2604], {floor: 7}).addTo(MeteoriteOres);
L.marker([-2556, 2688], {floor: 7}).addTo(CopperOres);
L.marker([-1024, 2378], {floor: 13}).addTo(ChalcopyriteOres);
L.marker([-1646, 2374], {floor: 8}).addTo(CopperOres);
L.marker([-1012, 2418], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-2870, 2609], {floor: 4}).addTo(CopperOres);
L.marker([-2339, 2587], {floor: 9}).addTo(CopperOres);
L.marker([-1619, 1991], {floor: 6}).addTo(PhenakiteOres);
L.marker([-2152, 1888], {floor: 9}).addTo(SilverOres);
L.marker([-2144, 2570], {floor: 10}).addTo(PhenakiteOres);
L.marker([-1137, 2551], {floor: 11}).addTo(WolframiteOres);
L.marker([-2377, 2659], {floor: 7}).addTo(SilverOres);
L.marker([-3991, 2859], {floor: 11}).addTo(HeliodorOres);
L.marker([-2299, 2811], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2146, 2535], {floor: 9}).addTo(CopperOres);
L.marker([-1079, 2427], {floor: 10}).addTo(ChalcopyriteOres);
L.marker([-4168, 2777], {floor: 21}).addTo(WolframiteOres);
L.marker([-2572, 2797], {floor: 1}).addTo(PhenakiteOres);
L.marker([-2406, 2640], {floor: 14}).addTo(CopperOres);
L.marker([-2426, 2667], {floor: 14}).addTo(PhenakiteOres);
L.marker([-873, 2640], {floor: 11}).addTo(SilverOres);
L.marker([-2600, 2937], {floor: 7}).addTo(CopperOres);
L.marker([-1241, 2584], {floor: 8}).addTo(VanadiniteOres);
L.marker([-2575, 3065], {floor: 8}).addTo(SilverOres);
L.marker([-1847, 2687], {floor: 9}).addTo(PhenakiteOres);
L.marker([-1966, 2473], {floor: 3}).addTo(SilverOres);
L.marker([-4173, 2736], {floor: 10}).addTo(WolframiteOres);
L.marker([-708, 2401], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-984, 2330], {floor: 10}).addTo(VanadiniteOres);
L.marker([-4221, 2655], {floor: 5}).addTo(BorniteOres);
L.marker([-2609, 3019], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2903, 2635], {floor: 2}).addTo(CopperOres);
L.marker([-2290, 3357], {floor: 13}).addTo(CarnotiteOres);
L.marker([-1209, 2632], {floor: 7}).addTo(PhenakiteOres);
L.marker([-4147, 2684], {floor: 4}).addTo(BorniteOres);
L.marker([-2655, 3193], {floor: 6}).addTo(CopperOres);
L.marker([-2322, 2611], {floor: 0}).addTo(MeteoriteOres);
L.marker([-2266, 1897], {floor: 10}).addTo(CopperOres);
L.marker([-1067, 2264], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-2125, 2518], {floor: 9}).addTo(CopperOres);
L.marker([-2274, 3311], {floor: 15}).addTo(HeliodorOres);
L.marker([-2533, 2916], {floor: 8}).addTo(PhenakiteOres);
L.marker([-1427, 2164], {floor: 11}).addTo(CopperOres);
L.marker([-2253, 2462], {floor: 7}).addTo(CopperOres);
L.marker([-2494, 2635], {floor: 5}).addTo(ChalcopyriteOres);
L.marker([-2065, 2442], {floor: 14}).addTo(WolframiteOres);
L.marker([-2317, 2346], {floor: 9}).addTo(VanadiniteOres);
L.marker([-1793, 2405], {floor: 9}).addTo(CarnotiteOres);
L.marker([-1915, 2264], {floor: 7}).addTo(SilverOres);
L.marker([-2146, 2352], {floor: 8}).addTo(CopperOres);
L.marker([-2640, 3078], {floor: 6}).addTo(CopperOres);
L.marker([-2128, 2382], {floor: 14}).addTo(VanadiniteOres);
L.marker([-1647, 2646], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1629, 2365], {floor: 8}).addTo(CopperOres);
L.marker([-1965, 2470], {floor: 2}).addTo(CopperOres);
L.marker([-1945, 2304], {floor: 9}).addTo(SilverOres);
L.marker([-1474, 2706], {floor: 8}).addTo(CopperOres);
L.marker([-2750, 3065], {floor: 3}).addTo(PhenakiteOres);
L.marker([-1956, 2472], {floor: 11}).addTo(SilverOres);
L.marker([-2320, 2176], {floor: 7}).addTo(SilverOres);
L.marker([-2058, 2311], {floor: 10}).addTo(SilverOres);
L.marker([-2852, 2665], {floor: 7}).addTo(SilverOres);
L.marker([-2913, 2676], {floor: 3}).addTo(GoldOres);
L.marker([-1098, 2509], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-2125, 2767], {floor: 2}).addTo(GoldOres);
L.marker([-2162, 2498], {floor: 7}).addTo(CopperOres);
L.marker([-2515, 2743], {floor: 6}).addTo(PhenakiteOres);
L.marker([-1587, 2865], {floor: 11}).addTo(CopperOres);
L.marker([-1989, 2295], {floor: 12}).addTo(SilverOres);
L.marker([-1191, 2538], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-3942, 2686], {floor: 11}).addTo(WolframiteOres);
L.marker([-2682, 2544], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2227, 1964], {floor: 10}).addTo(SilverOres);
L.marker([-2919, 2788], {floor: 3}).addTo(GoldOres);
L.marker([-2583, 2876], {floor: 0}).addTo(PhenakiteOres);
L.marker([-2591, 2857], {floor: 5}).addTo(VanadiniteOres);
L.marker([-1792, 3137], {floor: 9}).addTo(CopperOres);
L.marker([-2284, 1894], {floor: 10}).addTo(SilverOres);
L.marker([-985, 2436], {floor: 6}).addTo(PhenakiteOres);
L.marker([-1689, 2644], {floor: 15}).addTo(SilverOres);
L.marker([-1943, 2431], {floor: 13}).addTo(CopperOres);
L.marker([-2164, 2381], {floor: 8}).addTo(SilverOres);
L.marker([-1865, 2552], {floor: 7}).addTo(SilverOres);
L.marker([-1767, 2559], {floor: 9}).addTo(PhenakiteOres);
L.marker([-2090, 2404], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2274, 1855], {floor: 10}).addTo(CopperOres);
L.marker([-1669, 3213], {floor: 7}).addTo(SilverOres);
L.marker([-2167, 2596], {floor: 14}).addTo(PhenakiteOres);
L.marker([-2148, 2558], {floor: 8}).addTo(SilverOres);
L.marker([-1995, 2270], {floor: 13}).addTo(PhenakiteOres);
L.marker([-2113, 2086], {floor: 7}).addTo(CopperOres);
L.marker([-2520, 3062], {floor: 12}).addTo(ChalcopyriteOres);
L.marker([-4033, 2687], {floor: 7}).addTo(GoldOres);
L.marker([-2521, 2667], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1226, 2573], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-2276, 1841], {floor: 7}).addTo(SilverOres);
L.marker([-2010, 2047], {floor: 9}).addTo(CopperOres);
L.marker([-2513, 3028], {floor: 7}).addTo(CopperOres);
L.marker([-2483, 2831], {floor: 10}).addTo(CopperOres);
L.marker([-1607, 2838], {floor: 8}).addTo(CopperOres);
L.marker([-1045, 2760], {floor: 11}).addTo(BorniteOres);
L.marker([-1718, 2709], {floor: 9}).addTo(CopperOres);
L.marker([-2990, 3529], {floor: 8}).addTo(CopperOres);
L.marker([-2772, 2582], {floor: 6}).addTo(CopperOres);
L.marker([-2695, 2953], {floor: 1}).addTo(CopperOres);
L.marker([-2406, 2638], {floor: 14}).addTo(CopperOres);
L.marker([-2735, 2911], {floor: 2}).addTo(CopperOres);
L.marker([-1617, 1978], {floor: 6}).addTo(SilverOres);
L.marker([-1506, 2140], {floor: 10}).addTo(SilverOres);
L.marker([-2758, 2936], {floor: 6}).addTo(PhenakiteOres);
L.marker([-2779, 3227], {floor: 11}).addTo(SilverOres);
L.marker([-1594, 2419], {floor: 11}).addTo(SilverOres);
L.marker([-2059, 1992], {floor: 9}).addTo(CopperOres);
L.marker([-2677, 3216], {floor: 7}).addTo(CopperOres);
L.marker([-1711, 2592], {floor: 8}).addTo(SilverOres);
L.marker([-989, 2259], {floor: 7}).addTo(CarnotiteOres);
L.marker([-2608, 2902], {floor: 5}).addTo(VanadiniteOres);
L.marker([-2453, 2640], {floor: 14}).addTo(CopperOres);
L.marker([-2496, 3005], {floor: 10}).addTo(CarnotiteOres);
L.marker([-4203, 2795], {floor: 12}).addTo(GoldOres);
L.marker([-1125, 2576], {floor: 5}).addTo(PhenakiteOres);
L.marker([-1027, 2224], {floor: 10}).addTo(BorniteOres);
L.marker([-1589, 2679], {floor: 7}).addTo(SilverOres);
L.marker([-1744, 2556], {floor: 9}).addTo(CopperOres);
L.marker([-2233, 1922], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2869, 2607], {floor: 5}).addTo(PhenakiteOres);
L.marker([-2106, 2611], {floor: 8}).addTo(CopperOres);
L.marker([-1505, 2110], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2544, 2876], {floor: 8}).addTo(CopperOres);
L.marker([-2121, 2370], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2044, 2200], {floor: 7}).addTo(CopperOres);
L.marker([-4336, 2816], {floor: 13}).addTo(CarnotiteOres);
L.marker([-1871, 2439], {floor: 11}).addTo(CopperOres);
L.marker([-1235, 2474], {floor: 9}).addTo(CopperOres);
L.marker([-2122, 2357], {floor: 10}).addTo(PhenakiteOres);
L.marker([-1767, 2441], {floor: 9}).addTo(GoldOres);
L.marker([-2732, 3068], {floor: 6}).addTo(PhenakiteOres);
L.marker([-2256, 1831], {floor: 9}).addTo(CopperOres);
L.marker([-2412, 2644], {floor: 14}).addTo(PhenakiteOres);
L.marker([-1907, 2662], {floor: 7}).addTo(GoldOres);
L.marker([-2451, 2624], {floor: 5}).addTo(VanadiniteOres);
L.marker([-2923, 2784], {floor: 6}).addTo(CopperOres);
L.marker([-4409, 2550], {floor: 9}).addTo(GoldOres);
L.marker([-2205, 1984], {floor: 10}).addTo(SilverOres);
L.marker([-2744, 2604], {floor: 7}).addTo(CopperOres);
L.marker([-2359, 3396], {floor: 7}).addTo(SilverOres);
L.marker([-2802, 3500], {floor: 8}).addTo(BorniteOres);
L.marker([-1142, 2599], {floor: 9}).addTo(SilverOres);
L.marker([-1730, 2371], {floor: 9}).addTo(SilverOres);
L.marker([-2223, 2554], {floor: 12}).addTo(SilverOres);
L.marker([-2021, 2053], {floor: 9}).addTo(CopperOres);
L.marker([-848, 2379], {floor: 10}).addTo(ChalcopyriteOres);
L.marker([-2429, 2627], {floor: 14}).addTo(CopperOres);
L.marker([-1534, 2181], {floor: 9}).addTo(SilverOres);
L.marker([-837, 2369], {floor: 10}).addTo(ChalcopyriteOres);
L.marker([-2166, 2299], {floor: 13}).addTo(PhenakiteOres);
L.marker([-4347, 2549], {floor: 6}).addTo(WolframiteOres);
L.marker([-1970, 2360], {floor: 9}).addTo(CopperOres);
L.marker([-2450, 2645], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2738, 2939], {floor: 4}).addTo(CopperOres);
L.marker([-2427, 2627], {floor: 14}).addTo(CopperOres);
L.marker([-1564, 2481], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2947, 3475], {floor: 7}).addTo(VanadiniteOres);
L.marker([-2573, 2765], {floor: 7}).addTo(GoldOres);
L.marker([-4223, 2762], {floor: 8}).addTo(WolframiteOres);
L.marker([-1933, 2540], {floor: 7}).addTo(CopperOres);
L.marker([-2713, 2920], {floor: 6}).addTo(GoldOres);
L.marker([-2273, 1824], {floor: 7}).addTo(CopperOres);
L.marker([-2292, 2570], {floor: 9}).addTo(CopperOres);
L.marker([-1896, 2323], {floor: 1}).addTo(BorniteOres);
L.marker([-2482, 2898], {floor: 13}).addTo(BorniteOres);
L.marker([-2187, 2581], {floor: 12}).addTo(ChalcopyriteOres);
L.marker([-2352, 2360], {floor: 3}).addTo(CopperOres);
L.marker([-2161, 2363], {floor: 12}).addTo(SilverOres);
L.marker([-2230, 1920], {floor: 6}).addTo(PhenakiteOres);
L.marker([-834, 2543], {floor: 11}).addTo(SilverOres);
L.marker([-2310, 1851], {floor: 10}).addTo(SilverOres);
L.marker([-2162, 2404], {floor: 9}).addTo(CopperOres);
L.marker([-4018, 2522], {floor: 7}).addTo(WolframiteOres);
L.marker([-2705, 2959], {floor: 5}).addTo(CopperOres);
L.marker([-1060, 2520], {floor: 7}).addTo(VanadiniteOres);
L.marker([-2326, 2591], {floor: 7}).addTo(CopperOres);
L.marker([-1179, 2544], {floor: 13}).addTo(ChalcopyriteOres);
L.marker([-2093, 2656], {floor: 6}).addTo(CopperOres);
L.marker([-1171, 2516], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2488, 2768], {floor: 7}).addTo(BorniteOres);
L.marker([-1082, 2425], {floor: 8}).addTo(VanadiniteOres);
L.marker([-1798, 2582], {floor: 12}).addTo(CopperOres);
L.marker([-2322, 2711], {floor: 7}).addTo(CopperOres);
L.marker([-2529, 2522], {floor: 7}).addTo(VanadiniteOres);
L.marker([-1669, 2153], {floor: 5}).addTo(MeteoriteOres);
L.marker([-1525, 2349], {floor: 9}).addTo(PhenakiteOres);
L.marker([-2199, 1799], {floor: 9}).addTo(PhenakiteOres);
L.marker([-1085, 2532], {floor: 14}).addTo(HeliodorOres);
L.marker([-958, 2383], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-2325, 2355], {floor: 3}).addTo(CopperOres);
L.marker([-1967, 2609], {floor: 2}).addTo(PhenakiteOres);
L.marker([-804, 2324], {floor: 12}).addTo(WolframiteOres);
L.marker([-963, 2596], {floor: 7}).addTo(PhenakiteOres);
L.marker([-984, 2378], {floor: 9}).addTo(VanadiniteOres);
L.marker([-1156, 2557], {floor: 9}).addTo(PhenakiteOres);
L.marker([-1659, 2597], {floor: 13}).addTo(CopperOres);
L.marker([-2756, 3237], {floor: 7}).addTo(CopperOres);
L.marker([-1279, 2565], {floor: 11}).addTo(BorniteOres);
L.marker([-2570, 2735], {floor: 6}).addTo(PhenakiteOres);
L.marker([-1102, 2567], {floor: 5}).addTo(MeteoriteOres);
L.marker([-2270, 1993], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-2095, 2708], {floor: 7}).addTo(CopperOres);
L.marker([-1654, 3225], {floor: 7}).addTo(CopperOres);
L.marker([-2370, 3032], {floor: 9}).addTo(CopperOres);
L.marker([-963, 2433], {floor: 14}).addTo(WolframiteOres);
L.marker([-1071, 2500], {floor: 9}).addTo(CopperOres);
L.marker([-2494, 2702], {floor: 4}).addTo(GoldOres);
L.marker([-1928, 2647], {floor: 2}).addTo(PhenakiteOres);
L.marker([-1952, 2317], {floor: 11}).addTo(SilverOres);
L.marker([-1638, 1947], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1471, 2712], {floor: 10}).addTo(GoldOres);
L.marker([-1235, 2569], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-1892, 2361], {floor: 8}).addTo(WolframiteOres);
L.marker([-2788, 2741], {floor: 11}).addTo(PhenakiteOres);
L.marker([-2055, 2281], {floor: 10}).addTo(CopperOres);
L.marker([-4147, 2727], {floor: 5}).addTo(BorniteOres);
L.marker([-1133, 2634], {floor: 11}).addTo(ChalcopyriteOres);
L.marker([-2939, 2650], {floor: 3}).addTo(CopperOres);
L.marker([-1745, 3291], {floor: 14}).addTo(HeliodorOres);
L.marker([-2215, 2305], {floor: 8}).addTo(BorniteOres);
L.marker([-981, 2326], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2380, 2585], {floor: 9}).addTo(SilverOres);
L.marker([-2710, 3356], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2177, 1832], {floor: 9}).addTo(CopperOres);
L.marker([-1881, 2450], {floor: 11}).addTo(CopperOres);
L.marker([-2182, 1827], {floor: 9}).addTo(SilverOres);
L.marker([-2712, 2681], {floor: 2}).addTo(CopperOres);
L.marker([-1685, 2740], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2676, 2572], {floor: 5}).addTo(SilverOres);
L.marker([-963, 2360], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-1982, 2318], {floor: 12}).addTo(SilverOres);
L.marker([-2734, 2921], {floor: 1}).addTo(CopperOres);
L.marker([-2824, 2756], {floor: 7}).addTo(CopperOres);
L.marker([-1518, 2051], {floor: 8}).addTo(CopperOres);
L.marker([-1882, 2048], {floor: 9}).addTo(PhenakiteOres);
L.marker([-1785, 2182], {floor: 7}).addTo(CopperOres);
L.marker([-1961, 2159], {floor: 10}).addTo(SilverOres);
L.marker([-2425, 2627], {floor: 14}).addTo(CopperOres);
L.marker([-1648, 2026], {floor: 7}).addTo(SilverOres);
L.marker([-2645, 2667], {floor: 7}).addTo(SilverOres);
L.marker([-2335, 3343], {floor: 9}).addTo(CopperOres);
L.marker([-4914, 4529], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1719, 2580], {floor: 15}).addTo(WolframiteOres);
L.marker([-2194, 1848], {floor: 9}).addTo(SilverOres);
L.marker([-2269, 1971], {floor: 10}).addTo(SilverOres);
L.marker([-1143, 2563], {floor: 9}).addTo(SilverOres);
L.marker([-2865, 2772], {floor: 7}).addTo(CopperOres);
L.marker([-1129, 2369], {floor: 7}).addTo(CopperOres);
L.marker([-1953, 2380], {floor: 8}).addTo(SilverOres);
L.marker([-2062, 2419], {floor: 14}).addTo(VanadiniteOres);
L.marker([-747, 2422], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2752, 2950], {floor: 5}).addTo(CopperOres);
L.marker([-2056, 2387], {floor: 8}).addTo(CopperOres);
L.marker([-1761, 3218], {floor: 5}).addTo(MeteoriteOres);
L.marker([-2276, 1906], {floor: 10}).addTo(CopperOres);
L.marker([-2709, 2919], {floor: 3}).addTo(CopperOres);
L.marker([-1070, 2776], {floor: 11}).addTo(WolframiteOres);
L.marker([-2189, 2170], {floor: 5}).addTo(MeteoriteOres);
L.marker([-2132, 2388], {floor: 9}).addTo(SilverOres);
L.marker([-2756, 2929], {floor: 2}).addTo(CopperOres);
L.marker([-2737, 2610], {floor: 8}).addTo(CopperOres);
L.marker([-1869, 2014], {floor: 11}).addTo(SilverOres);
L.marker([-1208, 2710], {floor: 10}).addTo(SilverOres);
L.marker([-2353, 2621], {floor: 9}).addTo(CopperOres);
L.marker([-4222, 2760], {floor: 3}).addTo(BorniteOres);
L.marker([-2501, 2703], {floor: 6}).addTo(SilverOres);
L.marker([-2150, 2179], {floor: 7}).addTo(SilverOres);
L.marker([-4242, 2570], {floor: 9}).addTo(GoldOres);
L.marker([-1825, 2667], {floor: 9}).addTo(CopperOres);
L.marker([-2219, 2365], {floor: 3}).addTo(PhenakiteOres);
L.marker([-1068, 2325], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-1770, 3229], {floor: 3}).addTo(VanadiniteOres);
L.marker([-2602, 2680], {floor: 8}).addTo(VanadiniteOres);
L.marker([-1696, 2674], {floor: 15}).addTo(WolframiteOres);
L.marker([-3971, 2636], {floor: 14}).addTo(CarnotiteOres);
L.marker([-2019, 2374], {floor: 8}).addTo(SilverOres);
L.marker([-2483, 3071], {floor: 10}).addTo(PhenakiteOres);
L.marker([-1620, 1953], {floor: 4}).addTo(BorniteOres);
L.marker([-2682, 2494], {floor: 7}).addTo(SilverOres);
L.marker([-2662, 3079], {floor: 3}).addTo(MeteoriteOres);
L.marker([-2395, 2016], {floor: 10}).addTo(GoldOres);
L.marker([-2166, 2381], {floor: 8}).addTo(CopperOres);
L.marker([-1043, 2280], {floor: 9}).addTo(WolframiteOres);
L.marker([-1867, 3415], {floor: 6}).addTo(VanadiniteOres);
L.marker([-2023, 2850], {floor: 8}).addTo(CopperOres);
L.marker([-2578, 2575], {floor: 8}).addTo(VanadiniteOres);
L.marker([-2766, 2538], {floor: 8}).addTo(PhenakiteOres);
L.marker([-846, 2589], {floor: 11}).addTo(SilverOres);
L.marker([-866, 2608], {floor: 7}).addTo(GoldOres);
L.marker([-2376, 2350], {floor: 9}).addTo(GoldOres);
L.marker([-1043, 2615], {floor: 8}).addTo(CopperOres);
L.marker([-2827, 3017], {floor: 5}).addTo(PhenakiteOres);
L.marker([-2824, 3144], {floor: 11}).addTo(PhenakiteOres);
L.marker([-2894, 2659], {floor: 9}).addTo(CopperOres);
L.marker([-2771, 2497], {floor: 7}).addTo(CopperOres);
L.marker([-2085, 2323], {floor: 7}).addTo(SilverOres);
L.marker([-814, 2324], {floor: 13}).addTo(ChalcopyriteOres);
L.marker([-708, 2387], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2469, 2667], {floor: 7}).addTo(BorniteOres);
L.marker([-2712, 2696], {floor: 2}).addTo(CopperOres);
L.marker([-1201, 2563], {floor: 13}).addTo(ChalcopyriteOres);
L.marker([-2972, 3592], {floor: 8}).addTo(CopperOres);
L.marker([-2313, 2336], {floor: 9}).addTo(GoldOres);
L.marker([-1091, 2459], {floor: 8}).addTo(SilverOres);
L.marker([-2481, 2804], {floor: 8}).addTo(CopperOres);
L.marker([-2652, 2749], {floor: 7}).addTo(CopperOres);
L.marker([-2408, 2665], {floor: 14}).addTo(SilverOres);
L.marker([-2677, 2615], {floor: 7}).addTo(CopperOres);
L.marker([-2329, 2356], {floor: 3}).addTo(CopperOres);
L.marker([-2773, 3081], {floor: 4}).addTo(PhenakiteOres);
L.marker([-2601, 2938], {floor: 8}).addTo(PhenakiteOres);
L.marker([-1132, 2562], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2787, 3530], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1949, 2222], {floor: 7}).addTo(SilverOres);
L.marker([-2613, 2827], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2261, 2207], {floor: 7}).addTo(CopperOres);
L.marker([-2080, 2382], {floor: 12}).addTo(SilverOres);
L.marker([-2060, 2375], {floor: 10}).addTo(PhenakiteOres);
L.marker([-1284, 2430], {floor: 9}).addTo(PhenakiteOres);
L.marker([-4264, 2747], {floor: 11}).addTo(GoldOres);
L.marker([-1957, 2479], {floor: 3}).addTo(CopperOres);
L.marker([-2902, 3491], {floor: 8}).addTo(CopperOres);
L.marker([-1423, 2057], {floor: 10}).addTo(SilverOres);
L.marker([-1607, 1962], {floor: 6}).addTo(PhenakiteOres);
L.marker([-2010, 2422], {floor: 10}).addTo(SilverOres);
L.marker([-1261, 2581], {floor: 12}).addTo(BorniteOres);
L.marker([-2666, 2763], {floor: 5}).addTo(PhenakiteOres);
L.marker([-1621, 1950], {floor: 6}).addTo(CopperOres);
L.marker([-2190, 2155], {floor: 7}).addTo(MeteoriteOres);
L.marker([-2726, 2978], {floor: 4}).addTo(CopperOres);
L.marker([-2272, 2062], {floor: 7}).addTo(CopperOres);
L.marker([-1531, 2073], {floor: 7}).addTo(CopperOres);
L.marker([-2619, 2870], {floor: 4}).addTo(VanadiniteOres);
L.marker([-2326, 2066], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2585, 3057], {floor: 8}).addTo(PhenakiteOres);
L.marker([-1790, 2744], {floor: 7}).addTo(SilverOres);
L.marker([-2146, 2347], {floor: 8}).addTo(CopperOres);
L.marker([-1147, 2634], {floor: 11}).addTo(ChalcopyriteOres);
L.marker([-2007, 2148], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2060, 2458], {floor: 11}).addTo(SilverOres);
L.marker([-2056, 2459], {floor: 11}).addTo(CopperOres);
L.marker([-1927, 2552], {floor: 9}).addTo(SilverOres);
L.marker([-2164, 3416], {floor: 14}).addTo(WolframiteOres);
L.marker([-2507, 2932], {floor: 11}).addTo(GoldOres);
L.marker([-1072, 2419], {floor: 10}).addTo(ChalcopyriteOres);
L.marker([-2295, 1971], {floor: 10}).addTo(PhenakiteOres);
L.marker([-1693, 2619], {floor: 12}).addTo(CopperOres);
L.marker([-2623, 2731], {floor: 6}).addTo(SilverOres);
L.marker([-4193, 2705], {floor: 7}).addTo(BorniteOres);
L.marker([-702, 2553], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2110, 2296], {floor: 9}).addTo(CopperOres);
L.marker([-1938, 2369], {floor: 5}).addTo(SilverOres);
L.marker([-2301, 1951], {floor: 10}).addTo(PhenakiteOres);
L.marker([-1461, 2352], {floor: 8}).addTo(SilverOres);
L.marker([-1601, 2747], {floor: 8}).addTo(CopperOres);
L.marker([-4219, 2798], {floor: 9}).addTo(GoldOres);
L.marker([-2893, 2651], {floor: 8}).addTo(CopperOres);
L.marker([-1193, 2519], {floor: 15}).addTo(BorniteOres);
L.marker([-2804, 2597], {floor: 7}).addTo(CopperOres);
L.marker([-2020, 2335], {floor: 12}).addTo(PhenakiteOres);
L.marker([-2431, 3389], {floor: 8}).addTo(CopperOres);
L.marker([-2043, 2668], {floor: 7}).addTo(SilverOres);
L.marker([-2064, 2705], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2034, 2906], {floor: 12}).addTo(CarnotiteOres);
L.marker([-1626, 2112], {floor: 8}).addTo(SilverOres);
L.marker([-1444, 2140], {floor: 10}).addTo(CopperOres);
L.marker([-2708, 2941], {floor: 4}).addTo(CopperOres);
L.marker([-2178, 2336], {floor: 13}).addTo(GoldOres);
L.marker([-2415, 2667], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2677, 2977], {floor: 3}).addTo(CopperOres);
L.marker([-1011, 2640], {floor: 12}).addTo(VanadiniteOres);
L.marker([-2596, 2664], {floor: 8}).addTo(PhenakiteOres);
L.marker([-1852, 3385], {floor: 8}).addTo(WolframiteOres);
L.marker([-1080, 2448], {floor: 5}).addTo(BorniteOres);
L.marker([-2407, 2665], {floor: 14}).addTo(SilverOres);
L.marker([-1279, 2573], {floor: 10}).addTo(CarnotiteOres);
L.marker([-1181, 2491], {floor: 11}).addTo(CopperOres);
L.marker([-704, 2606], {floor: 7}).addTo(GoldOres);
L.marker([-2006, 2862], {floor: 7}).addTo(SilverOres);
L.marker([-2241, 1910], {floor: 7}).addTo(SilverOres);
L.marker([-1684, 2375], {floor: 10}).addTo(SilverOres);
L.marker([-2315, 2362], {floor: 1}).addTo(CopperOres);
L.marker([-2342, 2596], {floor: 8}).addTo(CopperOres);
L.marker([-1452, 2250], {floor: 8}).addTo(CopperOres);
L.marker([-2462, 3038], {floor: 12}).addTo(PhenakiteOres);
L.marker([-4388, 2712], {floor: 8}).addTo(GoldOres);
L.marker([-1933, 2459], {floor: 8}).addTo(SilverOres);
L.marker([-815, 2316], {floor: 13}).addTo(ChalcopyriteOres);
L.marker([-1648, 2122], {floor: 7}).addTo(CopperOres);
L.marker([-2713, 2624], {floor: 1}).addTo(PhenakiteOres);
L.marker([-2207, 2347], {floor: 7}).addTo(CopperOres);
L.marker([-4172, 2695], {floor: 6}).addTo(HeliodorOres);
L.marker([-2700, 2506], {floor: 7}).addTo(VanadiniteOres);
L.marker([-2235, 1896], {floor: 9}).addTo(CopperOres);
L.marker([-2693, 2543], {floor: 5}).addTo(WolframiteOres);
L.marker([-1036, 2396], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-1940, 2263], {floor: 12}).addTo(SilverOres);
L.marker([-2448, 3266], {floor: 8}).addTo(CopperOres);
L.marker([-1489, 2024], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2034, 2809], {floor: 9}).addTo(SilverOres);
L.marker([-2577, 2653], {floor: 4}).addTo(ChalcopyriteOres);
L.marker([-1593, 2683], {floor: 8}).addTo(CopperOres);
L.marker([-2187, 1953], {floor: 7}).addTo(PhenakiteOres);
L.marker([-910, 2480], {floor: 11}).addTo(BorniteOres);
L.marker([-4141, 2640], {floor: 20}).addTo(WolframiteOres);
L.marker([-1166, 2043], {floor: 8}).addTo(CopperOres);
L.marker([-1106, 2572], {floor: 0}).addTo(MeteoriteOres);
L.marker([-1091, 2028], {floor: 8}).addTo(CopperOres);
L.marker([-1814, 2803], {floor: 9}).addTo(PhenakiteOres);
L.marker([-2652, 2852], {floor: 2}).addTo(CopperOres);
L.marker([-1970, 2276], {floor: 11}).addTo(SilverOres);
L.marker([-2536, 2584], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1735, 2796], {floor: 7}).addTo(CopperOres);
L.marker([-1954, 2102], {floor: 9}).addTo(SilverOres);
L.marker([-2270, 2110], {floor: 8}).addTo(SilverOres);
L.marker([-1986, 1927], {floor: 10}).addTo(SilverOres);
L.marker([-4101, 2717], {floor: 8}).addTo(GoldOres);
L.marker([-1734, 2412], {floor: 8}).addTo(PhenakiteOres);
L.marker([-938, 2416], {floor: 10}).addTo(BorniteOres);
L.marker([-4094, 2783], {floor: 5}).addTo(BorniteOres);
L.marker([-3933, 2642], {floor: 14}).addTo(WolframiteOres);
L.marker([-813, 2316], {floor: 12}).addTo(BorniteOres);
L.marker([-2444, 2649], {floor: 14}).addTo(SilverOres);
L.marker([-1267, 2550], {floor: 9}).addTo(PhenakiteOres);
L.marker([-2677, 2966], {floor: 2}).addTo(PhenakiteOres);
L.marker([-2734, 2608], {floor: 7}).addTo(CopperOres);
L.marker([-1591, 2692], {floor: 9}).addTo(SilverOres);
L.marker([-1633, 2374], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2529, 2686], {floor: 0}).addTo(MeteoriteOres);
L.marker([-2739, 2517], {floor: 9}).addTo(SilverOres);
L.marker([-1961, 2471], {floor: 11}).addTo(CopperOres);
L.marker([-2409, 2665], {floor: 14}).addTo(SilverOres);
L.marker([-2410, 2665], {floor: 14}).addTo(SilverOres);
L.marker([-1823, 2602], {floor: 9}).addTo(SilverOres);
L.marker([-2515, 2537], {floor: 13}).addTo(VanadiniteOres);
L.marker([-1216, 2532], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2130, 2441], {floor: 8}).addTo(SilverOres);
L.marker([-1293, 2575], {floor: 10}).addTo(ChalcopyriteOres);
L.marker([-2162, 1880], {floor: 9}).addTo(CopperOres);
L.marker([-2495, 2710], {floor: 6}).addTo(SilverOres);
L.marker([-1680, 2746], {floor: 7}).addTo(SilverOres);
L.marker([-2028, 2334], {floor: 10}).addTo(SilverOres);
L.marker([-2805, 3508], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1457, 2365], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2190, 1961], {floor: 7}).addTo(CopperOres);
L.marker([-1711, 3341], {floor: 15}).addTo(BorniteOres);
L.marker([-1813, 3144], {floor: 5}).addTo(CopperOres);
L.marker([-2173, 2651], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2160, 1823], {floor: 9}).addTo(PhenakiteOres);
L.marker([-2295, 2676], {floor: 13}).addTo(WolframiteOres);
L.marker([-2911, 2836], {floor: 7}).addTo(CopperOres);
L.marker([-946, 2305], {floor: 11}).addTo(ChalcopyriteOres);
L.marker([-2428, 2627], {floor: 14}).addTo(CopperOres);
L.marker([-2145, 2816], {floor: 10}).addTo(BorniteOres);
L.marker([-2734, 2914], {floor: 4}).addTo(CopperOres);
L.marker([-747, 2439], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2943, 3060], {floor: 7}).addTo(CopperOres);
L.marker([-2227, 1920], {floor: 8}).addTo(CopperOres);
L.marker([-2255, 1865], {floor: 8}).addTo(PhenakiteOres);
L.marker([-1086, 2554], {floor: 8}).addTo(SilverOres);
L.marker([-1744, 2602], {floor: 9}).addTo(CopperOres);
L.marker([-1714, 3077], {floor: 9}).addTo(SilverOres);
L.marker([-2221, 2639], {floor: 11}).addTo(CopperOres);
L.marker([-920, 2419], {floor: 11}).addTo(WolframiteOres);
L.marker([-1569, 2225], {floor: 7}).addTo(SilverOres);
L.marker([-1729, 2557], {floor: 8}).addTo(CopperOres);
L.marker([-1942, 2259], {floor: 12}).addTo(SilverOres);
L.marker([-2899, 2612], {floor: 5}).addTo(PhenakiteOres);
L.marker([-2822, 2598], {floor: 7}).addTo(CopperOres);
L.marker([-2102, 2759], {floor: 11}).addTo(SilverOres);
L.marker([-849, 2630], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2182, 2567], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2613, 2800], {floor: 7}).addTo(CopperOres);
L.marker([-2516, 2837], {floor: 0}).addTo(VanadiniteOres);
L.marker([-4446, 2867], {floor: 10}).addTo(GoldOres);
L.marker([-2660, 2930], {floor: 2}).addTo(CopperOres);
L.marker([-1974, 2463], {floor: 12}).addTo(CopperOres);
L.marker([-2395, 2644], {floor: 14}).addTo(CopperOres);
L.marker([-2499, 2705], {floor: 6}).addTo(VanadiniteOres);
L.marker([-4291, 2796], {floor: 13}).addTo(GoldOres);
L.marker([-1948, 2038], {floor: 10}).addTo(SilverOres);
L.marker([-2171, 2609], {floor: 14}).addTo(PhenakiteOres);
L.marker([-1494, 2179], {floor: 10}).addTo(CopperOres);
L.marker([-1642, 1987], {floor: 6}).addTo(SilverOres);
L.marker([-1916, 2655], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1977, 2149], {floor: 10}).addTo(SilverOres);
L.marker([-1214, 2582], {floor: 11}).addTo(BorniteOres);
L.marker([-2529, 2632], {floor: 4}).addTo(ChalcopyriteOres);
L.marker([-1465, 2348], {floor: 9}).addTo(SilverOres);
L.marker([-2153, 2410], {floor: 12}).addTo(SilverOres);
L.marker([-2406, 2639], {floor: 14}).addTo(CopperOres);
L.marker([-2736, 2950], {floor: 6}).addTo(VanadiniteOres);
L.marker([-738, 2427], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-1729, 2587], {floor: 7}).addTo(CopperOres);
L.marker([-4394, 2714], {floor: 8}).addTo(GoldOres);
L.marker([-2602, 2872], {floor: 4}).addTo(BorniteOres);
L.marker([-1147, 2206], {floor: 9}).addTo(GoldOres);
L.marker([-987, 2375], {floor: 13}).addTo(ChalcopyriteOres);
L.marker([-4073, 2553], {floor: 8}).addTo(WolframiteOres);
L.marker([-1580, 2286], {floor: 12}).addTo(BorniteOres);
L.marker([-2665, 3081], {floor: 0}).addTo(MeteoriteOres);
L.marker([-1534, 2394], {floor: 7}).addTo(CopperOres);
L.marker([-951, 2433], {floor: 11}).addTo(ChalcopyriteOres);
L.marker([-4398, 2657], {floor: 7}).addTo(GoldOres);
L.marker([-932, 2452], {floor: 11}).addTo(ChalcopyriteOres);
L.marker([-712, 2587], {floor: 3}).addTo(BorniteOres);
L.marker([-4221, 2759], {floor: 4}).addTo(BorniteOres);
L.marker([-1078, 2445], {floor: 9}).addTo(BorniteOres);
L.marker([-1849, 2571], {floor: 10}).addTo(SilverOres);
L.marker([-1170, 2312], {floor: 8}).addTo(BorniteOres);
L.marker([-1897, 2089], {floor: 12}).addTo(PhenakiteOres);
L.marker([-1763, 2412], {floor: 8}).addTo(PhenakiteOres);
L.marker([-1132, 2639], {floor: 5}).addTo(PhenakiteOres);
L.marker([-4227, 2696], {floor: 4}).addTo(BorniteOres);
L.marker([-2241, 2279], {floor: 7}).addTo(SilverOres);
L.marker([-972, 2416], {floor: 14}).addTo(BorniteOres);
L.marker([-852, 2598], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2459, 2840], {floor: 10}).addTo(CopperOres);
L.marker([-2178, 2145], {floor: 9}).addTo(CopperOres);
L.marker([-2912, 2687], {floor: 6}).addTo(PhenakiteOres);
L.marker([-2416, 2667], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2006, 2896], {floor: 12}).addTo(VanadiniteOres);
L.marker([-807, 2472], {floor: 9}).addTo(PhenakiteOres);
L.marker([-2821, 3005], {floor: 0}).addTo(MeteoriteOres);
L.marker([-1130, 2611], {floor: 9}).addTo(PhenakiteOres);
L.marker([-2411, 2644], {floor: 14}).addTo(PhenakiteOres);
L.marker([-990, 2442], {floor: 6}).addTo(PhenakiteOres);
L.marker([-1766, 3223], {floor: 0}).addTo(MeteoriteOres);
L.marker([-4150, 2608], {floor: 21}).addTo(GoldOres);
L.marker([-2451, 2837], {floor: 7}).addTo(SilverOres);
L.marker([-1952, 2356], {floor: 9}).addTo(SilverOres);
L.marker([-2550, 2708], {floor: 9}).addTo(HeliodorOres);
L.marker([-1199, 1932], {floor: 8}).addTo(SilverOres);
L.marker([-2188, 2597], {floor: 13}).addTo(ChalcopyriteOres);
L.marker([-4039, 2919], {floor: 13}).addTo(HeliodorOres);
L.marker([-1981, 2199], {floor: 11}).addTo(SilverOres);
L.marker([-2513, 2746], {floor: 5}).addTo(PhenakiteOres);
L.marker([-1851, 2654], {floor: 7}).addTo(SilverOres);
L.marker([-2657, 2662], {floor: 8}).addTo(CopperOres);
L.marker([-2372, 2580], {floor: 9}).addTo(CopperOres);
L.marker([-2250, 2008], {floor: 7}).addTo(GoldOres);
L.marker([-2639, 2870], {floor: 7}).addTo(CopperOres);
L.marker([-1932, 2858], {floor: 7}).addTo(CopperOres);
L.marker([-1642, 2644], {floor: 15}).addTo(PhenakiteOres);
L.marker([-1722, 2450], {floor: 9}).addTo(PhenakiteOres);
L.marker([-1950, 2465], {floor: 11}).addTo(SilverOres);
L.marker([-2500, 2954], {floor: 11}).addTo(WolframiteOres);
L.marker([-1730, 3289], {floor: 15}).addTo(BorniteOres);
L.marker([-1721, 2449], {floor: 9}).addTo(PhenakiteOres);
L.marker([-1418, 2158], {floor: 10}).addTo(PhenakiteOres);
L.marker([-1633, 2332], {floor: 8}).addTo(CopperOres);
L.marker([-1892, 2652], {floor: 7}).addTo(SilverOres);
L.marker([-2800, 2883], {floor: 10}).addTo(WolframiteOres);
L.marker([-2282, 1860], {floor: 8}).addTo(PhenakiteOres);
L.marker([-4328, 2780], {floor: 10}).addTo(GoldOres);
L.marker([-2306, 2720], {floor: 13}).addTo(BorniteOres);
L.marker([-1621, 2363], {floor: 9}).addTo(SilverOres);
L.marker([-2000, 2312], {floor: 12}).addTo(SilverOres);
L.marker([-2147, 2414], {floor: 3}).addTo(CopperOres);
L.marker([-1815, 2177], {floor: 7}).addTo(CopperOres);
L.marker([-2232, 2646], {floor: 8}).addTo(SilverOres);
L.marker([-2789, 2927], {floor: 6}).addTo(BorniteOres);
L.marker([-1231, 2565], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-1720, 2523], {floor: 8}).addTo(CopperOres);
L.marker([-2178, 2301], {floor: 13}).addTo(VanadiniteOres);
L.marker([-2554, 2904], {floor: 8}).addTo(CopperOres);
L.marker([-2195, 2174], {floor: 0}).addTo(MeteoriteOres);
L.marker([-1627, 2699], {floor: 8}).addTo(SilverOres);
L.marker([-2416, 3040], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2929, 2851], {floor: 7}).addTo(CopperOres);
L.marker([-1562, 2418], {floor: 7}).addTo(CopperOres);
L.marker([-1762, 3219], {floor: 7}).addTo(MeteoriteOres);
L.marker([-1893, 1810], {floor: 15}).addTo(PhenakiteOres);
L.marker([-1869, 2046], {floor: 12}).addTo(PhenakiteOres);
L.marker([-2032, 2294], {floor: 12}).addTo(PhenakiteOres);
L.marker([-2537, 2884], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2187, 2407], {floor: 8}).addTo(CopperOres);
L.marker([-4046, 2579], {floor: 8}).addTo(WolframiteOres);
L.marker([-1954, 2477], {floor: 11}).addTo(CopperOres);
L.marker([-1215, 2700], {floor: 10}).addTo(SilverOres);
L.marker([-2446, 2651], {floor: 14}).addTo(SilverOres);
L.marker([-1548, 2211], {floor: 8}).addTo(CopperOres);
L.marker([-1519, 2412], {floor: 9}).addTo(VanadiniteOres);
L.marker([-1935, 2412], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2285, 2657], {floor: 7}).addTo(SilverOres);
L.marker([-1979, 2474], {floor: 13}).addTo(CopperOres);
L.marker([-2259, 1900], {floor: 9}).addTo(SilverOres);
L.marker([-2762, 2598], {floor: 9}).addTo(CopperOres);
L.marker([-1909, 2276], {floor: 12}).addTo(SilverOres);
L.marker([-1186, 2583], {floor: 10}).addTo(CopperOres);
L.marker([-2107, 2681], {floor: 13}).addTo(BorniteOres);
L.marker([-1882, 3372], {floor: 6}).addTo(CarnotiteOres);
L.marker([-4137, 2656], {floor: 9}).addTo(GoldOres);
L.marker([-2455, 2627], {floor: 4}).addTo(BorniteOres);
L.marker([-2129, 3495], {floor: 0}).addTo(MeteoriteOres);
L.marker([-2200, 1853], {floor: 7}).addTo(SilverOres);
L.marker([-1675, 2608], {floor: 13}).addTo(CopperOres);
L.marker([-760, 2400], {floor: 14}).addTo(HeliodorOres);
L.marker([-1997, 2969], {floor: 12}).addTo(CarnotiteOres);
L.marker([-2079, 2123], {floor: 9}).addTo(SilverOres);
L.marker([-1815, 2674], {floor: 9}).addTo(CopperOres);
L.marker([-2255, 1852], {floor: 8}).addTo(CopperOres);
L.marker([-2492, 2868], {floor: 13}).addTo(BorniteOres);
L.marker([-2312, 1952], {floor: 10}).addTo(CarnotiteOres);
L.marker([-4263, 2661], {floor: 9}).addTo(WolframiteOres);
L.marker([-2343, 3020], {floor: 8}).addTo(CopperOres);
L.marker([-1607, 2436], {floor: 11}).addTo(SilverOres);
L.marker([-2519, 2701], {floor: 8}).addTo(BorniteOres);
L.marker([-2043, 2273], {floor: 13}).addTo(CopperOres);
L.marker([-1801, 2276], {floor: 7}).addTo(SilverOres);
L.marker([-4120, 2689], {floor: 9}).addTo(GoldOres);
L.marker([-2454, 2640], {floor: 14}).addTo(CopperOres);
L.marker([-2865, 2887], {floor: 2}).addTo(PhenakiteOres);
L.marker([-2224, 2549], {floor: 8}).addTo(CopperOres);
L.marker([-1953, 2327], {floor: 10}).addTo(PhenakiteOres);
L.marker([-979, 2407], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2479, 2598], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1986, 2400], {floor: 0}).addTo(MeteoriteOres);
L.marker([-2266, 1989], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2780, 2513], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1924, 2426], {floor: 11}).addTo(SilverOres);
L.marker([-2470, 2889], {floor: 7}).addTo(SilverOres);
L.marker([-2704, 3097], {floor: 4}).addTo(PhenakiteOres);
L.marker([-1884, 2259], {floor: 9}).addTo(SilverOres);
L.marker([-2244, 2321], {floor: 3}).addTo(PhenakiteOres);
L.marker([-1945, 2344], {floor: 9}).addTo(CopperOres);
L.marker([-2077, 1912], {floor: 8}).addTo(SilverOres);
L.marker([-1974, 2307], {floor: 7}).addTo(SilverOres);
L.marker([-2782, 3576], {floor: 5}).addTo(BorniteOres);
L.marker([-1077, 2647], {floor: 10}).addTo(WolframiteOres);
L.marker([-2520, 2536], {floor: 7}).addTo(VanadiniteOres);
L.marker([-2765, 2530], {floor: 9}).addTo(CopperOres);
L.marker([-1803, 2531], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1116, 2205], {floor: 9}).addTo(VanadiniteOres);
L.marker([-2375, 3348], {floor: 9}).addTo(CopperOres);
L.marker([-1171, 2623], {floor: 10}).addTo(CopperOres);
L.marker([-1735, 3239], {floor: 10}).addTo(CopperOres);
L.marker([-2131, 3419], {floor: 7}).addTo(PhenakiteOres);
L.marker([-4248, 2847], {floor: 10}).addTo(GoldOres);
L.marker([-2364, 2363], {floor: 3}).addTo(CopperOres);
L.marker([-1155, 2588], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-4175, 2785], {floor: 3}).addTo(BorniteOres);
L.marker([-1950, 2799], {floor: 11}).addTo(VanadiniteOres);
L.marker([-1055, 2641], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2110, 2646], {floor: 11}).addTo(CopperOres);
L.marker([-4300, 2769], {floor: 9}).addTo(GoldOres);
L.marker([-1889, 2463], {floor: 11}).addTo(SilverOres);
L.marker([-2681, 2571], {floor: 6}).addTo(SilverOres);
L.marker([-2057, 2355], {floor: 8}).addTo(CopperOres);
L.marker([-1599, 2877], {floor: 8}).addTo(CopperOres);
L.marker([-913, 2303], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-2292, 2487], {floor: 10}).addTo(CopperOres);
L.marker([-1887, 2278], {floor: 7}).addTo(CopperOres);
L.marker([-2827, 2927], {floor: 4}).addTo(WolframiteOres);
L.marker([-2138, 2364], {floor: 9}).addTo(SilverOres);
L.marker([-1543, 2378], {floor: 9}).addTo(PhenakiteOres);
L.marker([-2771, 2943], {floor: 7}).addTo(WolframiteOres);
L.marker([-2561, 3036], {floor: 7}).addTo(SilverOres);
L.marker([-2305, 2682], {floor: 8}).addTo(CopperOres);
L.marker([-2324, 2613], {floor: 9}).addTo(SilverOres);
L.marker([-2929, 2654], {floor: 3}).addTo(PhenakiteOres);
L.marker([-2351, 3268], {floor: 6}).addTo(CopperOres);
L.marker([-2111, 2100], {floor: 7}).addTo(CopperOres);
L.marker([-2307, 2764], {floor: 7}).addTo(SilverOres);
L.marker([-1191, 1959], {floor: 8}).addTo(SilverOres);
L.marker([-1649, 2193], {floor: 7}).addTo(CopperOres);
L.marker([-2668, 2722], {floor: 1}).addTo(PhenakiteOres);
L.marker([-2091, 3492], {floor: 7}).addTo(VanadiniteOres);
L.marker([-1469, 2361], {floor: 8}).addTo(CopperOres);
L.marker([-2724, 2969], {floor: 4}).addTo(CopperOres);
L.marker([-2003, 2257], {floor: 13}).addTo(PhenakiteOres);
L.marker([-2356, 2353], {floor: 6}).addTo(GoldOres);
L.marker([-4068, 2748], {floor: 8}).addTo(GoldOres);
L.marker([-1593, 2415], {floor: 8}).addTo(CopperOres);
L.marker([-2539, 2618], {floor: 7}).addTo(VanadiniteOres);
L.marker([-979, 2334], {floor: 11}).addTo(BorniteOres);
L.marker([-2896, 2848], {floor: 4}).addTo(CopperOres);
L.marker([-2649, 3232], {floor: 3}).addTo(PhenakiteOres);
L.marker([-2771, 3429], {floor: 11}).addTo(PhenakiteOres);
L.marker([-1647, 2689], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2084, 2174], {floor: 5}).addTo(SilverOres);
L.marker([-978, 2244], {floor: 3}).addTo(BorniteOres);
L.marker([-2261, 1990], {floor: 10}).addTo(VanadiniteOres);
L.marker([-1996, 2339], {floor: 13}).addTo(BorniteOres);
L.marker([-1589, 2270], {floor: 7}).addTo(SilverOres);
L.marker([-1777, 2090], {floor: 16}).addTo(VanadiniteOres);
L.marker([-1558, 2433], {floor: 5}).addTo(PhenakiteOres);
L.marker([-1768, 2547], {floor: 9}).addTo(SilverOres);
L.marker([-2696, 2503], {floor: 8}).addTo(CarnotiteOres);
L.marker([-1726, 3270], {floor: 10}).addTo(CopperOres);
L.marker([-2166, 2384], {floor: 8}).addTo(SilverOres);
L.marker([-2406, 2641], {floor: 14}).addTo(CopperOres);
L.marker([-1128, 2587], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-1696, 3108], {floor: 9}).addTo(SilverOres);
L.marker([-2479, 2613], {floor: 8}).addTo(VanadiniteOres);
L.marker([-2124, 1951], {floor: 9}).addTo(SilverOres);
L.marker([-2490, 2537], {floor: 12}).addTo(VanadiniteOres);
L.marker([-1989, 2418], {floor: 0}).addTo(BorniteOres);
L.marker([-2154, 2411], {floor: 9}).addTo(CopperOres);
L.marker([-1060, 2431], {floor: 10}).addTo(ChalcopyriteOres);
L.marker([-2044, 2331], {floor: 8}).addTo(CopperOres);
L.marker([-2898, 2822], {floor: 7}).addTo(CopperOres);
L.marker([-2180, 2320], {floor: 8}).addTo(CopperOres);
L.marker([-719, 2464], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-1519, 2049], {floor: 12}).addTo(CopperOres);
L.marker([-1696, 2111], {floor: 7}).addTo(SilverOres);
L.marker([-1841, 3399], {floor: 6}).addTo(VanadiniteOres);
L.marker([-4130, 2785], {floor: 4}).addTo(BorniteOres);
L.marker([-1531, 2187], {floor: 9}).addTo(PhenakiteOres);
L.marker([-1546, 2645], {floor: 8}).addTo(SilverOres);
L.marker([-2409, 2644], {floor: 14}).addTo(PhenakiteOres);
L.marker([-2200, 1834], {floor: 9}).addTo(PhenakiteOres);
L.marker([-4213, 2748], {floor: 7}).addTo(GoldOres);
L.marker([-1745, 2546], {floor: 9}).addTo(CopperOres);
L.marker([-2782, 2961], {floor: 7}).addTo(PhenakiteOres);
L.marker([-900, 2465], {floor: 12}).addTo(VanadiniteOres);
L.marker([-2838, 2907], {floor: 6}).addTo(CopperOres);
L.marker([-1690, 3101], {floor: 10}).addTo(PhenakiteOres);
L.marker([-701, 2558], {floor: 3}).addTo(BorniteOres);
L.marker([-2856, 2881], {floor: 7}).addTo(SilverOres);
L.marker([-2023, 2897], {floor: 11}).addTo(VanadiniteOres);
L.marker([-2677, 2524], {floor: 4}).addTo(SilverOres);
L.marker([-1606, 2705], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2603, 2806], {floor: 7}).addTo(SilverOres);
L.marker([-2572, 3154], {floor: 7}).addTo(CopperOres);
L.marker([-2535, 2937], {floor: 7}).addTo(SilverOres);
L.marker([-2077, 2327], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2119, 2423], {floor: 14}).addTo(WolframiteOres);
L.marker([-1880, 2016], {floor: 12}).addTo(SilverOres);
L.marker([-1670, 2154], {floor: 7}).addTo(MeteoriteOres);
L.marker([-1286, 1967], {floor: 8}).addTo(CopperOres);
L.marker([-2607, 2793], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2110, 2353], {floor: 10}).addTo(SilverOres);
L.marker([-1100, 2607], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1028, 2394], {floor: 13}).addTo(ChalcopyriteOres);
L.marker([-2410, 2644], {floor: 14}).addTo(PhenakiteOres);
L.marker([-1561, 2334], {floor: 12}).addTo(CarnotiteOres);
L.marker([-1207, 2545], {floor: 13}).addTo(ChalcopyriteOres);
L.marker([-2535, 2545], {floor: 7}).addTo(VanadiniteOres);
L.marker([-1443, 2756], {floor: 2}).addTo(MeteoriteOres);
L.marker([-2016, 2043], {floor: 10}).addTo(CopperOres);
L.marker([-2449, 2622], {floor: 14}).addTo(CopperOres);
L.marker([-1813, 2361], {floor: 8}).addTo(PhenakiteOres);
L.marker([-1999, 2363], {floor: 10}).addTo(SilverOres);
L.marker([-2144, 2284], {floor: 11}).addTo(CopperOres);
L.marker([-2524, 2681], {floor: 6}).addTo(MeteoriteOres);
L.marker([-2543, 2839], {floor: 7}).addTo(VanadiniteOres);
L.marker([-2296, 2329], {floor: 9}).addTo(GoldOres);
L.marker([-1774, 2565], {floor: 13}).addTo(SilverOres);
L.marker([-1488, 2090], {floor: 9}).addTo(SilverOres);
L.marker([-2935, 2689], {floor: 9}).addTo(CopperOres);
L.marker([-1277, 2573], {floor: 12}).addTo(BorniteOres);
L.marker([-1140, 2037], {floor: 8}).addTo(SilverOres);
L.marker([-969, 2285], {floor: 2}).addTo(BorniteOres);
L.marker([-1653, 2628], {floor: 14}).addTo(SilverOres);
L.marker([-1852, 2296], {floor: 7}).addTo(CopperOres);
L.marker([-2417, 2667], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-1014, 2397], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-2604, 2742], {floor: 7}).addTo(SilverOres);
L.marker([-2524, 2542], {floor: 15}).addTo(CarnotiteOres);
L.marker([-1134, 2545], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1155, 2254], {floor: 8}).addTo(CopperOres);
L.marker([-1931, 2800], {floor: 7}).addTo(SilverOres);
L.marker([-2217, 1812], {floor: 7}).addTo(PhenakiteOres);
L.marker([-972, 2314], {floor: 12}).addTo(ChalcopyriteOres);
L.marker([-704, 2423], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-1856, 2264], {floor: 13}).addTo(SilverOres);
L.marker([-2308, 3159], {floor: 13}).addTo(GoldOres);
L.marker([-1121, 2647], {floor: 11}).addTo(ChalcopyriteOres);
L.marker([-2629, 2733], {floor: 7}).addTo(SilverOres);
L.marker([-1635, 2588], {floor: 15}).addTo(SilverOres);
L.marker([-2084, 2172], {floor: 7}).addTo(SilverOres);
L.marker([-2084, 2416], {floor: 14}).addTo(VanadiniteOres);
L.marker([-1985, 2399], {floor: 1}).addTo(MeteoriteOres);
L.marker([-1941, 2802], {floor: 11}).addTo(SilverOres);
L.marker([-2458, 2825], {floor: 13}).addTo(CopperOres);
L.marker([-2103, 2422], {floor: 14}).addTo(VanadiniteOres);
L.marker([-2297, 1984], {floor: 10}).addTo(SilverOres);
L.marker([-1665, 2236], {floor: 12}).addTo(PhenakiteOres);
L.marker([-2425, 2857], {floor: 8}).addTo(WolframiteOres);
L.marker([-1932, 2240], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2346, 2601], {floor: 8}).addTo(SilverOres);
L.marker([-2843, 2943], {floor: 2}).addTo(PhenakiteOres);
L.marker([-1226, 2557], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-964, 2339], {floor: 9}).addTo(VanadiniteOres);
L.marker([-2216, 1933], {floor: 10}).addTo(PhenakiteOres);
L.marker([-1002, 2439], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2184, 2529], {floor: 11}).addTo(SilverOres);
L.marker([-1617, 2367], {floor: 8}).addTo(CopperOres);
L.marker([-1147, 2561], {floor: 9}).addTo(PhenakiteOres);
L.marker([-1677, 2162], {floor: 7}).addTo(SilverOres);
L.marker([-2694, 2496], {floor: 7}).addTo(VanadiniteOres);
L.marker([-2793, 3514], {floor: 8}).addTo(BorniteOres);
L.marker([-2509, 2946], {floor: 11}).addTo(CopperOres);
L.marker([-1725, 2633], {floor: 12}).addTo(PhenakiteOres);
L.marker([-2319, 2593], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-2716, 3355], {floor: 7}).addTo(CopperOres);
L.marker([-2511, 2706], {floor: 7}).addTo(VanadiniteOres);
L.marker([-1724, 3064], {floor: 11}).addTo(GoldOres);
L.marker([-4201, 2771], {floor: 6}).addTo(GoldOres);
L.marker([-774, 2394], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-1970, 2275], {floor: 11}).addTo(SilverOres);
L.marker([-2138, 2418], {floor: 8}).addTo(PhenakiteOres);
L.marker([-4203, 2702], {floor: 8}).addTo(WolframiteOres);
L.marker([-2524, 2682], {floor: 5}).addTo(MeteoriteOres);
L.marker([-2861, 2927], {floor: 7}).addTo(CopperOres);
L.marker([-2776, 2961], {floor: 5}).addTo(CopperOres);
L.marker([-1016, 2298], {floor: 9}).addTo(GoldOres);
L.marker([-2343, 2590], {floor: 8}).addTo(CopperOres);
L.marker([-832, 2358], {floor: 12}).addTo(VanadiniteOres);
L.marker([-2194, 2579], {floor: 10}).addTo(CopperOres);
L.marker([-2148, 2311], {floor: 13}).addTo(WolframiteOres);
L.marker([-2308, 3100], {floor: 13}).addTo(GoldOres);
L.marker([-1676, 2159], {floor: 0}).addTo(MeteoriteOres);
L.marker([-2356, 2032], {floor: 7}).addTo(SilverOres);
L.marker([-1089, 2316], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-2004, 2168], {floor: 10}).addTo(CopperOres);
L.marker([-2322, 2610], {floor: 8}).addTo(ChalcopyriteOres);
L.marker([-1533, 2468], {floor: 5}).addTo(BorniteOres);
L.marker([-1218, 2557], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-1956, 2280], {floor: 11}).addTo(SilverOres);
L.marker([-1764, 2430], {floor: 8}).addTo(SilverOres);
L.marker([-2768, 2970], {floor: 6}).addTo(BorniteOres);
L.marker([-1230, 2577], {floor: 11}).addTo(BorniteOres);
L.marker([-1891, 2315], {floor: 8}).addTo(SilverOres);
L.marker([-3952, 2821], {floor: 8}).addTo(GoldOres);
L.marker([-1715, 2575], {floor: 8}).addTo(CopperOres);
L.marker([-951, 2298], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-2874, 2776], {floor: 11}).addTo(PhenakiteOres);
L.marker([-2675, 3016], {floor: 10}).addTo(GoldOres);
L.marker([-4136, 2766], {floor: 8}).addTo(WolframiteOres);
L.marker([-2231, 2735], {floor: 8}).addTo(CopperOres);
L.marker([-1673, 3283], {floor: 8}).addTo(SilverOres);
L.marker([-1599, 2857], {floor: 9}).addTo(CopperOres);
L.marker([-2698, 3305], {floor: 8}).addTo(SilverOres);
L.marker([-1109, 2548], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1078, 2427], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2096, 2303], {floor: 12}).addTo(CopperOres);
L.marker([-1895, 2087], {floor: 11}).addTo(SilverOres);
L.marker([-2525, 2604], {floor: 5}).addTo(ChalcopyriteOres);
L.marker([-2754, 2652], {floor: 7}).addTo(CopperOres);
L.marker([-1890, 2296], {floor: 13}).addTo(SilverOres);
L.marker([-2311, 2369], {floor: 7}).addTo(PhenakiteOres);
L.marker([-934, 2307], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-1923, 2871], {floor: 10}).addTo(CopperOres);
L.marker([-1118, 2519], {floor: 10}).addTo(CopperOres);
L.marker([-1565, 2416], {floor: 7}).addTo(CopperOres);
L.marker([-1619, 2842], {floor: 11}).addTo(CopperOres);
L.marker([-2297, 2227], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2694, 2958], {floor: 1}).addTo(CopperOres);
L.marker([-2528, 2843], {floor: 0}).addTo(VanadiniteOres);
L.marker([-1901, 2600], {floor: 9}).addTo(SilverOres);
L.marker([-4157, 2677], {floor: 4}).addTo(BorniteOres);
L.marker([-2232, 2756], {floor: 7}).addTo(SilverOres);
L.marker([-2577, 1417], {floor: 7}).addTo(ChalcopyriteOres);
L.marker([-1443, 2758], {floor: 0}).addTo(MeteoriteOres);
L.marker([-2211, 1869], {floor: 9}).addTo(CopperOres);
L.marker([-1875, 2123], {floor: 8}).addTo(CopperOres);
L.marker([-2077, 1918], {floor: 8}).addTo(SilverOres);
L.marker([-2136, 2271], {floor: 12}).addTo(PhenakiteOres);
L.marker([-2058, 2740], {floor: 9}).addTo(PhenakiteOres);
L.marker([-2436, 2905], {floor: 13}).addTo(PhenakiteOres);
L.marker([-2210, 2468], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1621, 2677], {floor: 7}).addTo(CopperOres);
L.marker([-2488, 2648], {floor: 7}).addTo(PhenakiteOres);
L.marker([-1583, 3256], {floor: 15}).addTo(HeliodorOres);
L.marker([-1877, 2439], {floor: 11}).addTo(CopperOres);
L.marker([-2736, 2548], {floor: 9}).addTo(CopperOres);
L.marker([-750, 2452], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2515, 2538], {floor: 15}).addTo(WolframiteOres);
L.marker([-1974, 2287], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2452, 2640], {floor: 14}).addTo(CopperOres);
L.marker([-2684, 2768], {floor: 4}).addTo(PhenakiteOres);
L.marker([-1031, 2717], {floor: 12}).addTo(VanadiniteOres);
L.marker([-2298, 1881], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2177, 2691], {floor: 16}).addTo(SilverOres);
L.marker([-930, 2301], {floor: 9}).addTo(ChalcopyriteOres);
L.marker([-4913, 4528], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2025, 1963], {floor: 19}).addTo(GoldOres);
L.marker([-2173, 2584], {floor: 7}).addTo(SilverOres);
L.marker([-3965, 2621], {floor: 11}).addTo(WolframiteOres);
L.marker([-1925, 2071], {floor: 9}).addTo(CopperOres);
L.marker([-3923, 2766], {floor: 14}).addTo(CarnotiteOres);
L.marker([-2297, 1877], {floor: 10}).addTo(CopperOres);
L.marker([-2045, 2200], {floor: 7}).addTo(CopperOres);
L.marker([-2933, 2842], {floor: 7}).addTo(SilverOres);
L.marker([-2772, 2535], {floor: 7}).addTo(CopperOres);
L.marker([-4133, 2820], {floor: 9}).addTo(GoldOres);
L.marker([-2318, 2361], {floor: 1}).addTo(BorniteOres);
L.marker([-1180, 2491], {floor: 10}).addTo(ChalcopyriteOres);
L.marker([-821, 2466], {floor: 9}).addTo(PhenakiteOres);
L.marker([-1705, 2695], {floor: 8}).addTo(CopperOres);
L.marker([-1658, 2635], {floor: 7}).addTo(CopperOres);
L.marker([-1617, 2385], {floor: 8}).addTo(PhenakiteOres);
L.marker([-2025, 2323], {floor: 13}).addTo(CopperOres);
L.marker([-1227, 2516], {floor: 10}).addTo(PhenakiteOres);
L.marker([-2145, 3489], {floor: 6}).addTo(PhenakiteOres);
L.marker([-676, 2536], {floor: 7}).addTo(PhenakiteOres);
L.marker([-2795, 2874], {floor: 8}).addTo(CarnotiteOres);
L.marker([-1750, 3104], {floor: 7}).addTo(SilverOres);
L.marker([-2339, 2028], {floor: 13}).addTo(SilverOres);
L.marker([-1969, 2313], {floor: 11}).addTo(SilverOres);
L.marker([-1987, 2400], {floor: 7}).addTo(MeteoriteOres);
L.marker([-2107, 2184], {floor: 7}).addTo(SilverOres);
L.marker([-671, 2597], {floor: 3}).addTo(BorniteOres);
L.marker([-2267, 1845], {floor: 8}).addTo(CopperOres);
L.marker([-2728, 2927], {floor: 4}).addTo(CopperOres);
L.marker([-1113, 2415], {floor: 9}).addTo(BorniteOres);
L.marker([-2445, 2650], {floor: 14}).addTo(SilverOres);
L.marker([-1086, 1995], {floor: 8}).addTo(CopperOres);
L.marker([-755, 2434], {floor: 14}).addTo(ChalcopyriteOres);
L.marker([-2234, 1924], {floor: 6}).addTo(CopperOres);
L.marker([-2791, 3533], {floor: 5}).addTo(WolframiteOres);
L.marker([-1899, 2031], {floor: 13}).addTo(PhenakiteOres);
L.marker([-2071, 2310], {floor: 10}).addTo(CopperOres);
L.marker([-1923, 2033], {floor: 8}).addTo(CopperOres);
L.marker([-1931, 2408], {floor: 11}).addTo(CopperOres);




// create tiles layer for each floor from 0 to 30
var floors_base_layers = [];
for (var i = 0; 31 > i; i++) {
  floors_base_layers.push(
    L.tileLayer('map/'+i.toString()+'/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 4,
      noWrap: true,
      tileSize:768,
      floor: i
    })
  );
}

// create a fullscreen button and add it to the map
L.control
	.fullscreen({
		position: 'topleft',
		title: 'Press for fullscreen',
		titleCancel: 'Exit fullscreen mode',
		content: null, // change the content of the button, can be HTML, default null
		forceSeparateButton: true, // force separate button to detach from zoom buttons, default false
		forcePseudoFullscreen: false, // force use of pseudo full screen even if full screen API is available, default false
		fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
	})
	.addTo(map);

// Mouse control for x,y,z read
L.Control.DisplayMousePosition = L.Control.extend({
  options: {
    position: 'bottomleft',
    separator: '   ',
    emptyString: 'Move your mouse',
    lngFirst: false,
    numDigits: 5,
    lngFormatter: parseInt,
    latFormatter: parseInt,
    lngPrefix: "<b>X: </b>",
    latPrefix: "<b>Y: </b>",
    floorPrefix: "<b>Z: </b>",
    zoomPrefix: "<b>Zoom: </b>"
  },

  onAdd: function (map) {
    this._container = L.DomUtil.create('div', 'leaflet-control-mouseposition');
    L.DomEvent.disableClickPropagation(this._container);
    map.on('mousemove', this._onMouseMove, this);
    this._container.innerHTML=this.options.emptyString;
    return this._container;
  },

  onRemove: function (map) {
    map.off('mousemove', this._onMouseMove)
  },

  _onMouseMove: function (e) {
    var lng = this.options.lngFormatter ? this.options.lngFormatter(e.latlng.lng) : L.Util.formatNum(e.latlng.lng, this.options.numDigits);
    var lat = this.options.latFormatter ? this.options.latFormatter(e.latlng.lat) : L.Util.formatNum(e.latlng.lat, this.options.numDigits);
    this._container.innerHTML = this.options.lngPrefix + lng + this.options.separator + this.options.latPrefix + lat + this.options.separator + this.options.floorPrefix + floorSlider.noUiSlider.get() + this.options.separator + this.options.zoomPrefix + map.getZoom();
  }

});

L.Map.mergeOptions({
    positionControl: false
});

L.Map.addInitHook(function () {
    if (this.options.positionControl) {
        this.positionControl = new L.Control.DisplayMousePosition();
        this.addControl(this.positionControl);
    }
});

L.control.mousePosition = function (options) {
    return new L.Control.DisplayMousePosition(options);
};

L.Control.FloorSlider = L.Control.extend({
  options: {
    position: 'topleft',
  },

  onAdd: function(map) {
    this._container = L.DomUtil.create('div', 'slider-pips' );

    return this._container;
  },

  onRemove: function(map) {
    // Nothing to do here
  }
});

L.control.FloorSlider = function(options) {
  return new L.Control.FloorSlider(options);
}

L.control.mousePosition().addTo(map);
L.control.FloorSlider().addTo(map);

//creates slider at specificed div
var floorSlider = document.getElementsByClassName("slider-pips")[0];

noUiSlider.create(floorSlider, {
    start: 7,
    range: {
        min: 0,
        max: 30
    },
    orientation: 'vertical',
    direction: 'ltr',
    step: 1,
    tooltips: true,
    format: {
        to: value => Math.round(value),
        from: value => Number(value)
    },
    pips: {
        mode: 'steps',
        density: 3,
    }
});

//slider removes all base layers and adds selected one
floorSlider.noUiSlider.on('update', function(values,handle,unencoded){
  for (var i = 0; i < 31; i++) {
    map.removeLayer(floors_base_layers[i])
  }
  floors_base_layers[values[0]].addTo(map);
  // circuis comes to town
  obj = document.getElementsByClassName("leaflet-control-layers-selector");
  for (var i = 0; Object.entries(obj).length > i; i++) {
    Object.entries(obj)[i][1].click()
    Object.entries(obj)[i][1].click()
  }

});

function setMapView(params){
  if (params.x && params.y && params.z && params.zoom) {
      floorSlider.noUiSlider.set(params.z)
      map.setView([params.y, params.x], params.zoom)
  }
  else {
    map.setView([-1900, 2450], 0);
  }
}

function _hoverTile(map) {
    map.on("mouseout", function () {
      this.hoverTile.setBounds([
        [0, 0],
        [0, 0]
      ])
    });
    map.on("mousemove", function (e) {
      var n = map.project(e.latlng, 0),
        o = Math.floor(n.x),
        s = Math.floor(n.y),
        r = [map.unproject([o, s], 0), map.unproject([o + 1, s + 1], 0)];
      this.hoverTile ? this.hoverTile.setBounds(r) : this.hoverTile = L.rectangle(r, {
        color: "#009eff", // FFD700 - gold
        weight: 1,
        clickable: !1,
        pointerEvents: "none"
      }).addTo(map);
    })
  }

var rectangle = {}
if (url_coords.x && url_coords.y && url_coords.z && url_coords.zoom) {
    drawRectangle(url_coords);
}

function drawRectangle(pos){
  map.removeLayer(rectangle);
  rectangle = L.rectangle([[parseInt(pos.y), parseInt(pos.x)], [parseInt(pos.y) - 1, parseInt(pos.x) + 1]], {
    color: "#FFD700",
    weight: 1,
    clickable: !1,
    pointerEvents: "none",
    floor: floorSlider.noUiSlider.get()
  }).addTo(map);
}

map.on("click", function (e) {
  var n = map.project(e.latlng, 0),
    o = Math.floor(n.x),
    s = Math.floor(n.y)
    drawRectangle({'x':map.unproject([o, s], 0).lng , 'y':map.unproject([o, s], 0).lat});
});

function jumpToRectangle(){
  var coords = {};
  coords.x = rectangle._latlngs[0][1].lng;
  coords.y = rectangle._latlngs[0][1].lat;
  coords.z = rectangle.options.floor;
  coords.zoom = 4;
  setMapView(coords);
}

map.on('overlayadd', function (e) {
  e.layer.eachLayer(function (layer) {
    if (layer.options.floor != floorSlider.noUiSlider.get()) {
      layer.remove()
    }
    else if (layer._icon !== 'undefined' || layer._icon !== null) {
      for (var i = 0; i <= overlayLayers.length - 1; i++) {
        if (e.layer == overlayLayers[i].layerName) {
          layer._icon.src = "images/markers/" + overlayLayers[i].icon;
        }
      }
    }
  });
});

setMapView(url_coords);
_hoverTile(map);