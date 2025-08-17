import { useState } from "react";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Header } from "@/components/Layout/Header";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { AttendanceChart } from "@/components/Dashboard/AttendanceChart";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { CheckInOut } from "@/components/Attendance/CheckInOut";
import { AttendanceTable } from "@/components/Attendance/AttendanceTable";
import { EmployeeList } from "@/components/Employees/EmployeeList";
import { 
  Users, 
  Clock, 
  Calendar, 
  TrendingUp,
  UserCheck,
  UserX,
  Coffee,
  Timer
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Total Karyawan"
                value="128"
                description="Karyawan aktif"
                icon={Users}
              />
              <StatsCard
                title="Hadir Hari Ini"
                value="115"
                description="89.8% dari total karyawan"
                icon={UserCheck}
                trend={{ value: "2.4%", isPositive: true }}
              />
              <StatsCard
                title="Terlambat"
                value="8"
                description="6.3% dari yang hadir"
                icon={Timer}
                trend={{ value: "1.2%", isPositive: false }}
              />
              <StatsCard
                title="Cuti/Izin"
                value="5"
                description="3.9% dari total karyawan"
                icon={Coffee}
              />
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <AttendanceChart />
              <RecentActivity />
            </div>
          </div>
        );
      
      case "attendance":
        return (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <CheckInOut />
              </div>
              <div className="lg:col-span-2">
                <AttendanceTable />
              </div>
            </div>
          </div>
        );
      
      case "employees":
        return <EmployeeList />;
      
      case "leave":
        return (
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Manajemen Cuti & Izin</h3>
            <p className="text-muted-foreground">
              Fitur ini sedang dalam pengembangan
            </p>
          </div>
        );
      
      case "reports":
        return (
          <div className="text-center py-12">
            <TrendingUp className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Laporan & Analitik</h3>
            <p className="text-muted-foreground">
              Fitur ini sedang dalam pengembangan
            </p>
          </div>
        );
      
      case "qr-scanner":
        return (
          <div className="text-center py-12">
            <UserCheck className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">QR Code Scanner</h3>
            <p className="text-muted-foreground">
              Fitur ini sedang dalam pengembangan
            </p>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">Halaman tidak ditemukan</h3>
            <p className="text-muted-foreground">
              Silakan pilih menu lain dari sidebar
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
