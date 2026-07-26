import { useEffect, useRef } from "react";
import { SuperLoserData } from "~/data/NFL/SuperLoserData";
import { SuperBowlData } from "~/data/NFL/SuperBowlData";
import { NFLstyleData } from "~/styles/NFLstyleData";
import { NFLteamData } from "~/data/NFL/NFLdata";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const canvasWidth = 900;
    const canvasHeight = 1000;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.fillStyle = "#FFFFEE";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "right";

    for (let i = 0; i < 61; i++) {
      const activeGame = SuperBowlData[60 - i];
      if (activeGame) {
        ctx.fillStyle = NFLstyleData[activeGame.losingTeam].primary;
        ctx.fillText(NFLteamData[activeGame.losingTeam].name, 450, 20 + 15 * i);
      }
    }

    SuperLoserData.forEach((loser) => {
      const { losses } = loser;

      const drawArc = (loss1: number, loss2: number) => {
        const p1 = loss1 * 15 + 16;
        const p2 = loss2 * 15 + 16;

        const radius = (loss2 - loss1) * 15;
        const y = (p1 + p2) / 2;

        ctx.beginPath(); // Start a new path
        ctx.fillStyle = "black";
        ctx.arc(455, y, radius / 2, 1.5 * Math.PI, 0.5 * Math.PI); // Define the arc shape
        ctx.stroke();
        ctx.closePath();
      };

      for (let i = 0; i < losses.length; i++) {
        if (losses[i] && losses[i + 1]) {
          drawArc(losses[i]!, losses[i + 1]!);
        } else {
          break;
        }
      }
    });
  });

  return <canvas ref={canvasRef} />;
};

export default Canvas;
