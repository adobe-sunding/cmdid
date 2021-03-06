var Cmd = (function() {
    var appVersion = parseFloat(app.appVersion)
    if (appVersion < 13.5) {
        // TODO: Improve message
        $.writeln('WARNING: version not supported')
    }
    var commands = {
        "QUIT"                                    : 1,
        "NEW_PROJECT"                             : 2,
        "OPEN_PROJECT"                            : 3,
        "CLOSE"                                   : 4,
        "SAVE"                                    : 5,
        "SAVE_AS"                                 : 6,
        "REVERT"                                  : 7,
        "PAGE_SETUP"                              : 8,
        "PRINT"                                   : 9,
        "UNDO"                                    : 16, // DUPLICATE
        "CUT"                                     : 18,
        "COPY"                                    : 19, // DUPLICATE
        "PASTE"                                   : 20,
        "CLEAR"                                   : 21,
        "SELECT_ALL"                              : 23,
        "COPY_EXPRESSION_ONLY"                    : 53,
        "ABOUT_AFTER_EFFECTS"                     : 256,
        "NEW_COMPOSITION"                         : 2000,
        "FILE"                                    : 2003, // DUPLICATE
        "DESELECT_ALL"                            : 2004,
        "ADD_FOOTAGE_TO_COMP"                     : 2005,
        "COMPOSITION_SETTINGS"                    : 2007,
        "SET_POSTER_TIME"                         : 2012,
        "BRING_TO_FRONT"                          : 2016,
        "SEND_TO_BACK"                            : 2017,
        "BRING_FORWARD"                           : 2018,
        "SEND_BACKWARD"                           : 2019,
        "TRANSFORM"                               : 2020,
        "LAYER_SETTINGS"                          : 2021,
        "TIME_STRETCH"                            : 2024,
        "PICT"                                    : 2025,
        "REDO"                                    : 2035,
        "RESOLUTION"                              : 2037,
        "SOLID"                                   : 2038,
        "MASK"                                    : 2040,
        "QUALITY"                                 : 2041,
        "WIREFRAME"                               : 2042,
        "DRAFT"                                   : 2044,
        "BEST"                                    : 2045,
        "QUARTER"                                 : 2046,
        "HALF"                                    : 2047,
        "FULL"                                    : 2048,
        "CUSTOM"                                  : 2049, // DUPLICATE
        "FREE_TRANSFORM_POINTS"                   : 2051,
        "INVERTED"                                : 2052,
        "SWITCHES"                                : 2053,
        "HIDE_OTHER_VIDEO"                        : 2054,
        "SHOW_ALL_VIDEO"                          : 2055,
        "AUDIO"                                   : 2056, // DUPLICATE
        "VIDEO"                                   : 2059,
        "EFFECT"                                  : 2062,
        "POSITION"                                : 2065, // DUPLICATE
        "SCALE"                                   : 2066, // DUPLICATE
        "MASK_SHAPE"                              : 2068,
        "MASK_FEATHER"                            : 2069,
        "OPACITY"                                 : 2070, // DUPLICATE
        "PRECOMPOSE"                              : 2071,
        "REMOVE_ALL"                              : 2072,
        "GO_TO_TIME"                              : 2076,
        "MAIN"                                    : 2077,
        "FILE"                                    : 2078, // DUPLICATE
        "PREFERENCES"                             : 2079,
        "DUPLICATE"                               : 2080,
        "THIRD"                                   : 2081,
        "ZOOM_IN"                                 : 2092,
        "ZOOM_OUT"                                : 2093,
        "1"                                       : 2101,
        "INTERPRET_FOOTAGE"                       : 2102,
        "PROXY"                                   : 2103,
        "FILE"                                    : 2104, // DUPLICATE
        "IMPORT"                                  : 2105, // DUPLICATE
        "SET_PROXY"                               : 2106,
        "CONSOLIDATE_ALL_FOOTAGE"                 : 2107,
        "REMOVE_UNUSED_FOOTAGE"                   : 2109,
        "SHY"                                     : 2113,
        "LOCK"                                    : 2114,
        "MOTION_BLUR"                             : 2116, // DUPLICATE
        "FILE"                                    : 2118, // DUPLICATE
        "NONE"                                    : 2119, // DUPLICATE
        "SAVE_PREVIEW"                            : 2125,
        "PREVIEW"                                 : 2131,
        "TIME_REVERSE_LAYER"                      : 2135,
        "NEW_FOLDER"                              : 2139,
        "EDIT_ORIGINAL"                           : 2142,
        "RENDER_SETTINGS"                         : 2149,
        "OUTPUT_MODULE"                           : 2150,
        "ENABLE_TIME_REMAPPING"                   : 2153,
        "ADD_OUTPUT_MODULE"                       : 2154,
        "CUSTOM"                                  : 2155, // DUPLICATE
        "FIT_TO_COMP"                             : 2156,
        "ADD_MARKER"                              : 2157,
        "DUPLICATE_PRESERVE_FILE"                 : 2158,
        "KEYFRAME_ASSISTANT"                      : 2159,
        "COLLAPSE"                                : 2160,
        "ADD_TO_RENDER_QUEUE"                      : 2161, // DUPLICATE
        "BLENDING_MODE"                           : 2162,
        "EFFECT_CONTROLS"                         : 2163,
        "AUTO_ORIENT"                             : 2165,
        "SAVE_A_COPY"                             : 2166,
        "NORMAL"                                  : 2167,
        "DISSOLVE"                                : 2168,
        "DANCING_DISSOLVE"                        : 2169,
        "ADD"                                     : 2170, // DUPLICATE
        "MULTIPLY"                                : 2171,
        "SCREEN"                                  : 2172,
        "OVERLAY"                                 : 2173,
        "SOFT_LIGHT"                              : 2174,
        "HARD_LIGHT"                              : 2175,
        "CLASSIC_COLOR_DODGE"                     : 2176,
        "CLASSIC_COLOR_BURN"                      : 2177,
        "DARKEN"                                  : 2178, // DUPLICATE
        "LIGHTEN"                                 : 2179, // DUPLICATE
        "CLASSIC_DIFFERENCE"                      : 2180,
        "EXCLUSION"                               : 2181,
        "HUE"                                     : 2182, // DUPLICATE
        "SATURATION"                              : 2183, // DUPLICATE
        "COLOR"                                   : 2184,
        "LUMINOSITY"                              : 2185,
        "STENCIL_ALPHA"                           : 2186,
        "STENCIL_LUMA"                            : 2187,
        "SILHOUETTE_ALPHA"                        : 2188,
        "SILHOUETTE_LUMA"                         : 2189,
        "PRESERVE_TRANSPARENCY"                   : 2190,
        "NO_TRACK_MATTE"                          : 2191,
        "ALPHA_MATTE"                             : 2192,
        "ALPHA_INVERTED_MATTE"                    : 2193,
        "LUMA_MATTE"                              : 2194,
        "LUMA_INVERTED_MATTE"                     : 2195,
        "LUMINESCENT_PREMUL"                      : 2197,
        "ALPHA_ADD"                               : 2198,
        "DIFFERENCE"                              : 2199, // DUPLICATE
        "COLOR_DODGE"                             : 2200,
        "COLOR_BURN"                              : 2201,
        "LINEAR_DODGE"                            : 2202,
        "LINEAR_BURN"                             : 2203,
        "LINEAR_LIGHT"                            : 2204,
        "VIVID_LIGHT"                             : 2205,
        "PIN_LIGHT"                               : 2206,
        "HARD_MIX"                                : 2207,
        "LIGHTER_COLOR"                           : 2208,
        "DARKER_COLOR"                            : 2209,
        "SUBTRACT"                                : 2210, // DUPLICATE
        "DIVIDE"                                  : 2211,
        "TOGGLE_HOLD_KEYFRAME"                    : 2226,
        "KEYFRAME_INTERPOLATION"                  : 2227,
        "KEYFRAME_VELOCITY"                       : 2228,
        "SAVE_FRAME_AS"                           : 2233,
        "MULTIPLE_FILES"                          : 2236,
        "REPLACE_FOOTAGE"                         : 2237,
        "EDIT_VALUE"                              : 2240, // DUPLICATE
        "KEYFRAME_VALUE"                          : 2241,
        "UNLOCK_ALL_LAYERS"                       : 2244,
        "REMEMBER_INTERPRETATION"                 : 2254,
        "APPLY_INTERPRETATION"                    : 2255,
        "RELOAD_FOOTAGE"                          : 2257,
        "COMP_FLOWCHART_VIEW"                     : 2258,
        "ADJUSTMENT_LAYER"                        : 2263, // DUPLICATE
        "NEW"                                     : 2264, // DUPLICATE
        "TEMPLATES"                               : 2265,
        "TRACK_MATTE"                             : 2269,
        "SHOW_GUIDES"                             : 2274,
        "LOCK_GUIDES"                             : 2275,
        "CLEAR_GUIDES"                            : 2276,
        "SHOW_GRID"                               : 2277,
        "SNAP_TO_GRID"                            : 2278,
        "ADJUSTMENT_LAYER"                        : 2279, // DUPLICATE
        "SHOW_RULERS"                             : 2280,
        "IMPORT_RECENT_FOOTAGE"                   : 2283,
        "OPEN_RECENT_PROJECTS"                    : 2284,
        "SNAP_TO_GUIDES"                          : 2286,
        "FRAME_BLENDING"                          : 2289,
        "OFF"                                     : 2290, // DUPLICATE
        "FRAME_MIX"                               : 2291,
        "PIXEL_MOTION"                            : 2292,
        "RECENT_FOOTAGE_LIST"                     : 2310,
        "RECENT_PROJECT_LIST"                     : 2330,
        "NONE"                                    : 2350, // DUPLICATE
        "LABEL"                                   : 2358,
        "PREFS_GENERAL"                                 : 2359,
        "TRIM_COMP_TO_WORK_AREA"                  : 2360,
        "PREFS_DISPLAY"                                 : 2361,
        "PREFS_IMPORT"                                  : 2362, // DUPLICATE
        "PREFS_OUTPUT"                                  : 2363,
        "PREFS_GRIDS_GUIDES"                            : 2364,
        "PREFS_LABELS"                                  : 2365,
        "NEW_MASK"                                : 2367,
        "REMOVE_MASK"                             : 2368,
        "REMOVE_ALL_MASKS"                        : 2369,
        "PURGE"                                   : 2370,
        "UNDO"                                    : 2371, // DUPLICATE
        "IMAGE_CACHES"                            : 2372,
        "ALL"                                     : 2373,
        "CLOSED"                                  : 2374,
        "REVEAL_PROPERTIES_WITH_KEYFRAMES"        : 2387,
        "AUDIO"                                   : 2434, // DUPLICATE
        "SHOW_LAYER_CONTROLS"                     : 2435,
        "SELECT_LABEL_GROUP"                      : 2436,
        "PREFS_MEDIA_DISK_CACHING"                            : 2439,
        "MODE"                                    : 2440,
        "NONE"                                    : 2441, // DUPLICATE
        "ADD"                                     : 2442, // DUPLICATE
        "SUBTRACT"                                : 2443, // DUPLICATE
        "INTERSECT"                               : 2444,
        "LIGHTEN"                                 : 2445, // DUPLICATE
        "DARKEN"                                  : 2446, // DUPLICATE
        "DIFFERENCE"                              : 2447, // DUPLICATE
        "RESET_MASK"                              : 2448,
        "APPLY_ANIMATION_PRESET"                  : 2450,
        "RECENT_ANIMATION_PRESETS"                : 2451,
        "LAST_EFFECT"                             : 2452,
        "MASK_OPACITY"                            : 2453,
        "LOCKED"                                  : 2454,
        "LOCK_OTHER_MASKS"                        : 2455,
        "UNLOCK_ALL_MASKS"                        : 2456,
        "WATCH_FOLDER"                            : 2457,
        "RECENT_FAVORITES_LIST"                   : 2460,
        "SNAPSHOT"                                : 2481,
        "COLLECT_FILES"                           : 2482,
        "EXPORT"                                  : 2494,
        "ADD_KEYFRAME"                            : 2518,
        "PREVIOUS_KEYFRAME"                       : 2519,
        "NEXT_KEYFRAME"                           : 2520,
        "RESET"                                   : 2521, // DUPLICATE
        "OPEN_SOURCE_WINDOW"                      : 2523,
        "HIDE_LOCKED_MASKS"                       : 2524,
        "REVEAL_IN_TIMELINE"                      : 2536,
        "DELETE_THIS_MARKER"                      : 2537,
        "DELETE_ALL_MARKERS"                      : 2538,
        "UPDATE_MARKERS_FROM_SOURCE"              : 2539,
        "3D_LAYER"                                : 2541,
        "ADOBE_DYNAMIC_LINK"                      : 2552,
        "NEW_PREMIERE_PRO_SEQUENCE"               : 2553,
        "IMPORT_PREMIERE_PRO_SEQUENCE"            : 2554,
        "SHUTTER180_PHASE0"                       : 2557,
        "SHUTTER360_PHASE0"                       : 2558,
        "SHUTTER90_PHASE0"                        : 2559,
        "SHUTTER180_PHASE180"                     : 2560,
        "SHUTTER720_PHASE360"                     : 2561,
        "LIGHT"                                   : 2563,
        "CAMERA"                                  : 2564, // DUPLICATE
        "LOCK_MARKERS"                            : 2565,
        "SOLO"                                    : 2566,
        "SETTINGS"                                : 2567,
        "TRACK_MOTION"                            : 2568,
        "RESET"                                   : 2605, // DUPLICATE
        "NEW"                                     : 2606, // DUPLICATE
        "FIND"                                    : 2607,
        "PROJECT_SETTINGS"                        : 2611,
        "LIFT_WORK_AREA"                          : 2613,
        "EXTRACT_WORK_AREA"                       : 2614,
        "ORIENTATION"                             : 2623,
        "ASSIGN_3D_VIEW_SHORTCUT"                 : 2624,
        "SWITCH_3D_VIEW"                          : 2625,
        "A"                                       : 2626, // DUPLICATE
        "B"                                       : 2627, // DUPLICATE
        "C"                                       : 2628, // DUPLICATE
        "EDIT_VALUE"                              : 2641,
        "RESET_3D_VIEW"                           : 2642,
        "TRACK_THIS_PROPERTY"                     : 2643,
        "SET_KEYFRAME"                            : 2701,
        "ADD_EXPRESSION"                          : 2702,
        "SWITCH_TO_LAST_3D_VIEW"                  : 2703,
        "PREFS_VIDEO_PREVIEW"                           : 2704,
        "PREVIEWS"                                : 2705,
        "ACTIVE_CAMERA"                           : 2710,
        "FRONT"                                   : 2711,
        "LEFT"                                    : 2712,
        "TOP"                                     : 2713,
        "BACK"                                    : 2714,
        "RIGHT"                                   : 2715,
        "BOTTOM"                                  : 2716,
        "CUSTOM_VIEW1"                            : 2717,
        "CUSTOM_VIEW2"                            : 2718,
        "CUSTOM_VIEW3"                            : 2719,
        "FIT_TO_COMP_WIDTH"                       : 2732,
        "FIT_TO_COMP_HEIGHT"                      : 2733,
        "REDUCE_PROJECT"                          : 2735,
        "MASK_EXPANSION"                          : 2736,
        "WORKSPACE"                               : 2738,
        "SAVE_WORKSPACE"                          : 2739,
        "NULL_OBJECT"                             : 2767,
        "SET_FIRST_VERTEX"                        : 2768,
        "CUSTOM"                                  : 2769, // DUPLICATE
        "REVEAL_ALL_MODIFIED_PROPERTIES"          : 2771,
        "VIEW_OPTIONS"                            : 2776,
        "CREATE_PROXY"                            : 2777,
        "STILL"                                   : 2778,
        "MOVIE"                                   : 2779,
        "PRERENDER"                               : 2780,
        "NEXT_BLENDING_MODE"                      : 2781,
        "PREVIOUS_BLENDING_MODE"                  : 2782,
        "ROTATION"                                : 2792, // DUPLICATE
        "MOTION_BLUR"                             : 2797, // DUPLICATE
        "SAME_AS_LAYER"                           : 2798,
        "ON"                                      : 2799,
        "OFF"                                     : 2800, // DUPLICATE
        "ONE_COMP_VIEW"                           : 2824,
        "TWO_COMP_VIEWS"                          : 2825,
        "FOUR_COMP_VIEWS"                         : 2826,
        "LOOK_AT_SELECTED_LAYERS"                 : 2834,
        "LOOK_AT_ALL_LAYERS"                      : 2835,
        "TEXT"                                    : 2836,
        "CREATE_OUTLINES"                         : 2933, // DUPLICATE
        "SELECT_EQUAL_KEYFRAMES"                  : 2934,
        "HISTORY"                                 : 2995,
        "CROP_COMP_TO_REGION_OF_INTEREST"         : 2997,
        "SHOW_TEXT_PANELS"                        : 3013,
        "PROPERTY"                                : 3016,
        "SELECTOR"                                : 3017,
        "DELETE_BRUSH"                            : 3018,
        "ANCHOR_POINT"                            : 3019,
        "POSITION"                                : 3020, // DUPLICATE
        "SCALE"                                   : 3021, // DUPLICATE
        "SKEW"                                    : 3022,
        "ROTATION"                                : 3023, // DUPLICATE
        "STROKE_WIDTH"                            : 3024,
        "TRACKING"                                : 3025,
        "LINE_ANCHOR"                             : 3026,
        "CHARACTER_OFFSET"                        : 3027,
        "CHARACTER_VALUE"                         : 3028,
        "RGB"                                     : 3029, // DUPLICATE
        "HUE"                                     : 3030, // DUPLICATE
        "SATURATION"                              : 3031, // DUPLICATE
        "BRIGHTNESS"                              : 3032, // DUPLICATE
        "OPACITY"                                 : 3033, // DUPLICATE
        "RGB"                                     : 3034, // DUPLICATE
        "HUE"                                     : 3035, // DUPLICATE
        "SATURATION"                              : 3036, // DUPLICATE
        "BRIGHTNESS"                              : 3037, // DUPLICATE
        "OPACITY"                                 : 3038, // DUPLICATE
        "FILL_COLOR"                              : 3039,
        "STROKE_COLOR"                            : 3040,
        "WIGGLY"                                  : 3041,
        "OPACITY"                                 : 3042, // DUPLICATE
        "LINE_SPACING"                            : 3043,
        "AUTOTRACE"                               : 3044,
        "ALL_TRANSFORM_PROPERTIES"                : 3052,
        "ROTO_BEZIER"                             : 3053,
        "REMOVE_ALL_TEXT_ANIMATORS"               : 3058,
        "EXPRESSION"                              : 3063,
        "CONVERT_SHAPE"                           : 3064,
        "HORIZONTAL"                              : 3065,
        "VERTICAL"                                : 3066,
        "WITH_LAYERED_COMP"                       : 3070,
        "PREFS_USER_INTERFACE_COLORS"                   : 3071,
        "SELECT_PREVIOUS_KEYFRAMES"               : 3072,
        "SELECT_FOLLOWING_KEYFRAMES"              : 3073,
        "SAVE_ANIMATION_PRESET"                   : 3075,
        "GUIDE_LAYER"                             : 3081,
        "INCREMENTAND_SAVE"                       : 3088,
        "PREFS_AUTO_SAVE"                               : 3122,
        "PREFS_MEMORY_MULTIPROCESSING"                  : 3124,
        "PREFS_AUDIO_HARDWARE"                          : 3125,
        "PREFS_AUDIO_OUTPUT_MAPPING"                    : 3126,
        "ADOBE_PHOTOSHOP_FILE"                    : 3147, // DUPLICATE
        "ADOBE_PHOTOSHOP_FILE"                    : 3148, // DUPLICATE
        "ROVE_ACROSS_TIME"                        : 3153,
        "CLOSE_PROJECT"                           : 3154,
        "TIME"                                    : 3155,
        "NEW_WORKSPACE"                           : 3565,
        "RESET_WORKSPACE"                         : 3566,
        "BROWSE"                                  : 3689,
        "REVEAL_IN_BRIDGE"                        : 3690,
        "BROWSE_PRESETS"                          : 3691,
        "FREEZE_FRAME"                            : 3695,
        "REVEAL_COMP_IN_PW"                       : 3696,
        "EDIT_IN_ADOBE_AUDITION"                  : 3697,
        "BLUR"                                    : 3698,
        "NEW_VIEWER"                              : 3700,
        "SIMULATE_OUTPUT"                         : 3703,
        "USE_DISPLAY_COLOR_MANAGEMENT"            : 3704,
        "NO_OUTPUT_SIMULATION"                    : 3705,
        "KODAK5218_TO_KODAK2383"                  : 3706,
        "ASSIGN_WORKSPACE_SHORTCUT"               : 3707,
        "A"                                       : 3708, // DUPLICATE
        "B"                                       : 3709, // DUPLICATE
        "C"                                       : 3710, // DUPLICATE
        "SHAPE_LAYER"                             : 3736,
        "ENABLE_PER_CHARACTER_3D"                 : 3737,
        "LAYER_STYLES"                            : 3739,
        "MASK_AND_SHAPE_PATH"                     : 3745,
        "HDTV_REC709"                             : 3754,
        "SDTV_NTSC"                               : 3755,
        "SDTV_PAL"                                : 3756,
        "MACINTOSH_RGB"                           : 3757,
        "WINDOWS_RGB"                             : 3758,
        "MY_CUSTOM_RGB"                           : 3759,
        "CUSTOM"                                  : 3760, // DUPLICATE
        "SEPARATE_DIMENSIONS"                     : 3764,
        "FLIP_HORIZONTAL"                         : 3766,
        "FLIP_VERTICAL"                           : 3767,
        "CREATE_OUTLINES"                         : 3781, // DUPLICATE
        "OPEN_LAYER"                              : 3784,
        "SAVE_A_COPY_AS_XML"                      : 3785,
        "UPGRADE_PROJECT_PARS_TO_CS4"             : 3791,
        "OPEN_MINI_FLOW_POPUP"                    : 3792,
        "ARRANGE"                                 : 3798,
        "CONVERT_TO_EDITABLE"                     : 3799,
        "ADD_TO_AME_RENDER_QUEUE"                 : 3800,
        "UCF_TO_KODAK2383"                        : 3814,
        "CENTER_IN_VIEW"                          : 3819,
        "SAVE_AS"                                 : 3840, // DUPLICATE
        "SAVE_AS_CS_PREVIOUS"                     : 3841,
        "CREATE_FOOTAGE_OUTLINES"                 : 3932, // DUPLICATE
        "ENVIRON_LAYER"                           : 3972,
        "CREATE_FOOTAGE_OUTLINES"                 : 3973, // DUPLICATE
        "TRACK_3D_CAMERA_MOTION"                  : 3983,
        "ADD_TO_RENDER_QUEUE"                     : 3984, // DUPLICATE
        "WARP_STABILIZER"                         : 3986,
        "FEATHER_FALLOFF"                         : 3987,
        "SMOOTH"                                  : 3988,
        "LINEAR"                                  : 3989,
        "FEATHER_HOLD"                            : 3991,
        "FEATHER_EDIT_TENSION"                    : 3992,
        "FEATHER_EDIT_EXTENT"                     : 3993,
        "GO_TO_KEYFRAME_TIME"                     : 3999,
        "CINEMA4D_FILE"                           : 4008,
        "REVEAL_PROPERTIES_WITH_ANIMATION"        : 4011,
        "ENABLE_AUTO_STOPWATCH"                   : 4015,
        "EXTENSIONS"                              : 4016,
        "ADD_FONTS_FROM_TYPEKIT"                  : 4017,
        "BROWSE_ADD_ONS"                          : 4018,
        "BRAINSTORM"                              : 4021,
        "IMPORT_CC_LIBRARIES"                     : 4022,
        "EDIT_WORKSPACE"                          : 4023,
        "ALL_MEMORY_DISK_CACHE"                   : 10200,
        "ADD_TO_AME_RENDER_QUEUE"                 : 10205, // DUPLICATE
        "BILINEAR"                                : 10207,
        "BICUBIC"                                 : 10208,
        "USER_PROFILE"                            : 10305, // DUPLICATE
        "PREFS_USER_PROFILE"                            : 10307, // DUPLICATE
        "COPY"                                    : 10310, // DUPLICATE
        "TRACK_MASK"                              : 10311,
        "CENTER_ANCHOR"                           : 10312,
        "COPY"                                    : 10313, // DUPLICATE
        "PLAY_PREVIEW"                            : 10314,
        "OPEN_ANIMAL"                             : 10410,
    }
    // NOTE: Commands added in AE 2015.3 (13.8)
    if (appVersion >= 13.8) {
        var cmds138 = {
            "LICENSE_FOOTAGE"                     : 10420, // DUPLICATE
        }
    }
    // NOTE: Commands added in AE 2017 (14.0)
    if (appVersion >= 14.0) {
        var cmds140 = {
            "PREFS_NEW_PROJECT"                   : 3129,
	        "PREFS_TYPE"                                : 3130,
            "FREEZE_ON_LAST_FRAME"                : 4027,
        }
    }
    // NOTE: Commands added in AE 2018 (15.0)
    if (appVersion >= 15.0) {
        var cmds150 = {
            "RENAME_LAYER"                            : 2008,
            "REVEAL_LAYER_SOURCE_IN_PROJECT"          : 2517,
            "REVEAL_LAYER_IN_PROJECT_FLOWCHART_VIEW"  : 2522,
            "OPEN_LAYER_SOURCE_WINDOW"                : 2523, // REPLACES "OPEN_SOURCE_WINDOW": 2523,
            "TRACK_2D_MOTION"                         : 2568, // REPLACES "TRACK_MOTION": 2568,
            "REVEAL_EXPRESSION_ERRORS"                : 2731,
            "CREATE_OUTLINE_MASKS"                    : 2933, // REPLACES "CREATE_OUTLINES": 2933,
            "OPEN_EFFECT_CONTROLS"                    : 3734,
            "CREATE_OUTLINE_SHAPE"                    : 3781, // REPLACES "CREATE_OUTLINES": 3781,
            "OPEN_LAYER_WINDOW"                       : 3784, // REPLACES "OPEN_LAYER": 3784,
            "SAVE_AS_CS_PREVIOUS1"                    : 3841, // REPLACES "SAVE_AS_CS_PREVIOUS": 3841,
            "CAMERA"                                  : 3842, // DUPLICATE
            // "CREATE_FOOTAGE_OUTLINES"			  : 3932, // REMOVED?
            "FIND_EXTENSIONS"                         : 4018, // REPLACES "BROWSE_ADD_ONS": 4018,
            "SAVE_AS_CC13"                            : 4035,
            "CREATE_DATA_FOOTAGE_LAYER_KEYFRAMES"     : 4036,
            "ADD_PROP_TO_CAPSULES"                    : 4042,
            "REVEAL"                                  : 4043,
            "CREATE"                                  : 4044,
            "TRACK_AND_STABILIZE"                     : 4045,
            "OPEN"                                    : 4046,
            "LICENSE_FOOTAGE"                         : 10420, // DUPLICATE
            "KSV"                                     : 10426,
            // "OPEN_ANIMAL"						  : 10410, // REMOVED?
        }
    }
    // NOTE: Commands added in AE 2019 (16.0)
    if (appVersion >= 16.0) {
        var cmds160 = {
            "PREFS_SCRIPTS_EXPRESSIONS"               : 3131,
            "ADD_FONTS_FROM_ADOBE"                 	  : 4017, // REPLACES "ADD_FONTS_FROM_TYPEKIT": 4017,
            // "SAVE_AS_CC13"						  : 4035, // REMOVED?
            "SAVE_AS_CC14"                         	  : 4048,
            "CA_FILL_LAYER"                           : 4049,
            "TAFFY_TIME_HEIR"                         : 4150,
            "CREATE_INTRO"                            : 4151,
            "CREATE_OUTRO"                            : 4152,
            "CREATE_PROTECTED_REGION"                 : 4153,
            "ENABLE_PROTECTED_REGION"                 : 4154,
            "IMPORT_GUIDES"                           : 4158,
            "EXPORT_GUIDES"                           : 4159,
            "ENABLE_EXPRESSIONS"                   	  : 10450,
            "DISABLE_EXPRESSIONS"                     : 10451,
            "GENERATE_LAYER_MARKERS_FROM_AUDIO_BEATS" : 10502,
            "GENERATE_LAYER_MARKERS_FROM_AUDIO_EVENTS": 10503,
            "SYNC_PROPERTY_TO_AUDIO_BEATS"            : 10504,
        }
    }
    // NOTE: Commands added in AE 2020 (17.0)
    if (appVersion >= 17.0) {
        var cmds170 = {
            "MOVE_TO_TOP"                          	  : 2016, // REPLACES "BRINGTO_FRONT": 2016,
            "MOVE_TO_BOTTOM"                          : 2017, // REPLACES "SENDTO_BACK": 2017,
            "MOVE_UP"                                 : 2018, // REPLACES "BRING_FORWARD": 2018,
            "MOVE_DOWN"                               : 2019, // REPLACES "SEND_BACKWARD": 2019,
            "ABOUT"                               	  : 2073,
            "EDIT_PROPERTIES"                      	  : 2644,
            "CREATE_CAMERA_FROM_3D_VIEW"               : 2645,
            "PREFS_CAMERA_3D"                                : 3132
            // "SAVE_AS_CS_PREVIOUS1"           	  : 3841 // REMOVED?
            // "SAVE_AS_CC14"                         : 4048 // REMOVED?
        }
    }
})()
