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
              void router.push("/F1");
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
              void router.push("/NFL");
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
              void router.push("/NBA");
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
              void router.push("/MLB");
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
              void router.push("/NHL");
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
              void router.push("/WNBA");
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
