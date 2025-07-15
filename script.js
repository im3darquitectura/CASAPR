TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "cardboardMenu": {
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverOpacity": 0.8,
   "id": "Menu_D44FF747_C5E0_2974_41DF_04803239C103",
   "opacity": 0.4,
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "label": "360  ACCESO",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": "360  HALL ACCESO",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "03. 360 SALON",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "05. 360 ESCALERAS",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "label": "360  TERRAZA",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "label": "6. 360 ALCOBA PPAL - CASA P+R",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "label": "7. 360 COREDOR - CASA P+R",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "label": "8. 360 ALCOBA AUX - CASA P+R",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "label": "9. 360 ALCOBA juan miguel- CASA P+R",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "label": "11. 360 musica- CASA P+R",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "label": "12. 360 terraza musica- CASA P+R",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "label": "8. 360 ALCOBA AUX - CASA P+R",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    }
   ],
   "rollOverBackgroundColor": "#000000",
   "class": "Menu"
  },
  "id": "panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_C1D38000_CF5D_D392_41D6_8C0D8E82A278",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C39E267D_CF45_DC72_41E7_5A497738E813, this.camera_D55169E7_C5E0_3934_41D0_34C7B7500E49); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 0.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5_0_HS_2_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.41
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5_t.jpg",
  "class": "Panorama",
  "label": "360  ACCESO",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "shadow": false,
   "width": "17.15%",
   "paddingRight": 0,
   "height": "76.75%",
   "class": "IconButton",
   "mode": "push",
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "transparencyActive": false,
   "maxHeight": 70,
   "minWidth": 1,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "minHeight": 1,
   "data": {
    "name": "IconButton8475"
   },
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "borderSize": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "maxWidth": 70,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "gyroscopeEnabled": true,
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": false
 },
 {
  "id": "panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -17.4,
   "pitch": -1.01
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_C39E267D_CF45_DC72_41E7_5A497738E813",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C39E267D_CF45_DC72_41E7_5A497738E813_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_C1CE2C44_CF42_5392_41DE_996915278A92",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A, this.camera_D7541942_C5E0_396C_41C5_1ECF85D49013); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": -82.58,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C39E267D_CF45_DC72_41E7_5A497738E813_0_HS_2_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.17
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_C1DD9400_CF42_D392_41CC_5977308221B8",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5, this.camera_D7412953_C5E0_396C_41E1_369916635DD0); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": -179.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C39E267D_CF45_DC72_41E7_5A497738E813_0_HS_3_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_C03746C8_CF5E_5C92_41D3_09CBBC23ADC0",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286, this.camera_D766792F_C5E0_3934_41E3_93C5351FEBFE); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.43,
        "yaw": 90.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C39E267D_CF45_DC72_41E7_5A497738E813_0_HS_4_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 2.93
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_C09D6138_CFC2_55F2_41C4_A9A0AC73E8D2",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6, this.camera_D74EC966_C5E0_3934_41E5_B0882FE98A15); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 4.59,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C39E267D_CF45_DC72_41E7_5A497738E813_0_HS_5_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.17
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_C39E267D_CF45_DC72_41E7_5A497738E813_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_C39E267D_CF45_DC72_41E7_5A497738E813_t.jpg",
  "class": "Panorama",
  "label": "360  HALL ACCESO",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_C39E267D_CF45_DC72_41E7_5A497738E813_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_C0988760_CF5E_DD92_41CA_C15E6C4B9CE4",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C39E267D_CF45_DC72_41E7_5A497738E813, this.camera_D565C9C2_C5E0_396C_41CB_815FF7E21EDB); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 138.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A_0_HS_19_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.17
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_DF6F8D24_CFC2_4D92_41D1_4DE3161ADE4D",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6, this.camera_D56AF9D4_C5E0_3914_41E3_9F515906CCD7); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 85.23,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A_0_HS_20_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.41
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A_t.jpg",
  "class": "Panorama",
  "label": "03. 360 SALON",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -133.76,
   "pitch": -4.07
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_C02D8F11_CF5D_CDB2_41E4_9238F6D846A9",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C39E267D_CF45_DC72_41E7_5A497738E813, this.camera_D423478A_C5E0_29FF_41AD_D240E06B5465); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": -87.86,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_0_HS_12_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.59
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_DF091C0B_CFC2_D396_41C5_CFDA1CC5100D",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6, this.camera_D40F580E_C5E0_26F4_41D0_12FF001884F4); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": -46.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_0_HS_13_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.09
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D59C43CB_C5E0_297D_41B3_3EAF5E104045",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D, this.camera_D417E7CD_C5E0_2974_41BA_2FED57D56092); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 0.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_0_HS_14_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D4F800EB_C5E0_273C_41D9_3136EB28D228",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A, this.camera_D40347EE_C5E0_2934_41E4_583CAD002299); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 9.55,
        "yaw": 102.07,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_0_HS_15_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 23.78
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D4B29C98_C5E0_3F1C_41E8_14DB97DC2C52",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570, this.camera_D42D57AD_C5E0_2934_41C1_43E7BA703B01); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.05,
        "yaw": 180,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 110,
           "width": 111,
           "class": "ImageResourceLevel",
           "url": "media/panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_0_HS_16_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.36
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_t.jpg",
  "class": "Panorama",
  "label": "05. 360 ESCALERAS",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 5.8,
   "pitch": 2.81
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_C03B29C8_CF3D_B497_41C5_E7B7837D3D2A",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A, this.camera_D7AE98D6_C5E0_2714_41D3_C547883FFD84); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": -101.17,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6_0_HS_1_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.16
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_DF6EFDF9_CFC2_4C72_41C1_82F2DCEC3D99",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C39E267D_CF45_DC72_41E7_5A497738E813, this.camera_D7B3A8A1_C5E0_272C_41E6_200464A1B5AB); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 179.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6_0_HS_2_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.16
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_DFC04B7F_CFC2_B46E_41E9_CCCF6758CC59",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286, this.camera_D7A138B5_C5E0_2714_41E2_8340471A0423); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 140,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 114,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6_0_HS_3_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.92
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6_t.jpg",
  "class": "Panorama",
  "label": "360  TERRAZA",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_C8E643C5_C5E0_2974_41D0_06AF3F21A3BE",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286, this.camera_D789E90B_C5E0_26FC_41D2_9FAC7C857B1E); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": -174.03,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.41
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D_t.jpg",
  "class": "Panorama",
  "label": "6. 360 ALCOBA PPAL - CASA P+R",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_C84F506D_C5E0_6734_41D3_492B8B637CA3",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286, this.camera_D7EB2850_C5E0_276C_41C2_DB5314AF5B89); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 0.07,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.59
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CB936BA6_C5E0_3934_41DC_6D71203C9AAA",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221, this.camera_D7D8A86C_C5E0_2734_41E8_485B69EA6BDF); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 17.4,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570_0_HS_1_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.84
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CBA95133_C5E0_292C_41D7_B0A87B3EDC9F",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9, this.camera_D7C5C88A_C5E0_27FC_41E2_1D7D9E5AD593); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 162.86,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570_0_HS_2_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.41
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CB2063BE_C5E0_E914_41E7_C34B1F5DBF0A",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8, this.camera_D7FD0830_C5E0_272C_41E0_3E1E53BF64D1); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 173.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570_0_HS_3_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.41
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570_t.jpg",
  "class": "Panorama",
  "label": "7. 360 COREDOR - CASA P+R",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CAAA43FD_C5E0_2914_41D1_96DE601564FD",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570, this.camera_D55B29F8_C5E0_391C_41E0_61E0A7FF0E65); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 151.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.59
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221_t.jpg",
  "class": "Panorama",
  "label": "8. 360 ALCOBA AUX - CASA P+R",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CA8A1529_C5E0_293C_41D8_293AB70D70B6",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570, this.camera_D777C91D_C5E0_3914_41E1_8025E424F55D); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 149.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.09
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9_t.jpg",
  "class": "Panorama",
  "label": "9. 360 ALCOBA juan miguel- CASA P+R",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CA58224D_C5E0_6B74_4190_6E7C19EC7F13",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286, this.camera_D543BA0A_C5E0_3AFC_41DC_CAC78818B731); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": -116.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 0.16
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CA1EB97F_C5E0_7914_41C5_90BAE1FBE8AE",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697, this.camera_D54D8A21_C5E0_3B2C_41E4_6DC052BA5502); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.43,
        "yaw": -3.2,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A_0_HS_1_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 2.93
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A_t.jpg",
  "class": "Panorama",
  "label": "11. 360 musica- CASA P+R",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CA956EAD_C5E0_3B34_41BA_7F81E338E78C",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A, this.camera_D56229B0_C5E0_392B_41D3_46F041B96D38); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.42,
        "yaw": -179.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 3.68
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697_t.jpg",
  "class": "Panorama",
  "label": "12. 360 terraza musica- CASA P+R",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
  "id": "panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D5E69666_C5E0_2B37_41BA_643915A7CC8E",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570, this.camera_D79C18F8_C5E0_271C_41A5_ED6F515A63F0); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "image"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "hfov": 10.44,
        "yaw": 149.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 116,
           "class": "ImageResourceLevel",
           "url": "media/panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -0.84
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "width": 4000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8_hq.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8_t.jpg",
  "class": "Panorama",
  "label": "8. 360 ALCOBA AUX - CASA P+R",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5",
    "camera": "this.panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_C39E267D_CF45_DC72_41E7_5A497738E813",
    "camera": "this.panorama_C39E267D_CF45_DC72_41E7_5A497738E813_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A",
    "camera": "this.panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286",
    "camera": "this.panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6",
    "camera": "this.panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D",
    "camera": "this.panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570",
    "camera": "this.panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221",
    "camera": "this.panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9",
    "camera": "this.panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A",
    "camera": "this.panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697",
    "camera": "this.panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8",
    "camera": "this.panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8_camera",
    "class": "PanoramaPlayListItem",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5",
    "camera": "this.panorama_C4A7F3EC_CF46_5492_41E1_C9D2AB1509E5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_C39E267D_CF45_DC72_41E7_5A497738E813",
    "camera": "this.panorama_C39E267D_CF45_DC72_41E7_5A497738E813_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A",
    "camera": "this.panorama_C11E67F0_CF5E_FC72_41D4_682CD6CE857A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286",
    "camera": "this.panorama_DFB471D3_CF42_D4B6_41DD_75C715E25286_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6",
    "camera": "this.panorama_C0401DF1_CF3E_CC72_41BB_C205E0C6F2A6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D",
    "camera": "this.panorama_CF374009_C5E0_26FC_41BA_0CE367DCFD4D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570",
    "camera": "this.panorama_CFDA8B2D_C5E0_1934_41B1_42BF76279570_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221",
    "camera": "this.panorama_CFAD2637_C5E0_EB14_41E0_EDB9202D8221_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9",
    "camera": "this.panorama_CFA7EB6A_C5E0_393C_41E4_FD37EA3943E9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
    "media": "this.panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A",
    "camera": "this.panorama_CFA47EF5_C5E0_1B14_41BD_679BA126310A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
    "media": "this.panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697",
    "camera": "this.panorama_CFA7715B_C5E0_691C_41E5_7FE911BE3697_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 0)",
    "media": "this.panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8",
    "camera": "this.panorama_CAE7D9C9_C5E3_F97C_41DA_DAF1FC9414D8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.Menu_D44FF747_C5E0_2974_41DF_04803239C103",
 {
  "id": "camera_D423478A_C5E0_29FF_41AD_D240E06B5465",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -89.49,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D42D57AD_C5E0_2934_41C1_43E7BA703B01",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -179.93,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D417E7CD_C5E0_2974_41BA_2FED57D56092",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 5.97,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D40347EE_C5E0_2934_41E4_583CAD002299",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 63.5,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D40F580E_C5E0_26F4_41D0_12FF001884F4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -40,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_D7FD0830_C5E0_272C_41E0_3E1E53BF64D1",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -30.2,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D7EB2850_C5E0_276C_41C2_DB5314AF5B89",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D7D8A86C_C5E0_2734_41E8_485B69EA6BDF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -28.95,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D7C5C88A_C5E0_27FC_41E2_1D7D9E5AD593",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -30.7,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D7B3A8A1_C5E0_272C_41E6_200464A1B5AB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -175.41,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D7A138B5_C5E0_2714_41E2_8340471A0423",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 133.09,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D7AE98D6_C5E0_2714_41D3_C547883FFD84",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -94.77,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D79C18F8_C5E0_271C_41A5_ED6F515A63F0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -6.08,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D789E90B_C5E0_26FC_41D2_9FAC7C857B1E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -179.18,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D777C91D_C5E0_3914_41E1_8025E424F55D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -17.14,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D766792F_C5E0_3934_41E3_93C5351FEBFE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 92.14,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D7541942_C5E0_396C_41C5_1ECF85D49013",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -41.26,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D7412953_C5E0_396C_41E1_369916635DD0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -179.68,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D74EC966_C5E0_3934_41E5_B0882FE98A15",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -0.31,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D56229B0_C5E0_392B_41D3_46F041B96D38",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 176.8,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D565C9C2_C5E0_396C_41CB_815FF7E21EDB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 97.42,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D56AF9D4_C5E0_3914_41E3_9F515906CCD7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 78.83,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D55169E7_C5E0_3934_41D0_34C7B7500E49",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0.2,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D55B29F8_C5E0_391C_41E0_61E0A7FF0E65",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -162.6,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D543BA0A_C5E0_3AFC_41DC_CAC78818B731",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -77.93,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_D54D8A21_C5E0_3B2C_41E4_6DC052BA5502",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 0.2,
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg"
    }
   ]
  },
  "label": "1. EXT 1 - CABA\u00d1A VT1",
  "width": 160,
  "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
  "duration": 5000,
  "height": 80,
  "class": "Photo"
 },
 {
  "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg"
    }
   ]
  },
  "label": "2. EXT 2 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
  "duration": 5000,
  "height": 800,
  "class": "Photo"
 },
 {
  "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg"
    }
   ]
  },
  "label": "3. EXT 3 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
  "duration": 5000,
  "height": 800,
  "class": "Photo"
 },
 {
  "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg"
    }
   ]
  },
  "label": "4. INT 1 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
  "duration": 5000,
  "height": 2000,
  "class": "Photo"
 },
 {
  "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg"
    }
   ]
  },
  "label": "5. INT 2 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
  "duration": 5000,
  "height": 2000,
  "class": "Photo"
 },
 {
  "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg"
    }
   ]
  },
  "label": "6. EXT 4 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
  "duration": 5000,
  "height": 2000,
  "class": "Photo"
 },
 {
  "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg"
    }
   ]
  },
  "label": "7. INT 3- CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
  "duration": 5000,
  "height": 2000,
  "class": "Photo"
 }
], "children": [
 {
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "shadow": false,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "toolTipBackgroundColor": "#000000",
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "toolTipTextShadowVerticalLength": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadWidth": 6,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipOpacity": 0.7,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipPaddingTop": 9,
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBorderSize": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderRadius": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "height": "100%",
  "paddingTop": 0,
  "class": "ViewerArea",
  "toolTipBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 15,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 14,
  "toolTipFontSize": 13,
  "progressBackgroundColorDirection": "vertical",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "minWidth": 100,
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "minHeight": 50,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 0,
  "paddingLeft": 0,
  "toolTipPaddingRight": 14,
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "toolTipPaddingBottom": 9,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 1,
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "shadow": false,
      "width": "17.48%",
      "paddingRight": 0,
      "height": "76.75%",
      "toolTipBackgroundColor": "#000000",
      "class": "IconButton",
      "toolTipTextShadowBlurRadius": 3,
      "mode": "toggle",
      "toolTipTextShadowVerticalLength": 0,
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "toolTipOpacity": 0.7,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#FFFFFF",
      "maxHeight": 70,
      "minWidth": 1,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTip": "Full Screen",
      "toolTipBorderColor": "#767676",
      "minHeight": 1,
      "data": {
       "name": "Icon fullscreen"
      },
      "toolTipTextShadowHorizontalLength": 0,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipPaddingTop": 9,
      "toolTipPaddingRight": 14,
      "borderSize": 0,
      "paddingLeft": 0,
      "borderRadius": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 9,
      "maxWidth": 70,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0
     },
     {
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "shadow": false,
      "width": "17.15%",
      "paddingRight": 0,
      "height": "76.75%",
      "toolTipBackgroundColor": "#000000",
      "class": "IconButton",
      "toolTipTextShadowBlurRadius": 3,
      "mode": "toggle",
      "toolTipTextShadowVerticalLength": 0,
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "toolTipOpacity": 0.7,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#FFFFFF",
      "maxHeight": 70,
      "minWidth": 1,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTip": "Audio On/Off",
      "toolTipBorderColor": "#767676",
      "minHeight": 1,
      "data": {
       "name": "Icon audio"
      },
      "toolTipTextShadowHorizontalLength": 0,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipPaddingTop": 9,
      "toolTipPaddingRight": 14,
      "borderSize": 0,
      "paddingLeft": 0,
      "borderRadius": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 9,
      "maxWidth": 70,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0
     }
    ],
    "gap": 10,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "width": "75.269%",
    "paddingRight": 0,
    "height": "100%",
    "overflow": "visible",
    "class": "Container",
    "layout": "horizontal",
    "paddingBottom": 0,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "creationPolicy": "delayed",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "right",
    "minHeight": 1,
    "data": {
     "name": "-Hide buttons"
    },
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "paddingLeft": 0,
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "width": "22.545%",
  "paddingRight": 0,
  "overflow": "visible",
  "class": "Container",
  "layout": "horizontal",
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "creationPolicy": "delayed",
  "top": "89%",
  "minWidth": 265,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "scrollBarMargin": 2,
  "minHeight": 50,
  "data": {
   "name": "--Settings Button Set"
  },
  "horizontalAlign": "right",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "borderRadius": 5,
  "backgroundOpacity": 0,
  "right": 25,
  "paddingTop": 0
 },
 {
  "gap": 10,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "width": "21%",
  "paddingRight": 0,
  "height": "25%",
  "overflow": "visible",
  "class": "Container",
  "layout": "vertical",
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "creationPolicy": "delayed",
  "top": "3.5%",
  "minWidth": 300,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "minHeight": 120,
  "data": {
   "name": "--Stickers Container"
  },
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "left": "2.14%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "selectedItemThumbnailShadow": true,
  "right": "2%",
  "selectedItemThumbnailShadowOpacity": 0.73,
  "backgroundColor": [
   "#000000"
  ],
  "itemHorizontalAlign": "center",
  "itemBackgroundColorDirection": "vertical",
  "shadow": false,
  "paddingRight": 15,
  "itemBackgroundColor": [],
  "itemLabelHorizontalAlign": "center",
  "selectedItemThumbnailShadowBlurRadius": 10,
  "itemLabelPosition": "bottom",
  "backgroundColorRatios": [
   0
  ],
  "layout": "vertical",
  "selectedItemBackgroundColorRatios": [],
  "selectedItemLabelFontWeight": "bold",
  "itemPaddingTop": 3,
  "itemLabelFontFamily": "Arial",
  "itemBorderRadius": 0,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "scrollBarMargin": 4,
  "scrollBarOpacity": 1,
  "itemThumbnailShadow": false,
  "scrollBarColor": "#52B7EF",
  "selectedItemThumbnailShadowVerticalLength": 0,
  "selectedItemBackgroundColor": [],
  "itemBackgroundOpacity": 0,
  "selectedItemBorderRadius": 0,
  "itemThumbnailWidth": 80,
  "borderSize": 0,
  "rollOverItemLabelFontWeight": "bold",
  "maxWidth": 150,
  "itemLabelGap": 9,
  "itemLabelFontColor": "#FFFFFF",
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "paddingTop": 20,
  "itemThumbnailBorderRadius": 50,
  "itemPaddingLeft": 3,
  "selectedItemLabelFontStyle": "italic",
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "itemThumbnailOpacity": 1,
  "class": "ThumbnailList",
  "selectedItemBorderSize": 0,
  "selectedItemBackgroundOpacity": 0,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "paddingBottom": 20,
  "scrollBarWidth": 7,
  "height": "82.127%",
  "itemPaddingRight": 3,
  "verticalAlign": "top",
  "rollOverItemLabelTextDecoration": "underline",
  "selectedItemLabelTextDecoration": "underline",
  "top": "3.5%",
  "itemLabelFontWeight": "normal",
  "itemLabelTextDecoration": "none",
  "visible": false,
  "minWidth": 1,
  "propagateClick": false,
  "itemPaddingBottom": 3,
  "horizontalAlign": "left",
  "itemLabelFontStyle": "normal",
  "minHeight": 1,
  "data": {
   "name": "-ThumbnailList"
  },
  "itemMode": "normal",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "paddingLeft": 15,
  "borderRadius": 3,
  "selectedItemLabelFontColor": "#FFFFFF",
  "selectedItemLabelFontSize": 12,
  "itemThumbnailHeight": 80,
  "itemBackgroundColorRatios": [],
  "itemLabelFontSize": 12,
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.25
 },
 {
  "children": [
   {
    "gap": 10,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 0,
    "height": "55.435%",
    "overflow": "visible",
    "class": "Container",
    "layout": "horizontal",
    "paddingBottom": 0,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "creationPolicy": "delayed",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "left",
    "minHeight": 1,
    "data": {
     "name": "Container Content"
    },
    "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "paddingLeft": 0,
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "width": "37.394%",
  "paddingRight": 0,
  "height": 92,
  "overflow": "visible",
  "class": "Container",
  "layout": "vertical",
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "bottom",
  "creationPolicy": "delayed",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "minHeight": 1,
  "data": {
   "name": "-Discover Container"
  },
  "horizontalAlign": "left",
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "left": "2%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "shadow": false,
  "width": "5%",
  "paddingRight": 0,
  "height": "5%",
  "class": "Image",
  "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "verticalAlign": "middle",
  "top": "0.98%",
  "maxHeight": 265,
  "minWidth": 1,
  "propagateClick": false,
  "horizontalAlign": "center",
  "minHeight": 1,
  "data": {
   "name": "Image21736"
  },
  "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
  "borderSize": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "maxWidth": 485,
  "backgroundOpacity": 0,
  "right": "0.6%",
  "paddingTop": 0
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "gap": 10,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingRight": 0,
 "height": "100%",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "class": "Player",
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "delayed",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "propagateClick": false,
 "vrPolyfillScale": 0.85,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "minHeight": 20,
 "data": {
  "name": "Player463"
 },
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); }
 },
 "paddingTop": 0
})