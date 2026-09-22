import { createClient } from '@/lib/supabase/server';
import VehicleDetailsClient from '@/components/VehicleDetailsClient';

export const dynamic = 'force-dynamic';

export default async function VehicleDetailsPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();
  
  let vehicle = null;
  try {
    const fetchPromise = supabase
      .from('vehicles')
      .select('*, vehicle_images(image_url, is_main)')
      .eq('id', params.id)
      .single();

    const timeoutPromise = new Promise<any>((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 2500)
    );

    const res = await Promise.race([fetchPromise, timeoutPromise]);
    if (res?.data) {
      vehicle = res.data;
    }
  } catch (err) {
    console.warn("Server car details fetch timed out or offline, falling back to client.");
  }

  return <VehicleDetailsClient initialVehicle={vehicle} vehicleId={params.id} />;
}
