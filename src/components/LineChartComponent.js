import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function LineChartComponent({ lineChartData }) {
  return (
    <>
      <h2>WORKWORKWORKWORKWORKJUSTWORK</h2>
// If copying demo from recharts change width and aspect to make it work
      <ResponsiveContainer width="90%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={lineChartData}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
        <XAxis dataKey="time" tick={{fill:"#fff"}}/>
        <YAxis tick={{fill:"#fff"}} />
        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
        <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />

      </LineChart>
    </ResponsiveContainer>
  </>
  );
}

export default LineChartComponent;

// background color: #132737; (Goes on the index.css)

// text color: #fff (white)

// Horizontal Grid Color: #243240

// chart line color : #2e4355

// Data point Dot Fill color : #2e4355

// Data point Dot Stroke  color (dot outline outline) : #8884d8