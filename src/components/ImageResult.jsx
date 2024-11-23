import { Grid2 } from '@mui/material';
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

const ImageResult = ({ images }) => {
  return (
    <div>
      <Grid2 container spacing={8}>
        {images.map((image) => (
          <Grid2 xs={10} sm={4} key={image.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={image.webformatURL}
                alt={image.tags}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {image.tags}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default ImageResult;
