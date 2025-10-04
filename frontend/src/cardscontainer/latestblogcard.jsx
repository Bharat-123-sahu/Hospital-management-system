// ye latest card component hay jo use hay square doctor card component ke neeche

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
export const Latestcard = ({  para, title, img }) => {
  return (
    <>
    
     <Card
  sx={{
    width: 400,
    height: 350,
    position: "relative",
    left: 10,
    margin: 3,
    display: "inline-block",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: "all 0.4s ease",
    "&:hover": {
      transform: "translateY(-10px) scale(1.03)",
      boxShadow: "0 15px 50px rgba(0,0,0,0.5)",
    },
  }}
>
  {/* Image */}
  <CardMedia
    sx={{
      height: 200,
      objectFit: "cover",
      transition: "transform 0.6s ease",
      "&:hover": { transform: "scale(1.1)" },
    }}
    image={img}
    title={title}
  />

  {/* Content */}
  <CardContent sx={{ textAlign: "left", p: 3 }}>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        fontWeight: "700",
        color: "#1976d2",
        mb: 1,
        textShadow: "0px 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {title}
    </Typography>

    <Typography
      variant="body2"
      sx={{
        color: "text.secondary",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "15px",
        lineHeight: 1.5,
      }}
    >
      {para}
    </Typography>
  </CardContent>

  {/* Button */}
  <CardActions sx={{ p: 0 }}>
    <Button
      sx={{
        width: "100%",
        py: 1.5,
        fontWeight: "bold",
        textTransform: "none",
        color: "white",
        background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
        borderRadius: "0 0 20px 20px",
        boxShadow: "0 6px 20px rgba(255,65,108,0.5)",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "linear-gradient(90deg, #ff4b2b, #ff416c)",
          transform: "scale(1.05)",
          boxShadow: "0 8px 25px rgba(255,65,108,0.7)",
        },
      }}
    >
      → Read More
    </Button>
  </CardActions>
</Card>

    </>
  );
};
