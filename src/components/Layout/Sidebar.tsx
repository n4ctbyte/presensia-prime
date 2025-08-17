import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Users, 
  Clock, 
  Calendar, 
  BarChart3, 
  Settings, 
  Home,
  UserCheck,
  FileText
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "attendance", label: "Absensi", icon: Clock },
  { id: "employees", label: "Karyawan", icon: Users },
  { id: "leave", label: "Cuti & Izin", icon: Calendar },
  { id: "reports", label: "Laporan", icon: BarChart3 },
  { id: "qr-scanner", label: "QR Scanner", icon: UserCheck },
  { id: "settings", label: "Pengaturan", icon: Settings },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="pb-12 w-64 bg-card border-r">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center space-x-2 px-4">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              PresensiaPrime
            </h2>
          </div>
        </div>
        <div className="px-3">
          <ScrollArea className="h-[300px]">
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      activeTab === item.id && "bg-accent text-accent-foreground"
                    )}
                    onClick={() => onTabChange(item.id)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}