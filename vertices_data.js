const options_impediments = {
  isStatic: true,
  friction: 1,
  restitution: 0.5,
  density: 1,
  inertia: Infinity,  // prevents rotation
}

const options_particles = {
  isStatic: false,
  friction: 1,
  restitution: 0.5,  // A Number that defines the restitution (elasticity) of the body.
  density: 1,
  // inertia: Infinity,  // prevents rotation
}

const impediments_data = [
  {
    label: "franziskaner_impediment_1",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 240),
      y: (0 - 2070),
    },
    options: options_impediments,
    vertices: [
      { x: 279, y: 2160 },
      { x: 333, y: 2118 },
      { x: 270, y: 1983 },
      { x: 141, y: 2043 },
      { x: 135, y: 2079 },
      { x: 159, y: 2115 },
      { x: 201, y: 2118 },
      { x: 252, y: 2157 },
    ]
  },
  {
    label: "franziskaner_impediment_2",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 36),
      y: (0 - 1866),
    },
    options: options_impediments,
    vertices: [
      { x: 0, y: 1932 },
      { x: 69, y: 1911 },
      { x: 87, y: 1839 },
      { x: 0, y: 1827 },
    ]
  },
  {
    label: "franziskaner_impediment_3",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 498),
      y: (0 - 1956),
    },
    options: options_impediments,
    vertices: [
      { x: 459, y: 2055 },
      { x: 441, y: 2046 },
      { x: 480, y: 2046 },
      { x: 597, y: 1947 },
      { x: 549, y: 1884 },
      { x: 492, y: 1896 },
      { x: 405, y: 1965 },
    ]
  },
  {
    label: "franziskaner_impediment_4",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 969),
      y: (0 - 2066),
    },
    options: options_impediments,
    vertices: [
      { x: 1041, y: 2160 },
      { x: 1053, y: 1992 },
      { x: 996, y: 1986 },
      { x: 891, y: 2013 },
      { x: 888, y: 2082 },
      { x: 957, y: 2100 },
      { x: 960, y: 2157 },
    ]
  },
  {
    label: "franziskaner_impediment_5",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1293),
      y: (0 - 2097),
    },
    options: options_impediments,
    vertices: [
      { x: 1239, y: 2136 },
      { x: 1329, y: 2187 },
      { x: 1350, y: 2052 },
      { x: 1311, y: 2031 },
      { x: 1287, y: 2061 },
      { x: 1260, y: 2058 },
    ]
  },
  {
    label: "franziskaner_impediment_6",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1581),
      y: (0 - 2043),
    },
    options: options_impediments,
    vertices: [
      { x: 1584, y: 2103 },
      { x: 1665, y: 2013 },
      { x: 1572, y: 1986 },
      { x: 1515, y: 2052 },
    ]
  },
  {
    label: "franziskaner_impediment_7",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1971),
      y: (0 - 2094),
    },
    options: options_impediments,
    vertices: [
      { x: 2049, y: 2157 },
      { x: 2034, y: 2091 },
      { x: 1941, y: 2055 },
      { x: 1899, y: 2118 },
      { x: 1938, y: 2157 },
      { x: 1983, y: 2190 },
    ]
  },
  {
    label: "franziskaner_impediment_8",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2265),
      y: (0 - 1935),
    },
    options: options_impediments,
    vertices: [
      { x: 2160, y: 1983 },
      { x: 2187, y: 1875 },
      { x: 2337, y: 1881 },
      { x: 2364, y: 1914 },
      { x: 2364, y: 1977 },
      { x: 2307, y: 2056 },
      { x: 2226, y: 2004 },
    ]
  },
  {
    label: "franziskaner_impediment_9",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2526),
      y: (0 - 1959),
    },
    options: options_impediments,
    vertices: [
      { x: 2487, y: 2052 },
      { x: 2601, y: 2001 },
      { x: 2571, y: 1881 },
      { x: 2469, y: 1923 },
      { x: 2451, y: 1986 },
      { x: 2481, y: 2022 },
    ]
  },
  {
    label: "franziskaner_impediment_10",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2940),
      y: (0 - 2123),
    },
    options: options_impediments,
    vertices: [
      { x: 2847, y: 2160 },
      { x: 2910, y: 2073 },
      { x: 2967, y: 2058 },
      { x: 3009, y: 2136 },
      { x: 3045, y: 2160 },
      { x: 2934, y: 2190 },
    ]
  },
  {
    label: "franziskaner_impediment_11",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3198),
      y: (0 - 2028),
    },
    options: options_impediments,
    vertices: [
      { x: 3237, y: 2130 },
      { x: 3111, y: 2025 },
      { x: 3108, y: 1980 },
      { x: 3201, y: 1962 },
      { x: 3267, y: 1986 },
      { x: 3297, y: 2118 },
    ]
  },
  {
    label: "franziskaner_impediment_12",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3747),
      y: (0 - 2097),
    },
    options: options_impediments,
    vertices: [
      { x: 3783, y: 2160 },
      { x: 3789, y: 2106 },
      { x: 3747, y: 2034 },
      { x: 3702, y: 2043 },
      { x: 3696, y: 2130 },
      { x: 3726, y: 2157 },
    ]
  },
  {
    label: "franziskaner_impediment_13",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3483),
      y: (0 - 1923),
    },
    options: options_impediments,
    vertices: [
      { x: 3486, y: 2043 },
      { x: 3570, y: 1953 },
      { x: 3570, y: 1869 },
      { x: 3489, y: 1848 },
      { x: 3393, y: 1932 },
    ]
  },
  {
    label: "franziskaner_impediment_14",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2799),
      y: (0 - 1894),
    },
    options: options_impediments,
    vertices: [
      { x: 2805, y: 1998 },
      { x: 2871, y: 1965 },
      { x: 2892, y: 1869 },
      { x: 2844, y: 1854 },
      { x: 2829, y: 1791 },
      { x: 2703, y: 1881 },
      { x: 2727, y: 1926 },
      { x: 2718, y: 1953 },
    ]
  },
  {
    label: "franziskaner_impediment_15",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3803),
      y: (0 - 1842),
    },
    options: options_impediments,
    vertices: [
      { x: 3840, y: 2034 },
      { x: 3807, y: 1935 },
      { x: 3756, y: 1896 },
      { x: 3756, y: 1764 },
      { x: 3840, y: 1758 },
    ]
  },
  {
    label: "franziskaner_impediment_16",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1260),
      y: (0 - 1827),
    },
    options: options_impediments,
    vertices: [
      { x: 1326, y: 1926 },
      { x: 1362, y: 1890 },
      { x: 1353, y: 1806 },
      { x: 1230, y: 1758 },
      { x: 1155, y: 1812 },
      { x: 1182, y: 1857 },
      { x: 1254, y: 1863 },
      { x: 1284, y: 1911 },

    ]
  },
  {
    label: "franziskaner_impediment_17",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3627),
      y: (0 - 1614),
    },
    options: options_impediments,
    vertices: [
      { x: 3570, y: 1722 },
      { x: 3711, y: 1596 },
      { x: 3687, y: 1557 },
      { x: 3606, y: 1533 },
      { x: 3546, y: 1590 },
      { x: 3582, y: 1644 },
      { x: 3540, y: 1704 },

    ]
  },
  {
    label: "franziskaner_impediment_18",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3690),
      y: (0 - 1254),
    },
    options: options_impediments,
    vertices: [
      { x: 3711, y: 1314 },
      { x: 3768, y: 1344 },
      { x: 3792, y: 1317 },
      { x: 3696, y: 1140 },
      { x: 3612, y: 1284 },
      { x: 3645, y: 1338 },
      { x: 3693, y: 1314 },
    ]
  },
  {
    label: "franziskaner_impediment_19",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3621),
      y: (0 - 765),
    },
    options: options_impediments,
    vertices: [
      { x: 3642, y: 870 },
      { x: 3720, y: 777 },
      { x: 3624, y: 663 },
      { x: 3522, y: 750 },
    ]
  },
  {
    label: "franziskaner_impediment_20",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3681),
      y: (0 - 513),
    },
    options: options_impediments,
    vertices: [
      { x: 3669, y: 570 },
      { x: 3771, y: 513 },
      { x: 3744, y: 480 },
      { x: 3681, y: 477 },
      { x: 3672, y: 459 },
      { x: 3621, y: 495 },
    ]
  },
  {
    label: "franziskaner_impediment_21",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3720),
      y: (0 - 231),
    },
    options: options_impediments,
    vertices: [
      { x: 3711, y: 282 },
      { x: 3759, y: 189 },
      { x: 3714, y: 195 },
      { x: 3675, y: 237 },
    ]
  },
  {
    label: "franziskaner_impediment_22",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3681),
      y: (0 - 87),
    },
    options: options_impediments,
    vertices: [
      { x: 3693, y: 168 },
      { x: 3777, y: 93 },
      { x: 3729, y: 30 },
      { x: 3678, y: 51 },
      { x: 3633, y: 0 },
      { x: 3576, y: 33 },
    ]
  },
  {
    label: "franziskaner_impediment_23",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3552),
      y: (0 - 342),
    },
    options: options_impediments,
    vertices: [
      { x: 3573, y: 417 },
      { x: 3639, y: 399 },
      { x: 3624, y: 297 },
      { x: 3471, y: 285 },
      { x: 3462, y: 354 },
    ]
  },
  {
    label: "franziskaner_impediment_24",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1812),
      y: (0 - 1814),
    },
    options: options_impediments,
    vertices: [
      { x: 1752, y: 1888 },
      { x: 1754, y: 1892 },
      { x: 1896, y: 1848 },
      { x: 1910, y: 1768 },
      { x: 1750, y: 1750 },
      { x: 1702, y: 1844 },
    ]
  },
  {
    label: "franziskaner_impediment_25",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1574),
      y: (0 - 1756),
    },
    options: options_impediments,
    vertices: [
      { x: 1596, y: 1848 },
      { x: 1668, y: 1734 },
      { x: 1560, y: 1676 },
      { x: 1476, y: 1738 },
    ]
  },
  {
    label: "franziskaner_impediment_26",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 244),
      y: (0 - 1742),
    },
    options: options_impediments,
    vertices: [
      { x: 236, y: 1860 },
      { x: 178, y: 1792 },
      { x: 110, y: 1714 },
      { x: 128, y: 1650 },
      { x: 228, y: 1614 },
      { x: 272, y: 1636 },
      { x: 304, y: 1690 },
      { x: 394, y: 1812 },
      { x: 312, y: 1848 },
    ]
  },
  {
    label: "franziskaner_impediment_27",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 260),
      y: (0 - 1422),
    },
    options: options_impediments,
    vertices: [
      { x: 332, y: 1546 },
      { x: 126, y: 1464 },
      { x: 178, y: 1310 },
      { x: 268, y: 1282 },
      { x: 328, y: 1306 },
      { x: 368, y: 1408 },
      { x: 354, y: 1526 },
    ]
  },
  {
    label: "franziskaner_impediment_28",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 486),
      y: (0 - 1504),
    },
    options: options_impediments,
    vertices: [
      { x: 450, y: 1558 },
      { x: 440, y: 1458 },
      { x: 484, y: 1438 },
      { x: 512, y: 1468 },
      { x: 570, y: 1512 },
      { x: 566, y: 1560 },
      { x: 508, y: 1534 },
    ]
  },
  {
    label: "franziskaner_impediment_29",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 664),
      y: (0 - 1710),
    },
    options: options_impediments,
    vertices: [
      { x: 558, y: 1696 },
      { x: 614, y: 1816 },
      { x: 646, y: 1816 },
      { x: 790, y: 1726 },
      { x: 762, y: 1666 },
      { x: 708, y: 1604 },
      { x: 580, y: 1668 },
    ]
  },
  {
    label: "franziskaner_impediment_30",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 644),
      y: (0 - 1302),
    },
    options: options_impediments,
    vertices: [
      { x: 616, y: 1470 },
      { x: 602, y: 1362 },
      { x: 544, y: 1308 },
      { x: 590, y: 1160 },
      { x: 664, y: 1178 },
      { x: 728, y: 1274 },
      { x: 696, y: 1484 },
    ]
  },
  {
    label: "franziskaner_impediment_31",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 318),
      y: (0 - 806),
    },
    options: options_impediments,
    vertices: [
      { x: 272, y: 886 },
      { x: 306, y: 872 },
      { x: 376, y: 872 },
      { x: 398, y: 828 },
      { x: 348, y: 732 },
      { x: 236, y: 852 },
    ]
  },
  {
    label: "franziskaner_impediment_32",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 452),
      y: (0 - 1010),
    },
    options: options_impediments,
    vertices: [
      { x: 470, y: 1096 },
      { x: 508, y: 1064 },
      { x: 524, y: 970 },
      { x: 442, y: 918 },
      { x: 352, y: 1034 },
      { x: 364, y: 1056 },
    ]
  },
  {
    label: "franziskaner_impediment_33",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 28),
      y: (0 - 1064),
    },
    options: options_impediments,
    vertices: [
      { x: 0, y: 1164 },
      { x: 4, y: 988 },
      { x: 82, y: 1010 },
      { x: 80, y: 1068 },
    ]
  },
  {
    label: "franziskaner_impediment_34",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 136),
      y: (0 - 914),
    },
    options: options_impediments,
    vertices: [
      { x: 172, y: 992 },
      { x: 106, y: 946 },
      { x: 54, y: 926 },
      { x: 54, y: 878 },
      { x: 118, y: 830 },
      { x: 162, y: 894 },
      { x: 210, y: 970 },
    ]
  },
  {
    label: "franziskaner_impediment_35",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 74),
      y: (0 - 628),
    },
    options: options_impediments,
    vertices: [
      { x: 64, y: 756 },
      { x: 186, y: 532 },
      { x: 106, y: 496 },
      { x: 68, y: 580 },
      { x: 6, y: 570 },
      { x: 4, y: 708 },
    ]
  },
  {
    label: "franziskaner_impediment_36",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 416),
      y: (0 - 560),
    },
    options: options_impediments,
    vertices: [
      { x: 416, y: 668 },
      { x: 356, y: 620 },
      { x: 338, y: 494 },
      { x: 388, y: 486 },
      { x: 466, y: 502 },
      { x: 486, y: 616 },
    ]
  },
  {
    label: "franziskaner_impediment_37",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 508),
      y: (0 - 294),
    },
    options: options_impediments,
    vertices: [
      { x: 480, y: 362 },
      { x: 432, y: 262 },
      { x: 486, y: 228 },
      { x: 570, y: 246 },
      { x: 614, y: 310 },
      { x: 504, y: 362 },
    ]
  },
  {
    label: "franziskaner_impediment_38",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 692),
      y: (0 - 204),
    },
    options: options_impediments,
    vertices: [
      { x: 635, y: 244 },
      { x: 598, y: 168 },
      { x: 620, y: 132 },
      { x: 754, y: 152 },
      { x: 788, y: 226 },
      { x: 720, y: 284 },
    ]
  },
  {
    label: "franziskaner_impediment_39",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 384),
      y: (0 - 44),
    },
    options: options_impediments,
    vertices: [
      { x: 292, y: 84 },
      { x: 330, y: 6 },
      { x: 490, y: 8 },
      { x: 438, y: 96 },
      { x: 366, y: 112 },
      { x: 330, y: 112 },
    ]
  },
  {
    label: "franziskaner_impediment_40",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 116),
      y: (0 - 398),
    },
    options: options_impediments,
    vertices: [
      { x: 102, y: 458 },
      { x: 194, y: 424 },
      { x: 162, y: 366 },
      { x: 80, y: 352 },
      { x: 44, y: 378 },
    ]
  },
  {
    label: "franziskaner_impediment_41",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 92),
      y: (0 - 238),
    },
    options: options_impediments,
    vertices: [
      { x: 138, y: 330 },
      { x: 4, y: 292 },
      { x: 2, y: 176 },
      { x: 104, y: 162 },
      { x: 200, y: 196 },
      { x: 198, y: 316 },
    ]
  },
  {
    label: "franziskaner_impediment_42",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 144),
      y: (0 - 40),
    },
    options: options_impediments,
    vertices: [
      { x: 114, y: 86 },
      { x: 78, y: 44 },
      { x: 112, y: 2 },
      { x: 206, y: 2 },
      { x: 196, y: 62 },
      { x: 160, y: 90 },
    ]
  },
  {
    label: "franziskaner_impediment_43",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 726),
      y: (0 - 960),
    },
    options: options_impediments,
    vertices: [
      { x: 652, y: 988 },
      { x: 712, y: 894 },
      { x: 762, y: 890 },
      { x: 774, y: 940 },
      { x: 804, y: 964 },
      { x: 786, y: 1008 },
      { x: 750, y: 1008 },
      { x: 714, y: 1018 },
    ]
  },
  {
    label: "franziskaner_impediment_44",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 944),
      y: (0 - 1756),
    },
    options: options_impediments,
    vertices: [
      { x: 890, y: 1840 },
      { x: 900, y: 1784 },
      { x: 858, y: 1746 },
      { x: 870, y: 1708 },
      { x: 952, y: 1710 },
      { x: 998, y: 1674 },
      { x: 1038, y: 1714 },
      { x: 936, y: 1860 },
    ]
  },
  {
    label: "franziskaner_impediment_45",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 946),
      y: (0 - 1526),
    },
    options: options_impediments,
    vertices: [
      { x: 842, y: 1582 },
      { x: 960, y: 1436 },
      { x: 1028, y: 1446 },
      { x: 1000, y: 1630 },
      { x: 896, y: 1608 },
    ]
  },
  {
    label: "franziskaner_impediment_46",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 908),
      y: (0 - 1244),
    },
    options: options_impediments,
    vertices: [
      { x: 842, y: 1328 },
      { x: 826, y: 1178 },
      { x: 896, y: 1166 },
      { x: 980, y: 1184 },
      { x: 1010, y: 1296 },
      { x: 976, y: 1344 },
    ]
  },
  {
    label: "franziskaner_impediment_47",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 998),
      y: (0 - 890),
    },
    options: options_impediments,
    vertices: [
      { x: 958, y: 966 },
      { x: 904, y: 864 },
      { x: 936, y: 814 },
      { x: 1046, y: 820 },
      { x: 1084, y: 924 },
      { x: 1036, y: 988 },
    ]
  },
  {
    label: "franziskaner_impediment_48",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 776),
      y: (0 - 616),
    },
    options: options_impediments,
    vertices: [
      { x: 702, y: 668 },
      { x: 698, y: 554 },
      { x: 832, y: 562 },
      { x: 830, y: 690 },
      { x: 778, y: 708 },
    ]
  },
  {
    label: "franziskaner_impediment_49",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1016),
      y: (0 - 668),
    },
    options: options_impediments,
    vertices: [
      { x: 1008, y: 764 },
      { x: 924, y: 704 },
      { x: 954, y: 594 },
      { x: 1032, y: 580 },
      { x: 1088, y: 606 },
      { x: 1102, y: 666 },
      { x: 1080, y: 712 },
    ]
  },
  {
    label: "franziskaner_impediment_50",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 782),
      y: (0 - 384),
    },
    options: options_impediments,
    vertices: [
      { x: 788, y: 462 },
      { x: 876, y: 350 },
      { x: 806, y: 306 },
      { x: 700, y: 404 },
      { x: 722, y: 454 },
    ]
  },
  {
    label: "franziskaner_impediment_51",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1010),
      y: (0 - 304),
    },
    options: options_impediments,
    vertices: [
      { x: 976, y: 402 },
      { x: 930, y: 302 },
      { x: 1006, y: 208 },
      { x: 1074, y: 206 },
      { x: 1118, y: 284 },
      { x: 1098, y: 334 },
    ]
  },
  {
    label: "franziskaner_impediment_52",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 806),
      y: (0 - 44),
    },
    options: options_impediments,
    vertices: [
      { x: 844, y: 100 },
      { x: 754, y: 72 },
      { x: 750, y: 12 },
      { x: 840, y: 4 },
      { x: 844, y: 40 },
      { x: 872, y: 58 },
      { x: 872, y: 88 },
    ]
  },
  {
    label: "franziskaner_impediment_53",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1012),
      y: (0 - 70),
    },
    options: options_impediments,
    vertices: [
      { x: 978, y: 152 },
      { x: 938, y: 90 },
      { x: 966, y: 2 },
      { x: 1092, y: 26 },
      { x: 1072, y: 114 },
      { x: 1022, y: 138 },
    ]
  },
  {
    label: "franziskaner_impediment_54",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1234),
      y: (0 - 1548),
    },
    options: options_impediments,
    vertices: [
      { x: 1246, y: 1644 },
      { x: 1152, y: 1584 },
      { x: 1144, y: 1504 },
      { x: 1252, y: 1454 },
      { x: 1320, y: 1482 },
      { x: 1302, y: 1602 },
    ]
  },
  {
    label: "franziskaner_impediment_55",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1180),
      y: (0 - 1216),
    },
    options: options_impediments,
    vertices: [
      { x: 1176, y: 1288 },
      { x: 1238, y: 1256 },
      { x: 1224, y: 1178 },
      { x: 1166, y: 1148 },
      { x: 1094, y: 1234 },
    ]
  },
  {
    label: "franziskaner_impediment_56",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1186),
      y: (0 - 806),
    },
    options: options_impediments,
    vertices: [
      { x: 1124, y: 872 },
      { x: 1124, y: 826 },
      { x: 1152, y: 710 },
      { x: 1216, y: 716 },
      { x: 1216, y: 758 },
      { x: 1270, y: 786 },
      { x: 1270, y: 836 },
      { x: 1182, y: 878 },
    ]
  },
  {
    label: "franziskaner_impediment_57",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1376),
      y: (0 - 548),
    },
    options: options_impediments,
    vertices: [
      { x: 1286, y: 604 },
      { x: 1306, y: 480 },
      { x: 1356, y: 444 },
      { x: 1454, y: 496 },
      { x: 1472, y: 634 },
      { x: 1424, y: 660 },
      { x: 1402, y: 652 },
      { x: 1370, y: 620 },
      { x: 1310, y: 632 },
    ]
  },
  {
    label: "franziskaner_impediment_58",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1306),
      y: (0 - 142),
    },
    options: options_impediments,
    vertices: [
      { x: 1250, y: 258 },
      { x: 1220, y: 68 },
      { x: 1294, y: 20 },
      { x: 1374, y: 46 },
      { x: 1384, y: 210 },
      { x: 1354, y: 242 },
      { x: 1280, y: 260 },
    ]
  },
  {
    label: "franziskaner_impediment_59",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1436),
      y: (0 - 1302),
    },
    options: options_impediments,
    vertices: [
      { x: 1448, y: 1374 },
      { x: 1366, y: 1332 },
      { x: 1400, y: 1238 },
      { x: 1486, y: 1266 },
    ]
  },
  {
    label: "franziskaner_impediment_60",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1400),
      y: (0 - 1088),
    },
    options: options_impediments,
    vertices: [
      { x: 1358, y: 1166 },
      { x: 1296, y: 1046 },
      { x: 1386, y: 1004 },
      { x: 1466, y: 1020 },
      { x: 1502, y: 1124 },
    ]
  },
  {
    label: "franziskaner_impediment_61",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1550),
      y: (0 - 900),
    },
    options: options_impediments,
    vertices: [
      { x: 1484, y: 962 },
      { x: 1450, y: 858 },
      { x: 1518, y: 814 },
      { x: 1610, y: 800 },
      { x: 1660, y: 942 },
      { x: 1640, y: 1000 },
      { x: 1572, y: 1006 },
      { x: 1504, y: 972 },
    ]
  },
  {
    label: "franziskaner_impediment_62",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1526),
      y: (0 - 1514),
    },
    options: options_impediments,
    vertices: [
      { x: 1432, y: 1550 },
      { x: 1484, y: 1442 },
      { x: 1564, y: 1430 },
      { x: 1608, y: 1492 },
      { x: 1602, y: 1584 },
      { x: 1536, y: 1602 },
      { x: 1470, y: 1596 },
    ]
  },
  {
    label: "franziskaner_impediment_63",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1762),
      y: (0 - 1170),
    },
    options: options_impediments,
    vertices: [
      { x: 1674, y: 1228 },
      { x: 1654, y: 1188 },
      { x: 1718, y: 1088 },
      { x: 1770, y: 1098 },
      { x: 1860, y: 1154 },
      { x: 1840, y: 1234 },
      { x: 1712, y: 1266 },
    ]
  },
  {
    label: "franziskaner_impediment_64",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1728),
      y: (0 - 654),
    },
    options: options_impediments,
    vertices: [
      { x: 1662, y: 740 },
      { x: 1644, y: 602 },
      { x: 1792, y: 566 },
      { x: 1818, y: 694 },
    ]
  },
  {
    label: "franziskaner_impediment_65",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1638),
      y: (0 - 406),
    },
    options: options_impediments,
    vertices: [
      { x: 1572, y: 450 },
      { x: 1600, y: 340 },
      { x: 1700, y: 376 },
      { x: 1682, y: 464 },
      { x: 1612, y: 488 },
    ]
  },
  {
    label: "franziskaner_impediment_66",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1590),
      y: (0 - 204),
    },
    options: options_impediments,
    vertices: [
      { x: 1532, y: 278 },
      { x: 1486, y: 182 },
      { x: 1636, y: 118 },
      { x: 1702, y: 224 },
      { x: 1568, y: 288 },
    ]
  },
  {
    label: "franziskaner_impediment_67",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1550),
      y: (0 - 36),
    },
    options: options_impediments,
    vertices: [
      { x: 1512, y: 96 },
      { x: 1468, y: 50 },
      { x: 1500, y: 2 },
      { x: 1726, y: 0 },
    ]
  },
  {
    label: "franziskaner_impediment_68",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1900),
      y: (0 - 1542),
    },
    options: options_impediments,
    vertices: [
      { x: 1812, y: 1572 },
      { x: 1910, y: 1468 },
      { x: 1986, y: 1482 },
      { x: 1934, y: 1616 },
      { x: 1856, y: 1614 },
    ]
  },
  {
    label: "franziskaner_impediment_69",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2068),
      y: (0 - 1006),
    },
    options: options_impediments,
    vertices: [
      { x: 1974, y: 1070 },
      { x: 2010, y: 922 },
      { x: 2080, y: 888 },
      { x: 2164, y: 936 },
      { x: 2130, y: 1064 },
      { x: 2050, y: 1090 },
    ]
  },
  {
    label: "franziskaner_impediment_70",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2030),
      y: (0 - 1300),
    },
    options: options_impediments,
    vertices: [
      { x: 1946, y: 1252 },
      { x: 1960, y: 1360 },
      { x: 2084, y: 1364 },
      { x: 2124, y: 1328 },
      { x: 2068, y: 1246 },
    ]
  },
  {
    label: "franziskaner_impediment_71",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2154),
      y: (0 - 1620),
    },
    options: options_impediments,
    vertices: [
      { x: 2154, y: 1798 },
      { x: 2102, y: 1766 },
      { x: 2086, y: 1678 },
      { x: 2034, y: 1630 },
      { x: 2116, y: 1432 },
      { x: 2248, y: 1494 },
      { x: 2188, y: 1670 },
      { x: 2246, y: 1718 },
      { x: 2286, y: 1718 },
      { x: 2300, y: 1758 },
      { x: 2254, y: 1784 },
      { x: 2194, y: 1790 },
    ]
  },
  {
    label: "franziskaner_impediment_71",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2208),
      y: (0 - 1190),
    },
    options: options_impediments,
    vertices: [
      { x: 2166, y: 1274 },
      { x: 2122, y: 1148 },
      { x: 2242, y: 1092 },
      { x: 2298, y: 1144 },
      { x: 2302, y: 1228 },
      { x: 2236, y: 1268 },
    ]
  },
  {
    label: "franziskaner_impediment_72",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2366),
      y: (0 - 918),
    },
    options: options_impediments,
    vertices: [
      { x: 2402, y: 1086 },
      { x: 2396, y: 992 },
      { x: 2272, y: 948 },
      { x: 2226, y: 934 },
      { x: 2182, y: 852 },
      { x: 2256, y: 796 },
      { x: 2298, y: 804 },
      { x: 2342, y: 852 },
      { x: 2440, y: 820 },
      { x: 2502, y: 868 },
      { x: 2492, y: 1088 },
      { x: 2436, y: 1114 },
    ]
  },
  {
    label: "franziskaner_impediment_73",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2068),
      y: (0 - 692),
    },
    options: options_impediments,
    vertices: [
      { x: 2094, y: 804 },
      { x: 2228, y: 708 },
      { x: 2188, y: 618 },
      { x: 2104, y: 648 },
      { x: 2020, y: 650 },
      { x: 1954, y: 594 },
      { x: 1894, y: 636 },
      { x: 1964, y: 788 },
    ]
  },
  {
    label: "franziskaner_impediment_74",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2084),
      y: (0 - 326),
    },
    options: options_impediments,
    vertices: [
      { x: 2078, y: 406 },
      { x: 2154, y: 372 },
      { x: 2174, y: 284 },
      { x: 2074, y: 232 },
      { x: 1974, y: 336 },
    ]
  },
  {
    label: "franziskaner_impediment_75",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 1910),
      y: (0 - 70),
    },
    options: options_impediments,
    vertices: [
      { x: 1910, y: 156 },
      { x: 1824, y: 98 },
      { x: 1870, y: 6 },
      { x: 1962, y: 6 },
      { x: 2000, y: 46 },
    ]
  },
  {
    label: "franziskaner_impediment_76",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2162),
      y: (0 - 70),
    },
    options: options_impediments,
    vertices: [
      { x: 2170, y: 138 },
      { x: 2100, y: 106 },
      { x: 2140, y: 4 },
      { x: 2208, y: 4 },
      { x: 2222, y: 44 },
    ]
  },
  {
    label: "franziskaner_impediment_77",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2514),
      y: (0 - 1652),
    },
    options: options_impediments,
    vertices: [
      { x: 2578, y: 1742 },
      { x: 2420, y: 1694 },
      { x: 2466, y: 1562 },
      { x: 2546, y: 1572 },
      { x: 2546, y: 1624 },
      { x: 2612, y: 1648 },
    ]
  },
  {
    label: "franziskaner_impediment_78",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2336),
      y: (0 - 494),
    },
    options: options_impediments,
    vertices: [
      { x: 2282, y: 578 },
      { x: 2260, y: 528 },
      { x: 2278, y: 412 },
      { x: 2358, y: 422 },
      { x: 2408, y: 472 },
      { x: 2414, y: 528 },
      { x: 2332, y: 582 },
    ]
  },
  {
    label: "franziskaner_impediment_79",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2312),
      y: (0 - 270),
    },
    options: options_impediments,
    vertices: [
      { x: 2280, y: 356 },
      { x: 2246, y: 298 },
      { x: 2338, y: 192 },
      { x: 2384, y: 244 },
    ]
  },
  {
    label: "franziskaner_impediment_80",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2428),
      y: (0 - 82),
    },
    options: options_impediments,
    vertices: [
      { x: 2350, y: 136 },
      { x: 2370, y: 24 },
      { x: 2444, y: 24 },
      { x: 2508, y: 54 },
      { x: 2502, y: 100 },
      { x: 2402, y: 150 },
    ]
  },
  {
    label: "franziskaner_impediment_81",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2690),
      y: (0 - 148),
    },
    options: options_impediments,
    vertices: [
      { x: 2620, y: 236 },
      { x: 2646, y: 90 },
      { x: 2784, y: 112 },
      { x: 2764, y: 198 },
    ]
  },
  {
    label: "franziskaner_impediment_82",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2712),
      y: (0 - 752),
    },
    options: options_impediments,
    vertices: [
      { x: 2748, y: 846 },
      { x: 2610, y: 762 },
      { x: 2706, y: 660 },
      { x: 2770, y: 684 },
      { x: 2784, y: 800 },
    ]
  },
  {
    label: "franziskaner_impediment_83",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2548),
      y: (0 - 444),
    },
    options: options_impediments,
    vertices: [
      { x: 2494, y: 510 },
      { x: 2642, y: 476 },
      { x: 2626, y: 394 },
      { x: 2454, y: 358 },
      { x: 2464, y: 488 },
    ]
  },
  {
    label: "franziskaner_impediment_84",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2732),
      y: (0 - 1428),
    },
    options: options_impediments,
    vertices: [
      { x: 2494, y: 510 },
      { x: 2642, y: 476 },
      { x: 2626, y: 394 },
      { x: 2454, y: 358 },
      { x: 2464, y: 488 },
    ]
  },
  {
    label: "franziskaner_impediment_85",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2690),
      y: (0 - 1012),
    },
    options: options_impediments,
    vertices: [
      { x: 2756, y: 1094 },
      { x: 2594, y: 1038 },
      { x: 2612, y: 938 },
      { x: 2772, y: 988 },
    ]
  },
  {
    label: "franziskaner_impediment_86",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2760),
      y: (0 - 528),
    },
    options: options_impediments,
    vertices: [
      { x: 2740, y: 598 },
      { x: 2860, y: 554 },
      { x: 2856, y: 512 },
      { x: 2818, y: 502 },
      { x: 2788, y: 470 },
      { x: 2684, y: 528 },
    ]
  },
  {
    label: "franziskaner_impediment_87",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3258),
      y: (0 - 1716),
    },
    options: options_impediments,
    vertices: [
      { x: 3279, y: 1809 },
      { x: 3153, y: 1743 },
      { x: 3231, y: 1596 },
      { x: 3393, y: 1665 },
    ]
  },
  {
    label: "franziskaner_impediment_88",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3009),
      y: (0 - 1620),
    },
    options: options_impediments,
    vertices: [
      { x: 3003, y: 1704 },
      { x: 2919, y: 1611 },
      { x: 3027, y: 1548 },
      { x: 3072, y: 1605 },
    ]
  },
  {
    label: "franziskaner_impediment_89",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3348),
      y: (0 - 1455),
    },
    options: options_impediments,
    vertices: [
      { x: 3429, y: 1494 },
      { x: 3276, y: 1539 },
      { x: 3237, y: 1419 },
      { x: 3423, y: 1395 },
    ]
  },
  {
    label: "franziskaner_impediment_90",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3072),
      y: (0 - 1362),
    },
    options: options_impediments,
    vertices: [
      { x: 3153, y: 1431 },
      { x: 2970, y: 1398 },
      { x: 2970, y: 1299 },
      { x: 3156, y: 1308 },
    ]
  },
  {
    label: "franziskaner_impediment_91",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3024),
      y: (0 - 1110),
    },
    options: options_impediments,
    vertices: [
      { x: 3051, y: 1194 },
      { x: 2919, y: 1140 },
      { x: 2997, y: 1014 },
      { x: 3147, y: 1047 },
      { x: 3099, y: 1149 },
    ]
  },
  {
    label: "franziskaner_impediment_92",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3444),
      y: (0 - 1020),
    },
    options: options_impediments,
    vertices: [
      { x: 3444, y: 1137 },
      { x: 3324, y: 1053 },
      { x: 3324, y: 936 },
      { x: 3387, y: 906 },
      { x: 3612, y: 1077 },
    ]
  },
  {
    label: "franziskaner_impediment_93",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3162),
      y: (0 - 735),
    },
    options: options_impediments,
    vertices: [
      { x: 3159, y: 804 },
      { x: 3111, y: 786 },
      { x: 3066, y: 705 },
      { x: 3225, y: 639 },
      { x: 3258, y: 720 },
    ]
  },
  {
    label: "franziskaner_impediment_94",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3120),
      y: (0 - 471),
    },
    options: options_impediments,
    vertices: [
      { x: 3033, y: 636 },
      { x: 2973, y: 618 },
      { x: 2958, y: 579 },
      { x: 3012, y: 528 },
      { x: 3051, y: 546 },
      { x: 3042, y: 453 },
      { x: 3069, y: 309 },
      { x: 3261, y: 381 },
      { x: 3252, y: 465 },
      { x: 3183, y: 552 },
      { x: 3096, y: 597 },
      { x: 3051, y: 633 },
    ]
  },
  {
    label: "franziskaner_impediment_95",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 2928),
      y: (0 - 192),
    },
    options: options_impediments,
    vertices: [
      { x: 2823, y: 219 },
      { x: 2940, y: 114 },
      { x: 2991, y: 141 },
      { x: 2973, y: 267 },
    ]
  },
  {
    label: "franziskaner_impediment_96",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3126),
      y: (0 - 138),
    },
    options: options_impediments,
    vertices: [
      { x: 3078, y: 162 },
      { x: 3084, y: 84 },
      { x: 3192, y: 84 },
      { x: 3171, y: 210 },
    ]
  },
  {
    label: "franziskaner_impediment_97",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 3351),
      y: (0 - 150),
    },
    options: options_impediments,
    vertices: [
      { x: 3381, y: 222 },
      { x: 3435, y: 132 },
      { x: 3330, y: 81 },
      { x: 3255, y: 144 },
      { x: 3282, y: 180 },
    ]
  },
  {
    label: "franziskaner_impediment_98",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 600),
      y: (0 - 594),
    },
    options: options_impediments,
    vertices: [
      { x: 549, y: 696 },
      { x: 533, y: 618 },
      { x: 588, y: 525 },
      { x: 654, y: 555 },
    ]
  },
  {
    label: "franziskaner_impediment_99",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 72),
      y: (0 - 1344),
    },
    options: options_impediments,
    vertices: [
      { x: 96, y: 1422 },
      { x: 9, y: 1350 },
      { x: 39, y: 1251 },
      { x: 114, y: 1308 },
    ]
  },
]


