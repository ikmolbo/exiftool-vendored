import { ExifDate, ExifTime, ExifDateTime, ExifTimeZoneOffset } from "./DateTime";
export interface APP0Tags {
    /** ☆☆☆   14797 */
    OcadRevision: number;
}
export interface APP1Tags {
    /** ☆☆☆   "170 128 128" */
    AboveColor: string;
    /** ☆☆☆   "20.0 C" */
    AtmosphericTemperature: string;
    /** ☆☆☆   0.006569 */
    AtmosphericTransAlpha1: number;
    /** ☆☆☆   0.01262 */
    AtmosphericTransAlpha2: number;
    /** ☆☆☆   -0.002276 */
    AtmosphericTransBeta1: number;
    /** ☆☆☆   -0.00667 */
    AtmosphericTransBeta2: number;
    /** ☆☆☆   1.9 */
    AtmosphericTransX: number;
    /** ☆☆☆   "50 128 128" */
    BelowColor: string;
    /** ☆☆☆   "FLIR B335" */
    CameraModel: string;
    /** ☆☆☆   "45610-2000X1" */
    CameraPartNumber: string;
    /** ☆☆☆   456001661 */
    CameraSerialNumber: number;
    /** ☆☆☆   "15.0.14" */
    CameraSoftware: string;
    /** ☆☆☆   "150.0 C" */
    CameraTemperatureMaxClip: string;
    /** ☆☆☆   "150.0 C" */
    CameraTemperatureMaxSaturated: string;
    /** ☆☆☆   "120.0 C" */
    CameraTemperatureMaxWarn: string;
    /** ☆☆☆   "-40.0 C" */
    CameraTemperatureMinClip: string;
    /** ☆☆☆   "-60.0 C" */
    CameraTemperatureMinSaturated: string;
    /** ☆☆☆   "-20.0 C" */
    CameraTemperatureMinWarn: string;
    /** ☆☆☆   "120.0 C" */
    CameraTemperatureRangeMax: string;
    /** ☆☆☆   "-20.0 C" */
    CameraTemperatureRangeMin: string;
    /** ☆☆☆   "ATAU_RBFO" */
    CreatorSoftware: string;
    /** ☆☆☆   {"year":2012,"month":1,"day":30,"hour":19,"minute":3,"second":56,"millis":0} */
    DateTimeGenerated: ExifDateTime;
    /** ☆☆☆   {"year":2011,"month":6,"day":16,"hour":15,"minute":8,"second":36,"tzoffsetMinut… */
    DateTimeOriginal: ExifDateTime;
    /** ☆☆☆   "(Binary data 1094918 bytes, use -b option to extract)" */
    EmbeddedImage: string;
    /** ☆☆☆   768 */
    EmbeddedImageHeight: number;
    /** ☆☆☆   "PNG" */
    EmbeddedImageType: string;
    /** ☆☆☆   1024 */
    EmbeddedImageWidth: number;
    /** ☆☆☆   0.95 */
    Emissivity: number;
    /** ☆☆☆   "25.0 deg" */
    FieldOfView: string;
    /** ☆☆☆   "N/A" */
    FilterModel: string;
    /** ☆☆☆   undefined */
    FilterPartNumber: string;
    /** ☆☆☆   "00000000" */
    FilterSerialNumber: string;
    /** ☆☆☆   "2.9 m" */
    FocusDistance: string;
    /** ☆☆☆   1432 */
    FocusStepCount: number;
    /** ☆☆☆   "WGS84" */
    GPSMapDatum: string;
    /** ☆☆☆   "20.0 C" */
    IRWindowTemperature: string;
    /** ☆☆☆   1 */
    IRWindowTransmission: number;
    /** ☆☆☆   "100 128 128" */
    Isotherm1Color: string;
    /** ☆☆☆   "100 110 240" */
    Isotherm2Color: string;
    /** ☆☆☆   "Location" */
    Label0: string;
    /** ☆☆☆   "Equipment" */
    Label1: string;
    /** ☆☆☆   "Type" */
    Label2: string;
    /** ☆☆☆   "Nom load" */
    Label3: string;
    /** ☆☆☆   "Actual load" */
    Label4: string;
    /** ☆☆☆   "Fault" */
    Label5: string;
    /** ☆☆☆   "Recommendation" */
    Label6: string;
    /** ☆☆☆   "FOL18" */
    LensModel: string;
    /** ☆☆☆   1196456 */
    LensPartNumber: string;
    /** ☆☆☆   326700727 */
    LensSerialNumber: string;
    /** ☆☆☆   1 */
    Meas1Label: number;
    /** ☆☆☆   "80 60" */
    Meas1Params: string;
    /** ☆☆☆   "Spot" */
    Meas1Type: string;
    /** ☆☆☆   "Ar2" */
    Meas2Label: string;
    /** ☆☆☆   "156 87 12 12" */
    Meas2Params: string;
    /** ☆☆☆   "Area" */
    Meas2Type: string;
    /** ☆☆☆   "1.00 m" */
    ObjectDistance: string;
    /** ☆☆☆   -19 */
    OffsetX: number;
    /** ☆☆☆   -15 */
    OffsetY: string;
    /** ☆☆☆   "67 216 98" */
    OverflowColor: string;
    /** ☆☆☆   "(Binary data 672 bytes, use -b option to extract)" */
    Palette: string;
    /** ☆☆☆   224 */
    PaletteColors: number;
    /** ☆☆☆   "\\FlashFS\\system\\iron.pal" */
    PaletteFileName: string;
    /** ☆☆☆   undefined */
    PaletteMethod: number;
    /** ☆☆☆   "Iron" */
    PaletteName: string;
    /** ☆☆☆   2 */
    PaletteStretch: number;
    /** ☆☆☆   ".basicImgData.objectParams.emissivity" */
    Param0: string;
    /** ☆☆☆   64 */
    PiPX1: number;
    /** ☆☆☆   255 */
    PiPX2: number;
    /** ☆☆☆   48 */
    PiPY1: number;
    /** ☆☆☆   191 */
    PiPY2: number;
    /** ☆☆☆   1399.9 */
    PlanckB: number;
    /** ☆☆☆   1 */
    PlanckF: number;
    /** ☆☆☆   -6029 */
    PlanckO: number;
    /** ☆☆☆   15076.116 */
    PlanckR1: number;
    /** ☆☆☆   0.010758856 */
    PlanckR2: number;
    /** ☆☆☆   "(Binary data 60744 bytes, use -b option to extract)" */
    RawThermalImage: string;
    /** ☆☆☆   240 */
    RawThermalImageHeight: number;
    /** ☆☆☆   "PNG" */
    RawThermalImageType: string;
    /** ☆☆☆   320 */
    RawThermalImageWidth: number;
    /** ☆☆☆   20224 */
    RawValueMedian: number;
    /** ☆☆☆   1968 */
    RawValueRange: number;
    /** ☆☆☆   2.21253967285156 */
    Real2IR: number;
    /** ☆☆☆   "20.0 C" */
    ReflectedApparentTemperature: string;
    /** ☆☆☆   "50.0 %" */
    RelativeHumidity: string;
    /** ☆☆☆   "41 110 240" */
    UnderflowColor: string;
    /** ☆☆☆   "asdl;kflkj" */
    Value0: string;
    /** ☆☆☆   "Lighting Panel" */
    Value1: string;
    /** ☆☆☆   "(Part #)" */
    Value2: string;
    /** ☆☆☆   50 */
    Value3: number;
    /** ☆☆☆   40 */
    Value4: number;
    /** ☆☆☆   "(  )" */
    Value5: string;
    /** ☆☆☆   "Check load" */
    Value6: string;
}
export interface APP12Tags {
    /** ☆☆☆   256 */
    Again: number;
    /** ☆☆☆   2 */
    Aperture: number;
    /** ☆☆☆   3243 */
    B5100: number;
    /** ☆☆☆   216 */
    BHL: number;
    /** ☆☆☆   255 */
    BHighLight: number;
    /** ☆☆☆   86 */
    BMean: number;
    /** ☆☆☆   3 */
    BSD: number;
    /** ☆☆☆   1 */
    BSd: number;
    /** ☆☆☆   1908 */
    BStrobe: number;
    /** ☆☆☆   undefined */
    Balance: number;
    /** ☆☆☆   2049 */
    Bgain: number;
    /** ☆☆☆   32 */
    Blk0: number;
    /** ☆☆☆   32 */
    Blk1: number;
    /** ☆☆☆   3 */
    Boff: number;
    /** ☆☆☆   33 */
    CAM1: number;
    /** ☆☆☆   33 */
    CAM2: number;
    /** ☆☆☆   160 */
    CAM3: number;
    /** ☆☆☆   32 */
    CAM4: number;
    /** ☆☆☆   224 */
    CAM5: number;
    /** ☆☆☆   80 */
    CAM6: number;
    /** ☆☆☆   86 */
    CAM7: number;
    /** ☆☆☆   143 */
    CAM8: number;
    /** ☆☆☆   1 */
    CBal: number;
    /** ☆☆☆   21083278 */
    COLOR1: number;
    /** ☆☆☆   18132941 */
    COLOR2: number;
    /** ☆☆☆   17387092 */
    COLOR3: number;
    /** ☆☆☆   5 */
    COLOR4: number;
    /** ☆☆☆   "AC100" */
    CameraType: string;
    /** ☆☆☆   2 */
    Case: number;
    /** ☆☆☆   1 */
    Color: number;
    /** ☆☆☆   1 */
    ColorMode: number;
    /** ☆☆☆   undefined */
    ContTake: number;
    /** ☆☆☆   6052 */
    EXP1: number;
    /** ☆☆☆   33 */
    EXP2: number;
    /** ☆☆☆   237 */
    EXP3: number;
    /** ☆☆☆   0.48 */
    ExposRatio: number;
    /** ☆☆☆   3413 */
    Exposure: number;
    /** ☆☆☆   "1/109" */
    ExposureTime: string;
    /** ☆☆☆   2853 */
    FCS1: number;
    /** ☆☆☆   2699 */
    FCS2: number;
    /** ☆☆☆   2849 */
    FCS3: number;
    /** ☆☆☆   218 */
    FCS4: number;
    /** ☆☆☆   214 */
    FCS5: number;
    /** ☆☆☆   3 */
    FCS6: number;
    /** ☆☆☆   3 */
    FCS7: number;
    /** ☆☆☆   176.3 */
    FMean: number;
    /** ☆☆☆   8 */
    FNumber: number;
    /** ☆☆☆   1 */
    FinalRatio: number;
    /** ☆☆☆   "v2.2.16" */
    FirmwareVersion: string;
    /** ☆☆☆   "On" */
    Flash: string;
    /** ☆☆☆   10 */
    FlashTime: number;
    /** ☆☆☆   "F2.8" */
    Fnumber: string;
    /** ☆☆☆   2 */
    FocusMode: number;
    /** ☆☆☆   136 */
    FocusPos: number;
    /** ☆☆☆   2152 */
    GBgain: number;
    /** ☆☆☆   7 */
    GBoff: number;
    /** ☆☆☆   255 */
    GHL: number;
    /** ☆☆☆   255 */
    GHighLight: number;
    /** ☆☆☆   105 */
    GMean: number;
    /** ☆☆☆   2152 */
    GRgain: number;
    /** ☆☆☆   7 */
    GRoff: number;
    /** ☆☆☆   4 */
    GSD: number;
    /** ☆☆☆   1 */
    GSd: number;
    /** ☆☆☆   85 */
    Gain: number;
    /** ☆☆☆   undefined */
    Gamma: number;
    /** ☆☆☆   "AGFA DIGITAL CAMERA" */
    ID: string;
    /** ☆☆☆   35761 */
    IMbb: number;
    /** ☆☆☆   33709 */
    IMbg: number;
    /** ☆☆☆   32929 */
    IMbr: number;
    /** ☆☆☆   33346 */
    IMgb: number;
    /** ☆☆☆   35931 */
    IMgg: number;
    /** ☆☆☆   33122 */
    IMgr: number;
    /** ☆☆☆   32721 */
    IMrb: number;
    /** ☆☆☆   33975 */
    IMrg: number;
    /** ☆☆☆   35704 */
    IMrr: number;
    /** ☆☆☆   "1152x864" */
    ImageSize: string;
    /** ☆☆☆   130432 */
    JPEG1: number;
    /** ☆☆☆   257 */
    MTR1: number;
    /** ☆☆☆   214 */
    MTR2: number;
    /** ☆☆☆   1 */
    MTRX1: number;
    /** ☆☆☆   "Off" */
    Macro: string;
    /** ☆☆☆   " 10.1" */
    Mean: string;
    /** ☆☆☆   20480 */
    MotorPos: number;
    /** ☆☆☆   10 */
    Offset: number;
    /** ☆☆☆   87648 */
    PicLen: number;
    /** ☆☆☆   undefined */
    Protect: number;
    /** ☆☆☆   97 */
    Quality: number;
    /** ☆☆☆   5410 */
    R5100: number;
    /** ☆☆☆   247 */
    RHL: number;
    /** ☆☆☆   255 */
    RHighLight: number;
    /** ☆☆☆   102 */
    RMean: number;
    /** ☆☆☆   4 */
    RSD: number;
    /** ☆☆☆   1 */
    RSd: number;
    /** ☆☆☆   5896 */
    RStrobe: number;
    /** ☆☆☆   3 */
    Resolution: number;
    /** ☆☆☆   1887 */
    Rgain: number;
    /** ☆☆☆   4 */
    Roff: number;
    /** ☆☆☆   "8259,0,14bfe,a184,11987,1e4f1,0,7c0000,40b60000,56a05e6,616061a,5fb0581,b738,1… */
    S0: string;
    /** ☆☆☆   139 */
    STB1: number;
    /** ☆☆☆   undefined */
    STB2: number;
    /** ☆☆☆   262 */
    STB3: number;
    /** ☆☆☆   14 */
    STB4: number;
    /** ☆☆☆   undefined */
    STB5: number;
    /** ☆☆☆   "#00000001" */
    SerialNumber: string;
    /** ☆☆☆   undefined */
    StrobeTime: number;
    /** ☆☆☆   "3e2,0,0,16788,92,11e6b" */
    T0: string;
    /** ☆☆☆   344 */
    TagB: number;
    /** ☆☆☆   92 */
    TagQ: number;
    /** ☆☆☆   153 */
    TagR: number;
    /** ☆☆☆   4016 */
    ThmLen: number;
    /** ☆☆☆   "1.70C-A0407B" */
    Version: string;
    /** ☆☆☆   2 */
    WB1: number;
    /** ☆☆☆   5528 */
    WB2: number;
    /** ☆☆☆   "285,7" */
    WB3: string;
    /** ☆☆☆   "216,6" */
    WB4: string;
    /** ☆☆☆   undefined */
    WB5: number;
    /** ☆☆☆   undefined */
    WB6: number;
    /** ☆☆☆   4054 */
    YLevel: number;
    /** ☆☆☆   2209 */
    YTarget: number;
    /** ☆☆☆   "x1.0" */
    Zoom: string;
    /** ☆☆☆   9 */
    ZoomPos: number;
}
export interface APP14Tags {
    /** ☆☆☆   "[14]" */
    APP14Flags0: string;
    /** ☆☆☆   "(none)" */
    APP14Flags1: string;
    /** ☆☆☆   "YCbCr" */
    ColorTransform: string;
    /** ☆☆☆   100 */
    DCTEncodeVersion: number;
}
export interface APP4Tags {
    /** ☆☆☆   776 */
    PreviewImageHeight: number;
    /** ☆☆☆   1296 */
    PreviewImageWidth: number;
    /** ☆☆☆   85 */
    PreviewQuality: number;
}
export interface CompositeTags {
    /** ☆☆☆ ✔ "Off" */
    AdvancedSceneMode: string;
    /** ☆☆☆ ✔ "Off" */
    AutoFocus: string;
    /** ☆☆☆ ✔ "8.7 Mbps" */
    AvgBitrate: string;
    /** ☆☆☆ ✔ 1.557409 */
    BlueBalance: number;
    /** ☆☆☆ ✔ "[Red,Green][Green,Blue]" */
    CFAPattern: string;
    /** ★☆☆ ✔ "0.005 mm" */
    CircleOfConfusion: string;
    /** ☆☆☆ ✔ undefined */
    ConditionalFEC: number;
    /** ☆☆☆ ✔ "0.27 m (0.88 - 1.16 m)" */
    DOF: string;
    /** ☆☆☆   {"year":2005,"month":11,"day":19} */
    DateCreated: ExifDate;
    /** ☆☆☆ ✔ {"year":2014,"month":10,"day":31,"hour":13,"minute":15,"second":35,"millis":0} */
    DateTimeCreated: ExifDateTime;
    /** ☆☆☆ ✔ {"year":2016,"month":8,"day":12,"hour":13,"minute":28,"second":50,"millis":0} */
    DigitalCreationDateTime: ExifDateTime;
    /** ☆☆☆   "1.38x" */
    DigitalZoom: string;
    /** ☆☆☆ ✔ "Continuous Shooting" */
    DriveMode: string;
    /** ☆☆☆ ✔ "Not attached" */
    ExtenderStatus: string;
    /** ★☆☆ ✔ "53.0 deg" */
    FOV: string;
    /** ☆☆☆ ✔ "100-0285" */
    FileNumber: string;
    /** ☆☆☆ ✔ "Built-In Flash" */
    FlashType: string;
    /** ★★★ ✔ "7.3 mm" */
    FocalLength35efl: string;
    /** ☆☆☆ ✔ "6.10 m" */
    FocusDistance2: string;
    /** ☆☆☆ ✔ "0 m Above Sea Level" */
    GPSAltitude: string;
    /** ☆☆☆ ✔ {"year":2002,"month":12,"day":8,"hour":12,"minute":0,"second":0,"tzoffsetMinute… */
    GPSDateTime: ExifDateTime;
    /** ☆☆☆ ✔ 59.94721111 */
    GPSLatitude: number;
    /** ☆☆☆ ✔ 30.19316389 */
    GPSLongitude: number;
    /** ☆☆☆ ✔ "0.00000000 N, 0.00000000 E" */
    GPSPosition: string;
    /** ★☆☆ ✔ "2.36 m" */
    HyperfocalDistance: string;
    /** ☆☆☆ ✔ 141 */
    ISO: number;
    /** ☆☆☆ ✔ 3424 */
    ImageHeight: number;
    /** ☆☆☆ ✔ 3424 */
    ImageWidth: number;
    /** ☆☆☆ ✔ "6.1 - 61.0 mm" */
    Lens: string;
    /** ☆☆☆ ✔ "6.1 - 61.0 mm (35 mm equivalent: 39.8 - 398.4 mm)" */
    Lens35efl: string;
    /** ☆☆☆ ✔ "Unknown 6-61mm" */
    LensID: string;
    /** ☆☆☆ ✔ "105mm f/2.8 AF" */
    LensSpec: string;
    /** ★★☆ ✔ 7.9 */
    LightValue: number;
    /** ★★★ ✔ 0.000064 */
    Megapixels: number;
    /** ☆☆☆   "10.3 um" */
    PeakSpectralSensitivity: string;
    /** ☆☆☆ ✔ "1536x1024" */
    PreviewImageSize: string;
    /** ☆☆☆ ✔ 2.294406 */
    RedBalance: number;
    /** ☆☆☆ ✔ "Off" */
    RedEyeReduction: string;
    /** ☆☆☆   -1 */
    RicohPitch: number;
    /** ☆☆☆   -2 */
    RicohRoll: number;
    /** ☆☆☆ ✔ undefined */
    Rotation: number;
    /** ☆☆☆ ✔ "1 days 3:22:16" */
    RunTimeSincePowerUp: ExifTime;
    /** ★☆☆ ✔ 6.6 */
    ScaleFactor35efl: number;
    /** ☆☆☆ ✔ "Program AE" */
    ShootingMode: string;
    /** ☆☆☆ ✔ "1st-curtain sync" */
    ShutterCurtainHack: string;
    /** ★★★ ✔ "1/30" */
    ShutterSpeed: string;
    /** ☆☆☆ ✔ {"year":2015,"month":2,"day":14,"hour":16,"minute":36,"second":19,"millis":718} */
    SubSecCreateDate: ExifDateTime;
    /** ☆☆☆ ✔ {"year":2015,"month":2,"day":14,"hour":16,"minute":36,"second":19,"millis":718} */
    SubSecDateTimeOriginal: ExifDateTime;
    /** ☆☆☆ ✔ {"year":2009,"month":2,"day":21,"hour":16,"minute":18,"second":0,"millis":100} */
    SubSecModifyDate: ExifDateTime;
    /** ☆☆☆ ✔ "2338 1019 1019 1587" */
    WB_RGGBLevels: string;
}
export interface EXIFTags {
    /** ★☆☆ ✔ 2.6 */
    ApertureValue: number;
    /** ☆☆☆ ✔ "@????@" */
    Artist: string;
    /** ☆☆☆ ✔ [8,8,8] */
    BitsPerSample: number[];
    /** ☆☆☆ ✔ 1 */
    BlackLevel1: number;
    /** ☆☆☆ ✔ 4 */
    BlackLevel2: number;
    /** ☆☆☆ ✔ 12 */
    BlackLevel3: number;
    /** ☆☆☆ ✔ 128 */
    BlackLevelBlue: number;
    /** ☆☆☆ ✔ 128 */
    BlackLevelGreen: number;
    /** ☆☆☆ ✔ 128 */
    BlackLevelRed: number;
    /** ☆☆☆ ✔ 8.717925387 */
    BrightnessValue: number;
    /** ☆☆☆ ✔ "0 1 1 2" */
    CFAPattern2: string;
    /** ☆☆☆ ✔ "2 2" */
    CFARepeatPatternDim: string;
    /** ☆☆☆ ✔ "[Green,Blue][Red,Green]" */
    CR2CFAPattern: string;
    /** ☆☆☆ ✔ "22 -128 0 0 0 128 128 256 384 384 512 640 1152 1152 1152 1024 896 768 640 640 … */
    ChromaticAberrationCorrParams: string;
    /** ★★★ ✔ "sRGB" */
    ColorSpace: string;
    /** ★★★ ✔ "Y, Cb, Cr, -" */
    ComponentsConfiguration: string;
    /** ★★☆ ✔ 1 */
    CompressedBitsPerPixel: number;
    /** ★★★ ✔ "JPEG (old-style)" */
    Compression: string;
    /** ★☆☆ ✔ "Normal" */
    Contrast: string;
    /** ☆☆☆ ✔ "Copyrights 2009 Acer Incorporate" */
    Copyright: string;
    /** ★★★ ✔ {"year":2005,"month":1,"day":27,"hour":19,"minute":48,"second":50,"millis":0} */
    CreateDate: ExifDateTime;
    /** ★★☆ ✔ "Normal" */
    CustomRendered: string;
    /** ☆☆☆ ✔ "(Binary data 4 bytes, use -b option to extract)" */
    DeviceSettingDescription: string;
    /** ★★☆ ✔ 1 */
    DigitalZoomRatio: number;
    /** ☆☆☆ ✔ "11 32 4 -36 -83 -142 -208 -286 -363 -444 -521 -598 0 0 0 0 0" */
    DistortionCorrParams: string;
    /** ☆☆☆   undefined */
    DocumentName: string;
    /** ★★★ ✔ 1704 */
    ExifImageHeight: number;
    /** ★★★ ✔ 2272 */
    ExifImageWidth: number;
    /** ★★★ ✔ "0220" */
    ExifVersion: string;
    /** ★★☆ ✔ "+1.3" */
    ExposureCompensation: number;
    /** ☆☆☆ ✔ 1 */
    ExposureIndex: number;
    /** ★★☆ ✔ "Auto" */
    ExposureMode: string;
    /** ★★☆ ✔ "Program AE" */
    ExposureProgram: string;
    /** ★★☆ ✔ "Digital Camera" */
    FileSource: string;
    /** ☆☆☆   4 */
    FlashEnergy: number;
    /** ★★★ ✔ "0100" */
    FlashpixVersion: string;
    /** ★★★ ✔ "7.3 mm" */
    FocalLength: string;
    /** ★☆☆ ✔ "75 mm" */
    FocalLengthIn35mmFormat: string;
    /** ☆☆☆ ✔ "inches" */
    FocalPlaneResolutionUnit: string;
    /** ☆☆☆ ✔ 1 */
    FocalPlaneXResolution: number;
    /** ☆☆☆ ✔ 2 */
    FocalPlaneYResolution: number;
    /** ☆☆☆ ✔ "Below Sea Level" */
    GPSAltitudeRef: string;
    /** ☆☆☆   "Berlin-Tegel-Terminal A 0-15" */
    GPSAreaInformation: string;
    /** ☆☆☆   1.2 */
    GPSDOP: number;
    /** ☆☆☆ ✔ {"year":2002,"month":12,"day":8} */
    GPSDateStamp: ExifDate;
    /** ☆☆☆ ✔ 274.8004158 */
    GPSDestBearing: number;
    /** ☆☆☆ ✔ "True North" */
    GPSDestBearingRef: string;
    /** ☆☆☆   "undef" */
    GPSDestDistance: string;
    /** ☆☆☆   "Kilometers" */
    GPSDestDistanceRef: string;
    /** ☆☆☆   "Differential Corrected" */
    GPSDifferential: string;
    /** ☆☆☆ ✔ "25 m" */
    GPSHPositioningError: string;
    /** ☆☆☆ ✔ 264.3684211 */
    GPSImgDirection: number;
    /** ☆☆☆ ✔ "True North" */
    GPSImgDirectionRef: string;
    /** ☆☆☆ ✔ "South" */
    GPSLatitudeRef: string;
    /** ☆☆☆ ✔ "West" */
    GPSLongitudeRef: string;
    /** ☆☆☆   "3-Dimensional Measurement" */
    GPSMeasureMode: string;
    /** ☆☆☆   "GPS" */
    GPSProcessingMethod: string;
    /** ☆☆☆   7 */
    GPSSatellites: string;
    /** ☆☆☆ ✔ 0.49 */
    GPSSpeed: number;
    /** ☆☆☆ ✔ "km/h" */
    GPSSpeedRef: string;
    /** ☆☆☆ ✔ "Measurement Active" */
    GPSStatus: string;
    /** ☆☆☆ ✔ {"hour":12,"minute":0,"second":0,"tzoffsetMinutes":0,"millis":0} */
    GPSTimeStamp: ExifTime;
    /** ☆☆☆   314 */
    GPSTrack: number;
    /** ☆☆☆   "True North" */
    GPSTrackRef: string;
    /** ☆☆☆ ✔ "2.0.0.0" */
    GPSVersionID: string;
    /** ☆☆☆ ✔ "Low gain up" */
    GainControl: string;
    /** ☆☆☆ ✔ 1 */
    HighISOMultiplierBlue: number;
    /** ☆☆☆ ✔ 1 */
    HighISOMultiplierGreen: number;
    /** ☆☆☆ ✔ 1 */
    HighISOMultiplierRed: number;
    /** ☆☆☆ ✔ "iPhone (iPhone OS 8.1.2)" */
    HostComputer: string;
    /** ☆☆☆   100 */
    ISOSpeed: number;
    /** ★☆☆ ✔ "DIGITAL CAMERA     " */
    ImageDescription: string;
    /** ☆☆☆ ✔ "b6cbe2dd40d4d9de189b18448524a417" */
    ImageUniqueID: string;
    /** ★★★ ✔ "R98 - DCF basic file (sRGB)" */
    InteropIndex: string;
    /** ★★★ ✔ "0100" */
    InteropVersion: string;
    /** ☆☆☆ ✔ "(Binary data 1114996 bytes, use -b option to extract)" */
    JpgFromRaw: string;
    /** ☆☆☆ ✔ 1114996 */
    JpgFromRawLength: number;
    /** ☆☆☆ ✔ 786432 */
    JpgFromRawStart: number;
    /** ☆☆☆ ✔ "3.3mm f/2.4" */
    LensInfo: string;
    /** ☆☆☆ ✔ "Apple" */
    LensMake: string;
    /** ☆☆☆ ✔ "11 0 32 144 352 640 1040 1536 2144 2848 3600 4400 0 0 0 0 0" */
    LightFalloffParams: string;
    /** ★★☆ ✔ "Flash" */
    LightSource: string;
    /** ☆☆☆ ✔ 2626 */
    LinearityLimitBlue: number;
    /** ☆☆☆ ✔ 2626 */
    LinearityLimitGreen: number;
    /** ☆☆☆ ✔ 2626 */
    LinearityLimitRed: number;
    /** ★★★ ✔ "acer" */
    Make: string;
    /** ☆☆☆   "(Binary data 688 bytes, use -b option to extract)" */
    MakerNoteMinolta3: string;
    /** ☆☆☆   "(Binary data 3072 bytes, use -b option to extract)" */
    MakerNoteSamsung1a: string;
    /** ☆☆☆   "(Binary data 66 bytes, use -b option to extract)" */
    MakerNoteUnknownBinary: string;
    /** ☆☆☆   "(Binary data 2560 bytes, use -b option to extract)" */
    MakerNoteUnknownText: string;
    /** ★★☆ ✔ 2.8 */
    MaxApertureValue: number;
    /** ★★★ ✔ "Center-weighted average" */
    MeteringMode: string;
    /** ★★★ ✔ "CI-8330" */
    Model: string;
    /** ★★★ ✔ {"year":2005,"month":1,"day":27,"hour":19,"minute":48,"second":50,"millis":0} */
    ModifyDate: ExifDateTime;
    /** ☆☆☆   1 */
    Noise: number;
    /** ☆☆☆ ✔ 4196 */
    OffsetSchema: number;
    /** ★★★ ✔ "Horizontal (normal)" */
    Orientation: string;
    /** ☆☆☆ ✔ "(Binary data 2400 bytes, use -b option to extract)" */
    OtherImage: string;
    /** ☆☆☆ ✔ 2400 */
    OtherImageLength: number;
    /** ☆☆☆ ✔ 1274 */
    OtherImageStart: number;
    /** ☆☆☆ ✔ "Jonathan Crowther" */
    OwnerName: string;
    /** ☆☆☆ ✔ "(Binary data 2060 bytes, use -b option to extract)" */
    Padding: string;
    /** ☆☆☆   "Reflective" */
    PageName: string;
    /** ☆☆☆ ✔ "0330" */
    PanasonicRawVersion: string;
    /** ☆☆☆ ✔ "YCbCr" */
    PhotometricInterpretation: string;
    /** ☆☆☆ ✔ "Chunky" */
    PlanarConfiguration: string;
    /** ☆☆☆ ✔ {"year":2015,"month":6,"day":2,"hour":9,"minute":56,"second":1,"millis":0} */
    PreviewDateTime: ExifDateTime;
    /** ☆☆☆ ✔ "(Binary data 1794122 bytes, use -b option to extract)" */
    PreviewImage: string;
    /** ☆☆☆ ✔ 1794122 */
    PreviewImageLength: number;
    /** ☆☆☆ ✔ 70744 */
    PreviewImageStart: number;
    /** ☆☆☆   "0.64 0.33 0.3 0.6 0.15 0.06" */
    PrimaryChromaticities: string;
    /** ☆☆☆ ✔ "ACD Systems Digital Imaging" */
    ProcessingSoftware: string;
    /** ☆☆☆   1 */
    Rating: number;
    /** ☆☆☆   20 */
    RatingPercent: number;
    /** ☆☆☆ ✔ 928768 */
    RawDataOffset: number;
    /** ☆☆☆ ✔ "2 1728 1888" */
    RawImageSegmentation: string;
    /** ☆☆☆ ✔ 100 */
    RecommendedExposureIndex: number;
    /** ☆☆☆ ✔ "0 255 128 255 128 255" */
    ReferenceBlackWhite: string;
    /** ☆☆☆   "0220" */
    RelatedImageFileFormat: string;
    /** ☆☆☆ ✔ 1944 */
    RelatedImageHeight: number;
    /** ☆☆☆ ✔ 2592 */
    RelatedImageWidth: number;
    /** ☆☆☆   "RelatedSound" */
    RelatedSoundFile: string;
    /** ★★★ ✔ "inches" */
    ResolutionUnit: string;
    /** ☆☆☆ ✔ 60 */
    RowsPerStrip: number;
    /** ☆☆☆ ✔ 1 */
    SRawType: number;
    /** ☆☆☆ ✔ 3 */
    SamplesPerPixel: number;
    /** ★☆☆ ✔ "High" */
    Saturation: string;
    /** ★★☆ ✔ "Standard" */
    SceneCaptureType: string;
    /** ★☆☆ ✔ "Directly photographed" */
    SceneType: string;
    /** ★☆☆ ✔ "One-chip color area" */
    SensingMethod: string;
    /** ☆☆☆ ✔ "Recommended Exposure Index" */
    SensitivityType: string;
    /** ☆☆☆ ✔ 3432 */
    SensorBottomBorder: number;
    /** ☆☆☆ ✔ 3440 */
    SensorHeight: number;
    /** ☆☆☆ ✔ 8 */
    SensorLeftBorder: number;
    /** ☆☆☆ ✔ 3432 */
    SensorRightBorder: number;
    /** ☆☆☆ ✔ 8 */
    SensorTopBorder: number;
    /** ☆☆☆ ✔ 3472 */
    SensorWidth: number;
    /** ★☆☆ ✔ "Hard" */
    Sharpness: string;
    /** ★☆☆ ✔ 0.7 */
    ShutterSpeedValue: string;
    /** ★★☆ ✔ "1.0004.2A" */
    Software: string;
    /** ☆☆☆ ✔ "Sony Compressed RAW" */
    SonyRawFileType: string;
    /** ☆☆☆   169100 */
    SpatialFrequencyResponse: number;
    /** ☆☆☆   100 */
    StandardOutputSensitivity: number;
    /** ☆☆☆ ✔ 9600 */
    StripByteCounts: number;
    /** ☆☆☆ ✔ 796 */
    StripOffsets: number;
    /** ☆☆☆ ✔ "1\u0000" */
    SubSecTime: number;
    /** ☆☆☆ ✔ 718 */
    SubSecTimeDigitized: number;
    /** ☆☆☆ ✔ 718 */
    SubSecTimeOriginal: number;
    /** ☆☆☆ ✔ "Full-resolution Image" */
    SubfileType: string;
    /** ☆☆☆ ✔ "1836 859 484 484" */
    SubjectArea: string;
    /** ☆☆☆ ✔ "10 m" */
    SubjectDistance: string;
    /** ☆☆☆ ✔ "Unknown" */
    SubjectDistanceRange: string;
    /** ☆☆☆   1 */
    SubjectLocation: number;
    /** ★★★ ✔ "(Binary data 7536 bytes, use -b option to extract)" */
    ThumbnailImage: string;
    /** ★★★ ✔ 7536 */
    ThumbnailLength: number;
    /** ★★★ ✔ 968 */
    ThumbnailOffset: number;
    /** ☆☆☆ ✔ "(Binary data 57816 bytes, use -b option to extract)" */
    ThumbnailTIFF: string;
    /** ☆☆☆   "(Binary data 1368 bytes, use -b option to extract)" */
    TransferFunction: string;
    /** ★☆☆ ✔ "Edited with Nokia Editor Application" */
    UserComment: string;
    /** ☆☆☆ ✔ 525 */
    WBBlueLevel: number;
    /** ☆☆☆ ✔ 265 */
    WBGreenLevel: number;
    /** ☆☆☆ ✔ 527 */
    WBRedLevel: number;
    /** ★★☆ ✔ "Auto" */
    WhiteBalance: string;
    /** ☆☆☆   "0.3127 0.329" */
    WhitePoint: string;
    /** ☆☆☆ ✔ "Hugues CREPIN" */
    XPAuthor: string;
    /** ☆☆☆   "Some of the finer erosion looks almost like an organic structure" */
    XPComment: string;
    /** ☆☆☆   "N" */
    XPKeywords: string;
    /** ☆☆☆   "image thermique, thermal image" */
    XPSubject: string;
    /** ☆☆☆   "Castle Rock" */
    XPTitle: string;
    /** ★★★ ✔ 180 */
    XResolution: number;
    /** ☆☆☆   "0.299 0.587 0.114" */
    YCbCrCoefficients: string;
    /** ★★★ ✔ "Co-sited" */
    YCbCrPositioning: string;
    /** ☆☆☆   "YCbCr4:2:2 (2 1)" */
    YCbCrSubSampling: string;
    /** ★★★ ✔ 180 */
    YResolution: number;
}
export interface ExifToolTags {
    /** ★★★ ✔ "10.54" */
    ExifToolVersion: string;
    /** ☆☆☆   "Invalid EXIF text encoding for UserComment" */
    Warning: string;
}
export interface FileTags {
    /** ★★★ ✔ 3 */
    ColorComponents: number;
    /** ☆☆☆   "LEAD Technologies Inc. V1.01" */
    Comment: string;
    /** ☆☆☆ ✔ "d41d8cd98f00b204e9800998ecf8427e" */
    CurrentIPTCDigest: string;
    /** ★★★ ✔ "/home/mrm/src/test-images/Acer" */
    Directory: string;
    /** ★★★ ✔ "Baseline DCT, Huffman coding" */
    EncodingProcess: string;
    /** ★★★ ✔ "Little-endian (Intel, II)" */
    ExifByteOrder: string;
    /** ★★★ ✔ {"year":2017,"month":6,"day":20,"hour":13,"minute":1,"second":43,"tzoffsetMinut… */
    FileAccessDate: ExifDateTime;
    /** ★★★ ✔ {"year":2017,"month":4,"day":21,"hour":16,"minute":32,"second":54,"tzoffsetMinu… */
    FileInodeChangeDate: ExifDateTime;
    /** ★★★ ✔ {"year":2010,"month":6,"day":11,"hour":10,"minute":45,"second":6,"tzoffsetMinut… */
    FileModifyDate: ExifDateTime;
    /** ★★★ ✔ "AcerCI-8330.jpg" */
    FileName: string;
    /** ★★★ ✔ "rw-r--r--" */
    FilePermissions: string;
    /** ★★★ ✔ "8.5 kB" */
    FileSize: string;
    /** ★★★ ✔ "JPEG" */
    FileType: string;
    /** ★★★ ✔ "jpg" */
    FileTypeExtension: string;
    /** ★★★ ✔ "image/jpeg" */
    MIMEType: string;
    /** ☆☆☆ ✔ "0100" */
    RAFVersion: string;
}
export interface FlashPixTags {
    /** ☆☆☆   "(Binary data 12120 bytes, use -b option to extract)" */
    AudioStream: string;
    /** ☆☆☆   "Unicode UTF-16, little endian" */
    CodePage: string;
    /** ☆☆☆   "Picoss" */
    CreatingApplication: string;
    /** ☆☆☆   "30020010-C06F-D011-BD01-00609719A180" */
    ExtensionClassID: string;
    /** ☆☆☆   {"year":2003,"month":3,"day":29,"hour":17,"minute":47,"second":50,"millis":0} */
    ExtensionCreateDate: ExifDateTime;
    /** ☆☆☆   "Presized image for LCD display" */
    ExtensionDescription: string;
    /** ☆☆☆   {"year":2003,"month":3,"day":29,"hour":17,"minute":47,"second":50,"millis":0} */
    ExtensionModifyDate: ExifDateTime;
    /** ☆☆☆   "Screen Nail" */
    ExtensionName: string;
    /** ☆☆☆   "Invalidated By Modification" */
    ExtensionPersistence: string;
    /** ☆☆☆   "(Binary data 14629 bytes, use -b option to extract)" */
    ScreenNail: string;
    /** ☆☆☆   1 */
    UsedExtensionNumbers: number;
}
export interface ICC_ProfileTags {
    /** ☆☆☆ ✔ "0.14307 0.06061 0.7141" */
    BlueMatrixColumn: string;
    /** ☆☆☆ ✔ "(Binary data 2060 bytes, use -b option to extract)" */
    BlueTRC: string;
    /** ☆☆☆ ✔ "Not Embedded, Independent" */
    CMMFlags: string;
    /** ☆☆☆ ✔ "1.04788 0.02292 -0.0502 0.02959 0.99048 -0.01706 -0.00923 0.01508 0.75168" */
    ChromaticAdaptation: string;
    /** ☆☆☆ ✔ "RGB " */
    ColorSpaceData: string;
    /** ☆☆☆ ✔ "0.9642 1 0.82491" */
    ConnectionSpaceIlluminant: string;
    /** ☆☆☆ ✔ "Reflective, Glossy, Positive, Color" */
    DeviceAttributes: string;
    /** ☆☆☆ ✔ "IEC " */
    DeviceManufacturer: string;
    /** ☆☆☆ ✔ "IEC http://www.iec.ch" */
    DeviceMfgDesc: string;
    /** ☆☆☆ ✔ "sRGB" */
    DeviceModel: string;
    /** ☆☆☆ ✔ "IEC 61966-2.1 Default RGB colour space - sRGB" */
    DeviceModelDesc: string;
    /** ☆☆☆ ✔ "0.38515 0.71687 0.09708" */
    GreenMatrixColumn: string;
    /** ☆☆☆ ✔ "(Binary data 2060 bytes, use -b option to extract)" */
    GreenTRC: string;
    /** ☆☆☆ ✔ "76.03647 80 87.12462" */
    Luminance: string;
    /** ☆☆☆ ✔ "0 0 0" */
    MeasurementBacking: string;
    /** ☆☆☆ ✔ "0.999%" */
    MeasurementFlare: string;
    /** ☆☆☆ ✔ "Unknown" */
    MeasurementGeometry: string;
    /** ☆☆☆ ✔ "D65" */
    MeasurementIlluminant: string;
    /** ☆☆☆ ✔ "CIE 1931" */
    MeasurementObserver: string;
    /** ☆☆☆ ✔ "0 0 0" */
    MediaBlackPoint: string;
    /** ☆☆☆ ✔ "0.95045 1 1.08905" */
    MediaWhitePoint: string;
    /** ☆☆☆   "(Binary data 56 bytes, use -b option to extract)" */
    NativeDisplayInfo: string;
    /** ☆☆☆ ✔ "Microsoft Corporation" */
    PrimaryPlatform: string;
    /** ☆☆☆ ✔ "Lino" */
    ProfileCMMType: string;
    /** ☆☆☆ ✔ "Display Device Profile" */
    ProfileClass: string;
    /** ☆☆☆ ✔ "XYZ " */
    ProfileConnectionSpace: string;
    /** ☆☆☆ ✔ "Copyright (c) 1998 Hewlett-Packard Company" */
    ProfileCopyright: string;
    /** ☆☆☆ ✔ "HP  " */
    ProfileCreator: string;
    /** ☆☆☆ ✔ {"year":1998,"month":2,"day":9,"hour":6,"minute":49,"second":0,"millis":0} */
    ProfileDateTime: ExifDateTime;
    /** ☆☆☆ ✔ "sRGB IEC61966-2.1" */
    ProfileDescription: string;
    /** ☆☆☆   "Camera RGB Profile" */
    ProfileDescriptionML: string;
    /** ☆☆☆ ✔ "acsp" */
    ProfileFileSignature: string;
    /** ☆☆☆ ✔ "e5bb0e9867bd46cd4bbe446ebd1b7598" */
    ProfileID: number;
    /** ☆☆☆ ✔ "2.1.0" */
    ProfileVersion: string;
    /** ☆☆☆ ✔ "0.43607 0.22249 0.01392" */
    RedMatrixColumn: string;
    /** ☆☆☆ ✔ "(Binary data 2060 bytes, use -b option to extract)" */
    RedTRC: string;
    /** ☆☆☆ ✔ "Perceptual" */
    RenderingIntent: string;
    /** ☆☆☆ ✔ "Cathode Ray Tube Display" */
    Technology: string;
    /** ☆☆☆   "(Binary data 48 bytes, use -b option to extract)" */
    VideoCardGamma: string;
    /** ☆☆☆ ✔ "Reference Viewing Condition in IEC61966-2.1" */
    ViewingCondDesc: string;
    /** ☆☆☆ ✔ "19.6445 20.3718 16.8089" */
    ViewingCondIlluminant: string;
    /** ☆☆☆ ✔ "D50" */
    ViewingCondIlluminantType: string;
    /** ☆☆☆ ✔ "3.92889 4.07439 3.36179" */
    ViewingCondSurround: string;
}
export interface IPTCTags {
    /** ☆☆☆ ✔ 4 */
    ApplicationRecordVersion: number;
    /** ☆☆☆   "Seattle" */
    City: string;
    /** ☆☆☆ ✔ "UTF8" */
    CodedCharacterSet: string;
    /** ☆☆☆   "<picasastamp/>\n" */
    Contact: string;
    /** ☆☆☆   "flickr.com/frankygi © all rights reserved" */
    CopyrightNotice: string;
    /** ☆☆☆   "photo by Satoshi Kitamura" */
    Credit: string;
    /** ☆☆☆ ✔ {"year":2016,"month":8,"day":12} */
    DigitalCreationDate: ExifDate;
    /** ☆☆☆ ✔ {"hour":13,"minute":28,"second":50,"millis":0} */
    DigitalCreationTime: ExifTime;
    /** ☆☆☆ ✔ 2 */
    EnvelopeRecordVersion: number;
    /** ☆☆☆ ✔ "点像F11" */
    Keywords: string;
    /** ☆☆☆   undefined */
    ObjectName: string;
    /** ☆☆☆ ✔ "Microsoft Windows Photo Viewer 6.1.7600.16385" */
    OriginatingProgram: string;
    /** ☆☆☆   "Tagged:0, ColorClass:0, Rating:4, FrameNum:000563" */
    Prefs: string;
    /** ☆☆☆ ✔ "4.13.0" */
    ProgramVersion: string;
    /** ☆☆☆   "Renee Lanette Sims" */
    Source: string;
    /** ☆☆☆ ✔ {"hour":13,"minute":15,"second":35,"millis":0} */
    TimeCreated: ExifTime;
    /** ☆☆☆   "0 (reserved)" */
    Urgency: string;
}
export interface JFIFTags {
    /** ★☆☆ ✔ 1.01 */
    JFIFVersion: number;
}
export interface MPFTags {
    /** ☆☆☆ ✔ 640 */
    DependentImage1EntryNumber: number;
    /** ☆☆☆ ✔ 424 */
    DependentImage2EntryNumber: number;
    /** ☆☆☆   "(Binary data 66 bytes, use -b option to extract)" */
    ImageUIDList: string;
    /** ☆☆☆ ✔ "0100" */
    MPFVersion: string;
    /** ☆☆☆   "(Binary data 1098908416 bytes, use -b option to extract)" */
    MPImage1: string;
    /** ☆☆☆   "(Binary data 826278144 bytes, use -b option to extract)" */
    MPImage2: string;
    /** ☆☆☆ ✔ "(Binary data 900042 bytes, use -b option to extract)" */
    MPImage3: string;
    /** ☆☆☆ ✔ "Dependent child image" */
    MPImageFlags: string;
    /** ☆☆☆ ✔ "JPEG" */
    MPImageFormat: string;
    /** ☆☆☆ ✔ 63260 */
    MPImageLength: number;
    /** ☆☆☆ ✔ 4077353 */
    MPImageStart: number;
    /** ☆☆☆ ✔ "Large Thumbnail (VGA equivalent)" */
    MPImageType: string;
    /** ☆☆☆ ✔ 2 */
    NumberOfImages: number;
    /** ☆☆☆   1 */
    TotalFrames: number;
}
export interface MakerNotesTags {
    /** ☆☆☆   4.8 */
    AEAperture: number;
    /** ☆☆☆   8 */
    AEApertureSteps: number;
    /** ☆☆☆ ✔ "On" */
    AEBAutoCancel: string;
    /** ☆☆☆ ✔ "+0.25" */
    AEBBracketValue: number;
    /** ☆☆☆ ✔ "0,-,+" */
    AEBSequence: string;
    /** ☆☆☆ ✔ "0,-,+/Enabled" */
    AEBSequenceAutoCancel: string;
    /** ☆☆☆ ✔ "3 shots" */
    AEBShotCount: string;
    /** ☆☆☆   0.5 */
    AEBXv: number;
    /** ☆☆☆ ✔ "3F0.3" */
    AEBracketingSteps: string;
    /** ☆☆☆   "1/85" */
    AEExposureTime: string;
    /** ☆☆☆ ✔ "Off" */
    AELock: string;
    /** ☆☆☆ ✔ "AE/AF Lock" */
    AELockButton: string;
    /** ☆☆☆ ✔ "None" */
    AELockButtonPlusDials: string;
    /** ☆☆☆   3.2 */
    AEMaxAperture: number;
    /** ☆☆☆   3.4 */
    AEMaxAperture2: number;
    /** ☆☆☆   "Multi-segment" */
    AEMeteringMode: string;
    /** ☆☆☆   "Center-weighted average, Spot" */
    AEMeteringMode2: string;
    /** ☆☆☆   "8.6 8.8 9.4 9.1 9.1 9.0 9.1 8.9 9.2 9.1 9.1 8.8 9.1 8.6 10.0 9.0" */
    AEMeteringSegments: string;
    /** ☆☆☆ ✔ "Disable; 0; 8; 0" */
    AEMicroadjustment: string;
    /** ☆☆☆   23 */
    AEMinAperture: number;
    /** ☆☆☆   "1/3862" */
    AEMinExposureTime: string;
    /** ☆☆☆   "M, P or TAv" */
    AEProgramMode: string;
    /** ☆☆☆ ✔ "Normal AE" */
    AESetting: string;
    /** ☆☆☆   "Daylight Fluorescent" */
    AEWhiteBalance: string;
    /** ☆☆☆   -0.375 */
    AEXv: number;
    /** ☆☆☆   200 */
    AE_ISO: number;
    /** ☆☆☆ ✔ undefined */
    AFAccelDecelTracking: number;
    /** ☆☆☆ ✔ "Shutter/AF-On" */
    AFActivation: string;
    /** ☆☆☆   undefined */
    AFAdjustment: number;
    /** ☆☆☆ ✔ 2 */
    AFAperture: number;
    /** ☆☆☆ ✔ 42 */
    AFAreaHeight: number;
    /** ☆☆☆ ✔ "37 37 37 37 37 37 37 37 37" */
    AFAreaHeights: string;
    /** ☆☆☆   "Auto" */
    AFAreaIllumination: string;
    /** ☆☆☆ ✔ "Auto" */
    AFAreaMode: string;
    /** ☆☆☆ ✔ "Wide" */
    AFAreaModeSetting: string;
    /** ☆☆☆ ✔ "AF area selection button" */
    AFAreaSelectMethod: string;
    /** ☆☆☆ ✔ "M-Fn Button" */
    AFAreaSelectionMethod: string;
    /** ☆☆☆ ✔ 369 */
    AFAreaWidth: number;
    /** ☆☆☆ ✔ "53 53 53 53 53 53 53 53 53" */
    AFAreaWidths: string;
    /** ☆☆☆   2464 */
    AFAreaXPosition: number;
    /** ☆☆☆   632 */
    AFAreaXPosition1: number;
    /** ☆☆☆ ✔ "-54 0 53 -54 0 53 -54 0 53" */
    AFAreaXPositions: string;
    /** ☆☆☆   1632 */
    AFAreaYPosition: number;
    /** ☆☆☆   418 */
    AFAreaYPosition1: number;
    /** ☆☆☆ ✔ "-38 -38 -38 0 0 0 38 38 38" */
    AFAreaYPositions: string;
    /** ☆☆☆ ✔ "none" */
    AFAreas: string;
    /** ☆☆☆ ✔ "Emits/Fires" */
    AFAssist: string;
    /** ☆☆☆ ✔ "Emits" */
    AFAssistBeam: string;
    /** ☆☆☆ ✔ "Disabled and Not Required" */
    AFAssistLamp: string;
    /** ☆☆☆   "No" */
    AFButtonPressed: string;
    /** ☆☆☆ ✔ "Case 1" */
    AFConfigTool: string;
    /** ☆☆☆   46 */
    AFDefocus: number;
    /** ☆☆☆   "Quick mode" */
    AFDuringLiveView: string;
    /** ☆☆☆ ✔ "Off" */
    AFFineTune: string;
    /** ☆☆☆ ✔ "0 0 0" */
    AFFineTuneAdj: string;
    /** ☆☆☆ ✔ "n/a" */
    AFFineTuneIndex: string;
    /** ☆☆☆   "Off" */
    AFIlluminator: string;
    /** ☆☆☆ ✔ 240 */
    AFImageHeight: number;
    /** ☆☆☆ ✔ 320 */
    AFImageWidth: number;
    /** ☆☆☆ ✔ "0100" */
    AFInfo2Version: string;
    /** ☆☆☆   "2 ms" */
    AFIntegrationTime: string;
    /** ☆☆☆   undefined */
    AFMicroAdj: number;
    /** ☆☆☆ ✔ "Disable" */
    AFMicroAdjMode: string;
    /** ☆☆☆   undefined */
    AFMicroAdjRegisteredLenses: number;
    /** ☆☆☆ ✔ undefined */
    AFMicroAdjValue: number;
    /** ☆☆☆ ✔ "Disable; 0; 0; 0; 0" */
    AFMicroadjustment: string;
    /** ☆☆☆ ✔ "Spot" */
    AFMode: string;
    /** ☆☆☆ ✔ "No Restrictions" */
    AFModeRestrictions: string;
    /** ☆☆☆ ✔ "Disable" */
    AFOnAELockButtonSwitch: string;
    /** ☆☆☆ ✔ "AF On" */
    AFOnButton: string;
    /** ☆☆☆ ✔ "Auto AF point selection" */
    AFPoint: string;
    /** ☆☆☆ ✔ "Single AF point" */
    AFPointActivationArea: string;
    /** ☆☆☆ ✔ "Disable" */
    AFPointAreaExpansion: string;
    /** ☆☆☆   "Center (horizontal)" */
    AFPointAtShutterRelease: string;
    /** ☆☆☆ ✔ "Control-direct:disable/Main:enable" */
    AFPointAutoSelection: string;
    /** ☆☆☆ ✔ "Normal" */
    AFPointBrightness: string;
    /** ☆☆☆ ✔ "Selected (constant)" */
    AFPointDisplayDuringFocus: string;
    /** ☆☆☆ ✔ "On" */
    AFPointIllumination: string;
    /** ☆☆☆   "Center (horizontal)" */
    AFPointInFocus: string;
    /** ☆☆☆   "Fixed Center" */
    AFPointMode: string;
    /** ☆☆☆ ✔ "n/a" */
    AFPointPosition: string;
    /** ☆☆☆ ✔ "Auto" */
    AFPointSelected: string;
    /** ☆☆☆   "Center" */
    AFPointSelected2: string;
    /** ☆☆☆ ✔ "H=AF+Main/V=AF+Command" */
    AFPointSelection: string;
    /** ☆☆☆   "Normal" */
    AFPointSelectionMethod: string;
    /** ☆☆☆   "Center" */
    AFPointSetting: string;
    /** ☆☆☆ ✔ "45/Center AF point" */
    AFPointSpotMetering: string;
    /** ☆☆☆ ✔ undefined */
    AFPointSwitching: number;
    /** ☆☆☆   "Center" */
    AFPoints: string;
    /** ☆☆☆ ✔ "None" */
    AFPointsInFocus: string;
    /** ☆☆☆ ✔ "Auto (A3,A4,A5,A6,A7,B5,B6,B7,B8)" */
    AFPointsInFocus1D: string;
    /** ☆☆☆ ✔ "0,1,2,3,4,5,6" */
    AFPointsSelected: number;
    /** ☆☆☆ ✔ "Center, Upper-right, Right, Lower-right, Upper-left, Far Left, Lower-middle, N… */
    AFPointsUsed: string;
    /** ☆☆☆   -63 */
    AFPredictor: number;
    /** ☆☆☆   "Standard" */
    AFResponse: string;
    /** ☆☆☆   1 */
    AFResult: number;
    /** ☆☆☆ ✔ "Not Ready" */
    AFSearch: string;
    /** ☆☆☆   "In Focus" */
    AFStatus: string;
    /** ☆☆☆   "Front Focus (-125)" */
    AFStatusActiveSensor: string;
    /** ☆☆☆   "Back Focus (+165)" */
    AFStatusBottom: string;
    /** ☆☆☆   "Front Focus (-140)" */
    AFStatusBottomHorizontal: string;
    /** ☆☆☆   "Front Focus (-87)" */
    AFStatusBottomVertical: string;
    /** ☆☆☆   "Front Focus (-125)" */
    AFStatusCenterHorizontal: string;
    /** ☆☆☆   "Front Focus (-5)" */
    AFStatusCenterVertical: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatusFarLeft: string;
    /** ☆☆☆   "Front Focus (-159)" */
    AFStatusFarLeftHorizontal: string;
    /** ☆☆☆   "Front Focus (-102)" */
    AFStatusFarLeftVertical: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatusFarRight: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatusFarRightHorizontal: string;
    /** ☆☆☆   "Front Focus (-47)" */
    AFStatusFarRightVertical: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatusLeft: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatusLeftHorizontal: string;
    /** ☆☆☆   "Front Focus (-98)" */
    AFStatusLeftVertical: string;
    /** ☆☆☆   "Front Focus (-23)" */
    AFStatusLowerFarLeft: string;
    /** ☆☆☆   "Front Focus (-72)" */
    AFStatusLowerFarRight: string;
    /** ☆☆☆   "Back Focus (+18)" */
    AFStatusMiddleHorizontal: string;
    /** ☆☆☆   "Front Focus (-134)" */
    AFStatusNearLeft: string;
    /** ☆☆☆   "Front Focus (-106)" */
    AFStatusNearRight: string;
    /** ☆☆☆   "Back Focus (+18)" */
    AFStatusRight: string;
    /** ☆☆☆   "Front Focus (-163)" */
    AFStatusRightHorizontal: string;
    /** ☆☆☆   "Front Focus (-59)" */
    AFStatusRightVertical: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatusTop: string;
    /** ☆☆☆   "Front Focus (-105)" */
    AFStatusTopHorizontal: string;
    /** ☆☆☆   "Front Focus (-62)" */
    AFStatusTopVertical: string;
    /** ☆☆☆   "Front Focus (-156)" */
    AFStatusUpperFarLeft: string;
    /** ☆☆☆   "Front Focus (-36)" */
    AFStatusUpperFarRight: string;
    /** ☆☆☆   "Show Outside View" */
    AFStatusViewfinder: string;
    /** ☆☆☆   "Front Focus (-545)" */
    AFStatus_00_B4: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_01_C4: string;
    /** ☆☆☆   "Front Focus (-420)" */
    AFStatus_02_D4: string;
    /** ☆☆☆   "Front Focus (-454)" */
    AFStatus_03_E4: string;
    /** ☆☆☆   "Front Focus (-442)" */
    AFStatus_04_F4: string;
    /** ☆☆☆   "Front Focus (-347)" */
    AFStatus_05_G4: string;
    /** ☆☆☆   "Front Focus (-260)" */
    AFStatus_06_H4: string;
    /** ☆☆☆   "Front Focus (-582)" */
    AFStatus_07_B3: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_08_C3: string;
    /** ☆☆☆   "Front Focus (-469)" */
    AFStatus_09_D3: string;
    /** ☆☆☆   "Front Focus (-450)" */
    AFStatus_10_E3: string;
    /** ☆☆☆   "Front Focus (-428)" */
    AFStatus_11_F3: string;
    /** ☆☆☆   "Front Focus (-323)" */
    AFStatus_12_G3: string;
    /** ☆☆☆   "Front Focus (-304)" */
    AFStatus_13_H3: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_14_B2: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_15_C2: string;
    /** ☆☆☆   "Front Focus (-424)" */
    AFStatus_16_D2: string;
    /** ☆☆☆   "Front Focus (-434)" */
    AFStatus_17_E2: string;
    /** ☆☆☆   "Front Focus (-431)" */
    AFStatus_18_F2: string;
    /** ☆☆☆   "Front Focus (-378)" */
    AFStatus_19_G2: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_20_H2: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_21_C1: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_22_D1: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_23_E1: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_24_F1: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_25_G1: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_26_A7_Vertical: string;
    /** ☆☆☆   "Front Focus (-371)" */
    AFStatus_27_A6_Vertical: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_28_A5_Vertical: string;
    /** ☆☆☆   "Front Focus (-475)" */
    AFStatus_29_C7_Vertical: string;
    /** ☆☆☆   "Front Focus (-405)" */
    AFStatus_30_C6_Vertical: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_31_C5_Vertical: string;
    /** ☆☆☆   "Front Focus (-340)" */
    AFStatus_32_E7_Vertical: string;
    /** ☆☆☆   "Front Focus (-347)" */
    AFStatus_33_E6_Center_Vertical: string;
    /** ☆☆☆   "Front Focus (-8288)" */
    AFStatus_34_E5_Vertical: string;
    /** ☆☆☆   "Front Focus (-307)" */
    AFStatus_35_G7_Vertical: string;
    /** ☆☆☆   "Front Focus (-311)" */
    AFStatus_36_G6_Vertical: string;
    /** ☆☆☆   "Front Focus (-352)" */
    AFStatus_37_G5_Vertical: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_38_I7_Vertical: string;
    /** ☆☆☆   "Front Focus (-296)" */
    AFStatus_39_I6_Vertical: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_40_I5_Vertical: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_41_A7: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_42_B7: string;
    /** ☆☆☆   "Front Focus (-148)" */
    AFStatus_43_C7: string;
    /** ☆☆☆   "Front Focus (-351)" */
    AFStatus_44_D7: string;
    /** ☆☆☆   "Front Focus (-406)" */
    AFStatus_45_E7: string;
    /** ☆☆☆   "Front Focus (-348)" */
    AFStatus_46_F7: string;
    /** ☆☆☆   "Front Focus (-288)" */
    AFStatus_47_G7: string;
    /** ☆☆☆   "Front Focus (-216)" */
    AFStatus_48_H7: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_49_I7: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_50_A6: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_51_B6: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_52_C6: string;
    /** ☆☆☆   "Front Focus (-364)" */
    AFStatus_53_D6: string;
    /** ☆☆☆   "Front Focus (-400)" */
    AFStatus_54_E6_Center: string;
    /** ☆☆☆   "Front Focus (-385)" */
    AFStatus_55_F6: string;
    /** ☆☆☆   "Front Focus (-345)" */
    AFStatus_56_G6: string;
    /** ☆☆☆   "Front Focus (-267)" */
    AFStatus_57_H6: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_58_I6: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_59_A5: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_60_B5: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_61_C5: string;
    /** ☆☆☆   "Front Focus (-380)" */
    AFStatus_62_D5: string;
    /** ☆☆☆   "Front Focus (-433)" */
    AFStatus_63_E5: string;
    /** ☆☆☆   "Front Focus (-348)" */
    AFStatus_64_F5: string;
    /** ☆☆☆   "Front Focus (-353)" */
    AFStatus_65_G5: string;
    /** ☆☆☆   "Front Focus (-269)" */
    AFStatus_66_H5: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_67_I5: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_68_C11: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_69_D11: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_70_E11: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_71_F11: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_72_G11: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_73_B10: string;
    /** ☆☆☆   "Front Focus (-195)" */
    AFStatus_74_C10: string;
    /** ☆☆☆   "Front Focus (-228)" */
    AFStatus_75_D10: string;
    /** ☆☆☆   "Front Focus (-349)" */
    AFStatus_76_E10: string;
    /** ☆☆☆   "Front Focus (-388)" */
    AFStatus_77_F10: string;
    /** ☆☆☆   "Front Focus (-184)" */
    AFStatus_78_G10: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_79_H10: string;
    /** ☆☆☆   "Front Focus (-435)" */
    AFStatus_80_B9: string;
    /** ☆☆☆   "Front Focus (-386)" */
    AFStatus_81_C9: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_82_D9: string;
    /** ☆☆☆   "Front Focus (-276)" */
    AFStatus_83_E9: string;
    /** ☆☆☆   "Front Focus (-429)" */
    AFStatus_84_F9: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_85_G9: string;
    /** ☆☆☆   "Out of Focus" */
    AFStatus_86_H9: string;
    /** ☆☆☆   "Back Focus (+43)" */
    AFStatus_87_B8: string;
    /** ☆☆☆   "Back Focus (+39)" */
    AFStatus_88_C8: string;
    /** ☆☆☆   "Front Focus (-279)" */
    AFStatus_89_D8: string;
    /** ☆☆☆   "Front Focus (-392)" */
    AFStatus_90_E8: string;
    /** ☆☆☆   "Front Focus (-393)" */
    AFStatus_91_F8: string;
    /** ☆☆☆   "Front Focus (-345)" */
    AFStatus_92_G8: string;
    /** ☆☆☆   "Front Focus (-322)" */
    AFStatus_93_H8: string;
    /** ☆☆☆ ✔ undefined */
    AFTrackingSensitivity: number;
    /** ☆☆☆   "19-point" */
    AFType: string;
    /** ☆☆☆   "On" */
    AFWithShutter: string;
    /** ☆☆☆ ✔ "n/a" */
    AFZoneSelected: string;
    /** ☆☆☆ ✔ "Shooting not possible without focus" */
    AIServoContinuousShooting: string;
    /** ☆☆☆ ✔ "Equal Priority" */
    AIServoFirstImage: string;
    /** ☆☆☆ ✔ "Equal priority" */
    AIServoFirstImagePriority: string;
    /** ☆☆☆ ✔ "1: AF, 2: Tracking" */
    AIServoImagePriority: string;
    /** ☆☆☆ ✔ "Equal Priority" */
    AIServoSecondImage: string;
    /** ☆☆☆ ✔ "Equal priority" */
    AIServoSecondImagePriority: string;
    /** ☆☆☆ ✔ "Main focus point priority" */
    AIServoTrackingMethod: string;
    /** ☆☆☆ ✔ "Standard" */
    AIServoTrackingSensitivity: string;
    /** ☆☆☆ ✔ undefined */
    AccelerationTracking: number;
    /** ☆☆☆ ✔ "-1.008544087 -0.008590849015 -0.1717849637" */
    AccelerationVector: string;
    /** ☆☆☆   "358 -1" */
    Accelerometer: string;
    /** ☆☆☆ ✔ 4 */
    AccelerometerX: number;
    /** ☆☆☆ ✔ 58 */
    AccelerometerY: number;
    /** ☆☆☆ ✔ 270 */
    AccelerometerZ: number;
    /** ☆☆☆ ✔ "0000000" */
    AccessorySerialNumber: string;
    /** ☆☆☆ ✔ "NO-ACCESSORY" */
    AccessoryType: string;
    /** ☆☆☆   "+0.0" */
    ActualCompensation: string;
    /** ☆☆☆ ✔ "Off" */
    AddAspectRatioInfo: string;
    /** ☆☆☆ ✔ "Off" */
    AddOriginalDecisionData: string;
    /** ☆☆☆   "Auto Setting Mode" */
    AdjustmentMode: string;
    /** ☆☆☆   "Miniature" */
    AdvancedFilter: string;
    /** ☆☆☆ ✔ 1 */
    AdvancedSceneType: number;
    /** ☆☆☆   "4 m" */
    Altitude: string;
    /** ☆☆☆ ✔ "Standard" */
    AmbienceSelection: string;
    /** ☆☆☆ ✔ "19 C" */
    AmbientTemperature: string;
    /** ☆☆☆   "95 F" */
    AmbientTemperatureFahrenheit: string;
    /** ☆☆☆ ✔ "Off" */
    ApertureLock: string;
    /** ☆☆☆ ✔ "Disable; Closed 91; Open 1" */
    ApertureRange: string;
    /** ☆☆☆   "Prohibited" */
    ApertureRingUse: string;
    /** ☆☆☆   7 */
    ApertureSetting: number;
    /** ☆☆☆ ✔ "Enable; 1; 2; 1; 128; 48; 0; 1" */
    ApplyShootingMeteringMode: string;
    /** ☆☆☆   3 */
    ApproximateFNumber: number;
    /** ☆☆☆ ✔ "Off; 0; 0; 0" */
    ArtFilter: string;
    /** ☆☆☆ ✔ "Off; 0; 0; Partial Color 0; No Effect; 0; No Color Filter; 0; 0; 0; 0; 0; 0; 0… */
    ArtFilterEffect: string;
    /** ☆☆☆   "Normal" */
    ArtMode: string;
    /** ☆☆☆   "0 0 0" */
    ArtModeParameters: string;
    /** ☆☆☆ ✔ "0 0 4607 3455" */
    AspectFrame: string;
    /** ☆☆☆ ✔ "3:2" */
    AspectRatio: string;
    /** ☆☆☆ ✔ "Auto Bracketing" */
    AssignBktButton: string;
    /** ☆☆☆   "LCD brightness" */
    AssignFuncButton: string;
    /** ☆☆☆ ✔ "None" */
    AssignMovieRecordButton: string;
    /** ☆☆☆ ✔ "None" */
    AssignRemoteFnButton: string;
    /** ☆☆☆ ✔ "No" */
    Audio: string;
    /** ☆☆☆ ✔ "On-Shot AF only" */
    AutoAFPointColorTracking: string;
    /** ☆☆☆   "Enable" */
    AutoAFPointSelEOSiTRAF: string;
    /** ☆☆☆   "On" */
    AutoAperture: string;
    /** ☆☆☆   "None" */
    AutoBracket: string;
    /** ☆☆☆ ✔ "Flash/Speed" */
    AutoBracketModeM: string;
    /** ☆☆☆ ✔ "0,-,+" */
    AutoBracketOrder: string;
    /** ☆☆☆ ✔ "AE & Flash" */
    AutoBracketSet: string;
    /** ☆☆☆ ✔ "Off" */
    AutoBracketing: string;
    /** ☆☆☆   "Flash/Speed" */
    AutoBracketingMode: string;
    /** ☆☆☆   "AE & Flash" */
    AutoBracketingSet: string;
    /** ☆☆☆ ✔ "On" */
    AutoDistortionControl: string;
    /** ☆☆☆ ✔ "100%" */
    AutoDynamicRange: string;
    /** ☆☆☆ ✔ "On" */
    AutoExposureBracketing: string;
    /** ☆☆☆   "Off" */
    AutoFP: string;
    /** ☆☆☆ ✔ "Off" */
    AutoISO: number;
    /** ☆☆☆   1600 */
    AutoISOMax: number;
    /** ☆☆☆   "1/30 s" */
    AutoISOMinShutterSpeed: string;
    /** ☆☆☆ ✔ "Enable" */
    AutoLightingOptimizer: string;
    /** ☆☆☆ ✔ "No" */
    AutoPortraitFramed: string;
    /** ☆☆☆ ✔ "None" */
    AutoRotate: string;
    /** ☆☆☆   "Off" */
    AuxiliaryLens: string;
    /** ☆☆☆   6.7 */
    AvApertureSetting: number;
    /** ☆☆☆ ✔ "Disable" */
    AvSettingWithoutLens: string;
    /** ☆☆☆ ✔ "1024 1024 1024 1024" */
    AverageBlackLevel: string;
    /** ☆☆☆   8 */
    BWFilter: number;
    /** ☆☆☆   "Off" */
    BWMode: string;
    /** ☆☆☆ ✔ "(not set)" */
    BabyAge: string;
    /** ☆☆☆ ✔ "\u0005" */
    BabyName: string;
    /** ☆☆☆   "A0CCG1010242" */
    Barcode: string;
    /** ☆☆☆   "0100" */
    BarometerInfoVersion: string;
    /** ☆☆☆   -0.5 */
    BaseExposureCompensation: number;
    /** ☆☆☆ ✔ 50 */
    BaseISO: number;
    /** ☆☆☆ ✔ "35%" */
    BatteryLevel: string;
    /** ☆☆☆ ✔ "MB-D12 First" */
    BatteryOrder: string;
    /** ☆☆☆   "Sufficient" */
    BatteryState: string;
    /** ☆☆☆ ✔ "28.3 C" */
    BatteryTemperature: string;
    /** ☆☆☆   "8.35 V" */
    BatteryVoltage: string;
    /** ☆☆☆   "6.85 V" */
    BatteryVoltage1: string;
    /** ☆☆☆   "6.76 V" */
    BatteryVoltage2: string;
    /** ☆☆☆   "BGGR" */
    BayerPattern: string;
    /** ☆☆☆ ✔ "Off" */
    Beep: string;
    /** ☆☆☆   1 */
    BestShotMode: string;
    /** ☆☆☆ ✔ "600 600 600 600" */
    BlackLevel: string;
    /** ☆☆☆ ✔ 2209 */
    BlackMaskBottomBorder: number;
    /** ☆☆☆ ✔ 14 */
    BlackMaskLeftBorder: number;
    /** ☆☆☆ ✔ 55 */
    BlackMaskRightBorder: number;
    /** ☆☆☆ ✔ 162 */
    BlackMaskTopBorder: number;
    /** ☆☆☆   "129 128 127 128" */
    BlackPoint: string;
    /** ☆☆☆   "n/a" */
    BleachBypassToning: string;
    /** ☆☆☆   19 */
    BlueGain: string;
    /** ☆☆☆   "Off; 0; 0; 0" */
    BlurControl: string;
    /** ☆☆☆ ✔ "None" */
    BlurWarning: string;
    /** ☆☆☆   165 */
    BodyBatteryADLoad: number;
    /** ☆☆☆   178 */
    BodyBatteryADNoLoad: number;
    /** ☆☆☆   "Full" */
    BodyBatteryState: string;
    /** ☆☆☆   "9.84 V" */
    BodyBatteryVoltage1: string;
    /** ☆☆☆   "9.49 V" */
    BodyBatteryVoltage2: string;
    /** ☆☆☆   "10.02 V" */
    BodyBatteryVoltage3: string;
    /** ☆☆☆   "7.24 V" */
    BodyBatteryVoltage4: string;
    /** ☆☆☆   "RS1 :V01290000 " */
    BodyFirmware: string;
    /** ☆☆☆ ✔ 1.005 */
    BodyFirmwareVersion: number;
    /** ☆☆☆   "SID:00103402   " */
    BodySerialNumber: string;
    /** ☆☆☆ ✔ "Off" */
    BracketMode: string;
    /** ☆☆☆   "0 0" */
    BracketSequence: string;
    /** ☆☆☆ ✔ "No Bracket" */
    BracketSettings: string;
    /** ☆☆☆ ✔ "n/a" */
    BracketShotNumber: number;
    /** ☆☆☆   undefined */
    BracketShotNumber2: number;
    /** ☆☆☆   "1/3 EV" */
    BracketStep: string;
    /** ☆☆☆ ✔ 12 */
    BracketValue: number;
    /** ☆☆☆   2156 */
    BracketingInfoOffset: number;
    /** ☆☆☆ ✔ "Normal" */
    Brightness: number;
    /** ☆☆☆ ✔ undefined */
    BulbDuration: number;
    /** ☆☆☆ ✔ "Off" */
    BurstMode: string;
    /** ☆☆☆   "\u0000?J@?^R??" */
    BurstShot: number;
    /** ☆☆☆ ✔ 3 */
    BurstSpeed: number;
    /** ☆☆☆ ✔ "460727F2-20CF-4031-957B-7E04D567DF1F" */
    BurstUUID: string;
    /** ☆☆☆ ✔ "Normal (enable)" */
    ButtonFunctionControlOff: string;
    /** ☆☆☆   1 */
    CCDBoardVersion: number;
    /** ☆☆☆   undefined */
    CCDSensitivity: number;
    /** ☆☆☆   undefined */
    CCDVersion: number;
    /** ☆☆☆ ✔ "9 fps" */
    CHModeShootingSpeed: string;
    /** ☆☆☆ ✔ "6 fps" */
    CLModeShootingSpeed: string;
    /** ☆☆☆   "1.00.00.05" */
    CPUFirmwareVersion: string;
    /** ☆☆☆   "CPU1 1.11   CPU2 1.16, CPU3 010" */
    CPUVersions: string;
    /** ☆☆☆   "Starting calibration file for SD14F13_Rev3; S/N C70_090; SD14Cal Rel_17; TestE… */
    Calibration: string;
    /** ☆☆☆   "2008/07/08 21:47:05" */
    CameraDateTime: string;
    /** ☆☆☆ ✔ "ACER" */
    CameraID: string;
    /** ☆☆☆ ✔ "Auto" */
    CameraISO: string;
    /** ☆☆☆ ✔ "Horizontal (normal)" */
    CameraOrientation: string;
    /** ☆☆☆   "(Binary data 10 bytes, use -b option to extract)" */
    CameraParameters: string;
    /** ☆☆☆ ✔ "Standard" */
    CameraPictureStyle: string;
    /** ☆☆☆   -3.7 */
    CameraPitch: number;
    /** ☆☆☆   "+0.00" */
    CameraRoll: string;
    /** ☆☆☆ ✔ "0100" */
    CameraSettingsVersion: string;
    /** ☆☆☆ ✔ "26 C" */
    CameraTemperature: string;
    /** ☆☆☆   "26 C" */
    CameraTemperature4: string;
    /** ☆☆☆   "26 C" */
    CameraTemperature5: string;
    /** ☆☆☆ ✔ "E-M1" */
    CameraType2: string;
    /** ☆☆☆   "+51.70" */
    CameraYaw: number;
    /** ☆☆☆ ✔ "Program AE" */
    CanonExposureMode: string;
    /** ☆☆☆   "Full automatic mode" */
    CanonFileDescription: string;
    /** ☆☆☆   1305916 */
    CanonFileLength: number;
    /** ☆☆☆ ✔ "Firmware Version 2.01" */
    CanonFirmwareVersion: string;
    /** ☆☆☆ ✔ "Auto" */
    CanonFlashMode: string;
    /** ☆☆☆ ✔ 1840 */
    CanonImageHeight: number;
    /** ☆☆☆ ✔ "Large" */
    CanonImageSize: string;
    /** ☆☆☆ ✔ "IMG:iVIS DC50 JPEG" */
    CanonImageType: string;
    /** ☆☆☆ ✔ 3264 */
    CanonImageWidth: number;
    /** ☆☆☆ ✔ "DC50" */
    CanonModelID: string;
    /** ☆☆☆ ✔ "(none)" */
    Categories: string;
    /** ☆☆☆ ✔ "12 mm" */
    CenterWeightedAreaSize: string;
    /** ☆☆☆ ✔ "Off" */
    ChromaticAberrationCorr: string;
    /** ☆☆☆   "Off" */
    ChromaticAberrationCorrection: string;
    /** ☆☆☆ ✔ "On" */
    ChromaticAberrationSetting: string;
    /** ☆☆☆   "+0.500" */
    ChrominanceNoiseReduction: string;
    /** ☆☆☆ ✔ "---" */
    City2: string;
    /** ☆☆☆ ✔ 4 */
    Clarity: number;
    /** ☆☆☆   "Off" */
    ClarityControl: string;
    /** ☆☆☆ ✔ "Off" */
    ClearRetouch: string;
    /** ☆☆☆ ✔ "undef" */
    ClearRetouchValue: string;
    /** ☆☆☆   "0 0 0" */
    ColorAdjustment: string;
    /** ☆☆☆   "Off" */
    ColorAdjustmentMode: string;
    /** ☆☆☆   257 */
    ColorBW: number;
    /** ☆☆☆   1.48828125 */
    ColorBalanceBlue: number;
    /** ☆☆☆   1 */
    ColorBalanceGreen: number;
    /** ☆☆☆   1.984375 */
    ColorBalanceRed: number;
    /** ☆☆☆ ✔ "0224" */
    ColorBalanceVersion: string;
    /** ☆☆☆   24 */
    ColorBitDepth: number;
    /** ☆☆☆ ✔ -1 */
    ColorCompensationFilter: number;
    /** ☆☆☆   -1 */
    ColorCompensationFilterCustom: number;
    /** ☆☆☆   -2 */
    ColorCompensationFilterSet: number;
    /** ☆☆☆   "24 1024 768 1024 16 256" */
    ColorControl: string;
    /** ☆☆☆ ✔ "Color 0; 0; 29; Strength 0; -4; 3" */
    ColorCreatorEffect: string;
    /** ☆☆☆ ✔ "5 (450D/1000D)" */
    ColorDataVersion: string;
    /** ☆☆☆ ✔ "Off" */
    ColorEffect: string;
    /** ☆☆☆   "Off" */
    ColorFilter: string;
    /** ☆☆☆ ✔ "Mode1" */
    ColorHue: string;
    /** ☆☆☆ ✔ "368 -92 -20 -42 348 -50 10 -136 382" */
    ColorMatrix: string;
    /** ☆☆☆   "1.52734 -0.56641 0.03906 -0.14062 1.37500 -0.23438 -0.04688 -0.19531 1.24219" */
    ColorMatrixA: string;
    /** ☆☆☆   "1.05078 -0.01172 -0.03906 -0.14062 1.37500 -0.23438 -0.05078 -0.12891 1.17969" */
    ColorMatrixB: string;
    /** ☆☆☆   4 */
    ColorMatrixNumber: number;
    /** ☆☆☆ ✔ 4551 */
    ColorTempAsShot: number;
    /** ☆☆☆ ✔ 4551 */
    ColorTempAuto: number;
    /** ☆☆☆ ✔ 6000 */
    ColorTempCloudy: number;
    /** ☆☆☆ ✔ 5210 */
    ColorTempCustom: number;
    /** ☆☆☆   5200 */
    ColorTempCustom1: number;
    /** ☆☆☆   5200 */
    ColorTempCustom2: number;
    /** ☆☆☆ ✔ 5200 */
    ColorTempDaylight: number;
    /** ☆☆☆ ✔ 6456 */
    ColorTempFlash: number;
    /** ☆☆☆ ✔ 3901 */
    ColorTempFluorescent: number;
    /** ☆☆☆ ✔ 5190 */
    ColorTempKelvin: number;
    /** ☆☆☆ ✔ 4276 */
    ColorTempMeasured: number;
    /** ☆☆☆ ✔ 4076 */
    ColorTempPC1: number;
    /** ☆☆☆ ✔ 4076 */
    ColorTempPC2: number;
    /** ☆☆☆ ✔ 4076 */
    ColorTempPC3: number;
    /** ☆☆☆ ✔ 7000 */
    ColorTempShade: number;
    /** ☆☆☆ ✔ 3200 */
    ColorTempTungsten: number;
    /** ☆☆☆ ✔ 5200 */
    ColorTemperature: number;
    /** ☆☆☆   "5500 K" */
    ColorTemperatureCustom: string;
    /** ☆☆☆   "5500 K" */
    ColorTemperatureSet: string;
    /** ☆☆☆   "Temperature" */
    ColorTemperatureSetting: string;
    /** ☆☆☆ ✔ "Normal" */
    ColorTone: string;
    /** ☆☆☆ ✔ undefined */
    ColorToneAuto: number;
    /** ☆☆☆ ✔ undefined */
    ColorToneFaithful: number;
    /** ☆☆☆ ✔ undefined */
    ColorToneLandscape: number;
    /** ☆☆☆ ✔ undefined */
    ColorToneNeutral: number;
    /** ☆☆☆ ✔ undefined */
    ColorTonePortrait: number;
    /** ☆☆☆ ✔ undefined */
    ColorToneStandard: number;
    /** ☆☆☆ ✔ undefined */
    ColorToneUserDef1: number;
    /** ☆☆☆ ✔ 1 */
    ColorToneUserDef2: number;
    /** ☆☆☆ ✔ undefined */
    ColorToneUserDef3: number;
    /** ☆☆☆ ✔ "Sub-command Dial" */
    CommandDialsApertureSetting: string;
    /** ☆☆☆ ✔ "Autofocus Off, Exposure Off" */
    CommandDialsChangeMainSub: string;
    /** ☆☆☆ ✔ "Off" */
    CommandDialsMenuAndPlayback: string;
    /** ☆☆☆ ✔ "No" */
    CommandDialsReverseRotation: string;
    /** ☆☆☆   3 */
    CommanderChannel: number;
    /** ☆☆☆   "Full" */
    CommanderGroupAManualOutput: string;
    /** ☆☆☆   "TTL" */
    CommanderGroupAMode: string;
    /** ☆☆☆   "Full" */
    CommanderGroupBManualOutput: string;
    /** ☆☆☆   "TTL" */
    CommanderGroupBMode: string;
    /** ☆☆☆   "TTL" */
    CommanderInternalFlash: string;
    /** ☆☆☆   "Full" */
    CommanderInternalManualOutput: string;
    /** ☆☆☆   undefined */
    CommanderInternalTTLComp: number;
    /** ☆☆☆   45 */
    Compass: number;
    /** ☆☆☆   8 */
    ComponentBitDepth: number;
    /** ☆☆☆   "Off" */
    CompositionAdjust: string;
    /** ☆☆☆   10.5 */
    CompositionAdjustRotation: number;
    /** ☆☆☆   4 */
    CompositionAdjustX: number;
    /** ☆☆☆   -1 */
    CompositionAdjustY: number;
    /** ☆☆☆   369232 */
    CompressedImageSize: number;
    /** ☆☆☆ ✔ 4 */
    CompressionFactor: number;
    /** ☆☆☆   8 */
    CompressionRatio: number;
    /** ☆☆☆ ✔ "Continuous" */
    ContinuousDrive: string;
    /** ☆☆☆ ✔ "Disable; Hi 12; Lo 3" */
    ContinuousShootingSpeed: string;
    /** ☆☆☆ ✔ "Disable; 99 shots" */
    ContinuousShotLimit: string;
    /** ☆☆☆ ✔ undefined */
    ContrastAuto: number;
    /** ☆☆☆ ✔ "(Binary data 578 bytes, use -b option to extract)" */
    ContrastCurve: string;
    /** ☆☆☆ ✔ "Off" */
    ContrastDetectAF: string;
    /** ☆☆☆   "198 131 324 216" */
    ContrastDetectAFArea: string;
    /** ☆☆☆ ✔ "No" */
    ContrastDetectAFInFocus: string;
    /** ☆☆☆ ✔ undefined */
    ContrastFaithful: number;
    /** ☆☆☆   undefined */
    ContrastHighlight: number;
    /** ☆☆☆   "Off" */
    ContrastHighlightShadowAdj: string;
    /** ☆☆☆ ✔ undefined */
    ContrastLandscape: number;
    /** ☆☆☆ ✔ "Unknown (0xe)" */
    ContrastMode: string;
    /** ☆☆☆ ✔ undefined */
    ContrastMonochrome: number;
    /** ☆☆☆ ✔ undefined */
    ContrastNeutral: number;
    /** ☆☆☆ ✔ undefined */
    ContrastPortrait: number;
    /** ☆☆☆ ✔ "0 (min -5, max 5)" */
    ContrastSetting: string;
    /** ☆☆☆   undefined */
    ContrastShadow: number;
    /** ☆☆☆ ✔ 1 */
    ContrastStandard: number;
    /** ☆☆☆ ✔ 3 */
    ContrastUserDef1: number;
    /** ☆☆☆ ✔ undefined */
    ContrastUserDef2: number;
    /** ☆☆☆ ✔ undefined */
    ContrastUserDef3: number;
    /** ☆☆☆ ✔ "n/a" */
    ControlMode: string;
    /** ☆☆☆   undefined */
    ControllerBoardVersion: number;
    /** ☆☆☆ ✔ "Off" */
    ConversionLens: string;
    /** ☆☆☆   undefined */
    Converter: number;
    /** ☆☆☆   2176 */
    CoringFilter: number;
    /** ☆☆☆ ✔ "ENGLAND" */
    Country: string;
    /** ☆☆☆   "ENG" */
    CountryCode: string;
    /** ☆☆☆ ✔ "Standard" */
    CreativeStyle: string;
    /** ☆☆☆   "Standard" */
    CreativeStyleSetting: string;
    /** ☆☆☆ ✔ 14 */
    CropBottomMargin: number;
    /** ☆☆☆ ✔ 3456 */
    CropHeight: number;
    /** ☆☆☆ ✔ "Off (4320x2868 cropped to 4320x2868 at pixel 0,0)" */
    CropHiSpeed: string;
    /** ☆☆☆ ✔ "8 0" */
    CropLeft: string;
    /** ☆☆☆ ✔ 22 */
    CropLeftMargin: number;
    /** ☆☆☆   "Off" */
    CropMode35mm: string;
    /** ☆☆☆ ✔ 20 */
    CropRightMargin: number;
    /** ☆☆☆ ✔ "8 0" */
    CropTop: string;
    /** ☆☆☆ ✔ 14 */
    CropTopMargin: number;
    /** ☆☆☆ ✔ 4608 */
    CropWidth: number;
    /** ☆☆☆ ✔ 2848 */
    CroppedImageHeight: number;
    /** ☆☆☆ ✔ 304 */
    CroppedImageLeft: number;
    /** ☆☆☆ ✔ undefined */
    CroppedImageTop: number;
    /** ☆☆☆ ✔ 4272 */
    CroppedImageWidth: number;
    /** ☆☆☆   "Off" */
    CrossProcess: string;
    /** ☆☆☆ ✔ "0 0 1 0 0 1" */
    CustomControls: string;
    /** ☆☆☆ ✔ "P-STUDIO" */
    CustomPictureStyleFileName: string;
    /** ☆☆☆ ✔ "0 (min -5, max 5)" */
    CustomSaturation: string;
    /** ☆☆☆ ✔ "No" */
    CustomSettingsAllDefault: string;
    /** ☆☆☆ ✔ "A" */
    CustomSettingsBank: string;
    /** ☆☆☆ ✔ 6315 */
    CustomSettingsOffset: number;
    /** ☆☆☆   "0 0" */
    CustomWB_RBLevels: string;
    /** ☆☆☆   "0 0 0" */
    CustomWB_RGBLevels: string;
    /** ☆☆☆ ✔ "Matrix" */
    D810MeteringMode: string;
    /** ☆☆☆   "Saturation" */
    DECPosition: string;
    /** ☆☆☆   "10.01.00.00" */
    DSPFirmwareVersion: string;
    /** ☆☆☆ ✔ "(Binary data 122 bytes, use -b option to extract)" */
    DataDump: string;
    /** ☆☆☆   "(Binary data 4048 bytes, use -b option to extract)" */
    DataDump2: string;
    /** ☆☆☆   8192 */
    DataScaling: number;
    /** ☆☆☆   {"year":2006,"month":2,"day":11} */
    Date: ExifDate;
    /** ☆☆☆ ✔ "Y/M/D" */
    DateDisplayFormat: string;
    /** ☆☆☆ ✔ "Off" */
    DateStampMode: string;
    /** ☆☆☆ ✔ "Sat Jul 19 14:39:16 2014" */
    DateTime1: string;
    /** ☆☆☆ ✔ "Sat Jul 19 14:39:16 2014" */
    DateTime2: string;
    /** ☆☆☆   "Off" */
    DateTimeStamp: string;
    /** ☆☆☆ ✔ {"year":2013,"month":9,"day":7,"hour":13,"minute":1,"second":56,"tzoffsetMinute… */
    DateTimeUTC: ExifDateTime;
    /** ☆☆☆ ✔ "Off" */
    DaylightSavings: string;
    /** ☆☆☆ ✔ "Cancel selected" */
    DefaultEraseOption: string;
    /** ☆☆☆ ✔ 19 */
    DeletedImageCount: number;
    /** ☆☆☆   "Berlin" */
    DestinationCity: string;
    /** ☆☆☆   undefined */
    DestinationCityCode: string;
    /** ☆☆☆   "No" */
    DestinationDST: string;
    /** ☆☆☆ ✔ 100 */
    DevelopmentDynamicRange: number;
    /** ☆☆☆   "Compact Digital Camera" */
    DeviceType: string;
    /** ☆☆☆ ✔ "Normal" */
    DialDirectionTvAv: string;
    /** ☆☆☆   "Off" */
    DiffractionCorrection: string;
    /** ☆☆☆   "Standard" */
    DigitalFilter: string;
    /** ☆☆☆   ["Toy Camera","Shading=2","Blur=2","ToneBreak=Red"] */
    DigitalFilter01: string[];
    /** ☆☆☆ ✔ undefined */
    DigitalGain: number;
    /** ☆☆☆   "Off" */
    DigitalZoomOn: string;
    /** ☆☆☆ ✔ 100 */
    DirectoryIndex: number;
    /** ☆☆☆ ✔ 103 */
    DirectoryIndex2: number;
    /** ☆☆☆ ✔ 806 */
    DirectoryNumber: number;
    /** ☆☆☆ ✔ "Enable" */
    DisplayAllAFPoints: string;
    /** ☆☆☆ ✔ 3.9 */
    DisplayAperture: number;
    /** ☆☆☆ ✔ "None" */
    DistortionCorrection: string;
    /** ☆☆☆ ✔ "On" */
    DistortionCorrection2: string;
    /** ☆☆☆ ✔ "Off" */
    DistortionCorrectionSetting: string;
    /** ☆☆☆   "Single-frame" */
    DriveMode2: string;
    /** ☆☆☆   "Single Frame" */
    DriveModeSetting: string;
    /** ☆☆☆ ✔ "(Binary data 1024 bytes, use -b option to extract)" */
    DustRemovalData: string;
    /** ☆☆☆ ✔ "9 Points" */
    DynamicAFArea: string;
    /** ☆☆☆ ✔ "Off" */
    DynamicAreaAFDisplay: string;
    /** ☆☆☆ ✔ "Standard" */
    DynamicRange: string;
    /** ☆☆☆   "Off; 0; 0; 0" */
    DynamicRangeExpansion: string;
    /** ☆☆☆ ✔ "Auto" */
    DynamicRangeOptimizer: string;
    /** ☆☆☆   "Off" */
    DynamicRangeOptimizerBracket: string;
    /** ☆☆☆   1 */
    DynamicRangeOptimizerLevel: number;
    /** ☆☆☆   "Standard" */
    DynamicRangeOptimizerMode: string;
    /** ☆☆☆   "Standard" */
    DynamicRangeOptimizerSetting: string;
    /** ☆☆☆ ✔ "Manual" */
    DynamicRangeSetting: string;
    /** ☆☆☆ ✔ "Evaluative" */
    ETTLII: string;
    /** ☆☆☆   "1/3 EV" */
    EVStepSize: string;
    /** ☆☆☆   "1/2 EV Steps" */
    EVSteps: string;
    /** ☆☆☆   "Auto" */
    EXRAuto: string;
    /** ☆☆☆   "DR (Dynamic Range priority)" */
    EXRMode: string;
    /** ☆☆☆ ✔ "Off" */
    EasyExposureCompensation: string;
    /** ☆☆☆ ✔ "Manual" */
    EasyMode: string;
    /** ☆☆☆   3.8 */
    EffectiveLV: number;
    /** ☆☆☆ ✔ 2 */
    EffectiveMaxAperture: number;
    /** ☆☆☆   "Off" */
    Enhancement: string;
    /** ☆☆☆   40 */
    Enhancer: number;
    /** ☆☆☆   1200 */
    EpsonImageHeight: number;
    /** ☆☆☆   1600 */
    EpsonImageWidth: number;
    /** ☆☆☆   "SR921" */
    EpsonSoftware: string;
    /** ☆☆☆ ✔ "0100" */
    EquipmentVersion: string;
    /** ☆☆☆   118 */
    EventNumber: number;
    /** ☆☆☆ ✔ "93.1 mm" */
    ExitPupilPosition: string;
    /** ☆☆☆   undefined */
    ExposureBracketShotNumber: number;
    /** ☆☆☆   0.5 */
    ExposureBracketStepSize: number;
    /** ☆☆☆ ✔ "+162113114" */
    ExposureBracketValue: number;
    /** ☆☆☆ ✔ "1/3 EV" */
    ExposureCompStepSize: string;
    /** ☆☆☆   -0.4 */
    ExposureCompensation2: number;
    /** ☆☆☆   -0.3 */
    ExposureCompensationSet: number;
    /** ☆☆☆   "1/3 EV" */
    ExposureControlStep: string;
    /** ☆☆☆ ✔ "1/3 EV" */
    ExposureControlStepSize: string;
    /** ☆☆☆ ✔ 1 */
    ExposureCount: number;
    /** ☆☆☆ ✔ "Off" */
    ExposureDelayMode: string;
    /** ☆☆☆ ✔ -2.7 */
    ExposureDifference: number;
    /** ☆☆☆ ✔ "1/3 Stop" */
    ExposureLevelIncrements: string;
    /** ☆☆☆ ✔ "Specified metering mode" */
    ExposureModeInManual: string;
    /** ☆☆☆ ✔ "undef" */
    ExposureShift: number;
    /** ☆☆☆   "1/161" */
    ExposureTime2: string;
    /** ☆☆☆ ✔ "-1/2" */
    ExposureTuning: number;
    /** ☆☆☆ ✔ "Good" */
    ExposureWarning: string;
    /** ☆☆☆ ✔ "Off" */
    ExtendedWBDetect: string;
    /** ☆☆☆ ✔ "None" */
    Extender: string;
    /** ☆☆☆ ✔ undefined */
    ExtenderFirmwareVersion: number;
    /** ☆☆☆ ✔ undefined */
    ExtenderModel: string;
    /** ☆☆☆ ✔ undefined */
    ExtenderSerialNumber: string;
    /** ☆☆☆ ✔ "Off" */
    ExternalFlash: string;
    /** ☆☆☆ ✔ "Bounce or Off" */
    ExternalFlashBounce: string;
    /** ☆☆☆   undefined */
    ExternalFlashCompensation: number;
    /** ☆☆☆ ✔ "-2/3" */
    ExternalFlashExposureComp: number;
    /** ☆☆☆ ✔ "n/a" */
    ExternalFlashFirmware: string;
    /** ☆☆☆ ✔ "(none)" */
    ExternalFlashFlags: string;
    /** ☆☆☆   "undef" */
    ExternalFlashGValue: number;
    /** ☆☆☆   "n/a" */
    ExternalFlashGuideNumber: string;
    /** ☆☆☆   "Off" */
    ExternalFlashMode: number;
    /** ☆☆☆ ✔ "n/a" */
    ExternalFlashReadyState: string;
    /** ☆☆☆ ✔ "Flash Not Attached" */
    ExternalFlashStatus: string;
    /** ☆☆☆ ✔ 54 */
    ExternalFlashZoom: number;
    /** ☆☆☆ ✔ "No" */
    ExternalFlashZoomOverride: string;
    /** ☆☆☆   5.24 */
    ExternalSensorBrightnessValue: number;
    /** ☆☆☆   "0.1.0.1" */
    ExtraInfoVersion: string;
    /** ☆☆☆ ✔ "Disable; 0; 8; 0" */
    FEMicroadjustment: string;
    /** ☆☆☆   "12 -54" */
    Face1Position: string;
    /** ☆☆☆   "564 564" */
    Face1Size: string;
    /** ☆☆☆   "87 45 36 36" */
    Face2Position: string;
    /** ☆☆☆   "14649 12320 14896 12336" */
    Face3Position: string;
    /** ☆☆☆   "12346 48 256 512" */
    Face4Position: string;
    /** ☆☆☆   "1792 0 1024 12592" */
    Face5Position: string;
    /** ☆☆☆   "810 606 216 216" */
    Face6Position: string;
    /** ☆☆☆   "On (16 faces max); 0 faces detected" */
    FaceDetect: string;
    /** ☆☆☆ ✔ "(Binary data 383 bytes, use -b option to extract)" */
    FaceDetectArea: string;
    /** ☆☆☆ ✔ "0 0 0 0 0 0 0 0 0 0 0 0" */
    FaceDetectFrameCrop: string;
    /** ☆☆☆ ✔ "320 240" */
    FaceDetectFrameSize: string;
    /** ☆☆☆   "On" */
    FaceDetection: string;
    /** ☆☆☆ ✔ 37 */
    FaceInfoLength: number;
    /** ☆☆☆ ✔ 94 */
    FaceInfoOffset: number;
    /** ☆☆☆   undefined */
    FaceName: string;
    /** ☆☆☆   "0 0" */
    FacePosition: string;
    /** ☆☆☆   "643 482 1393 1232" */
    FacePositions: string;
    /** ☆☆☆   "Off" */
    FaceRecognition: string;
    /** ☆☆☆   35 */
    FaceWidth: number;
    /** ☆☆☆ ✔ 1 */
    FacesDetected: number;
    /** ☆☆☆ ✔ 12336 */
    FacesRecognized: number;
    /** ☆☆☆ ✔ "JPEG (lossy/non-quantization toggled)" */
    FileFormat: string;
    /** ☆☆☆ ✔ 285 */
    FileIndex: number;
    /** ☆☆☆ ✔ 1 */
    FileIndex2: number;
    /** ☆☆☆ ✔ "0100" */
    FileInfoVersion: string;
    /** ☆☆☆   "Off" */
    FileNumberMemory: string;
    /** ☆☆☆ ✔ "On" */
    FileNumberSequence: string;
    /** ☆☆☆ ✔ "Enable" */
    FillFlashAutoReduction: string;
    /** ☆☆☆ ✔ "F0/Standard (Provia)" */
    FilmMode: string;
    /** ☆☆☆ ✔ "None" */
    FilterEffect: string;
    /** ☆☆☆ ✔ "n/a" */
    FilterEffectAuto: string;
    /** ☆☆☆ ✔ "None" */
    FilterEffectMonochrome: string;
    /** ☆☆☆ ✔ "None" */
    FilterEffectUserDef1: string;
    /** ☆☆☆ ✔ "None" */
    FilterEffectUserDef2: string;
    /** ☆☆☆ ✔ "None" */
    FilterEffectUserDef3: string;
    /** ☆☆☆ ✔ "Off" */
    FinderDisplayDuringExposure: string;
    /** ☆☆☆   "Off" */
    FineSharpness: string;
    /** ☆☆☆ ✔ undefined */
    FineTuneOptCenterWeighted: number;
    /** ☆☆☆ ✔ undefined */
    FineTuneOptHighlightWeighted: number;
    /** ☆☆☆ ✔ undefined */
    FineTuneOptMatrixMetering: number;
    /** ☆☆☆ ✔ undefined */
    FineTuneOptSpotMetering: number;
    /** ☆☆☆   "73" */
    Firmware: string;
    /** ☆☆☆   "2013:11:12 10:10" */
    FirmwareDate: ExifDate;
    /** ☆☆☆   "NX1_000000" */
    FirmwareName: string;
    /** ☆☆☆ ✔ "1.00 rev 3.00" */
    FirmwareRevision: string;
    /** ☆☆☆   "Rev01120000" */
    FirmwareRevision2: string;
    /** ☆☆☆ ✔ "Off" */
    FisheyeFilter: string;
    /** ☆☆☆ ✔ "Did not fire" */
    FlashAction: string;
    /** ☆☆☆   "Did not fire" */
    FlashAction2: string;
    /** ☆☆☆   "Did not fire" */
    FlashActionExternal: string;
    /** ☆☆☆ ✔ 1 */
    FlashActivity: number;
    /** ☆☆☆ ✔ "n/a" */
    FlashBatteryLevel: string;
    /** ☆☆☆ ✔ "+2" */
    FlashBias: number;
    /** ☆☆☆ ✔ "E-TTL, Built-in" */
    FlashBits: string;
    /** ☆☆☆ ✔ "Raise built-in flash" */
    FlashButtonFunction: string;
    /** ☆☆☆   undefined */
    FlashChargeLevel: number;
    /** ☆☆☆   "None" */
    FlashColorFilter: string;
    /** ☆☆☆ ✔ "Off" */
    FlashCommanderMode: string;
    /** ☆☆☆ ✔ "-2/3" */
    FlashCompensation: number;
    /** ☆☆☆   "ADI" */
    FlashControl: string;
    /** ☆☆☆ ✔ "Off" */
    FlashControlMode: string;
    /** ☆☆☆ ✔ "n/a" */
    FlashCurtain: string;
    /** ☆☆☆   "Unknown (0 0)" */
    FlashDevice: string;
    /** ☆☆☆   53 */
    FlashDistance: number;
    /** ☆☆☆ ✔ 0.3 */
    FlashExposureBracketValue: number;
    /** ☆☆☆ ✔ "+2" */
    FlashExposureComp: number;
    /** ☆☆☆   "+1/3" */
    FlashExposureComp2: number;
    /** ☆☆☆   undefined */
    FlashExposureComp3: number;
    /** ☆☆☆   "-2/3" */
    FlashExposureComp4: number;
    /** ☆☆☆ ✔ "Entire frame" */
    FlashExposureCompArea: string;
    /** ☆☆☆   -2 */
    FlashExposureCompSet: number;
    /** ☆☆☆   undefined */
    FlashExposureCompSet2: number;
    /** ☆☆☆ ✔ "Off" */
    FlashExposureLock: string;
    /** ☆☆☆ ✔ false */
    FlashFired: boolean;
    /** ☆☆☆ ✔ "Fires" */
    FlashFiring: string;
    /** ☆☆☆ ✔ 1 */
    FlashFirmwareVersion: number;
    /** ☆☆☆ ✔ "12 mm" */
    FlashFocalLength: string;
    /** ☆☆☆ ✔ "n/a" */
    FlashGNDistance: number;
    /** ☆☆☆ ✔ undefined */
    FlashGroupACompensation: number;
    /** ☆☆☆ ✔ "Off" */
    FlashGroupAControlMode: string;
    /** ☆☆☆ ✔ undefined */
    FlashGroupBCompensation: number;
    /** ☆☆☆ ✔ "Off" */
    FlashGroupBControlMode: string;
    /** ☆☆☆ ✔ undefined */
    FlashGroupCCompensation: number;
    /** ☆☆☆ ✔ "Off" */
    FlashGroupCControlMode: string;
    /** ☆☆☆ ✔ 8.46875 */
    FlashGuideNumber: number;
    /** ☆☆☆ ✔ "0100" */
    FlashInfoVersion: string;
    /** ☆☆☆ ✔ "n/a (x4)" */
    FlashIntensity: string;
    /** ☆☆☆ ✔ "Normal" */
    FlashLevel: string;
    /** ☆☆☆   "ADI (Advanced Distance Integration)" */
    FlashMetering: string;
    /** ☆☆☆ ✔ "Off" */
    FlashMeteringMode: string;
    /** ☆☆☆   "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" */
    FlashMeteringSegments: string;
    /** ☆☆☆ ✔ "Auto, Fired" */
    FlashMode: string;
    /** ☆☆☆ ✔ "None" */
    FlashModel: string;
    /** ☆☆☆   "Normal" */
    FlashOptions: string;
    /** ☆☆☆   "Normal" */
    FlashOptions2: string;
    /** ☆☆☆ ✔ 175 */
    FlashOutput: number;
    /** ☆☆☆ ✔ "Off" */
    FlashRemoteControl: string;
    /** ☆☆☆ ✔ "01114671" */
    FlashSerialNumber: string;
    /** ☆☆☆ ✔ "Normal" */
    FlashSetting: string;
    /** ☆☆☆ ✔ "1/60 s" */
    FlashShutterSpeed: string;
    /** ☆☆☆ ✔ "None" */
    FlashSource: string;
    /** ☆☆☆ ✔ "Built-in Flash present" */
    FlashStatus: string;
    /** ☆☆☆   "None" */
    FlashStatusExternal: string;
    /** ☆☆☆   "Front curtain" */
    FlashSyncMode: string;
    /** ☆☆☆ ✔ "1/250 s" */
    FlashSyncSpeed: string;
    /** ☆☆☆ ✔ "Auto" */
    FlashSyncSpeedAv: string;
    /** ☆☆☆   8.5 */
    FlashThreshold: number;
    /** ☆☆☆   "Yes (flash required but disabled)" */
    FlashWarning: string;
    /** ☆☆☆ ✔ "0 0" */
    FlexibleSpotPosition: string;
    /** ☆☆☆   "Off" */
    FlickerReduce: string;
    /** ☆☆☆   "27.1 mm" */
    FocalLength2: string;
    /** ☆☆☆   "54.7 mm" */
    FocalLengthTeleZoom: string;
    /** ☆☆☆   "(none)" */
    FocalPlaneAFPointsUsed: string;
    /** ☆☆☆ ✔ "6.59 mm" */
    FocalPlaneDiagonal: string;
    /** ☆☆☆ ✔ "5.44 mm" */
    FocalPlaneXSize: string;
    /** ☆☆☆ ✔ "4.06 mm" */
    FocalPlaneYSize: string;
    /** ☆☆☆ ✔ "Zoom" */
    FocalType: string;
    /** ☆☆☆ ✔ "100/mm" */
    FocalUnits: string;
    /** ☆☆☆   "undef" */
    Focus: string;
    /** ☆☆☆   "Wide Focus (normal)" */
    FocusArea: string;
    /** ☆☆☆ ✔ "Continuous" */
    FocusContinuous: string;
    /** ☆☆☆ ✔ "Enable" */
    FocusDisplayAIServoAndMF: string;
    /** ☆☆☆ ✔ "0 m" */
    FocusDistanceLower: string;
    /** ☆☆☆ ✔ "65.53 m" */
    FocusDistanceUpper: string;
    /** ☆☆☆ ✔ "0100" */
    FocusInfoVersion: string;
    /** ☆☆☆   "4896 3672 2448 1836" */
    FocusLocation: string;
    /** ☆☆☆   "AF-S" */
    FocusMode2: string;
    /** ☆☆☆   "AF-A" */
    FocusModeSetting: string;
    /** ☆☆☆   "AF" */
    FocusModeSwitch: string;
    /** ☆☆☆ ✔ "1824 1368" */
    FocusPixel: string;
    /** ☆☆☆ ✔ "No Wrap" */
    FocusPointWrap: string;
    /** ☆☆☆ ✔ "0x11" */
    FocusPosition: number;
    /** ☆☆☆ ✔ 205 */
    FocusPosition2: number;
    /** ☆☆☆ ✔ "AF Used; 64" */
    FocusProcess: string;
    /** ☆☆☆ ✔ "Auto" */
    FocusRange: string;
    /** ☆☆☆   4 */
    FocusRangeIndex: number;
    /** ☆☆☆   "AF" */
    FocusSetting: string;
    /** ☆☆☆   "Confirmed" */
    FocusStatus: string;
    /** ☆☆☆ ✔ 9626 */
    FocusStepInfinity: number;
    /** ☆☆☆ ✔ 9718 */
    FocusStepNear: number;
    /** ☆☆☆ ✔ "3 (Normal)" */
    FocusTrackingLockOn: string;
    /** ☆☆☆ ✔ "Good" */
    FocusWarning: string;
    /** ☆☆☆ ✔ "Ec-CIV" */
    FocusingScreen: string;
    /** ☆☆☆   "Standard Form" */
    FolderName: string;
    /** ☆☆☆   100 */
    FolderNumber: number;
    /** ☆☆☆   1 */
    FrameNumber: number;
    /** ☆☆☆   41 */
    FreeMemoryCardImages: number;
    /** ☆☆☆ ✔ "On" */
    FujiFlashMode: string;
    /** ☆☆☆ ✔ "6000x4000" */
    FullImageSize: string;
    /** ☆☆☆   "Off" */
    FullPressSnap: string;
    /** ☆☆☆ ✔ "Virtual Horizon" */
    FuncButton: string;
    /** ☆☆☆ ✔ "None" */
    FuncButtonPlusDials: string;
    /** ☆☆☆   "ISO" */
    FunctionButton: string;
    /** ☆☆☆   "4000x3000" */
    GEImageSize: string;
    /** ☆☆☆   "GE DIGITAL CAMERA              " */
    GEMake: string;
    /** ☆☆☆   "A1050" */
    GEModel: string;
    /** ☆☆☆ ✔ 256 */
    GainBase: number;
    /** ☆☆☆ ✔ "Normal; User-Selected" */
    Gradation: string;
    /** ☆☆☆ ✔ "Off" */
    GrainyBWFilter: string;
    /** ☆☆☆   "2E" */
    GreenGain: string;
    /** ☆☆☆ ✔ "On" */
    GridDisplay: string;
    /** ☆☆☆   157 */
    GripBatteryADLoad: number;
    /** ☆☆☆   172 */
    GripBatteryADNoLoad: number;
    /** ☆☆☆   "Empty or Missing" */
    GripBatteryState: string;
    /** ☆☆☆ ✔ "Squares" */
    GroupAreaAFIllumination: string;
    /** ☆☆☆ ✔ "Off" */
    HDR: string;
    /** ☆☆☆ ✔ "Natural" */
    HDREffect: string;
    /** ☆☆☆ ✔ "Unknown (2)" */
    HDRImageType: string;
    /** ☆☆☆ ✔ "0200" */
    HDRInfoVersion: string;
    /** ☆☆☆ ✔ "Auto" */
    HDRLevel: string;
    /** ☆☆☆ ✔ "n/a" */
    HDRLevel2: string;
    /** ☆☆☆ ✔ "Off" */
    HDRSetting: string;
    /** ☆☆☆ ✔ "Off" */
    HDRSmoothing: string;
    /** ☆☆☆ ✔ "Off" */
    HighISONoiseReduction: string;
    /** ☆☆☆   "Normal" */
    HighISONoiseReduction2: string;
    /** ☆☆☆   4 */
    HighLowKeyAdj: number;
    /** ☆☆☆   "Off" */
    HighSpeedSync: string;
    /** ☆☆☆   "+0.0" */
    Highlight: number;
    /** ☆☆☆ ✔ "0 (normal)" */
    HighlightTone: string;
    /** ☆☆☆ ✔ "Disable" */
    HighlightTonePriority: string;
    /** ☆☆☆   "ndon" */
    HometownCity: string;
    /** ☆☆☆   "LON " */
    HometownCityCode: string;
    /** ☆☆☆   "No" */
    HometownDST: string;
    /** ☆☆☆ ✔ "None" */
    Hue: string;
    /** ☆☆☆   "Off" */
    HueAdjust: string;
    /** ☆☆☆ ✔ 3 */
    HueAdjustment: string;
    /** ☆☆☆ ✔ 100 */
    ISO2: number;
    /** ☆☆☆   "On" */
    ISOAuto: string;
    /** ☆☆☆ ✔ "ISO 12800" */
    ISOAutoHiLimit: string;
    /** ☆☆☆   "Standard" */
    ISOAutoParameters: string;
    /** ☆☆☆ ✔ "Auto" */
    ISOAutoShutterTime: string;
    /** ☆☆☆ ✔ "Show Frame Count" */
    ISODisplay: string;
    /** ☆☆☆ ✔ "On" */
    ISOExpansion: string;
    /** ☆☆☆ ✔ "Off" */
    ISOExpansion2: string;
    /** ☆☆☆   200 */
    ISOFloor: number;
    /** ☆☆☆   "Auto" */
    ISOSelection: string;
    /** ☆☆☆   "1/3 EV" */
    ISOSensitivityStep: string;
    /** ☆☆☆ ✔ 250 */
    ISOSetting: number;
    /** ☆☆☆ ✔ "No" */
    ISOSpeedExpansion: string;
    /** ☆☆☆ ✔ "1/3 Stop" */
    ISOSpeedIncrements: string;
    /** ☆☆☆ ✔ "Disable; Max 3200; Min 100" */
    ISOSpeedRange: string;
    /** ☆☆☆ ✔ "1/3 EV" */
    ISOStepSize: string;
    /** ☆☆☆   100 */
    ISOValue: number;
    /** ☆☆☆   "Auto" */
    ImageAdjustment: string;
    /** ☆☆☆ ✔ "Off" */
    ImageAuthentication: string;
    /** ☆☆☆ ✔ "0 0 4288 2848" */
    ImageBoundary: string;
    /** ☆☆☆ ✔ 1 */
    ImageCount: number;
    /** ☆☆☆   136 */
    ImageCount2: number;
    /** ☆☆☆ ✔ 130 */
    ImageCount3: number;
    /** ☆☆☆ ✔ 4996902 */
    ImageDataSize: number;
    /** ☆☆☆   1 */
    ImageEditCount: number;
    /** ☆☆☆   "None" */
    ImageEditing: string;
    /** ☆☆☆   "Standard" */
    ImageEffects: string;
    /** ☆☆☆ ✔ "Re-developed from RAW" */
    ImageGeneration: string;
    /** ☆☆☆   912 */
    ImageIDNumber: number;
    /** ☆☆☆   30 */
    ImageNumber: number;
    /** ☆☆☆   7040 */
    ImageNumber2: number;
    /** ☆☆☆ ✔ "Normal" */
    ImageOptimization: string;
    /** ☆☆☆   "                   \u0000                   \u0000" */
    ImageProcessing: string;
    /** ☆☆☆ ✔ "0112" */
    ImageProcessingVersion: string;
    /** ☆☆☆ ✔ "NEF (RAW) + JPEG Fine" */
    ImageQuality: string;
    /** ☆☆☆   "SHQ" */
    ImageQuality2: string;
    /** ☆☆☆   "On" */
    ImageReview: string;
    /** ☆☆☆ ✔ "4 s" */
    ImageReviewMonitorOffTime: string;
    /** ☆☆☆   "4 s" */
    ImageReviewTime: string;
    /** ☆☆☆   "No" */
    ImageRotated: string;
    /** ☆☆☆ ✔ "Off" */
    ImageStabilization: string;
    /** ☆☆☆   "On" */
    ImageStabilizationSetting: string;
    /** ☆☆☆   "Standard" */
    ImageStyle: string;
    /** ☆☆☆   309 */
    ImageTemperatureMax: number;
    /** ☆☆☆   300 */
    ImageTemperatureMin: number;
    /** ☆☆☆   "Bright" */
    ImageTone: string;
    /** ☆☆☆ ✔ "Displays camera settings" */
    InfoButtonWhenShooting: string;
    /** ☆☆☆   "Off" */
    InfraredIlluminator: string;
    /** ☆☆☆ ✔ "Medium Magnification" */
    InitialZoomSetting: string;
    /** ☆☆☆ ✔ "Off" */
    IntelligentAuto: string;
    /** ☆☆☆ ✔ "Off" */
    IntelligentContrast: string;
    /** ☆☆☆   "Off" */
    IntelligentExposure: string;
    /** ☆☆☆ ✔ "Extended" */
    IntelligentResolution: string;
    /** ☆☆☆ ✔ "Off" */
    InternalFlash: string;
    /** ☆☆☆   "Did not fire, Normal" */
    InternalFlashMode: string;
    /** ☆☆☆   43 */
    InternalFlashStrength: number;
    /** ☆☆☆   75 */
    InternalFlashTable: number;
    /** ☆☆☆ ✔ "undef" */
    InternalNDFilter: number;
    /** ☆☆☆ ✔ 509143782 */
    InternalSerialNumber: string;
    /** ☆☆☆   60 */
    IntervalLength: number;
    /** ☆☆☆   "Still Image" */
    IntervalMode: string;
    /** ☆☆☆   2 */
    IntervalNumber: number;
    /** ☆☆☆   "Off" */
    IntervalShooting: string;
    /** ☆☆☆ ✔ 7 */
    JPEGQuality: string;
    /** ☆☆☆   176 */
    JPGInfoOffset: number;
    /** ☆☆☆   "10 MP" */
    JpgRecordedPixels: string;
    /** ☆☆☆   "2500 0 1.12353515625 1.9710693359375" */
    KelvinWB_01: string;
    /** ☆☆☆   "2630 0 1.1795654296875 1.88134765625" */
    KelvinWB_02: string;
    /** ☆☆☆   "2780 0 1.2413330078125 1.790283203125" */
    KelvinWB_03: string;
    /** ☆☆☆   "2940 0 1.3038330078125 1.705078125" */
    KelvinWB_04: string;
    /** ☆☆☆   "3130 0 1.373779296875 1.61767578125" */
    KelvinWB_05: string;
    /** ☆☆☆   "3330 0 1.4429931640625 1.5389404296875" */
    KelvinWB_06: string;
    /** ☆☆☆   "3570 0 1.5196533203125 1.458740234375" */
    KelvinWB_07: string;
    /** ☆☆☆   "3850 0 1.6019287109375 1.380615234375" */
    KelvinWB_08: string;
    /** ☆☆☆   "4170 0 1.6865234375 1.3074951171875" */
    KelvinWB_09: string;
    /** ☆☆☆   "4550 0 1.776123046875 1.23681640625" */
    KelvinWB_10: string;
    /** ☆☆☆   "5000 0 1.86865234375 1.1705322265625" */
    KelvinWB_11: string;
    /** ☆☆☆   "5560 0 1.966552734375 1.1060791015625" */
    KelvinWB_12: string;
    /** ☆☆☆   "6250 0 2.06640625 1.0462646484375" */
    KelvinWB_13: string;
    /** ☆☆☆   "7140 0 2.1688232421875 0.989990234375" */
    KelvinWB_14: string;
    /** ☆☆☆   "8330 0 2.2724609375 0.9375" */
    KelvinWB_15: string;
    /** ☆☆☆   "10000 0 2.375244140625 0.888916015625" */
    KelvinWB_16: string;
    /** ☆☆☆   "5205 0 1.905517578125 1.1455078125" */
    KelvinWB_Daylight: string;
    /** ☆☆☆ ✔ "Off" */
    KeystoneCompensation: string;
    /** ☆☆☆ ✔ "Vertical" */
    KeystoneDirection: string;
    /** ☆☆☆ ✔ "0 -20 20" */
    KeystoneValue: string;
    /** ☆☆☆   600 */
    KodakImageHeight: number;
    /** ☆☆☆   800 */
    KodakImageWidth: number;
    /** ☆☆☆   "SKodakCommonInfo Jaguar7" */
    KodakInfoType: string;
    /** ☆☆☆   "Kodak                          \u0000" */
    KodakMake: string;
    /** ☆☆☆   "Hewlett-Packard" */
    KodakMaker: string;
    /** ☆☆☆   "HP PhotoSmart 618" */
    KodakModel: string;
    /** ☆☆☆ ✔ "Display" */
    LCDDisplayAtPowerOn: string;
    /** ☆☆☆ ✔ "Off" */
    LCDIllumination: string;
    /** ☆☆☆ ✔ "Off" */
    LCDIlluminationDuringBulb: string;
    /** ☆☆☆ ✔ "Remain. shots/File no." */
    LCDPanels: string;
    /** ☆☆☆ ✔ "Masked" */
    LVShootingAreaDisplay: string;
    /** ☆☆☆ ✔ "---" */
    Landmark: string;
    /** ☆☆☆   33620224 */
    LastFileNumber: number;
    /** ☆☆☆ ✔ "Auto" */
    LateralChromaticAberration: string;
    /** ☆☆☆ ✔ "AF Stop" */
    LensAFStopButton: string;
    /** ☆☆☆   "4.0 to 22" */
    LensApertureRange: string;
    /** ☆☆☆ ✔ "0201" */
    LensDataVersion: string;
    /** ☆☆☆   "-176 -386 -470 -186 -412 -504" */
    LensDistortionParams: string;
    /** ☆☆☆ ✔ "Focus search on" */
    LensDriveNoAF: string;
    /** ☆☆☆ ✔ "Continue Focus Search" */
    LensDriveWhenAFImpossible: string;
    /** ☆☆☆ ✔ 7 */
    LensFStops: number;
    /** ☆☆☆   "RL5 :V01290000 " */
    LensFirmware: string;
    /** ☆☆☆ ✔ "Ver.02" */
    LensFirmwareVersion: string;
    /** ☆☆☆   "28.1 mm" */
    LensFocalLength: string;
    /** ☆☆☆   "14 to 14" */
    LensFocalRange: string;
    /** ☆☆☆ ✔ "AF Lock Only" */
    LensFocusFunctionButtons: string;
    /** ☆☆☆ ✔ "APS-C" */
    LensFormat: string;
    /** ☆☆☆ ✔ 129 */
    LensIDNumber: number;
    /** ☆☆☆   "4 to 4" */
    LensMaxApertureRange: string;
    /** ☆☆☆ ✔ "E-mount" */
    LensMount: string;
    /** ☆☆☆ ✔ "E-mount" */
    LensMount2: string;
    /** ☆☆☆ ✔ "0xc041" */
    LensProperties: string;
    /** ☆☆☆   "Xcenter = 1400 Ycenter = 1068 GainStep = 9 GainMax=135" */
    LensShading: string;
    /** ☆☆☆ ✔ "E OSS" */
    LensSpecFeatures: string;
    /** ☆☆☆   31 */
    LensTemperature: number;
    /** ☆☆☆ ✔ "n/a" */
    LensType: string;
    /** ☆☆☆ ✔ "Sony E 18-55mm F3.5-5.6 OSS" */
    LensType2: string;
    /** ☆☆☆ ✔ "Sony E 18-55mm F3.5-5.6 OSS" */
    LensType3: string;
    /** ☆☆☆ ✔ "2%" */
    LensZoomPosition: string;
    /** ☆☆☆   2 */
    LevelIndicator: number;
    /** ☆☆☆   "Horizontal (normal)" */
    LevelOrientation: string;
    /** ☆☆☆   1 */
    LightCondition: number;
    /** ☆☆☆   15 */
    LightReading: number;
    /** ☆☆☆   "Off" */
    LightSourceSpecial: string;
    /** ☆☆☆ ✔ "LCD Backlight" */
    LightSwitch: string;
    /** ☆☆☆   1.4453125 */
    LightValueCenter: number;
    /** ☆☆☆   1.765625 */
    LightValuePeriphery: number;
    /** ☆☆☆   "Off" */
    LightingMode: string;
    /** ☆☆☆ ✔ "No Restrictions" */
    LimitAFAreaModeSelection: string;
    /** ☆☆☆ ✔ 10000 */
    LinearityUpperMargin: number;
    /** ☆☆☆   "Off" */
    LinkAEToAFPoint: string;
    /** ☆☆☆   "Wide Area" */
    LiveViewAF: string;
    /** ☆☆☆   "Phase-detect AF" */
    LiveViewAFMethod: string;
    /** ☆☆☆   "Phase-detect AF" */
    LiveViewAFSetting: string;
    /** ☆☆☆ ✔ "Enable" */
    LiveViewButtonOptions: string;
    /** ☆☆☆ ✔ "Enable (simulates exposure)" */
    LiveViewExposureSimulation: string;
    /** ☆☆☆   "AF" */
    LiveViewFocusMode: string;
    /** ☆☆☆   "40 Segment" */
    LiveViewMetering: string;
    /** ☆☆☆ ✔ "10 min" */
    LiveViewMonitorOffTime: string;
    /** ☆☆☆ ✔ "Off" */
    LiveViewShooting: string;
    /** ☆☆☆   undefined */
    LocalLocationName: string;
    /** ☆☆☆ ✔ "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000… */
    Location: string;
    /** ☆☆☆   "0100" */
    LocationInfoVersion: string;
    /** ☆☆☆   "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000" */
    LocationName: string;
    /** ☆☆☆ ✔ "Protect (hold:record memo); 31" */
    LockMicrophoneButton: string;
    /** ☆☆☆ ✔ "Off" */
    LongExposureNoiseReduction: string;
    /** ☆☆☆ ✔ "Off" */
    LongExposureNoiseReduction2: string;
    /** ☆☆☆   "+0.500" */
    LuminanceNoiseReduction: string;
    /** ☆☆☆   undefined */
    M16CVersion: number;
    /** ☆☆☆ ✔ 134 */
    MCUVersion: number;
    /** ☆☆☆ ✔ "Off" */
    MacroLED: string;
    /** ☆☆☆ ✔ "Unknown (0)" */
    MacroMode: string;
    /** ☆☆☆ ✔ "Off; 0; 0; 0" */
    MagicFilter: string;
    /** ☆☆☆ ✔ "Image playback only" */
    MagnifiedView: string;
    /** ☆☆☆   1110 */
    MakerNoteOffset: number;
    /** ☆☆☆   "MKED" */
    MakerNoteType: string;
    /** ☆☆☆ ✔ 1.01 */
    MakerNoteVersion: string;
    /** ☆☆☆ ✔ "0 kPa" */
    ManometerPressure: string;
    /** ☆☆☆ ✔ "0 m, 0 ft" */
    ManometerReading: string;
    /** ☆☆☆ ✔ "Stops at AF Area Edges" */
    ManualAFPointSelPattern: string;
    /** ☆☆☆ ✔ "Stops at AF area edges" */
    ManualAFPointSelectPattern: string;
    /** ☆☆☆ ✔ "Off" */
    ManualFlash: string;
    /** ☆☆☆ ✔ "n/a" */
    ManualFlashOutput: string;
    /** ☆☆☆ ✔ "n/a (x4)" */
    ManualFlashStrength: string;
    /** ☆☆☆   "undef" */
    ManualFocusDistance: string;
    /** ☆☆☆ ✔ "Tv=Main/Av=Control" */
    ManualTv: string;
    /** ☆☆☆   "Unknown (0)" */
    ManufactureDate: ExifDate;
    /** ☆☆☆   "2004:04:14          " */
    ManufactureDate1: ExifDateTime;
    /** ☆☆☆   "2004:02:17          " */
    ManufactureDate2: string;
    /** ☆☆☆ ✔ "Face Detection On" */
    MatrixMetering: string;
    /** ☆☆☆ ✔ 32 */
    MaxAperture: number;
    /** ☆☆☆ ✔ 4.5 */
    MaxApertureAtMaxFocal: number;
    /** ☆☆☆ ✔ 3.5 */
    MaxApertureAtMinFocal: number;
    /** ☆☆☆ ✔ 100 */
    MaxContinuousRelease: number;
    /** ☆☆☆ ✔ "0 0 0" */
    MaxFaces: string;
    /** ☆☆☆ ✔ "61 mm" */
    MaxFocalLength: string;
    /** ☆☆☆ ✔ 5 */
    MeasuredEV: number;
    /** ☆☆☆ ✔ 12.625 */
    MeasuredEV2: number;
    /** ☆☆☆ ✔ 11.25 */
    MeasuredEV3: number;
    /** ☆☆☆   6.39 */
    MeasuredLV: number;
    /** ☆☆☆ ✔ "471 1024 1024 581" */
    MeasuredRGGB: string;
    /** ☆☆☆ ✔ "28263 52181 52475 22264" */
    MeasuredRGGBData: string;
    /** ☆☆☆   "High (48 kHz)" */
    MemoAudioQuality: string;
    /** ☆☆☆   "MemoryStick in use, SD slot empty" */
    MemoryCardConfiguration: string;
    /** ☆☆☆ ✔ 1 */
    MemoryCardNumber: number;
    /** ☆☆☆   "Previous" */
    MenuButtonDisplayPosition: string;
    /** ☆☆☆   "Top" */
    MenuButtonReturn: string;
    /** ☆☆☆ ✔ "1 min" */
    MenuMonitorOffTime: string;
    /** ☆☆☆ ✔ "DC7303320222000" */
    MetaVersion: string;
    /** ☆☆☆   "Matrix metering" */
    MeterMode: string;
    /** ☆☆☆   "Matrix" */
    Metering: string;
    /** ☆☆☆   "Multi-segment" */
    MeteringMode2: string;
    /** ☆☆☆   "Center-weighted average" */
    MeteringMode3: string;
    /** ☆☆☆ ✔ "30 s" */
    MeteringTime: string;
    /** ☆☆☆ ✔ 6.9 */
    MinAperture: number;
    /** ☆☆☆ ✔ "6.1 mm" */
    MinFocalLength: string;
    /** ☆☆☆   "0.49-0.50 m" */
    MinFocusDistance: string;
    /** ☆☆☆ ✔ "Off" */
    MiniatureFilter: string;
    /** ☆☆☆ ✔ "Horizontal" */
    MiniatureFilterOrientation: string;
    /** ☆☆☆ ✔ -1 */
    MiniatureFilterParameter: number;
    /** ☆☆☆ ✔ -1 */
    MiniatureFilterPosition: number;
    /** ☆☆☆   "(Binary data 734 bytes, use -b option to extract)" */
    MinoltaCameraSettings2: string;
    /** ☆☆☆   {"year":2004,"month":7,"day":5} */
    MinoltaDate: ExifDate;
    /** ☆☆☆   "640x480" */
    MinoltaImageSize: string;
    /** ☆☆☆   "DiMAGE A2 or S414" */
    MinoltaModelID: string;
    /** ☆☆☆   "Extra fine" */
    MinoltaQuality: string;
    /** ☆☆☆   {"hour":3,"minute":56,"second":16,"millis":0} */
    MinoltaTime: ExifTime;
    /** ☆☆☆ ✔ "Disable" */
    MirrorLockup: string;
    /** ☆☆☆   "Aperture-priority AE" */
    ModeDialPosition: string;
    /** ☆☆☆ ✔ 2011 */
    ModelReleaseYear: number;
    /** ☆☆☆ ✔ "On" */
    ModelingFlash: string;
    /** ☆☆☆   undefined */
    ModifiedColorTemp: number;
    /** ☆☆☆   undefined */
    ModifiedDigitalGain: number;
    /** ☆☆☆   undefined */
    ModifiedParamFlag: number;
    /** ☆☆☆   "None" */
    ModifiedPictureStyle: string;
    /** ☆☆☆ ✔ "Off" */
    ModifiedSaturation: string;
    /** ☆☆☆   undefined */
    ModifiedSensorBlueLevel: number;
    /** ☆☆☆   undefined */
    ModifiedSensorRedLevel: number;
    /** ☆☆☆   undefined */
    ModifiedSharpness: string;
    /** ☆☆☆   "n/a" */
    ModifiedSharpnessFreq: string;
    /** ☆☆☆   "Standard" */
    ModifiedToneCurve: string;
    /** ☆☆☆   "Auto" */
    ModifiedWhiteBalance: string;
    /** ☆☆☆   undefined */
    ModifiedWhiteBalanceBlue: number;
    /** ☆☆☆   undefined */
    ModifiedWhiteBalanceRed: number;
    /** ☆☆☆ ✔ "1 min" */
    MonitorOffTime: string;
    /** ☆☆☆   "None" */
    MonochromeFilterEffect: string;
    /** ☆☆☆   "None" */
    MonochromeToning: string;
    /** ☆☆☆   "11:19" */
    MonthDayCreated: string;
    /** ☆☆☆   "Full" */
    MoonPhase: string;
    /** ☆☆☆   100 */
    MotionSensitivity: number;
    /** ☆☆☆ ✔ "AE/AF Lock" */
    MovieAELockButtonAssignment: string;
    /** ☆☆☆ ✔ "None" */
    MovieFunctionButton: string;
    /** ☆☆☆   "None" */
    MovieFunctionButtonPlusDials: string;
    /** ☆☆☆ ✔ "Index Marking" */
    MoviePreviewButton: string;
    /** ☆☆☆   "Choose Image Area" */
    MoviePreviewButtonPlusDials: string;
    /** ☆☆☆ ✔ "Take Photo" */
    MovieShutterButton: string;
    /** ☆☆☆   "AE/AF Lock" */
    MovieSubSelectorAssignment: string;
    /** ☆☆☆   "None" */
    MovieSubSelectorAssignmentPlusDials: string;
    /** ☆☆☆ ✔ "Off" */
    MultiControllerWhileMetering: string;
    /** ☆☆☆ ✔ "Off" */
    MultiExposure: string;
    /** ☆☆☆ ✔ "Off" */
    MultiExposureAutoGain: string;
    /** ☆☆☆ ✔ "Additive" */
    MultiExposureControl: string;
    /** ☆☆☆ ✔ "Off" */
    MultiExposureMode: string;
    /** ☆☆☆ ✔ 1 */
    MultiExposureShots: number;
    /** ☆☆☆ ✔ "0100" */
    MultiExposureVersion: string;
    /** ☆☆☆ ✔ "Off" */
    MultiFrameNoiseReduction: string;
    /** ☆☆☆ ✔ "On (quick control dial)" */
    MultiFunctionLock: string;
    /** ☆☆☆ ✔ "Do Nothing" */
    MultiSelector: string;
    /** ☆☆☆ ✔ "Reset" */
    MultiSelectorLiveView: string;
    /** ☆☆☆ ✔ "Thumbnail On/Off" */
    MultiSelectorPlaybackMode: string;
    /** ☆☆☆ ✔ "Select Center Focus Point (Reset)" */
    MultiSelectorShootMode: string;
    /** ☆☆☆ ✔ "Off; 1" */
    MultipleExposureMode: string;
    /** ☆☆☆   "Off" */
    MultipleExposureSet: string;
    /** ☆☆☆ ✔ "Off" */
    MyColorMode: string;
    /** ☆☆☆ ✔ "n/a" */
    NDFilter: string;
    /** ☆☆☆   "n/a (JPEG)" */
    NEFBitDepth: string;
    /** ☆☆☆ ✔ "Lossy (type 2)" */
    NEFCompression: string;
    /** ☆☆☆ ✔ "(Binary data 624 bytes, use -b option to extract)" */
    NEFLinearizationTable: string;
    /** ☆☆☆   "Off" */
    NeutralDensityFilter: string;
    /** ☆☆☆   "OTHER" */
    NikonCaptureVersion: string;
    /** ☆☆☆ ✔ "Large" */
    NikonImageSize: string;
    /** ☆☆☆ ✔ "Enable Release" */
    NoMemoryCard: string;
    /** ☆☆☆ ✔ "Off" */
    NoiseFilter: string;
    /** ☆☆☆ ✔ "Off" */
    NoiseReduction: string;
    /** ☆☆☆ ✔ "(none)" */
    NoiseReduction2: string;
    /** ☆☆☆   3.4 */
    NominalMaxAperture: number;
    /** ☆☆☆   23 */
    NominalMinAperture: number;
    /** ☆☆☆ ✔ 14582 */
    NormalWhiteLevel: number;
    /** ☆☆☆ ✔ 9 */
    NumAFPoints: number;
    /** ☆☆☆ ✔ 1 */
    NumFacePositions: number;
    /** ☆☆☆   "55 Points" */
    NumberOfFocusPoints: string;
    /** ☆☆☆   "Select Center Focus Point" */
    OKButton: string;
    /** ☆☆☆   1536 */
    OlympusImageHeight: number;
    /** ☆☆☆   2048 */
    OlympusImageWidth: number;
    /** ☆☆☆ ✔ "Focus Priority" */
    OneShotAFRelease: string;
    /** ☆☆☆   "Unknown ()" */
    OneTouchWB: string;
    /** ☆☆☆   1 */
    OpticalZoom: number;
    /** ☆☆☆ ✔ "n/a" */
    OpticalZoomCode: number;
    /** ☆☆☆ ✔ "Standard" */
    OpticalZoomMode: string;
    /** ☆☆☆   "On" */
    OpticalZoomOn: string;
    /** ☆☆☆   169100 */
    OrderNumber: number;
    /** ☆☆☆   "Rotate 270 CW" */
    Orientation2: string;
    /** ☆☆☆ ✔ "Same for Vert/Horiz Points" */
    OrientationLinkedAF: string;
    /** ☆☆☆ ✔ "Same for vertical and horizontal" */
    OrientationLinkedAFPoint: string;
    /** ☆☆☆ ✔ 3318 */
    OriginalDecisionDataOffset: number;
    /** ☆☆☆   "100LEICA" */
    OriginalDirectory: string;
    /** ☆☆☆   "AUT_0003.JPG" */
    OriginalFileName: string;
    /** ☆☆☆ ✔ 3168 */
    OriginalImageHeight: number;
    /** ☆☆☆ ✔ 4752 */
    OriginalImageWidth: number;
    /** ☆☆☆   ["PREPRODUCTION CAMERA"] */
    OtherInfo: string[];
    /** ☆☆☆ ✔ "Off" */
    PF0CustomFuncRegistration: string;
    /** ☆☆☆ ✔ "Off" */
    PF10RetainProgramShift: string;
    /** ☆☆☆ ✔ "Off" */
    PF13DrivePriority: string;
    /** ☆☆☆ ✔ "Off" */
    PF14DisableFocusSearch: string;
    /** ☆☆☆ ✔ "Off" */
    PF15DisableAFAssistBeam: string;
    /** ☆☆☆ ✔ "Off" */
    PF16AutoFocusPointShoot: string;
    /** ☆☆☆ ✔ "Off" */
    PF17DisableAFPointSel: string;
    /** ☆☆☆ ✔ "Off" */
    PF18EnableAutoAFPointSel: string;
    /** ☆☆☆ ✔ "Off" */
    PF19ContinuousShootSpeed: string;
    /** ☆☆☆ ✔ 3 */
    PF19ShootingSpeedHigh: number;
    /** ☆☆☆ ✔ 8 */
    PF19ShootingSpeedLow: number;
    /** ☆☆☆ ✔ "Off" */
    PF1DisableShootingModes: string;
    /** ☆☆☆ ✔ 244 */
    PF1Value: number;
    /** ☆☆☆ ✔ "Off" */
    PF20LimitContinousShots: string;
    /** ☆☆☆ ✔ 99 */
    PF20MaxContinousShots: number;
    /** ☆☆☆ ✔ "Off" */
    PF21EnableQuietOperation: string;
    /** ☆☆☆ ✔ 256 */
    PF23FELockTime: number;
    /** ☆☆☆ ✔ 32 */
    PF23PostReleaseTime: number;
    /** ☆☆☆ ✔ "Off" */
    PF23SetTimerLengths: string;
    /** ☆☆☆ ✔ 96 */
    PF23ShutterButtonTime: number;
    /** ☆☆☆ ✔ "Off" */
    PF24LightLCDDuringBulb: string;
    /** ☆☆☆ ✔ 16 */
    PF25AEMode: number;
    /** ☆☆☆ ✔ 2 */
    PF25AFMode: number;
    /** ☆☆☆ ✔ 255 */
    PF25AFPointSel: number;
    /** ☆☆☆ ✔ 1 */
    PF25ColorMatrix: number;
    /** ☆☆☆ ✔ "Off" */
    PF25DefaultClearSettings: string;
    /** ☆☆☆ ✔ 4 */
    PF25DriveMode: number;
    /** ☆☆☆ ✔ 16 */
    PF25ImageSize: number;
    /** ☆☆☆ ✔ 32 */
    PF25MeteringMode: number;
    /** ☆☆☆ ✔ 129 */
    PF25Parameters: number;
    /** ☆☆☆ ✔ 1 */
    PF25WBMode: number;
    /** ☆☆☆ ✔ "Off" */
    PF26ShortenReleaseLag: string;
    /** ☆☆☆ ✔ "Off" */
    PF27ReverseDialRotation: string;
    /** ☆☆☆ ✔ 2 */
    PF27Value: number;
    /** ☆☆☆ ✔ "Off" */
    PF28NoQuickDialExpComp: string;
    /** ☆☆☆ ✔ "Off" */
    PF29QuickDialSwitchOff: string;
    /** ☆☆☆ ✔ "Off" */
    PF2DisableMeteringModes: string;
    /** ☆☆☆ ✔ 240 */
    PF2Value: number;
    /** ☆☆☆ ✔ "Off" */
    PF30EnlargementMode: string;
    /** ☆☆☆ ✔ "Off" */
    PF31OriginalDecisionData: string;
    /** ☆☆☆ ✔ "Off" */
    PF3ManualExposureMetering: string;
    /** ☆☆☆ ✔ 16 */
    PF3Value: number;
    /** ☆☆☆ ✔ "Off" */
    PF4ExposureTimeLimits: string;
    /** ☆☆☆ ✔ 31.2 */
    PF4ExposureTimeMax: number;
    /** ☆☆☆ ✔ "1/8389" */
    PF4ExposureTimeMin: string;
    /** ☆☆☆ ✔ "Off" */
    PF5ApertureLimits: string;
    /** ☆☆☆ ✔ 1 */
    PF5ApertureMax: number;
    /** ☆☆☆ ✔ 91 */
    PF5ApertureMin: number;
    /** ☆☆☆ ✔ "Off" */
    PF6PresetShootingModes: string;
    /** ☆☆☆ ✔ "Off" */
    PF7BracketContinuousShoot: string;
    /** ☆☆☆ ✔ 3 */
    PF8BracketShots: number;
    /** ☆☆☆ ✔ "Off" */
    PF8SetBracketShots: string;
    /** ☆☆☆ ✔ "Off" */
    PF9ChangeBracketSequence: string;
    /** ☆☆☆   3 */
    POILevel: number;
    /** ☆☆☆ ✔ "Off" */
    PaintingFilter: string;
    /** ☆☆☆ ✔ "0405" */
    PanasonicExifVersion: string;
    /** ☆☆☆ ✔ 3424 */
    PanasonicImageHeight: number;
    /** ☆☆☆ ✔ 3424 */
    PanasonicImageWidth: number;
    /** ☆☆☆   "Right" */
    PanoramaDirection: string;
    /** ☆☆☆ ✔ "Off" */
    PanoramaMode: string;
    /** ☆☆☆   "Standard" */
    PanoramaSize3D: string;
    /** ☆☆☆   "640x480" */
    PentaxImageSize: string;
    /** ☆☆☆   "Optio T10/T20" */
    PentaxModelID: string;
    /** ☆☆☆   4 */
    PentaxModelType: number;
    /** ☆☆☆   "6.0.0.0" */
    PentaxVersion: string;
    /** ☆☆☆ ✔ "1023 1024 1023 1024" */
    PerChannelBlackLevel: string;
    /** ☆☆☆ ✔ "On" */
    PeripheralIlluminationCorr: string;
    /** ☆☆☆ ✔ "Off" */
    PeripheralLighting: string;
    /** ☆☆☆ ✔ "Off" */
    PeripheralLightingSetting: string;
    /** ☆☆☆ ✔ 50 */
    PeripheralLightingValue: number;
    /** ☆☆☆ ✔ "Off" */
    PhaseDetectAF: string;
    /** ☆☆☆ ✔ "Off" */
    PhotoEffect: string;
    /** ☆☆☆ ✔ "Info Up-down, Playback Left-right" */
    PhotoInfoPlayback: string;
    /** ☆☆☆ ✔ "Standard or Custom" */
    PhotoStyle: string;
    /** ☆☆☆ ✔ "Full Control" */
    PictureControlAdjust: string;
    /** ☆☆☆ ✔ "Landscape" */
    PictureControlBase: string;
    /** ☆☆☆ ✔ "Landscape" */
    PictureControlName: string;
    /** ☆☆☆ ✔ "Normal" */
    PictureControlQuickAdjust: string;
    /** ☆☆☆ ✔ "0200" */
    PictureControlVersion: string;
    /** ☆☆☆ ✔ "Off" */
    PictureEffect: string;
    /** ☆☆☆ ✔ "Off" */
    PictureEffect2: string;
    /** ☆☆☆   "Natural" */
    PictureFinish: string;
    /** ☆☆☆ ✔ "Program" */
    PictureMode: string;
    /** ☆☆☆   "Program AE" */
    PictureMode2: string;
    /** ☆☆☆ ✔ "n/a" */
    PictureModeBWFilter: string;
    /** ☆☆☆ ✔ "0 (min -2, max 2)" */
    PictureModeContrast: string;
    /** ☆☆☆ ✔ "Standard" */
    PictureModeEffect: string;
    /** ☆☆☆ ✔ "0 (min -2, max 2)" */
    PictureModeSaturation: string;
    /** ☆☆☆ ✔ "0 (min -2, max 2)" */
    PictureModeSharpness: string;
    /** ☆☆☆ ✔ "n/a" */
    PictureModeTone: string;
    /** ☆☆☆ ✔ "Standard/Neutral - Gamma Still (PP2)" */
    PictureProfile: string;
    /** ☆☆☆ ✔ "None" */
    PictureStyle: string;
    /** ☆☆☆ ✔ "None; None; None" */
    PictureStylePC: string;
    /** ☆☆☆ ✔ "Standard; Standard; Standard" */
    PictureStyleUserDef: string;
    /** ☆☆☆   65535 */
    PictureWizardColor: number;
    /** ☆☆☆   -4 */
    PictureWizardContrast: number;
    /** ☆☆☆   "Standard" */
    PictureWizardMode: string;
    /** ☆☆☆   -4 */
    PictureWizardSaturation: number;
    /** ☆☆☆   "-4" */
    PictureWizardSharpness: string;
    /** ☆☆☆ ✔ -4.4 */
    Pitch: string;
    /** ☆☆☆ ✔ 5776 */
    PitchAngle: number;
    /** ☆☆☆   0.96610164642334 */
    PixelAspectRatio: number;
    /** ☆☆☆   "Off" */
    PixelShiftResolution: string;
    /** ☆☆☆   "10 min" */
    PlaybackMenusTime: string;
    /** ☆☆☆ ✔ "10 s" */
    PlaybackMonitorOffTime: string;
    /** ☆☆☆   "Use Separate Zoom Buttons" */
    PlaybackZoom: string;
    /** ☆☆☆   "Off" */
    PopupFlash: string;
    /** ☆☆☆   "Off" */
    PortraitRefiner: string;
    /** ☆☆☆   "Body Battery" */
    PowerSource: string;
    /** ☆☆☆ ✔ "0000:00:00 00:00:00" */
    PowerUpTime: ExifDateTime;
    /** ☆☆☆   3.299610895 */
    PreCaptureFrames: number;
    /** ☆☆☆ ✔ "Preview" */
    PreviewButton: string;
    /** ☆☆☆ ✔ "None" */
    PreviewButtonPlusDials: string;
    /** ☆☆☆   "26 26 0 0" */
    PreviewImageBorders: string;
    /** ☆☆☆ ✔ "No" */
    PreviewImageValid: string;
    /** ☆☆☆ ✔ 4 */
    PrimaryAFPoint: number;
    /** ☆☆☆   "AF" */
    PrioritySetupShutterRelease: string;
    /** ☆☆☆   1.2 */
    ProductionCode: number;
    /** ☆☆☆ ✔ 125 */
    ProgramISO: string;
    /** ☆☆☆   "Normal" */
    ProgramLine: string;
    /** ☆☆☆ ✔ undefined */
    ProgramShift: number;
    /** ☆☆☆ ✔ "JPEG" */
    Quality2: string;
    /** ☆☆☆ ✔ "Exposure comp/Aperture" */
    QuickControlDialInMeter: string;
    /** ☆☆☆   "Off" */
    QuickShot: string;
    /** ☆☆☆   "Compressed RAW" */
    RAWFileType: string;
    /** ☆☆☆   "USA" */
    ROMOperationMode: string;
    /** ☆☆☆   "Off" */
    RangeFinder: string;
    /** ☆☆☆   "RAW+Small/Normal" */
    RawAndJpgRecording: string;
    /** ☆☆☆   "Little-endian (Intel, II)" */
    RawDataByteOrder: string;
    /** ☆☆☆   "Swap" */
    RawDataCFAPattern: string;
    /** ☆☆☆ ✔ "Off; 0; 0; 0" */
    RawDevArtFilter: string;
    /** ☆☆☆ ✔ "Off" */
    RawDevAutoGradation: string;
    /** ☆☆☆ ✔ "sRGB" */
    RawDevColorSpace: string;
    /** ☆☆☆ ✔ "0 -2 2" */
    RawDevContrastValue: string;
    /** ☆☆☆ ✔ "Edited (Landscape)" */
    RawDevEditStatus: string;
    /** ☆☆☆ ✔ "Unknown (2)" */
    RawDevEngine: string;
    /** ☆☆☆ ✔ undefined */
    RawDevExposureBiasValue: number;
    /** ☆☆☆ ✔ undefined */
    RawDevGradation: number;
    /** ☆☆☆ ✔ "0 0" */
    RawDevGrayPoint: string;
    /** ☆☆☆ ✔ undefined */
    RawDevMemoryColorEmphasis: number;
    /** ☆☆☆ ✔ "(none)" */
    RawDevNoiseReduction: string;
    /** ☆☆☆ ✔ "0 -2 2" */
    RawDevPMContrast: string;
    /** ☆☆☆ ✔ "1 -2 -2 1" */
    RawDevPMNoiseFilter: string;
    /** ☆☆☆ ✔ "Unknown (0)" */
    RawDevPMPictureTone: string;
    /** ☆☆☆ ✔ "0 -2 2" */
    RawDevPMSaturation: string;
    /** ☆☆☆ ✔ "0 -2 2" */
    RawDevPMSharpness: string;
    /** ☆☆☆ ✔ "Unknown (0)" */
    RawDevPM_BWFilter: string;
    /** ☆☆☆ ✔ "Natural" */
    RawDevPictureMode: string;
    /** ☆☆☆ ✔ undefined */
    RawDevSaturation3: number;
    /** ☆☆☆ ✔ "0 -2 2" */
    RawDevSaturationEmphasis: string;
    /** ☆☆☆ ✔ "(none)" */
    RawDevSettings: string;
    /** ☆☆☆ ✔ "0 -2 2" */
    RawDevSharpnessValue: string;
    /** ☆☆☆ ✔ "0100" */
    RawDevVersion: string;
    /** ☆☆☆ ✔ "0 0" */
    RawDevWBFineAdjustment: number;
    /** ☆☆☆ ✔ "Unknown (3)" */
    RawDevWhiteBalance: string;
    /** ☆☆☆ ✔ undefined */
    RawDevWhiteBalanceValue: number;
    /** ☆☆☆   "6 (645D)" */
    RawDevelopmentProcess: string;
    /** ☆☆☆ ✔ "3018 2010" */
    RawImageCenter: string;
    /** ☆☆☆ ✔ 3288 */
    RawImageHeight: number;
    /** ☆☆☆ ✔ 4952 */
    RawImageWidth: number;
    /** ☆☆☆ ✔ "Fine" */
    RawJpgQuality: string;
    /** ☆☆☆ ✔ "Large" */
    RawJpgSize: string;
    /** ☆☆☆ ✔ "40661 82449 82146 41069" */
    RawMeasuredRGGB: string;
    /** ☆☆☆ ✔ "ISO" */
    RearDisplay: string;
    /** ☆☆☆   "\u000e" */
    RecognizedFace1Age: string;
    /** ☆☆☆   8 */
    RecognizedFace1Name: string;
    /** ☆☆☆   "77 12848 12341 0" */
    RecognizedFace1Position: string;
    /** ☆☆☆   undefined */
    RecognizedFace2Age: string;
    /** ☆☆☆   "\u0007" */
    RecognizedFace2Name: string;
    /** ☆☆☆   "0 0 11 172" */
    RecognizedFace2Position: string;
    /** ☆☆☆   "\u0010\u0001?" */
    RecognizedFace3Age: string;
    /** ☆☆☆   undefined */
    RecognizedFace3Name: string;
    /** ☆☆☆   "0 10000 0 3851" */
    RecognizedFace3Position: string;
    /** ☆☆☆   58 */
    RecordID: number;
    /** ☆☆☆ ✔ "Program AE" */
    RecordMode: string;
    /** ☆☆☆   "Record while down" */
    RecordShutterRelease: string;
    /** ☆☆☆   "JPEG" */
    RecordingFormat: string;
    /** ☆☆☆   "Auto" */
    RecordingMode: string;
    /** ☆☆☆   20 */
    RedGain: string;
    /** ☆☆☆ ✔ "No" */
    ReleaseButtonToUseDial: string;
    /** ☆☆☆ ✔ "Unknown (7)" */
    ReleaseMode: string;
    /** ☆☆☆ ✔ "Normal" */
    ReleaseMode2: string;
    /** ☆☆☆ ✔ "Normal" */
    ReleaseMode3: string;
    /** ☆☆☆   "1 min" */
    RemoteOnDuration: string;
    /** ☆☆☆   10 */
    RepeatingFlashCount: number;
    /** ☆☆☆   "1/32" */
    RepeatingFlashOutput: string;
    /** ☆☆☆   1 */
    RepeatingFlashOutputExternal: number;
    /** ☆☆☆   "10 Hz" */
    RepeatingFlashRate: string;
    /** ☆☆☆   "No" */
    Resaved: string;
    /** ☆☆☆   "HI" */
    ResolutionMode: string;
    /** ☆☆☆   "Disable; Flags 0x3f" */
    RestrictDriveModes: string;
    /** ☆☆☆ ✔ "NEF Processing" */
    RetouchHistory: string;
    /** ☆☆☆ ✔ "0200" */
    RetouchInfoVersion: string;
    /** ☆☆☆ ✔ "On" */
    RetouchNEFProcessing: string;
    /** ☆☆☆ ✔ "Enable" */
    RetractLensOnPowerOff: string;
    /** ☆☆☆ ✔ "- 0 +" */
    ReverseIndicators: string;
    /** ☆☆☆   {"year":2004,"month":6,"day":19,"hour":14,"minute":36,"second":43,"millis":0} */
    RicohDate: ExifDateTime;
    /** ☆☆☆   1536 */
    RicohImageHeight: number;
    /** ☆☆☆   2048 */
    RicohImageWidth: number;
    /** ☆☆☆   "XG-1Pentax" */
    RicohMake: string;
    /** ☆☆☆   "RICOH WG-M1" */
    RicohModel: string;
    /** ☆☆☆   -6.1 */
    Roll: number;
    /** ☆☆☆ ✔ 15095.9 */
    RollAngle: number;
    /** ☆☆☆   176 */
    RotationInfoOffset: number;
    /** ☆☆☆ ✔ undefined */
    RunTimeEpoch: number;
    /** ☆☆☆ ✔ "Valid" */
    RunTimeFlags: string;
    /** ☆☆☆ ✔ 1000000000 */
    RunTimeScale: number;
    /** ☆☆☆ ✔ 98536337937083 */
    RunTimeValue: number;
    /** ☆☆☆ ✔ "0x44332211" */
    SR2SubIFDKey: string;
    /** ☆☆☆ ✔ 29252 */
    SR2SubIFDLength: number;
    /** ☆☆☆ ✔ 49086 */
    SR2SubIFDOffset: number;
    /** ☆☆☆ ✔ "n/a" */
    SRAWQuality: string;
    /** ☆☆☆   "Yes" */
    SRActive: string;
    /** ☆☆☆   "40 mm" */
    SRFocalLength: string;
    /** ☆☆☆   "0.00 s" */
    SRHalfPressTime: string;
    /** ☆☆☆   "Not ready" */
    SRResult: string;
    /** ☆☆☆ ✔ "Disable" */
    SafetyShift: string;
    /** ☆☆☆ ✔ "Disable" */
    SafetyShiftInAvOrTv: string;
    /** ☆☆☆   "Disable" */
    SameExposureForNewAperture: string;
    /** ☆☆☆   "Various Models (0x3000000)" */
    SamsungModelID: string;
    /** ☆☆☆   "Unknown (0x11)" */
    SanyoQuality: string;
    /** ☆☆☆   "(Binary data 10313 bytes, use -b option to extract)" */
    SanyoThumbnail: string;
    /** ☆☆☆ ✔ undefined */
    SaturationAuto: number;
    /** ☆☆☆ ✔ undefined */
    SaturationFaithful: number;
    /** ☆☆☆ ✔ 4 */
    SaturationLandscape: number;
    /** ☆☆☆ ✔ undefined */
    SaturationNeutral: number;
    /** ☆☆☆ ✔ 2 */
    SaturationPortrait: number;
    /** ☆☆☆   "+1" */
    SaturationSetting: number;
    /** ☆☆☆ ✔ 3 */
    SaturationStandard: number;
    /** ☆☆☆ ✔ 3 */
    SaturationUserDef1: number;
    /** ☆☆☆ ✔ 4 */
    SaturationUserDef2: number;
    /** ☆☆☆ ✔ 3 */
    SaturationUserDef3: number;
    /** ☆☆☆   "Toy Camera Effect" */
    SceneAssist: string;
    /** ☆☆☆ ✔ 2 */
    SceneDetect: number;
    /** ☆☆☆ ✔ "Standard" */
    SceneMode: string;
    /** ☆☆☆   "Program" */
    SceneModeUsed: string;
    /** ☆☆☆   "Off" */
    SceneSelect: string;
    /** ☆☆☆ ✔ "On" */
    ScreenTips: string;
    /** ☆☆☆ ✔ "Unknown (0x1)" */
    SecondarySlotFunction: string;
    /** ☆☆☆ ✔ "Disable; Flags 0x7" */
    SelectAFAreaSelectMode: string;
    /** ☆☆☆ ✔ "Single-point AF, Auto, Zone AF, AF Point Expansion (4 point), Spot AF, AF Poin… */
    SelectAFAreaSelectionMode: string;
    /** ☆☆☆ ✔ "19 points" */
    SelectableAFPoint: string;
    /** ☆☆☆ ✔ "Off" */
    SelfTimer: string;
    /** ☆☆☆ ✔ 0.1 */
    SelfTimer2: number;
    /** ☆☆☆ ✔ 1 */
    SelfTimerShotCount: number;
    /** ☆☆☆ ✔ "0.5 s" */
    SelfTimerShotInterval: string;
    /** ☆☆☆ ✔ "10 s" */
    SelfTimerTime: string;
    /** ☆☆☆   undefined */
    SensitivityAdjust: number;
    /** ☆☆☆   "As EV Steps" */
    SensitivitySteps: string;
    /** ☆☆☆   "BACK,ov16860" */
    Sensor: string;
    /** ☆☆☆   14 */
    SensorBitDepth: number;
    /** ☆☆☆ ✔ -1 */
    SensorBlueLevel: number;
    /** ☆☆☆ ✔ "4010 290" */
    SensorCalibration: string;
    /** ☆☆☆   "Disable" */
    SensorCleaning: string;
    /** ☆☆☆   2328 */
    SensorFullHeight: number;
    /** ☆☆☆   3112 */
    SensorFullWidth: number;
    /** ☆☆☆ ✔ "5.4 x 5.4 um" */
    SensorPixelSize: string;
    /** ☆☆☆ ✔ -1 */
    SensorRedLevel: number;
    /** ☆☆☆   "24.024 x 16.038 mm" */
    SensorSize: string;
    /** ☆☆☆ ✔ "48 48 0 C" */
    SensorTemperature: string;
    /** ☆☆☆   "33.1 C" */
    SensorTemperature2: string;
    /** ☆☆☆   "5 of 5" */
    Sequence: string;
    /** ☆☆☆ ✔ 1 */
    SequenceFileNumber: number;
    /** ☆☆☆ ✔ 1 */
    SequenceImageNumber: number;
    /** ☆☆☆ ✔ "1 shot" */
    SequenceLength: string;
    /** ☆☆☆ ✔ 1 */
    SequenceNumber: number;
    /** ☆☆☆   "5 frames/s" */
    SequenceShotInterval: string;
    /** ☆☆☆   "Best" */
    SequentialShot: string;
    /** ☆☆☆ ✔ "Format 2" */
    SerialNumberFormat: string;
    /** ☆☆☆ ✔ "Normal" */
    SetButtonCrossKeysFunc: string;
    /** ☆☆☆ ✔ "Default (no function)" */
    SetButtonWhenShooting: string;
    /** ☆☆☆   "Default (no function)" */
    SetFunctionWhenShooting: string;
    /** ☆☆☆ ✔ "Off" */
    ShadingCompensation: string;
    /** ☆☆☆ ✔ "Off" */
    ShadingCompensation2: string;
    /** ☆☆☆   "+0.0" */
    Shadow: number;
    /** ☆☆☆   "Off" */
    ShadowCorrection: string;
    /** ☆☆☆ ✔ "0 (normal)" */
    ShadowTone: string;
    /** ☆☆☆   "On but Disabled" */
    ShakeReduction: string;
    /** ☆☆☆   "Normal" */
    Sharpening: string;
    /** ☆☆☆ ✔ 3 */
    SharpnessAuto: number;
    /** ☆☆☆   592 */
    SharpnessFactor: number;
    /** ☆☆☆ ✔ undefined */
    SharpnessFaithful: number;
    /** ☆☆☆   "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" */
    SharpnessFreqTable: string;
    /** ☆☆☆ ✔ "n/a" */
    SharpnessFrequency: string;
    /** ☆☆☆ ✔ 4 */
    SharpnessLandscape: number;
    /** ☆☆☆ ✔ 3 */
    SharpnessMonochrome: number;
    /** ☆☆☆ ✔ undefined */
    SharpnessNeutral: number;
    /** ☆☆☆ ✔ 2 */
    SharpnessPortrait: number;
    /** ☆☆☆ ✔ "0 (min -5, max 5)" */
    SharpnessSetting: string;
    /** ☆☆☆ ✔ 3 */
    SharpnessStandard: number;
    /** ☆☆☆   "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" */
    SharpnessTable: string;
    /** ☆☆☆ ✔ 3 */
    SharpnessUserDef1: number;
    /** ☆☆☆ ✔ 3 */
    SharpnessUserDef2: number;
    /** ☆☆☆ ✔ 3 */
    SharpnessUserDef3: number;
    /** ☆☆☆ ✔ "Not Set" */
    ShootingInfoDisplay: string;
    /** ☆☆☆ ✔ "10 s" */
    ShootingInfoMonitorOffTime: string;
    /** ☆☆☆   3709 */
    ShootingMenuOffset: number;
    /** ☆☆☆   "Continuous" */
    ShootingModeSetting: string;
    /** ☆☆☆ ✔ "Disable" */
    ShortReleaseTimeLag: string;
    /** ☆☆☆ ✔ "0100" */
    ShotInfoVersion: string;
    /** ☆☆☆ ✔ 7 */
    ShotNumberSincePowerUp: number;
    /** ☆☆☆   14 */
    ShotNumberSincePowerUp2: number;
    /** ☆☆☆ ✔ "AF/AE lock stop" */
    ShutterAELButton: string;
    /** ☆☆☆ ✔ "Metering + AF start" */
    ShutterButtonAFOnButton: string;
    /** ☆☆☆ ✔ 266 */
    ShutterCount: number;
    /** ☆☆☆ ✔ "1st-curtain sync" */
    ShutterCurtainSync: string;
    /** ☆☆☆   "Unknown (20)" */
    ShutterMode: string;
    /** ☆☆☆   "Single Shot" */
    ShutterReleaseMethod: string;
    /** ☆☆☆ ✔ "No" */
    ShutterReleaseNoCFCard: string;
    /** ☆☆☆   "Priority on focus" */
    ShutterReleaseTiming: string;
    /** ☆☆☆ ✔ "Disable" */
    ShutterReleaseWithoutLens: string;
    /** ☆☆☆ ✔ "Off" */
    ShutterSpeedLock: string;
    /** ☆☆☆ ✔ "Disable; Hi 1/8192; Lo 32" */
    ShutterSpeedRange: string;
    /** ☆☆☆   1 */
    ShutterSpeedSetting: string;
    /** ☆☆☆ ✔ "Mechanical" */
    ShutterType: string;
    /** ☆☆☆   "Off" */
    SkinToneCorrection: string;
    /** ☆☆☆   "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" */
    SlaveFlashMeteringSegments: string;
    /** ☆☆☆ ✔ "n/a" */
    SlowShutter: string;
    /** ☆☆☆ ✔ "Off" */
    SlowSync: string;
    /** ☆☆☆   "Blue; 38087" */
    SmartAlbumColor: string;
    /** ☆☆☆   "Off" */
    SmileShutter: string;
    /** ☆☆☆   "Normal Smile" */
    SmileShutterMode: string;
    /** ☆☆☆ ✔ "Off" */
    SoftFocusFilter: string;
    /** ☆☆☆ ✔ "Off" */
    SoftSkinEffect: string;
    /** ☆☆☆ ✔ {"year":2014,"month":1,"day":10,"hour":8,"minute":3,"second":30,"millis":0} */
    SonyDateTime: ExifDateTime;
    /** ☆☆☆   {"year":2014,"month":1,"day":13,"hour":16,"minute":30,"second":26,"millis":0} */
    SonyDateTime2: ExifDateTime;
    /** ☆☆☆ ✔ "1/64" */
    SonyExposureTime: string;
    /** ☆☆☆   "1/1321" */
    SonyExposureTime2: string;
    /** ☆☆☆ ✔ 4 */
    SonyFNumber: number;
    /** ☆☆☆ ✔ 926 */
    SonyISO: number;
    /** ☆☆☆ ✔ 4000 */
    SonyImageHeight: number;
    /** ☆☆☆   "Large" */
    SonyImageSize: string;
    /** ☆☆☆ ✔ 6000 */
    SonyImageWidth: number;
    /** ☆☆☆   4.6 */
    SonyMaxApertureValue: number;
    /** ☆☆☆ ✔ "NEX-7" */
    SonyModelID: string;
    /** ☆☆☆   "39:42" */
    SonyTimeMinSec: string;
    /** ☆☆☆   100 */
    SourceDirectoryIndex: number;
    /** ☆☆☆   60 */
    SourceFileIndex: number;
    /** ☆☆☆   24576 */
    SpecialEffectLevel: number;
    /** ☆☆☆   "Off" */
    SpecialEffectMode: string;
    /** ☆☆☆   "Off" */
    SpecialEffectSetting: string;
    /** ☆☆☆ ✔ "Normal, Sequence: 0, Panorama: (none)" */
    SpecialMode: string;
    /** ☆☆☆ ✔ 15120 */
    SpecularWhiteLevel: number;
    /** ☆☆☆   "+0.00" */
    SpeedX: string;
    /** ☆☆☆   "+0.00" */
    SpeedY: string;
    /** ☆☆☆   "+0.00" */
    SpeedZ: string;
    /** ☆☆☆   1632 */
    SpotFocusPointX: number;
    /** ☆☆☆   1224 */
    SpotFocusPointY: number;
    /** ☆☆☆ ✔ "Disable (use center AF point)" */
    SpotMeterLinkToAFPoint: string;
    /** ☆☆☆ ✔ "Center" */
    SpotMeteringMode: string;
    /** ☆☆☆ ✔ "No" */
    StackedImage: string;
    /** ☆☆☆ ✔ "6 s" */
    StandbyTimer: string;
    /** ☆☆☆ ✔ "Default (from LV)" */
    StartMovieShooting: string;
    /** ☆☆☆ ✔ "MIDDLESEX" */
    State: string;
    /** ☆☆☆ ✔ 3.2 */
    StopsAboveBaseISO: number;
    /** ☆☆☆ ✔ "Off" */
    StoreByOrientation: string;
    /** ☆☆☆   "AE/AF Lock" */
    SubSelector: string;
    /** ☆☆☆   "Focus Point Selection" */
    SubSelectorAssignment: string;
    /** ☆☆☆   "None" */
    SubSelectorPlusDials: string;
    /** ☆☆☆   "None" */
    SubjectProgram: string;
    /** ☆☆☆   "Off" */
    SuperMacro: string;
    /** ☆☆☆ ✔ "On" */
    SuperimposedDisplay: string;
    /** ☆☆☆   100 */
    SvISOSetting: number;
    /** ☆☆☆ ✔ "Off" */
    SweepPanoramaDirection: string;
    /** ☆☆☆ ✔ undefined */
    SweepPanoramaFieldOfView: number;
    /** ☆☆☆   "Standard" */
    SweepPanoramaSize: string;
    /** ☆☆☆ ✔ "Assist + AF" */
    SwitchToRegisteredAFPoint: string;
    /** ☆☆☆   undefined */
    TTL_DA_ADown: number;
    /** ☆☆☆   undefined */
    TTL_DA_AUp: number;
    /** ☆☆☆   undefined */
    TTL_DA_BDown: number;
    /** ☆☆☆   undefined */
    TTL_DA_BUp: number;
    /** ☆☆☆ ✔ 2.8 */
    TargetAperture: number;
    /** ☆☆☆   4 */
    TargetCompressionRatio: number;
    /** ☆☆☆   "3.40282346638529e+38 mm" */
    TargetDistanceSetting: string;
    /** ☆☆☆ ✔ "1/60" */
    TargetExposureTime: string;
    /** ☆☆☆   "Real-world Subject" */
    TargetImageType: string;
    /** ☆☆☆ ✔ "None" */
    Teleconverter: string;
    /** ☆☆☆   "n/a" */
    TextEncoding: string;
    /** ☆☆☆   "(Binary data 739 bytes, use -b option to extract)" */
    TextInfo1: string;
    /** ☆☆☆   "(Binary data 534 bytes, use -b option to extract)" */
    TextInfo2: string;
    /** ☆☆☆ ✔ "Off" */
    TextStamp: string;
    /** ☆☆☆   "THM_0003.TIF" */
    ThumbnailFileName: string;
    /** ☆☆☆ ✔ 120 */
    ThumbnailHeight: number;
    /** ☆☆☆ ✔ "0 0 0 0" */
    ThumbnailImageValidArea: string;
    /** ☆☆☆ ✔ 160 */
    ThumbnailWidth: number;
    /** ☆☆☆   "(Binary data 7404 bytes, use -b option to extract)" */
    TiffMeteringImage: string;
    /** ☆☆☆   30 */
    TiffMeteringImageHeight: number;
    /** ☆☆☆   44 */
    TiffMeteringImageWidth: number;
    /** ☆☆☆   {"hour":20,"minute":51,"second":10,"millis":0} */
    Time: ExifTime;
    /** ☆☆☆ ✔ {"hour":0,"minute":4,"second":47,"millis":50} */
    TimeSincePowerOn: ExifTime;
    /** ☆☆☆ ✔ {"year":2007,"month":8,"day":4,"hour":14,"minute":14,"second":42,"millis":0} */
    TimeStamp: ExifDateTime;
    /** ☆☆☆ ✔ {"year":2007,"month":7,"day":14,"hour":18,"minute":2,"second":56,"millis":0} */
    TimeStamp1: ExifDateTime;
    /** ☆☆☆ ✔ {"tagName":"MakerNotes:TimeZone","input":"+00:00","tzOffsetMinutes":0,"inputWit… */
    TimeZone: ExifTimeZoneOffset;
    /** ☆☆☆ ✔ "London" */
    TimeZoneCity: string;
    /** ☆☆☆   -9 */
    TimeZoneCode: number;
    /** ☆☆☆   undefined */
    TimeZoneInfo: number;
    /** ☆☆☆   "Self-timer" */
    TimerFunctionButton: string;
    /** ☆☆☆ ✔ "Disable; 6 s: 6; 16 s: 16; After release: 2" */
    TimerLength: string;
    /** ☆☆☆ ✔ "Off" */
    TimerRecording: string;
    /** ☆☆☆ ✔ undefined */
    Title: string;
    /** ☆☆☆ ✔ "Normal" */
    ToneComp: string;
    /** ☆☆☆ ✔ "Standard" */
    ToneCurve: string;
    /** ☆☆☆   "(Binary data 95 bytes, use -b option to extract)" */
    ToneCurveMatching: string;
    /** ☆☆☆   "(Binary data 1679 bytes, use -b option to extract)" */
    ToneCurveTable: string;
    /** ☆☆☆ ✔ "Highlights; 0; -7; 7; Shadows; 0; -7; 7; 0; 0; 0; 0" */
    ToneLevel: string;
    /** ☆☆☆ ✔ "None" */
    ToningEffect: string;
    /** ☆☆☆ ✔ "n/a" */
    ToningEffectAuto: string;
    /** ☆☆☆ ✔ "None" */
    ToningEffectMonochrome: string;
    /** ☆☆☆ ✔ "None" */
    ToningEffectUserDef1: string;
    /** ☆☆☆ ✔ "None" */
    ToningEffectUserDef2: string;
    /** ☆☆☆ ✔ "None" */
    ToningEffectUserDef3: string;
    /** ☆☆☆ ✔ "n/a" */
    ToningSaturation: string;
    /** ☆☆☆   1 */
    TotalZoom: number;
    /** ☆☆☆ ✔ "Off" */
    TouchAE: string;
    /** ☆☆☆ ✔ "Off" */
    ToyCameraFilter: string;
    /** ☆☆☆   "Off" */
    Transform: string;
    /** ☆☆☆   "Normal (set center AF point)" */
    TrashButtonFunction: string;
    /** ☆☆☆ ✔ "n/a" */
    TravelDay: string;
    /** ☆☆☆   "Motion Detection" */
    TriggerMode: string;
    /** ☆☆☆   "Subtle Correction" */
    TungstenAWB: string;
    /** ☆☆☆   "1/181" */
    TvExposureTimeSetting: string;
    /** ☆☆☆ ✔ "Enable After AF" */
    USMLensElectronicMF: string;
    /** ☆☆☆   "ZD82900946" */
    UnknownNumber: string;
    /** ☆☆☆ ✔ "Disable; Flags 0xf0" */
    UsableMeteringModes: string;
    /** ☆☆☆ ✔ "Disable; Flags 0x3f" */
    UsableShootingModes: string;
    /** ☆☆☆ ✔ "Standard" */
    UserDef1PictureStyle: string;
    /** ☆☆☆ ✔ "Standard" */
    UserDef2PictureStyle: string;
    /** ☆☆☆ ✔ "Standard" */
    UserDef3PictureStyle: string;
    /** ☆☆☆   "OZONJANGA" */
    UserLabel: string;
    /** ☆☆☆   "User Profile 0 (Dynamic)" */
    UserProfile: string;
    /** ☆☆☆ ✔ "Auto" */
    VFDisplayIllumination: string;
    /** ☆☆☆ ✔ undefined */
    VRDOffset: number;
    /** ☆☆☆ ✔ "0100" */
    VRInfoVersion: string;
    /** ☆☆☆ ✔ "Normal" */
    VRMode: string;
    /** ☆☆☆ ✔ 9 */
    ValidAFPoints: number;
    /** ☆☆☆ ✔ "12 0" */
    ValidBits: string;
    /** ☆☆☆ ✔ "Auto" */
    VariProgram: string;
    /** ☆☆☆   "n/a" */
    VariableLowPassFilter: string;
    /** ☆☆☆ ✔ "Same as AF On" */
    VerticalAFOnButton: string;
    /** ☆☆☆   "AE/AF Lock" */
    VerticalFuncButton: string;
    /** ☆☆☆   "None" */
    VerticalFuncButtonPlusDials: string;
    /** ☆☆☆   "Same as Multi-Selector with Info(U/D) & Playback(R/L)" */
    VerticalMultiSelector: string;
    /** ☆☆☆ ✔ "On" */
    VibrationReduction: string;
    /** ☆☆☆ ✔ "Disable" */
    ViewInfoDuringExposure: string;
    /** ☆☆☆ ✔ "Exposures Remaining" */
    ViewfinderDisplay: string;
    /** ☆☆☆   "On" */
    ViewfinderWarning: string;
    /** ☆☆☆ ✔ "Monochrome, WB corrected, One-touch image quality" */
    ViewfinderWarnings: string;
    /** ☆☆☆   "ViewFinder" */
    ViewingMode: string;
    /** ☆☆☆   "Viewfinder" */
    ViewingMode2: string;
    /** ☆☆☆ ✔ "Normal" */
    VignetteControl: string;
    /** ☆☆☆   "Off" */
    Vignetting: string;
    /** ☆☆☆ ✔ 32 */
    VignettingCorrVersion: number;
    /** ☆☆☆ ✔ "Auto" */
    VignettingCorrection: string;
    /** ☆☆☆   "Off" */
    VoiceMemo: string;
    /** ☆☆☆ ✔ "Off" */
    WBBracketMode: string;
    /** ☆☆☆   undefined */
    WBBracketShotNumber: number;
    /** ☆☆☆ ✔ undefined */
    WBBracketValueAB: number;
    /** ☆☆☆ ✔ undefined */
    WBBracketValueGM: number;
    /** ☆☆☆ ✔ "WB Bracketing Disabled" */
    WBBracketingSteps: string;
    /** ☆☆☆ ✔ "Rear LCD panel" */
    WBMediaImageSizeSetting: string;
    /** ☆☆☆   "Auto" */
    WBMode: string;
    /** ☆☆☆ ✔ 6 */
    WBShiftAB: number;
    /** ☆☆☆ ✔ "0 0" */
    WBShiftAB_GM: string;
    /** ☆☆☆   "0.00 0.00" */
    WBShiftAB_GM_Precise: string;
    /** ☆☆☆ ✔ -3 */
    WBShiftGM: number;
    /** ☆☆☆   256 */
    WB_GLevel: number;
    /** ☆☆☆ ✔ "256 439 386 256" */
    WB_GRBGLevels: string;
    /** ☆☆☆   "0 0 0 0" */
    WB_RBGGLevels: string;
    /** ☆☆☆ ✔ "2.078125 1.29296875 1 1" */
    WB_RBLevels: string;
    /** ☆☆☆ ✔ "290 692 256 256" */
    WB_RBLevels3000K: string;
    /** ☆☆☆ ✔ "354 556 256 256" */
    WB_RBLevels3300K: string;
    /** ☆☆☆ ✔ "382 514 256 256" */
    WB_RBLevels3600K: string;
    /** ☆☆☆ ✔ "406 482 256 256" */
    WB_RBLevels3900K: string;
    /** ☆☆☆ ✔ "486 550 256 256" */
    WB_RBLevels4000K: string;
    /** ☆☆☆ ✔ "434 460 256 256" */
    WB_RBLevels4300K: string;
    /** ☆☆☆ ✔ "480 468 256 256" */
    WB_RBLevels4500K: string;
    /** ☆☆☆ ✔ "470 426 256 256" */
    WB_RBLevels4800K: string;
    /** ☆☆☆ ✔ "500 398 256 256" */
    WB_RBLevels5300K: string;
    /** ☆☆☆ ✔ "540 364 256 256" */
    WB_RBLevels6000K: string;
    /** ☆☆☆ ✔ "572 390 256 256" */
    WB_RBLevels6600K: string;
    /** ☆☆☆ ✔ "586 316 256 256" */
    WB_RBLevels7500K: string;
    /** ☆☆☆ ✔ "468 414 256 256" */
    WB_RBLevelsCWB1: string;
    /** ☆☆☆ ✔ "384 384 256 256" */
    WB_RBLevelsCWB2: string;
    /** ☆☆☆ ✔ "384 384 256 256" */
    WB_RBLevelsCWB3: string;
    /** ☆☆☆ ✔ "384 384 256 256" */
    WB_RBLevelsCWB4: string;
    /** ☆☆☆ ✔ "507 256 428 256" */
    WB_RGBGLevels: string;
    /** ☆☆☆ ✔ "547 256 439" */
    WB_RGBLevels: string;
    /** ☆☆☆ ✔ "1324 1024 3520" */
    WB_RGBLevels2500K: string;
    /** ☆☆☆ ✔ "1720 1024 2496" */
    WB_RGBLevels3200K: string;
    /** ☆☆☆ ✔ "2288 1024 1784" */
    WB_RGBLevels4500K: string;
    /** ☆☆☆ ✔ "2748 1024 1460" */
    WB_RGBLevels6000K: string;
    /** ☆☆☆ ✔ "3256 1024 1228" */
    WB_RGBLevels8500K: string;
    /** ☆☆☆ ✔ "2772 1024 1444" */
    WB_RGBLevelsCloudy: string;
    /** ☆☆☆ ✔ "2552 1024 1580" */
    WB_RGBLevelsDaylight: string;
    /** ☆☆☆ ✔ "2944 1024 1452" */
    WB_RGBLevelsFlash: string;
    /** ☆☆☆ ✔ "2356 1024 2272" */
    WB_RGBLevelsFluorescent: string;
    /** ☆☆☆ ✔ "1852 1024 2856" */
    WB_RGBLevelsFluorescentM1: string;
    /** ☆☆☆ ✔ "2532 1024 1640" */
    WB_RGBLevelsFluorescentP1: string;
    /** ☆☆☆ ✔ "2916 1024 1528" */
    WB_RGBLevelsFluorescentP2: string;
    /** ☆☆☆ ✔ "3080 1024 1296" */
    WB_RGBLevelsShade: string;
    /** ☆☆☆ ✔ "1532 1024 2892" */
    WB_RGBLevelsTungsten: string;
    /** ☆☆☆   "127 124 127 125" */
    WB_RGGBBlackLevels: string;
    /** ☆☆☆ ✔ "2338 1019 1019 1587" */
    WB_RGGBLevelsAsShot: string;
    /** ☆☆☆ ✔ "2338 1023 1023 1587" */
    WB_RGGBLevelsAuto: string;
    /** ☆☆☆ ✔ "2639 1023 1023 1353" */
    WB_RGGBLevelsCloudy: string;
    /** ☆☆☆ ✔ "128 128 128 128" */
    WB_RGGBLevelsCustom: string;
    /** ☆☆☆   "2425 1023 1023 1492" */
    WB_RGGBLevelsCustom1: string;
    /** ☆☆☆   "2425 1023 1023 1492" */
    WB_RGGBLevelsCustom2: string;
    /** ☆☆☆ ✔ "2425 1023 1023 1492" */
    WB_RGGBLevelsDaylight: string;
    /** ☆☆☆ ✔ "2735 1023 1023 1306" */
    WB_RGGBLevelsFlash: string;
    /** ☆☆☆ ✔ "2038 1023 1023 1969" */
    WB_RGGBLevelsFluorescent: string;
    /** ☆☆☆   "14665 8192 8192 8981" */
    WB_RGGBLevelsFluorescentD: string;
    /** ☆☆☆   "13134 8192 8192 18128" */
    WB_RGGBLevelsFluorescentL: string;
    /** ☆☆☆   "12258 8192 8192 10114" */
    WB_RGGBLevelsFluorescentN: string;
    /** ☆☆☆   "10943 8192 8192 12318" */
    WB_RGGBLevelsFluorescentW: string;
    /** ☆☆☆ ✔ "2185 1024 1024 1535" */
    WB_RGGBLevelsKelvin: string;
    /** ☆☆☆ ✔ "1912 1028 1019 1791" */
    WB_RGGBLevelsMeasured: string;
    /** ☆☆☆ ✔ "8191 1024 1024 8191" */
    WB_RGGBLevelsPC1: string;
    /** ☆☆☆ ✔ "8191 1024 1024 8191" */
    WB_RGGBLevelsPC2: string;
    /** ☆☆☆ ✔ "8191 1024 1024 8191" */
    WB_RGGBLevelsPC3: string;
    /** ☆☆☆ ✔ "2847 1023 1023 1249" */
    WB_RGGBLevelsShade: string;
    /** ☆☆☆ ✔ "1597 1023 1023 2302" */
    WB_RGGBLevelsTungsten: string;
    /** ☆☆☆   "15893 8192 8192 11209" */
    WB_RGGBLevelsUserSelected: string;
    /** ☆☆☆ ✔ "Off" */
    WatercolorFilter: string;
    /** ☆☆☆ ✔ "Auto (Keep Warm Color Off)" */
    WhiteBalance2: string;
    /** ☆☆☆   "Off" */
    WhiteBalanceAutoAdjustment: string;
    /** ☆☆☆   "356 807" */
    WhiteBalanceBias: number;
    /** ☆☆☆ ✔ -1 */
    WhiteBalanceBlue: number;
    /** ☆☆☆ ✔ "0 0" */
    WhiteBalanceBracket: string;
    /** ☆☆☆   "Off" */
    WhiteBalanceBracketing: string;
    /** ☆☆☆ ✔ "Red +0, Blue +0" */
    WhiteBalanceFineTune: number;
    /** ☆☆☆   "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" */
    WhiteBalanceMatching: string;
    /** ☆☆☆   "Auto (Tungsten)" */
    WhiteBalanceMode: string;
    /** ☆☆☆ ✔ -1 */
    WhiteBalanceRed: number;
    /** ☆☆☆   "Auto" */
    WhiteBalanceSet: string;
    /** ☆☆☆   "Auto" */
    WhiteBalanceSetting: string;
    /** ☆☆☆   "Auto" */
    WhiteBalanceSetup: string;
    /** ☆☆☆   "(Binary data 2217 bytes, use -b option to extract)" */
    WhiteBalanceTable: string;
    /** ☆☆☆ ✔ "Auto" */
    WhiteBalanceTemperature: string;
    /** ☆☆☆   "9296 13510" */
    WhiteBoard: number;
    /** ☆☆☆ ✔ "15360 15360 15360" */
    WhiteLevel: string;
    /** ☆☆☆   "Not Attached" */
    WideAdapter: string;
    /** ☆☆☆   "Unknown (9)" */
    WideFocusZone: string;
    /** ☆☆☆   "Off" */
    WideRange: string;
    /** ☆☆☆ ✔ "Hometown" */
    WorldTimeLocation: string;
    /** ☆☆☆   "+0.0" */
    X3FillLight: number;
    /** ☆☆☆   "+52.70" */
    Yaw: number;
    /** ☆☆☆ ✔ 24599.7 */
    YawAngle: number;
    /** ☆☆☆   2005 */
    YearCreated: number;
    /** ☆☆☆ ✔ "ISO Setting Used" */
    ZoneMatching: string;
    /** ☆☆☆   "Off" */
    ZoneMatchingOn: string;
    /** ☆☆☆   undefined */
    ZoneMatchingValue: number;
    /** ☆☆☆ ✔ 2584 */
    ZoomSourceWidth: number;
    /** ☆☆☆ ✔ 31 */
    ZoomStepCount: number;
    /** ☆☆☆ ✔ 2584 */
    ZoomTargetWidth: number;
    /** ☆☆☆   "(Binary data 92592 bytes, use -b option to extract)" */
    ZoomedPreviewImage: string;
    /** ☆☆☆   92592 */
    ZoomedPreviewLength: number;
    /** ☆☆☆   "736 544" */
    ZoomedPreviewSize: string;
    /** ☆☆☆   4184638 */
    ZoomedPreviewStart: number;
}
export interface MetaTags {
    /** ☆☆☆   1 */
    BorderID: number;
    /** ☆☆☆   undefined */
    BorderLocation: number;
    /** ☆☆☆   "None" */
    BorderName: string;
    /** ☆☆☆   undefined */
    BorderType: number;
    /** ☆☆☆   "1 0 0 0" */
    BordersVersion: string;
    /** ☆☆☆   "KODAK DC280 ZOOM DIGITAL CAMERA" */
    CameraOwner: string;
    /** ☆☆☆   1 */
    CaptureConditionsPAR: number;
    /** ☆☆☆   "None" */
    DigitalEffectsName: string;
    /** ☆☆☆   undefined */
    DigitalEffectsType: number;
    /** ☆☆☆   "1 0 0 0" */
    DigitalEffectsVersion: string;
    /** ☆☆☆   1 */
    EditTagArray: number;
    /** ☆☆☆   2 */
    FilmGencode: number;
    /** ☆☆☆   37 */
    FilmProductCode: number;
    /** ☆☆☆   1 */
    FilmSize: number;
    /** ☆☆☆   1 */
    ImageSourceEK: number;
    /** ☆☆☆   "0110\u0000" */
    MetadataNumber: string;
    /** ☆☆☆   "Version 9" */
    ModelAndVersion: string;
    /** ☆☆☆   3 */
    WatermarkType: number;
}
export interface PanasonicRawTags {
    /** ☆☆☆ ✔ 0.015594482421875 */
    DistortionParam02: number;
    /** ☆☆☆ ✔ 0.005401611328125 */
    DistortionParam04: number;
    /** ☆☆☆ ✔ 0.094757080078125 */
    DistortionParam08: number;
    /** ☆☆☆ ✔ 0.019195556640625 */
    DistortionParam09: number;
    /** ☆☆☆ ✔ -0.00054931640625 */
    DistortionParam11: number;
    /** ☆☆☆ ✔ 1 */
    DistortionScale: number;
    /** ☆☆☆ ✔ 7 */
    NumWBEntries: number;
    /** ☆☆☆ ✔ "Fine Weather" */
    WBType1: string;
    /** ☆☆☆ ✔ "Cloudy" */
    WBType2: string;
    /** ☆☆☆ ✔ "Shade" */
    WBType3: string;
    /** ☆☆☆ ✔ "Tungsten (Incandescent)" */
    WBType4: string;
    /** ☆☆☆ ✔ "Flash" */
    WBType5: string;
    /** ☆☆☆ ✔ "D55" */
    WBType6: string;
    /** ☆☆☆ ✔ "ISO Studio Tungsten" */
    WBType7: string;
    /** ☆☆☆ ✔ "633 256 415" */
    WB_RGBLevels1: string;
    /** ☆☆☆ ✔ "665 256 389" */
    WB_RGBLevels2: string;
    /** ☆☆☆ ✔ "717 256 367" */
    WB_RGBLevels3: string;
    /** ☆☆☆ ✔ "439 256 597" */
    WB_RGBLevels4: string;
    /** ☆☆☆ ✔ "650 256 382" */
    WB_RGBLevels5: string;
    /** ☆☆☆ ✔ "592 256 413" */
    WB_RGBLevels6: string;
    /** ☆☆☆ ✔ "439 256 597" */
    WB_RGBLevels7: string;
}
export interface PhotoshopTags {
    /** ☆☆☆   false */
    CopyrightFlag: boolean;
    /** ☆☆☆   "inches" */
    DisplayedUnitsX: string;
    /** ☆☆☆   "inches" */
    DisplayedUnitsY: string;
    /** ☆☆☆   30 */
    GlobalAltitude: number;
    /** ☆☆☆   30 */
    GlobalAngle: number;
    /** ☆☆☆   "Yes" */
    HasRealMergedData: string;
    /** ☆☆☆ ✔ "00000000000000000000000000000000" */
    IPTCDigest: string;
    /** ☆☆☆   1 */
    NumSlices: number;
    /** ☆☆☆   "Standard" */
    PhotoshopFormat: string;
    /** ☆☆☆   10 */
    PhotoshopQuality: number;
    /** ☆☆☆   "(Binary data 6612 bytes, use -b option to extract)" */
    PhotoshopThumbnail: string;
    /** ☆☆☆   "0 0" */
    PrintPosition: string;
    /** ☆☆☆   1 */
    PrintScale: number;
    /** ☆☆☆   "Centered" */
    PrintStyle: string;
    /** ☆☆☆   "3 Scans" */
    ProgressiveScans: string;
    /** ☆☆☆   "Adobe Photoshop 7.0" */
    ReaderName: string;
    /** ☆☆☆   "inkPeople" */
    SlicesGroupName: string;
    /** ☆☆☆   undefined */
    URL_List: any[];
    /** ☆☆☆   "Adobe Photoshop" */
    WriterName: string;
}
export interface PrintIMTags {
    /** ★☆☆ ✔ "0300" */
    PrintIMVersion: string;
}
export interface QuickTimeTags {
    /** ☆☆☆ ✔ [16] */
    AudioBitsPerSample: number[];
    /** ☆☆☆ ✔ 1 */
    AudioChannels: number;
    /** ☆☆☆ ✔ "mp4a" */
    AudioFormat: string;
    /** ☆☆☆ ✔ 12000 */
    AudioSampleRate: number;
    /** ☆☆☆ ✔ 24 */
    BitDepth: number;
    /** ☆☆☆ ✔ undefined */
    ChapterListTrackID: number;
    /** ☆☆☆ ✔ "nclx 1 1 1" */
    ColorRepresentation: string;
    /** ☆☆☆ ✔ 120 */
    ComAndroidCaptureFps: number;
    /** ☆☆☆ ✔ 7.1 */
    ComAndroidVersion: number;
    /** ☆☆☆ ✔ "(Binary data 4 bytes, use -b option to extract)" */
    ComAndroidVideoTemporal_layers_count: string;
    /** ☆☆☆ ✔ ["isom","mp42"] */
    CompatibleBrands: string[];
    /** ☆☆☆ ✔ "avc1" */
    CompressorID: string;
    /** ☆☆☆ ✔ "0 s" */
    CurrentTime: string;
    /** ☆☆☆ ✔ "11.52 s" */
    Duration: string;
    /** ☆☆☆ ✔ "37.50210000 N, 122.47100000 W" */
    GPSCoordinates: string;
    /** ☆☆☆ ✔ "srcCopy" */
    GraphicsMode: string;
    /** ☆☆☆ ✔ "Data Handler" */
    HandlerClass: string;
    /** ☆☆☆ ✔ "SoundHandle" */
    HandlerDescription: string;
    /** ☆☆☆ ✔ "Audio Track" */
    HandlerType: string;
    /** ☆☆☆ ✔ "MP4 v2 [ISO 14496-14]" */
    MajorBrand: string;
    /** ☆☆☆ ✔ "1 0 0 0 1 0 0 0 1" */
    MatrixStructure: string;
    /** ☆☆☆ ✔ {"year":2016,"month":12,"day":1,"hour":18,"minute":31,"second":26,"millis":0} */
    MediaCreateDate: ExifDateTime;
    /** ☆☆☆ ✔ "11.52 s" */
    MediaDuration: string;
    /** ☆☆☆ ✔ undefined */
    MediaHeaderVersion: number;
    /** ☆☆☆ ✔ "jpn" */
    MediaLanguageCode: string;
    /** ☆☆☆ ✔ {"year":2016,"month":12,"day":1,"hour":18,"minute":31,"second":26,"millis":0} */
    MediaModifyDate: ExifDateTime;
    /** ☆☆☆ ✔ 12000 */
    MediaTimeScale: number;
    /** ☆☆☆ ✔ "0.0.0" */
    MinorVersion: string;
    /** ☆☆☆ ✔ 405319 */
    MovieDataOffset: number;
    /** ☆☆☆ ✔ 12532432 */
    MovieDataSize: number;
    /** ☆☆☆ ✔ undefined */
    MovieHeaderVersion: number;
    /** ☆☆☆ ✔ 3 */
    NextTrackID: number;
    /** ☆☆☆ ✔ "0 0 0" */
    OpColor: string;
    /** ☆☆☆ ✔ "0 s" */
    PosterTime: string;
    /** ☆☆☆ ✔ 1 */
    PreferredRate: number;
    /** ☆☆☆ ✔ "100.00%" */
    PreferredVolume: string;
    /** ☆☆☆ ✔ "0 s" */
    PreviewDuration: string;
    /** ☆☆☆ ✔ "0 s" */
    PreviewTime: string;
    /** ☆☆☆ ✔ "0 s" */
    SelectionDuration: string;
    /** ☆☆☆ ✔ "0 s" */
    SelectionTime: string;
    /** ☆☆☆ ✔ 1080 */
    SourceImageHeight: number;
    /** ☆☆☆ ✔ 1920 */
    SourceImageWidth: number;
    /** ☆☆☆ ✔ 1000 */
    TimeScale: number;
    /** ☆☆☆ ✔ {"year":2016,"month":12,"day":1,"hour":18,"minute":31,"second":26,"millis":0} */
    TrackCreateDate: ExifDateTime;
    /** ☆☆☆ ✔ "9.47 s" */
    TrackDuration: string;
    /** ☆☆☆ ✔ undefined */
    TrackHeaderVersion: number;
    /** ☆☆☆ ✔ 1 */
    TrackID: number;
    /** ☆☆☆ ✔ undefined */
    TrackLayer: number;
    /** ☆☆☆ ✔ {"year":2016,"month":12,"day":1,"hour":18,"minute":31,"second":26,"millis":0} */
    TrackModifyDate: ExifDateTime;
    /** ☆☆☆ ✔ "0.00%" */
    TrackVolume: string;
    /** ☆☆☆ ✔ 29.047 */
    VideoFrameRate: number;
}
export interface RAFTags {
    /** ☆☆☆ ✔ "294.2 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 6.8e-05 0.000124 0.000152 0.000142… */
    ChromaticAberrationParams: string;
    /** ☆☆☆ ✔ "10 11 9 8" */
    FujiLayout: string;
    /** ☆☆☆ ✔ "267.4545455 0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 0 -0.172 -0.483 -1.068 -2.… */
    GeometricDistortionParams: string;
    /** ☆☆☆ ✔ -0.7 */
    RawExposureBias: number;
    /** ☆☆☆ ✔ 3288 */
    RawImageFullHeight: number;
    /** ☆☆☆ ✔ "5120x3288" */
    RawImageFullSize: string;
    /** ☆☆☆ ✔ 5120 */
    RawImageFullWidth: number;
    /** ☆☆☆ ✔ "267.4545455 0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 100 97.47 94.65 91.21 86.8… */
    VignettingParams: string;
    /** ☆☆☆ ✔ "302 551 531" */
    WB_GRBLevels: string;
    /** ☆☆☆ ✔ "302 549 531" */
    WB_GRBLevelsAuto: string;
    /** ☆☆☆ ✔ "302 351 865 17 302 645 459 21" */
    WB_GRBLevelsStandard: string;
    /** ☆☆☆ ✔ "BGGRGG RGGBGG GBRGRB RGGBGG BGGRGG GRBGBR" */
    XTransLayout: string;
}
export interface XMPTags {
    /** ☆☆☆ ✔ "uuid:99e3a6d2-ab71-11d8-a734-f5ed6cd01ff9" */
    About: string;
    /** ☆☆☆   "+369.08" */
    AbsoluteAltitude: string;
    /** ☆☆☆   true */
    AlreadyApplied: boolean;
    /** ☆☆☆   5.01 */
    ApproximateFocusDistance: number;
    /** ☆☆☆   undefined */
    CameraModelID: string;
    /** ☆☆☆   "Rear" */
    CameraUnit: string;
    /** ☆☆☆ ✔ ["Subjekt|Natur|Pflanzen","Ort|Deutschland|Rangsdorf"] */
    CatalogSets: string[];
    /** ☆☆☆   "234-10-37087-2720028" */
    CellGlobalID: string;
    /** ☆☆☆   5 */
    CellR: number;
    /** ☆☆☆   2720028 */
    CellTowerID: number;
    /** ☆☆☆   "tag,2011-07-21T01:22:39Z,0,c" */
    Changes: string;
    /** ☆☆☆   "0 (None)" */
    ColorClass: string;
    /** ☆☆☆   "Picasa" */
    Creator: string;
    /** ☆☆☆   "{2d7e7fd6-2942-4d77-9842-389c3f62b14d}" */
    CreatorAppID: string;
    /** ☆☆☆   1 */
    CreatorOpenWithUIOptions: number;
    /** ☆☆☆ ✔ "Photos 1.0.1" */
    CreatorTool: string;
    /** ☆☆☆   "Version Ver 1.04 " */
    Creatortool: string;
    /** ☆☆☆   2688 */
    CroppedAreaImageHeightPixels: number;
    /** ☆☆☆   5376 */
    CroppedAreaImageWidthPixels: number;
    /** ☆☆☆   undefined */
    CroppedAreaLeftPixels: number;
    /** ☆☆☆   undefined */
    CroppedAreaTopPixels: number;
    /** ☆☆☆ ✔ {"year":2014,"month":5,"day":11,"hour":13,"minute":8,"second":25,"millis":659} */
    DateAcquired: ExifDateTime;
    /** ☆☆☆ ✔ {"year":2015,"month":6,"day":2,"hour":9,"minute":56,"second":1,"millis":0} */
    DateTime: ExifDateTime;
    /** ☆☆☆   {"year":2011,"month":12,"day":17,"hour":14,"minute":36,"second":14,"tzoffsetMin… */
    DateTimeDigitized: ExifDateTime;
    /** ☆☆☆ ✔ {"year":2015,"month":6,"day":2,"hour":9,"minute":56,"second":1,"tzoffsetMinutes… */
    DateUTC: ExifDateTime;
    /** ☆☆☆ ✔ "Castle Rock" */
    Description: string;
    /** ☆☆☆ ✔ "adobe:docid:photoshop:99e3a6d0-ab71-11d8-a734-f5ed6cd01ff9" */
    DocumentID: string;
    /** ☆☆☆   false */
    FlashFunction: boolean;
    /** ☆☆☆   false */
    FlashRedEyeMode: boolean;
    /** ☆☆☆   "No return detection" */
    FlashReturn: string;
    /** ☆☆☆   "+0.40" */
    FlightPitchDegree: string;
    /** ☆☆☆   -0.6 */
    FlightRollDegree: number;
    /** ☆☆☆   -3.2 */
    FlightYawDegree: number;
    /** ☆☆☆ ✔ "image/jpeg" */
    Format: string;
    /** ☆☆☆   2688 */
    FullPanoHeightPixels: number;
    /** ☆☆☆   5376 */
    FullPanoWidthPixels: number;
    /** ☆☆☆   -15.5 */
    GimbalPitchDegree: number;
    /** ☆☆☆   "+0.00" */
    GimbalRollDegree: string;
    /** ☆☆☆   -3.2 */
    GimbalYawDegree: number;
    /** ☆☆☆   false */
    HasCrop: boolean;
    /** ☆☆☆   false */
    HasSettings: boolean;
    /** ☆☆☆ ✔ "点像F11" */
    HierarchicalSubject: string;
    /** ☆☆☆ ✔ ["saved","saved"] */
    HistoryAction: string[];
    /** ☆☆☆ ✔ ["/metadata","/metadata"] */
    HistoryChanged: string[];
    /** ☆☆☆ ✔ ["xmp.iid:4d4cb5c0-5d51-4cc0-a638-bc5a6cf3f44f","xmp.iid:195a0cd4-8115-4cb9-89e… */
    HistoryInstanceID: string[];
    /** ☆☆☆ ✔ ["Adobe Photoshop Camera Raw 8.6","Adobe Photoshop Camera Raw 8.6 (Macintosh)"] */
    HistorySoftwareAgent: string[];
    /** ☆☆☆ ✔ ["2014:11:11 15:27:28Z","2014:11:11 15:27:29Z"] */
    HistoryWhen: string[];
    /** ☆☆☆   "sRGB IEC61966-2.1" */
    ICCProfileName: string;
    /** ☆☆☆ ✔ "xmp.iid:195a0cd4-8115-4cb9-89e4-fe6d8b9319fd" */
    InstanceID: string;
    /** ☆☆☆   "選択" */
    Label: string;
    /** ☆☆☆ ✔ "Picture" */
    LastKeywordXMP: string;
    /** ☆☆☆   37087 */
    LocationAreaCode: number;
    /** ☆☆☆ ✔ {"year":2014,"month":11,"day":11,"hour":15,"minute":27,"second":29,"tzoffsetMin… */
    MetadataDate: ExifDateTime;
    /** ☆☆☆   234 */
    MobileCountryCode: number;
    /** ☆☆☆   10 */
    MobileNetworkCode: number;
    /** ☆☆☆ ✔ {"year":2015,"month":6,"day":2,"hour":9,"minute":56,"second":1,"millis":0} */
    ModificationDate: ExifDateTime;
    /** ☆☆☆   "256,257,258,259,262,274,277,284,530,531,282,283,296,301,318,319,529,532,306,27… */
    NativeDigest: string;
    /** ☆☆☆ ✔ "D2A319020F9FD0935CABCB60F534E0E0" */
    OriginalDocumentID: string;
    /** ☆☆☆   "PM5" */
    PMVersion: string;
    /** ☆☆☆ ✔ 32 */
    PhotographicSensitivity: number;
    /** ☆☆☆   "01.00" */
    PipelineVersion: string;
    /** ☆☆☆   22.5 */
    PoseHeadingDegrees: number;
    /** ☆☆☆   11.2 */
    PosePitchDegrees: number;
    /** ☆☆☆   -1.7 */
    PoseRollDegrees: number;
    /** ☆☆☆   "equirectangular" */
    ProjectionType: string;
    /** ☆☆☆ ✔ "DSCF0722.JPG" */
    RawFileName: string;
    /** ☆☆☆ ✔ 2448 */
    RegionAppliedToDimensionsH: number;
    /** ☆☆☆ ✔ "pixel" */
    RegionAppliedToDimensionsUnit: string;
    /** ☆☆☆ ✔ 3264 */
    RegionAppliedToDimensionsW: number;
    /** ☆☆☆ ✔ 0.491 */
    RegionAreaH: number;
    /** ☆☆☆ ✔ "normalized" */
    RegionAreaUnit: string;
    /** ☆☆☆ ✔ 0.369 */
    RegionAreaW: number;
    /** ☆☆☆ ✔ 0.578 */
    RegionAreaX: number;
    /** ☆☆☆ ✔ 0.458 */
    RegionAreaY: number;
    /** ☆☆☆ ✔ 180 */
    RegionExtensionsAngleInfoRoll: number;
    /** ☆☆☆ ✔ undefined */
    RegionExtensionsAngleInfoYaw: number;
    /** ☆☆☆ ✔ 293 */
    RegionExtensionsConfidenceLevel: number;
    /** ☆☆☆ ✔ 6 */
    RegionExtensionsFaceID: number;
    /** ☆☆☆ ✔ -1179414036 */
    RegionExtensionsTimeStamp: number;
    /** ☆☆☆ ✔ undefined */
    RegionInfoRegions: string;
    /** ☆☆☆   "c" */
    RegionName: string;
    /** ☆☆☆   "LumiaReframedROI" */
    RegionTitle: string;
    /** ☆☆☆ ✔ "Face" */
    RegionType: string;
    /** ☆☆☆   "+7.10" */
    RelativeAltitude: string;
    /** ☆☆☆   "flickr.com/frankygi © all rights reserved" */
    Rights: string;
    /** ☆☆☆   3 */
    StreamType: number;
    /** ☆☆☆ ✔ "Picture" */
    Subject: string;
    /** ☆☆☆   "#MB%:{9C0B071B-5553-4D89-B252-934C9EC1E04D}GBMB1:%MB#" */
    Tag: string;
    /** ☆☆☆   "No" */
    Tagged: string;
    /** ☆☆☆ ✔ ["Subjekt/Natur/Pflanzen","Ort/Deutschland/Rangsdorf"] */
    TagsList: string[];
    /** ☆☆☆   true */
    UsePanoramaViewer: boolean;
    /** ☆☆☆   2.69302 */
    WhiteBalance0: number;
    /** ☆☆☆   1.100371 */
    WhiteBalance1: number;
    /** ☆☆☆ ✔ "XMP toolkit 2.8.2-33, framework 1.5" */
    XMPToolkit: string;
}
export interface Tags extends Partial<APP0Tags>, Partial<APP1Tags>, Partial<APP12Tags>, Partial<APP14Tags>, Partial<APP4Tags>, Partial<CompositeTags>, Partial<EXIFTags>, Partial<ExifToolTags>, Partial<FileTags>, Partial<FlashPixTags>, Partial<ICC_ProfileTags>, Partial<IPTCTags>, Partial<JFIFTags>, Partial<MPFTags>, Partial<MakerNotesTags>, Partial<MetaTags>, Partial<PanasonicRawTags>, Partial<PhotoshopTags>, Partial<PrintIMTags>, Partial<QuickTimeTags>, Partial<RAFTags>, Partial<XMPTags> {
    errors?: string[];
    Error?: string;
    Warning?: string;
    SourceFile?: string;
}
