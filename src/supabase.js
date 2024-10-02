import { createClient } from "@supabase/supabase-js";

// TODO: fix supabase url
const supabaseUrl = "https://lfkfmypyankkrtcylleo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kZHR4ZGZua2JmZmlhZnJwenRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzA1OTUsImV4cCI6MjA0MjI0NjU5NX0.Z_41fWrgRMKRuQB4lEvswTfu8bW4YQafMEaT966A3Mg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