const origins_data = [
  { label: "origin_1", x: 376, y: 1672, },
  { label: "origin_2", x: 102, y: 786, },
  { label: "origin_3", x: 726, y: 1470, },
  { label: "origin_4", x: 726, y: 1874, },
  { label: "origin_5", x: 572, y: 816, },
  { label: "origin_6", x: 632, y: 430, },
  { label: "origin_7", x: 1020, y: 1646, },
  { label: "origin_8", x: 912, y: 1418, },
  { label: "origin_9", x: 1182, y: 1710, },
  { label: "origin_10", x: 1420, y: 1198, },
  { label: "origin_11", x: 1514, y: 1878, },
  { label: "origin_12", x: 1480, y: 1672, },
  { label: "origin_13", x: 1836, y: 1708, },
  { label: "origin_14", x: 1776, y: 1452, },
  { label: "origin_15", x: 1966, y: 1740, },
  { label: "origin_16", x: 1730, y: 1028, },
  { label: "origin_17", x: 1682, y: 1630, },
  { label: "origin_18", x: 1818, y: 2127, },
  { label: "origin_19", x: 1641, y: 2124 },
  { label: "origin_20", x: 504, y: 2139 },
  { label: "origin_21", x: 1170, y: 2106 },
  { label: "origin_22", x: 2217, y: 2121 },
  { label: "origin_23", x: 2079, y: 1983 },
  { label: "origin_24", x: 2301, y: 1542 },
  { label: "origin_25", x: 2457, y: 1824 },
  { label: "origin_26", x: 2415, y: 2106 },
  { label: "origin_27", x: 2712, y: 2121 },
  { label: "origin_28", x: 2742, y: 1710 },
  { label: "origin_29", x: 2997, y: 2022 },
  { label: "origin_30", x: 3114, y: 1782 },
  { label: "origin_31", x: 3219, y: 1893 },
  { label: "origin_32", x: 3399, y: 2124 },
  { label: "origin_33", x: 3438, y: 1794 },
  { label: "origin_34", x: 3390, y: 1317 },
  { label: "origin_35", x: 3681, y: 1077 },
  { label: "origin_36", x: 2733, y: 1287 },
  { label: "origin_37", x: 3627, y: 2115 },
  { label: "origin_38", x: 153, y: 1944 },
]


