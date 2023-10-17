import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col justify-center p-2 sm:flex-row">
      <div className="flex flex-wrap justify-center gap-2">
        <p>
          Developed by{" "}
          <a
            className="hover:underline"
            href="https://shawnweddle.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shawn Weddle
          </a>
        </p>
        <p>•</p>
        <p>
          <button
            className="font-semibold text-formulaOne hover:underline"
            onClick={() => {
              void router.push("/f1/tables");
            }}
          >
            F1
          </button>
        </p>
        <p>•</p>
        <p>
          <button
            className="font-semibold text-nfl hover:underline"
            onClick={() => {
              void router.push("/nfl/schedule");
            }}
          >
            NFL
          </button>
        </p>
        <p>•</p>
        <p>
          <button
            className="font-semibold text-nba hover:underline"
            onClick={() => {
              void router.push("/nba/future-picks");
            }}
          >
            NBA
          </button>
        </p>
        <p>•</p>
        <p>
          <button
            className="font-semibold text-mlb hover:underline"
            onClick={() => {
              void router.push("/mlb/world-series");
            }}
          >
            MLB
          </button>
        </p>
        <p>•</p>
        <p>
          <button
            className="font-semibold text-nhl hover:underline"
            onClick={() => {
              void router.push("/nhl/stanley-cups");
            }}
          >
            NHL
          </button>
        </p>
        <p>•</p>
        <p>
          <button
            className="font-semibold text-nba hover:underline"
            onClick={() => {
              void router.push("/wnba/finals");
            }}
          >
            WNBA
          </button>
        </p>
        <p>•</p>
        <p>
          <button
            className="whitespace-nowrap hover:underline"
            onClick={() => {
              void router.push("/NHL");
            }}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Footer;
