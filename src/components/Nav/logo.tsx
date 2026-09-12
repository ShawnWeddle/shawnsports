const Logo: React.FC = () => {
  return (
    <div className="w-full">
      <div className="relative aspect-square w-[600px] overflow-hidden bg-wnba font-mono">
        <div className="absolute -top-[220px] text-[720px] font-semibold text-white">
          S
        </div>
        <div className="absolute -top-[70px] left-[330px] text-[320px] font-semibold text-white">
          M
        </div>
        <div className="absolute left-[360px] top-[170px] text-[360px] font-semibold text-white">
          W
        </div>
      </div>
    </div>
  );
};

export default Logo;
