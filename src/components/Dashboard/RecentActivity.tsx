import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, UserCheck, Calendar } from "lucide-react";

const activities = [
  {
    id: 1,
    user: "Budi Santoso",
    action: "Check-in",
    time: "08:15",
    type: "attendance",
    avatar: "BS"
  },
  {
    id: 2,
    user: "Sari Wati",
    action: "Pengajuan Cuti",
    time: "09:30",
    type: "leave",
    avatar: "SW"
  },
  {
    id: 3,
    user: "Andi Kurniawan",
    action: "Check-out",
    time: "17:45",
    type: "attendance",
    avatar: "AK"
  },
  {
    id: 4,
    user: "Nina Sari",
    action: "Terlambat",
    time: "09:15",
    type: "late",
    avatar: "NS"
  }
];

export function RecentActivity() {
  const getIcon = (type: string) => {
    switch (type) {
      case "attendance":
        return <UserCheck className="h-4 w-4" />;
      case "leave":
        return <Calendar className="h-4 w-4" />;
      case "late":
        return <Clock className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "attendance":
        return "default";
      case "leave":
        return "secondary";
      case "late":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
        <CardDescription>
          Aktivitas karyawan hari ini
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt={activity.user} />
                <AvatarFallback>{activity.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user}
                </p>
                <div className="flex items-center space-x-2">
                  <Badge variant={getBadgeVariant(activity.type)} className="text-xs">
                    <span className="mr-1">{getIcon(activity.type)}</span>
                    {activity.action}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}