import { lightBlue } from "@mui/material/colors";
import { Card, CardActionArea, CardContent, CardHeader ,Typography} from "../mui";
export default function Cards({ tital, number, onClick ,bgcolor,appoinment,data}) {
  return (
    <>
      <Card
  sx={{
    width: 330,
    height: 400,
    position: "relative",
    left: 180,
    boxSizing: "border-box",
    borderRadius: "20px",
    overflow: "hidden",
    background: `linear-gradient(135deg, ${bgcolor} 0%, #1a1a2e 100%)`,
    color: "white",
    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
    transition: "all 0.4s ease",
    "&:hover": {
      transform: "translateY(-12px) scale(1.02)",
      boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
    },
  }}
>
  {/* Decorative background overlay */}
  <div
    style={{
      position: "absolute",
      top: "-50px",
      right: "-50px",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.1)",
      filter: "blur(40px)",
    }}
  />

  <div style={{ position: "relative", zIndex: 2, padding: "20px" }}>
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        letterSpacing: "1px",
        mb: 2,
        textShadow: "0 2px 6px rgba(0,0,0,0.5)",
      }}
    >
      {appoinment}
    </Typography>

    <CardActionArea
      onClick={onClick}
      sx={{
        borderRadius: "15px",
        p: 2,
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "rgba(255,255,255,0.2)",
        },
      }}
    >
      <CardHeader
        title={tital}
        sx={{
          textAlign: "center",
          "& .MuiCardHeader-title": {
            fontSize: "20px",
            fontWeight: "700",
            color: "#fff",
            textShadow: "0 2px 8px rgba(0,0,0,0.7)",
          },
        }}
      />

      <CardContent
        sx={{
          fontSize: "18px",
          fontWeight: "500",
          textAlign: "center",
          color: "#e0e0e0",
        }}
      >
        {number}
      </CardContent>

      <CardContent
        sx={{
          fontSize: "16px",
          textAlign: "center",
          color: "#cfcfcf",
        }}
      >
        {data}
      </CardContent>
    </CardActionArea>
  </div>
</Card>

    </>
  );
}
