import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Edit, Trash2, Mail, Phone } from "lucide-react";

const employees = [
  {
    id: 1,
    name: "Budi Santoso",
    nik: "NIK001",
    email: "budi@company.com",
    phone: "081234567890",
    division: "IT",
    position: "Software Engineer",
    status: "Aktif",
    avatar: "BS"
  },
  {
    id: 2,
    name: "Sari Wati",
    nik: "NIK002",
    email: "sari@company.com",
    phone: "081234567891",
    division: "HR",
    position: "HR Manager",
    status: "Aktif",
    avatar: "SW"
  },
  {
    id: 3,
    name: "Andi Kurniawan",
    nik: "NIK003",
    email: "andi@company.com",
    phone: "081234567892",
    division: "Finance",
    position: "Accountant",
    status: "Aktif",
    avatar: "AK"
  },
  {
    id: 4,
    name: "Nina Sari",
    nik: "NIK004",
    email: "nina@company.com",
    phone: "081234567893",
    division: "Marketing",
    position: "Marketing Executive",
    status: "Cuti",
    avatar: "NS"
  }
];

export function EmployeeList() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Data Karyawan</CardTitle>
            <CardDescription>
              Kelola informasi karyawan perusahaan
            </CardDescription>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Karyawan
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Karyawan</TableHead>
              <TableHead>NIK</TableHead>
              <TableHead>Divisi</TableHead>
              <TableHead>Jabatan</TableHead>
              <TableHead>Kontak</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt={employee.name} />
                      <AvatarFallback>{employee.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{employee.name}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-sm">{employee.nik}</TableCell>
                <TableCell>{employee.division}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Mail className="mr-1 h-3 w-3" />
                      {employee.email}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Phone className="mr-1 h-3 w-3" />
                      {employee.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={employee.status === "Aktif" ? "default" : "secondary"}
                  >
                    {employee.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}