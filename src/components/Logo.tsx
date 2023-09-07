export const SmallSMWLogo: React.FC = () => {
  return <div className="font-mono font-bold">SMW</div>;
};

export const LargeSMWLogo: React.FC = () => {
  return <div className="font-mono font-bold">SportsMegaWorld</div>;
};

export const MobileResponsiveSMWLogo: React.FC = () => {
  return (
    <div className="font-mono font-bold">
      <span className="sm:hidden">SMW</span>
      <span className="hidden sm:block">
        S<span className="text-sm">ports</span>M
        <span className="text-sm">ega</span>W
        <span className="text-sm">orld</span>
      </span>
    </div>
  );
};
