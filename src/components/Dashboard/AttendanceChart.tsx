import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Sen", hadir: 85, total: 100 },
  { name: "Sel", hadir: 88, total: 100 },
  { name: "Rab", hadir: 82, total: 100 },
  { name: "Kam", hadir: 90, total: 100 },
  { name: "Jum", hadir: 87, total: 100 },
  { name: "Sab", hadir: 45, total: 100 },
  { name: "Min", hadir: 0, total: 100 },
];

export function AttendanceChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Statistik Kehadiran Mingguan</CardTitle>
        <CardDescription>
          Persentase kehadiran karyawan dalam seminggu terakhir
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              formatter={(value, name) => [`${value}%`, name === 'hadir' ? 'Hadir' : 'Total']}
              labelFormatter={(label) => `Hari: ${label}`}
            />
            <Bar dataKey="hadir" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}