// src/components/ProfilePhoto.tsx
import GlassCard from "./GlassCard";

const ProfilePhoto = () => {
  return (
    <GlassCard className="p-2 w-120 h-120  mx-auto rounded-full overflow-hidden flex items-center justify-center">
      <img
        src="/mi-foto.jpg"
        alt="Soranny"
        className="w-full h-full object-cover rounded-full"
      />
    </GlassCard>
  );
};

export default ProfilePhoto;
