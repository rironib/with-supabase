"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    const supabase = createClient();
    setIsLoading(true);
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <Button onClick={logout} disabled={isLoading} variant="outline" size="sm">
      {isLoading ? "Logging out..." : "Logout"}
    </Button>
  );
}
