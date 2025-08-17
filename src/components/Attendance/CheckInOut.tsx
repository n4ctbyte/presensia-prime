import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Wifi } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function CheckInOut() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCheckIn = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    setIsCheckedIn(true);
    setCheckInTime(timeString);
    
    toast({
      title: "Check-in Berhasil!",
      description: `Anda telah check-in pada pukul ${timeString}`,
    });
  };

  const handleCheckOut = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    setIsCheckedIn(false);
    setCheckInTime(null);
    
    toast({
      title: "Check-out Berhasil!",
      description: `Anda telah check-out pada pukul ${timeString}`,
    });
  };

  const currentTime = new Date().toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Absensi Online</span>
        </CardTitle>
        <CardDescription>
          Sistem absensi karyawan real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            {currentTime}
          </div>
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        {isCheckedIn && checkInTime && (
          <div className="bg-accent p-3 rounded-lg text-center">
            <p className="text-sm text-accent-foreground">
              Check-in: <span className="font-semibold">{checkInTime}</span>
            </p>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-success" />
            <span>Lokasi: Kantor Pusat Jakarta</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Wifi className="h-4 w-4 text-success" />
            <span>IP: 192.168.1.100 (Terverifikasi)</span>
          </div>
        </div>

        <div className="pt-4">
          {!isCheckedIn ? (
            <Button 
              onClick={handleCheckIn}
              className="w-full bg-success hover:bg-success/90 text-success-foreground"
              size="lg"
            >
              <Clock className="mr-2 h-4 w-4" />
              Check-in Sekarang
            </Button>
          ) : (
            <Button 
              onClick={handleCheckOut}
              variant="destructive"
              className="w-full"
              size="lg"
            >
              <Clock className="mr-2 h-4 w-4" />
              Check-out Sekarang
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}