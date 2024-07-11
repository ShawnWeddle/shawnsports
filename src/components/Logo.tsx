import Link from "next/link";

export const SmallSMWLogo: React.FC = () => {
  return <div className="font-mono font-bold">SMW</div>;
};

export const LargeSMWLogo: React.FC = () => {
  return <div className="font-mono font-bold">SportsMegaWorld</div>;
};

export const MobileResponsiveSMWLogo: React.FC = () => {
  return (
    <Link
      href="/"
      className="font-mono text-3xl font-bold text-white hover:text-gray-200 md:text-4xl"
    >
      <span className="sm:hidden">SMW</span>
      <span className="hidden sm:block">
        S<span className="text-sm">ports</span>M
        <span className="text-sm">ega</span>W
        <span className="text-sm">orld</span>
      </span>
    </Link>
  );
};
