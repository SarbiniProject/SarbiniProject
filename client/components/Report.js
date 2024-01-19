import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { BarChart, LineChart, PieChart } from "react-native-chart-kit";
import { FontFamily,Color, Padding,FontSize,Border } from "./styles/ReportStyle";
import axios from 'axios';

const Report = () => {
  const [barChartData, setBarChartData] = React.useState([]);
  const [lineChartData, setLineChartData] = React.useState([]);
  const [pieChartData, setPieChartData] = React.useState([]);

  const fetchBarChartData = async () => {
    try {
      const response = await axios.get('http://172.20.10.2:3000/api/sarbini/orders');
      const barData = response.data;
      setBarChartData(barData);
      
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
    }
  };

  const fetchLineChartData = async () => {
    try {
      const response = await axios.get('http://172.20.10.2:3000/api/sarbini/orders');
      const lineData = response.data;
      setLineChartData(lineData);
    } catch (error) {
      console.error('Error fetching line chart data:', error);
    }
  };

  const fetchPieChartData = async () => {
    try {
      const response = await axios.get('http://172.20.10.2:3000/api/sarbini/users');
      const pieData = response.data;
      setPieChartData(pieData);
    } catch (error) {
      console.error('Error fetching pie chart data:', error);
    }
  };

  React.useEffect(() => {
    fetchBarChartData();
    fetchLineChartData();
    fetchPieChartData();
  }, []);

  const renderChart = (data, chartComponent, label) => (
    <View style={styles.chartContainer}>
      {data && (
        <>
          {chartComponent}
          <Text style={styles.chartLabel}>{label}</Text>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.oneProduct}>
      {renderChart(barChartData, (
        <BarChart
          data={barChartData}
          width={300}
          height={200}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: Color.White,
            backgroundGradientTo: Color.White,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      ), 'Total Revenue')}

      {renderChart(lineChartData, (
        <LineChart
          data={lineChartData}
          width={300}
          height={200}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: Color.White,
            backgroundGradientTo: Color.White,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      ), 'Weekly Sales')}

      {renderChart(pieChartData, (
        <PieChart
          data={pieChartData}
          width={300}
          height={200}
          chartConfig={{
            backgroundGradientFrom: Color.White,
            backgroundGradientTo: Color.White,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      ), 'Sales Distribution')}
    </View>
  );
};


const styles = StyleSheet.create({
    sideLayout: {
      height: 817,
      position: "absolute",
    },
    logOutTypo: {
      marginTop: 4,
      height: 22,
      width: 100,
      textAlign: "center",
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
    },
    buttonDashboardParentPosition: {
      left: -16,
      position: "absolute",
    },
    cashierTypo: {
      color: Color.white,
      marginTop: 4,
      height: 22,
      width: 100,
      textAlign: "center",
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
    },
    buttonSpaceBlock: {
      marginTop: 10,
      paddingVertical: Padding.p_7xs,
      paddingHorizontal: 0,
      alignItems: "center",
    },
    wrapperLayout: {
      width: 9,
      position: "absolute",
    },
    backgroundLayout: {
      height: 54,
      top: 70,
    },
    totalLayout1: {
      height: 6,
      width: 38,
      left: 0,
      position: "absolute",
    },
    totalTypo2: {
      color: Color.themeColorGreyBody,
      fontFamily: FontFamily.bodyParagraphSmall,
      fontSize: FontSize.size_7xs,
      textAlign: "left",
      top: 0,
    },
    textLayout1: {
      height: 14,
      top: 0,
    },
    textTypo2: {
      display: "flex",
      fontFamily: FontFamily.barlowBold,
      fontWeight: "700",
      fontSize: FontSize.size_3xs,
      color: Color.themeColorGreyBody,
      textAlign: "left",
      alignItems: "center",
    },
    gauge03Position: {
      width: 87,
      left: "50%",
      position: "absolute",
    },
    groupLayout: {
      height: 29,
      width: 61,
      position: "absolute",
    },
    totalWrapperPosition: {
      height: 7,
      left: 0,
      position: "absolute",
    },
    text2Position: {
      width: 22,
      height: 14,
      left: 0,
      top: 0,
      position: "absolute",
    },
    subinfoPosition: {
      top: 17,
      left: "50%",
      position: "absolute",
    },
    daysTypo: {
      fontSize: FontSize.size_9xs,
      color: Color.themeColorGrey5,
      lineHeight: 18,
      fontFamily: FontFamily.bodyParagraphSmall,
      textAlign: "left",
    },
    iconPosition1: {
      left: 25,
      height: 5,
      width: 4,
      position: "absolute",
    },
    ellipseIconLayout: {
      height: 26,
      width: 22,
      top: 82,
      position: "absolute",
    },
    groupIconLayout: {
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    backgroundShadowBox: {
      elevation: 4,
      shadowRadius: 4,
      shadowColor: "rgba(0, 0, 0, 0.04)",
      backgroundColor: Color.white,
      borderRadius: Border.br_sm,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
    backgroundPosition1: {
      marginLeft: -43.84,
      height: 54,
      width: 88,
      left: "50%",
      top: 0,
      position: "absolute",
    },
    groupFrameLayout: {
      height: 25,
      width: 39,
      position: "absolute",
    },
    text3Layout: {
      width: 25,
      position: "absolute",
    },
    days2Position: {
      marginLeft: -18,
      width: 36,
      height: 6,
      left: "50%",
      top: 0,
      position: "absolute",
    },
    groupIconPosition: {
      bottom: "87.61%",
      top: "10.84%",
      height: "1.55%",
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    backgroundPosition: {
      marginLeft: -146,
      height: 262,
      width: 292,
      left: "50%",
      top: 0,
      position: "absolute",
    },
    textTypo1: {
      height: 15,
      fontFamily: FontFamily.barlowMedium,
      fontWeight: "500",
      lineHeight: 24,
      fontSize: FontSize.size_3xs,
      left: "50%",
      textAlign: "left",
      position: "absolute",
    },
    lineLayout: {
      height: 1,
      width: 212,
      backgroundColor: Color.themeColorGrey2,
      borderRadius: Border.br_xl,
      marginLeft: -97,
      left: "50%",
      position: "absolute",
    },
    frameChildLayout1: {
      height: 93,
      top: 119,
      backgroundColor: Color.colorTomato_100,
    },
    frameChildLayout: {
      width: 8,
      position: "absolute",
    },
    icon3Position: {
      height: 23,
      left: "50%",
      position: "absolute",
    },
    chartOrderTypo: {
      height: 18,
      fontFamily: FontFamily.barlowBold,
      fontWeight: "700",
      color: Color.themeColorGreyBody,
      left: "50%",
      textAlign: "left",
      position: "absolute",
    },
    iconPosition: {
      width: 10,
      left: "50%",
      position: "absolute",
    },
    piechartPosition: {
      marginLeft: -154.5,
      height: 164,
      width: 309,
      left: "50%",
      top: 0,
      position: "absolute",
    },
    gaugeLayout: {
      height: 100,
      top: 41,
    },
    circleIconPosition1: {
      height: 77,
      left: "50%",
      width: 66,
      top: 0,
      position: "absolute",
    },
    circleIconPosition: {
      height: 76,
      left: "50%",
      top: 0,
      position: "absolute",
    },
    childPosition: {
      height: 41,
      width: 35,
      top: 18,
      left: "50%",
      position: "absolute",
    },
    textTypo: {
      color: Color.colorBlack,
      fontFamily: FontFamily.barlowSemiBold,
      fontSize: FontSize.size_mini,
      height: 12,
      top: 32,
      left: "50%",
      textAlign: "left",
      fontWeight: "600",
      position: "absolute",
    },
    totalTypo: {
      height: 11,
      fontFamily: FontFamily.barlowSemiBold,
      color: Color.themeColorGreyBody,
      fontWeight: "600",
    },
    gauge02Position: {
      width: 110,
      left: "50%",
      position: "absolute",
    },
    background5Position: {
      marginLeft: -160,
      height: 103,
      left: "50%",
      top: 0,
      position: "absolute",
    },
    graphIconPosition: {
      width: 269,
      marginLeft: -142.47,
      left: "50%",
      position: "absolute",
    },
    sundayTypo: {
      lineHeight: 26,
      fontSize: FontSize.size_5xs,
      height: 16,
      color: Color.themeColorGreyBody,
      fontFamily: FontFamily.bodyParagraphSmall,
      left: "50%",
      textAlign: "left",
      top: 0,
      position: "absolute",
    },
    sideBarManager: {
      left: -12,
      width: 79,
      top: 0,
    },
    sideBarManager1: {
      top: 4,
      left: -2,
      width: 66,
    },
    sideBarManager2: {
      top: 806,
      left: -3,
      height: 1067,
      width: 66,
      position: "absolute",
    },
    lucidedoorOpenIcon: {
      height: 32,
      width: 32,
    },
    logOut: {
      color: Color.neutral100,
      height: 22,
      width: 100,
      textAlign: "center",
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
      fontSize: FontSize.size_sm,
    },
    buttonLogOut: {
      top: 720,
      left: -6,
      padding: Padding.p_7xs,
      alignItems: "center",
      width: 72,
      borderRadius: Border.br_3xs,
      position: "absolute",
    },
    captureDCran20240113081Icon: {
      width: 95,
      height: 74,
      top: 15,
      left: -16,
    },
    dashboard: {
      fontSize: FontSize.bodyParagraphSmall_size,
    },
    buttonDashboard: {
      paddingVertical: Padding.p_7xs,
      paddingHorizontal: 0,
      alignItems: "center",
    },
    orderIcon: {
      height: 32,
      width: 32,
      overflow: "hidden",
    },
    cashier: {
      fontSize: FontSize.size_base,
    },
    product: {
      fontSize: FontSize.bodyParagraphSmall_size,
      color: Color.neutral100,
      height: 22,
      width: 100,
      textAlign: "center",
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
    },
    buttonProduct: {
      borderRadius: Border.br_3xs,
      marginTop: 10,
    },
    report: {
      color: Color.redNonActive,
      height: 22,
      width: 100,
      textAlign: "center",
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
      fontSize: FontSize.size_sm,
    },
    buttonReport: {
      backgroundColor: Color.neutral100,
      borderRadius: Border.br_3xs,
      marginTop: 10,
    },
    setting: {
      fontSize: FontSize.size_base,
      color: Color.neutral100,
      height: 22,
      width: 100,
      textAlign: "center",
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
    },
    buttonDashboardParent: {
      top: 110,
    },
    iconButton: {
      borderRadius: 4,
      width: 24,
      height: 24,
      zIndex: 0,
    },
    text: {
      fontSize: 6,
      textAlign: "left",
      color: Color.white,
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
    },
    wrapper: {
      top: -2,
      left: 19,
      backgroundColor: Color.redNonActive,
      height: 9,
      justifyContent: "center",
      padding: 3,
      zIndex: 1,
      borderRadius: 12,
      width: 9,
      alignItems: "center",
    },
    frameWrapper: {
      width: 31,
      flexDirection: "row",
      height: 32,
    },
    oneProductInner: {
      top: 36,
      left: 278,
      width: 86,
      flexDirection: "row",
      position: "absolute",
    },
    oneProductChild: {
      marginLeft: -110.5,
      width: 88,
      height: 54,
      left: "50%",
      top: 70,
      position: "absolute",
    },
    oneProductItem: {
      left: 307,
      width: 33,
      top: 32,
      height: 32,
      position: "absolute",
    },
    totalOrders: {
      height: 6,
      width: 38,
      left: 0,
      position: "absolute",
    },
    totalOrdersWrapper: {
      top: 14,
    },
    text1: {
      height: 14,
      top: 0,
      width: 19,
      position: "absolute",
      left: 0,
    },
    container: {
      width: 19,
      height: 14,
      position: "absolute",
      left: 0,
    },
    newOrder: {
      left: 4,
      width: 19,
      height: 14,
      position: "absolute",
    },
    days: {
      color: Color.themeColorGrey5,
      lineHeight: 18,
      marginLeft: -35.5,
      width: 71,
      fontFamily: FontFamily.bodyParagraphSmall,
      height: 6,
      left: "50%",
      textAlign: "left",
      fontSize: FontSize.bodyParagraphSmall_size,
      top: 0,
      position: "absolute",
    },
    subinfo: {
      marginLeft: -35.5,
      width: 71,
      height: 6,
      left: "50%",
      top: 0,
      position: "absolute",
    },
    icon: {
      left: 23,
      height: 5,
      width: 4,
      top: 7,
      position: "absolute",
    },
    subinfoParent: {
      marginLeft: -35,
      height: 12,
      width: 71,
      left: "50%",
      top: 15,
      position: "absolute",
    },
    groupParent: {
      left: 120,
      height: 27,
      top: 82,
      width: 72,
      position: "absolute",
    },
    background: {
      elevation: 4,
      shadowRadius: 4,
      shadowColor: "rgba(0, 0, 0, 0.04)",
      backgroundColor: Color.white,
      borderRadius: Border.br_sm,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      marginLeft: -11.5,
      height: 54,
      top: 70,
      width: 87,
    },
    totalCanceled: {
      width: 43,
      height: 7,
      color: Color.themeColorGreyBody,
      fontFamily: FontFamily.bodyParagraphSmall,
      fontSize: FontSize.size_7xs,
      textAlign: "left",
      top: 0,
    },
    totalCanceledWrapper: {
      width: 43,
      height: 7,
      top: 16,
    },
    text2: {
      display: "flex",
      fontFamily: FontFamily.barlowBold,
      fontWeight: "700",
      fontSize: FontSize.size_3xs,
      color: Color.themeColorGreyBody,
      textAlign: "left",
      alignItems: "center",
    },
    days1: {
      marginLeft: -30.5,
      width: 61,
      height: 6,
      left: "50%",
      top: 0,
      position: "absolute",
    },
    days1Position: {
      marginLeft: -30.5,
      width: 61,
      height: 6,
      left: "50%",
      top: 0,
      position: "absolute",
    },
    icon1: {
      top: 7,
    },
    subinfoGroup: {
      marginLeft: -30.31,
      width: 61,
      top: 17,
      height: 12,
    },
    groupWrapper: {
      left: 0,
      top: 0,
    },
    groupView: {
      left: 220,
      top: 82,
    },
    ellipseIcon: {
      left: 191,
    },
    oneProductChild1: {
      height: "1.67%",
      width: "4.07%",
      top: "10.88%",
      right: "44.07%",
      bottom: "87.45%",
      left: "51.87%",
    },
    background1: {
      marginLeft: 85.5,
      height: 54,
      top: 70,
      width: 88,
      left: "50%",
      position: "absolute",
    },
    background2: {
      elevation: 4,
      shadowRadius: 4,
      shadowColor: "rgba(0, 0, 0, 0.04)",
      backgroundColor: Color.white,
      borderRadius: Border.br_sm,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
    totalRevenue: {
      marginLeft: 85.75,
      width: 88,
      height: 54,
      left: "50%",
      top: 70,
      position: "absolute",
    },
    totalRevenue1: {
      width: 39,
      color: Color.themeColorGreyBody,
      fontFamily: FontFamily.bodyParagraphSmall,
      fontSize: FontSize.size_7xs,
      textAlign: "left",
      top: 0,
    },
    totalRevenueWrapper: {
      width: 39,
      top: 16,
    },
    text3: {
      display: "flex",
      fontFamily: FontFamily.barlowBold,
      fontWeight: "700",
      fontSize: FontSize.size_3xs,
      color: Color.themeColorGreyBody,
      textAlign: "left",
      alignItems: "center",
      height: 14,
      top: 0,
      left: 0,
    },
    newOrder2: {
      height: 14,
      top: 0,
      left: 0,
    },
    days2: {
      fontSize: FontSize.size_9xs,
      color: Color.themeColorGrey5,
      lineHeight: 18,
      fontFamily: FontFamily.bodyParagraphSmall,
      textAlign: "left",
    },
    icon2: {
      top: 3,
    },
    subinfoContainer: {
      marginLeft: -19.39,
      height: 8,
      width: 36,
    },
    groupFrame: {
      left: 0,
      top: 0,
    },
    oneProductInner1: {
      left: 318,
      top: 82,
    },
    oneProductChild2: {
      left: 289,
    },
    groupIcon1: {
      width: "2.5%",
      left: "78.66%",
      right: "18.84%",
    },
    background3: {
      elevation: 4,
      shadowRadius: 4,
      shadowColor: "rgba(0, 0, 0, 0.04)",
      backgroundColor: Color.white,
      borderRadius: Border.br_sm,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
    text4: {
      top: 92,
      width: 21,
      height: 15,
      marginLeft: -12.5,
      color: Color.themeColorGrey5,
    },
    text5: {
      marginLeft: -7.2,
      top: 125,
      width: 6,
      color: Color.themeColorGrey5,
    },
    text6: {
      top: 62,
      width: 21,
      height: 15,
      marginLeft: -12.5,
      color: Color.themeColorGrey5,
    },
    text7: {
      top: 31,
      width: 21,
      height: 15,
      marginLeft: -12.5,
      color: Color.themeColorGrey5,
    },
    text8: {
      fontFamily: FontFamily.barlowMedium,
      fontWeight: "500",
      lineHeight: 24,
      marginLeft: -12.5,
      width: 25,
      color: Color.themeColorGrey5,
      fontSize: FontSize.size_3xs,
      height: 14,
      left: "50%",
      textAlign: "left",
      top: 0,
      position: "absolute",
    },
    yInfo: {
      marginLeft: -128,
      top: 69,
      height: 139,
      left: "50%",
    },
    line: {
      height: 0,
      width: 212,
      backgroundColor: Color.themeColorGrey2,
      borderRadius: Border.br_xl,
      marginLeft: -97,
      top: 87,
      left: "50%",
      position: "absolute",
    },
    line1: {
      top: 118,
    },
    line2: {
      top: 149,
    },
    line3: {
      top: 180,
    },
    line4: {
      top: 211,
    },
    frameChild: {
      left: 49,
      width: 9,
      position: "absolute",
    },
    frameItem: {
      left: 83,
      height: 125,
      backgroundColor: Color.themeColorWarning,
      top: 87,
      width: 9,
      position: "absolute",
    },
    frameInner: {
      top: 150,
      left: 117,
      height: 62,
      backgroundColor: Color.colorTomato_100,
      width: 9,
      position: "absolute",
    },
    rectangleView: {
      top: 105,
      left: 151,
      height: 107,
      backgroundColor: Color.themeColorWarning,
    },
    frameChild1: {
      left: 185,
      height: 93,
      top: 119,
      backgroundColor: Color.colorTomato_100,
    },
    frameChild2: {
      top: 172,
      left: 219,
      height: 40,
      backgroundColor: Color.themeColorWarning,
    },
    frameChild3: {
      left: 253,
      height: 93,
      top: 119,
      backgroundColor: Color.colorTomato_100,
    },
    customerMap: {
      marginLeft: -126,
      width: 118,
      fontSize: FontSize.size_base,
      top: 0,
    },
    background4: {
      marginLeft: -34.75,
      borderStyle: "solid",
      borderColor: "#b9bbbd",
      borderWidth: 1,
      width: 69,
      backgroundColor: Color.white,
      height: 23,
      borderRadius: 12,
      top: 0,
    },
    weekly: {
      marginLeft: -22.25,
      color: Color.black,
      width: 57,
      top: 0,
    },
    arrowIcon: {
      marginLeft: 13.91,
      borderRadius: 1,
      top: 9,
      height: 5,
    },
    icon3: {
      marginLeft: 56.49,
      width: 70,
      top: 0,
    },
    customerMapParent: {
      marginLeft: -123,
      top: 24,
      width: 252,
    },
    frameView: {
      top: 512,
      left: 77,
      height: 262,
      width: 292,
      position: "absolute",
    },
    backgroundIcon: {
      borderRadius: Border.br_sm,
      marginLeft: -154.5,
    },
    circleIcon: {
      marginLeft: -34.84,
    },
    circleIcon1: {
      marginLeft: -34.84,
      width: 66,
    },
    gauge01Child: {
      marginLeft: -19.65,
    },
    text9: {
      marginLeft: -14.5,
      width: 28,
    },
    totalOrder: {
      marginLeft: -38.5,
      fontSize: FontSize.size_smi,
      top: 89,
      height: 11,
      textAlign: "center",
      width: 77,
      left: "50%",
      position: "absolute",
    },
    gauge01: {
      marginLeft: -143.5,
      width: 77,
      left: "50%",
      position: "absolute",
    },
    circleIcon2: {
      marginLeft: -29.93,
    },
    circleIcon3: {
      marginLeft: 2.99,
      height: 37,
      left: "50%",
      width: 32,
      top: 0,
      position: "absolute",
    },
    gauge02Child: {
      marginLeft: -14.73,
    },
    text10: {
      marginLeft: -12,
      width: 41,
    },
    customerGrowth: {
      marginLeft: -55,
      height: 11,
      fontFamily: FontFamily.barlowSemiBold,
      color: Color.themeColorGreyBody,
      fontWeight: "600",
      fontSize: FontSize.size_smi,
      top: 89,
      textAlign: "center",
    },
    gauge02: {
      marginLeft: -59.5,
      height: 100,
      top: 41,
    },
    circleIcon4: {
      marginLeft: -31.02,
    },
    circleIcon5: {
      marginLeft: -21.02,
      width: 56,
    },
    gauge03Child: {
      marginLeft: -15.82,
    },
    text11: {
      marginLeft: -11.5,
      width: 31,
    },
    totalRevenue2: {
      marginLeft: -43.5,
      fontSize: FontSize.size_smi,
      top: 89,
      height: 11,
      textAlign: "center",
      width: 87,
      left: "50%",
      position: "absolute",
    },
    gauge03: {
      marginLeft: 57.5,
      width: 87,
      left: "50%",
      position: "absolute",
    },
    pieChart: {
      marginLeft: -136.5,
      width: 68,
      fontSize: FontSize.size_mini,
      height: 15,
      fontFamily: FontFamily.barlowBold,
      fontWeight: "700",
      color: Color.themeColorGreyBody,
      left: "50%",
      textAlign: "left",
      top: 0,
      position: "absolute",
    },
    icCheckIcon: {
      marginLeft: -37.56,
      width: 14,
      height: 12,
      left: "50%",
      top: 0,
      position: "absolute",
      overflow: "hidden",
    },
    showValue: {
      marginLeft: -16.27,
      width: 54,
      fontSize: FontSize.size_3xs,
      height: 11,
      left: "50%",
      textAlign: "left",
      position: "absolute",
      top: 0,
    },
    check: {
      marginLeft: 61.38,
      width: 75,
      top: 7,
      height: 12,
      left: "50%",
      position: "absolute",
    },
    icCheckIcon1: {
      marginLeft: -26.66,
      height: 12,
      top: 0,
      overflow: "hidden",
    },
    chart: {
      marginLeft: -11.34,
      top: 1,
      fontSize: FontSize.size_3xs,
      height: 11,
      left: "50%",
      textAlign: "left",
      position: "absolute",
      width: 38,
    },
    check1: {
      marginLeft: 16.19,
      width: 53,
      top: 7,
      height: 12,
      left: "50%",
      position: "absolute",
    },
    title: {
      marginLeft: -141.5,
      top: 12,
      width: 273,
      height: 19,
      left: "50%",
      position: "absolute",
    },
    piechartWrapper: {
      top: 311,
      left: 66,
      height: 164,
      width: 309,
      position: "absolute",
    },
    background5: {
      width: 307,
      elevation: 4,
      shadowRadius: 4,
      shadowColor: "rgba(0, 0, 0, 0.04)",
      backgroundColor: Color.white,
      borderRadius: Border.br_sm,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
    cardChartOrderChild: {
      top: 48,
      height: 43,
    },
    sunday: {
      marginLeft: -157,
      width: 46,
    },
    monday: {
      marginLeft: -114,
      width: 63,
    },
    tuesday: {
      marginLeft: -69,
      width: 39,
    },
    wednesday: {
      marginLeft: -26,
      width: 53,
    },
    thursday: {
      marginLeft: 27,
      width: 52,
    },
    friday: {
      marginLeft: 72,
      width: 36,
    },
    saturday: {
      marginLeft: 108,
      width: 49,
    },
    xInfo: {
      marginLeft: -154,
      width: 314,
      height: 16,
      top: 87,
      left: "50%",
      position: "absolute",
    },
    graphIcon: {
      top: 49,
      height: 34,
    },
    chartOrder: {
      marginLeft: -147,
      width: 92,
      top: 9,
      fontSize: FontSize.size_sm,
    },
    cardChartOrder: {
      width: 320,
      marginLeft: -160,
    },
    cardChartOrderWrapper: {
      top: 159,
      left: 68,
      height: 103,
      width: 320,
      position: "absolute",
    },
    groupIcon2: {
      width: "1.02%",
      right: "20.98%",
      left: "78%",
    },
    groupIcon3: {
      height: "0.43%",
      width: "1.01%",
      top: "10.94%",
      right: "19.54%",
      bottom: "88.63%",
      left: "79.44%",
    },
    groupIcon4: {
      height: "0.66%",
      width: "1.08%",
      top: "12.22%",
      bottom: "87.12%",
      left: "80.08%",
      right: "18.84%",
    },
    groupIcon5: {
      height: "0.89%",
      width: "1.58%",
      top: "11.73%",
      right: "17.93%",
      bottom: "87.38%",
      left: "80.49%",
    },
    groupIcon6: {
      height: "0.33%",
      width: "0.84%",
      top: "12.01%",
      right: "18.3%",
      bottom: "87.65%",
      left: "80.86%",
    },
    chartContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: Color.LightGrey,
        borderRadius: 10,
      },
    
      chartLabel: {
        textAlign: "center",
        marginTop: 10,
        fontFamily: FontFamily.Regular,
        fontSize: FontSize.Small,
        color: Color.Black,
      },
    oneProduct: {
      borderRadius: 30,
      backgroundColor: "#fffdfd",
      shadowColor: "rgba(6, 6, 34, 0.4)",
      shadowRadius: 50,
      elevation: 50,
      flex: 1,
      width: "100%",
      height: 811,
      overflow: "hidden",
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
  });



export default Report;
