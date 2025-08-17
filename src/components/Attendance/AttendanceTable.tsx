import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const attendanceData = [
  {
    id: 1,
    date: "2024-01-15",
    checkIn: "08:15:30",
    checkOut: "17:45:20",
    duration: "9j 29m",
    status: "Hadir"
  },
  {
    id: 2,
    date: "2024-01-14",
    checkIn: "09:20:15",
    checkOut: "17:30:45",
    duration: "8j 10m",
    status: "Terlambat"
  },
  {
    id: 3,
    date: "2024-01-13",
    checkIn: "08:05:00",
    checkOut: "18:15:30",
    duration: "10j 10m",
    status: "Hadir"
  },
  {
    id: 4,
    date: "2024-01-12",
    checkIn: "-",
    checkOut: "-",
    duration: "-",
    status: "Cuti"
  },
  {
    id: 5,
    date: "2024-01-11",
    checkIn: "08:30:45",
    checkOut: "17:00:15",
    duration: "8j 29m",
    status: "Hadir"
  }
];

export function AttendanceTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Hadir":
        return <Badge className="bg-success text-success-foreground">Hadir</Badge>;
      case "Terlambat":
        return <Badge variant="destructive">Terlambat</Badge>;
      case "Cuti":
        return <Badge variant="secondary">Cuti</Badge>;
      case "Izin":
        return <Badge variant="outline">Izin</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Riwayat Absensi</CardTitle>
        <CardDescription>
          Data kehadiran karyawan 7 hari terakhir
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tanggal</TableHead>
              <TableHead>Check-in</TableHead>
              <TableHead>Check-out</TableHead>
              <TableHead>Durasi</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendanceData.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">
                  {new Date(record.date).toLocaleDateString('id-ID', {
                    weekday: 'short',
                    day: '2-digit',
                    month: 'short'
                  })}
                </TableCell>
                <TableCell>{record.checkIn}</TableCell>
                <TableCell>{record.checkOut}</TableCell>
                <TableCell>{record.duration}</TableCell>
                <TableCell>{getStatusBadge(record.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}