const particle_data = [
  {
    label: "particle_1",
    image_path: "./brushstroke_1.png",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 23),
      y: (0 - 23),
    },
    options: options_particles,
    vertices: [
      { x: 12, y: 20 },
      { x: 32, y: 17 },
      { x: 32, y: 30 },
      { x: 14, y: 32 },
    ]
  },
  {
    label: "particle_2",
    image_path: "./brushstroke_2.png",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 23),
      y: (0 - 23),
    },
    options: options_particles,
    vertices: [
      { x: 10, y: 20 },
      { x: 33, y: 17 },
      { x: 34, y: 31 },
      { x: 10, y: 30 },
    ]
  },
  {
    label: "particle_3",
    image_path: "./brushstroke_3.png",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 25),
      y: (0 - 23),
    },
    options: options_particles,
    vertices: [
      { x: 19, y: 19 },
      { x: 32, y: 19 },
      { x: 32, y: 30 },
      { x: 19, y: 29 },
    ]
  },
  {
    label: "particle_4",
    image_path: "./brushstroke_4.png",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 25),
      y: (0 - 22),
    },
    options: options_particles,
    vertices: [
      { x: 17, y: 19 },
      { x: 34, y: 17 },
      { x: 32, y: 30 },
      { x: 19, y: 30 },
    ]
  },
  {
    label: "particle_5",
    image_path: "./brushstroke_5.png",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 24),
      y: (0 - 22),
    },
    options: options_particles,
    vertices: [
      { x: 16, y: 18 },
      { x: 33, y: 17 },
      { x: 33, y: 30 },
      { x: 14, y: 30 },
    ]
  },
  {
    label: "particle_6",
    image_path: "./brushstroke_6.png",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 26),
      y: (0 - 22),
    },
    options: options_particles,
    vertices: [
      { x: 11, y: 15 },
      { x: 42, y: 14 },
      { x: 42, y: 33 },
      { x: 9, y: 30 },
    ]
  },
  {
    label: "particle_7",
    image_path: "./brushstroke_7.png",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 26),
      y: (0 - 22),
    },
    options: options_particles,
    vertices: [
      { x: 11, y: 15 },
      { x: 42, y: 14 },
      { x: 42, y: 33 },
      { x: 9, y: 30 },
    ]
  },
  {
    label: "particle_8",
    image_path: "./brushstroke_8.png",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 24),
      y: (0 - 25),
    },
    options: options_particles,
    vertices: [
      { x: 5, y: 21 },
      { x: 41, y: 12 },
      { x: 41, y: 37 },
      { x: 12, y: 36 },
    ]
  },
  {
    label: "particle_9",
    image_path: "./brushstroke_9.png",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 25),
      y: (0 - 24),
    },
    options: options_particles,
    vertices: [
      { x: 8, y: 14 },
      { x: 42, y: 12 },
      { x: 42, y: 37 },
      { x: 10, y: 34 },
    ]
  },
  {
    label: "particle_10",
    image_path: "./brushstroke_10.png",
    position: {
      x: 0,
      y: 0,
    },
    offsetPhysical: {
      x: (0 - 24),
      y: (0 - 22),
    },
    options: options_particles,
    vertices: [
      { x: 6, y: 16 },
      { x: 42, y: 12 },
      { x: 40, y: 36 },
      { x: 8, y: 34 },
    ]
  },
]